const assert = require('assert').strict
const fs = require('fs')
const http = require('http')
const path = require('path')

class TestAssert {
  constructor() {
    this.servers = {}
    this.timers = {}
  }

  resolvePath(req, target) {
    if (path.isAbsolute(target)) {
      return target
    }
    return path.resolve(req.cwd || process.cwd(), target)
  }

  valueAt(root, keyPath) {
    if (!keyPath) {
      return root
    }
    return String(keyPath).split('.').reduce((current, key) => {
      if (current == null) {
        return undefined
      }
      return current[key]
    }, root)
  }

  inputText(req) {
    const input = req.input
    if (Buffer.isBuffer(input)) {
      return input.toString('utf8')
    }
    if (typeof input === 'string') {
      return input
    }
    return JSON.stringify(input)
  }

  ok(req, ondata) {
    const name = req.params && req.params.name ? req.params.name : 'api2'
    if (ondata) {
      ondata({ raw: `\r\nAPI_TEST_OK ${name}\r\n` })
    }
    return { ok: true, name }
  }

  async startTimer(req) {
    const id = req.params && req.params.id ? req.params.id : 'default'
    const start = Date.now()
    this.timers[id] = start
    return { id, start }
  }

  async assertElapsed(req, ondata) {
    const params = req.params || {}
    const id = params.id || 'default'
    const start = this.timers[id]
    assert.equal(typeof start, 'number', `missing timer: ${id}`)
    const elapsed = Date.now() - start
    if (typeof params.minMs === 'number') {
      assert.ok(elapsed >= params.minMs, `elapsed ${elapsed}ms was less than ${params.minMs}ms`)
    }
    if (typeof params.maxMs === 'number') {
      assert.ok(elapsed <= params.maxMs, `elapsed ${elapsed}ms exceeded ${params.maxMs}ms`)
    }
    return this.ok({ params: { name: params.name || id } }, ondata)
  }

  async startHttpServer(req, ondata) {
    const params = req.params || {}
    const id = params.id || 'default'
    if (this.servers[id]) {
      await this.stopHttpServer({ params: { id } }, ondata)
    }

    const routes = params.routes || { '/': params.body || 'API_TEST_SERVER_OK' }
    const server = http.createServer((request, response) => {
      const parsed = new URL(request.url, 'http://127.0.0.1')
      const body = Object.prototype.hasOwnProperty.call(routes, parsed.pathname)
        ? routes[parsed.pathname]
        : routes['/']
      response.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' })
      response.end(String(body == null ? '' : body))
    })

    await new Promise((resolve, reject) => {
      server.once('error', reject)
      server.listen(Number(params.port || 0), '127.0.0.1', resolve)
    })

    const address = server.address()
    const url = `http://127.0.0.1:${address.port}/`
    this.servers[id] = server
    if (ondata) {
      ondata({ raw: `\r\nStarted test HTTP server ${id}: ${url}\r\n` })
    }
    return { id, url, port: address.port }
  }

  async stopHttpServer(req, ondata) {
    const id = req.params && req.params.id ? req.params.id : 'default'
    const server = this.servers[id]
    if (!server) {
      return { stopped: false, id }
    }
    await new Promise((resolve, reject) => {
      server.close((error) => {
        if (error) reject(error)
        else resolve()
      })
    })
    delete this.servers[id]
    if (ondata) {
      ondata({ raw: `\r\nStopped test HTTP server ${id}\r\n` })
    }
    return { stopped: true, id }
  }

  async scheduleFile(req) {
    const params = req.params || {}
    const target = this.resolvePath(req, params.path)
    const delayMs = Number(params.delayMs || 0)
    const text = params.text == null ? 'ready' : String(params.text)
    await fs.promises.mkdir(path.dirname(target), { recursive: true })
    await fs.promises.rm(target, { force: true }).catch(() => {})
    setTimeout(() => {
      fs.promises.writeFile(target, text, 'utf8').catch(() => {})
    }, delayMs).unref()
    return { path: target, delayMs }
  }

  async assertFileText(req, ondata) {
    const params = req.params || {}
    const target = this.resolvePath(req, params.path)
    const text = await fs.promises.readFile(target, 'utf8')
    if (Object.prototype.hasOwnProperty.call(params, 'equals')) {
      assert.equal(text, params.equals)
    }
    if (Object.prototype.hasOwnProperty.call(params, 'includes')) {
      assert.ok(text.includes(params.includes), `${target} did not include ${params.includes}`)
    }
    return this.ok({ params: { name: params.name || 'assert_file_text' } }, ondata)
  }

  async assertNotExists(req, ondata) {
    const params = req.params || {}
    const target = this.resolvePath(req, params.path)
    const exists = await fs.promises.access(target).then(() => true).catch(() => false)
    assert.equal(exists, false, `${target} should not exist`)
    return this.ok({ params: { name: params.name || 'assert_not_exists' } }, ondata)
  }

  async assertInputIncludes(req, ondata) {
    const params = req.params || {}
    const text = this.inputText(req)
    assert.ok(text.includes(params.includes), `input did not include ${params.includes}: ${text}`)
    return this.ok({ params: { name: params.name || 'assert_input_includes' } }, ondata)
  }

  async assertInputEquals(req, ondata) {
    const params = req.params || {}
    const text = this.inputText(req)
    assert.equal(text, params.equals)
    return this.ok({ params: { name: params.name || 'assert_input_equals' } }, ondata)
  }

  async assertInputPathEquals(req, ondata) {
    const params = req.params || {}
    const actual = this.valueAt(req.input, params.path)
    assert.deepEqual(actual, params.equals)
    return this.ok({ params: { name: params.name || 'assert_input_path_equals' } }, ondata)
  }

  async assertInputPathIncludes(req, ondata) {
    const params = req.params || {}
    const actual = this.valueAt(req.input, params.path)
    assert.ok(String(actual).includes(params.includes), `${params.path} did not include ${params.includes}`)
    return this.ok({ params: { name: params.name || 'assert_input_path_includes' } }, ondata)
  }

  async assertMemory(req, ondata, kernel) {
    const params = req.params || {}
    const scope = params.scope || 'local'
    const parentId = req.parent.id || req.parent.path
    const store = kernel.memory[scope] && kernel.memory[scope][parentId]
      ? kernel.memory[scope][parentId]
      : {}
    const actual = this.valueAt(store, params.key)
    if (params.absent) {
      assert.equal(actual, undefined, `${scope}.${params.key} should be absent`)
    } else {
      assert.deepEqual(actual, params.equals)
    }
    return this.ok({ params: { name: params.name || `assert_${scope}_memory` } }, ondata)
  }
}

module.exports = TestAssert
