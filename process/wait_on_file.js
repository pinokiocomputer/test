module.exports = {
  run: [{
    method: "fs.remove",
    params: {
      path: ".pinokio-test/wait-on-ready.txt"
    }
  }, {
    uri: "../_assert.js",
    method: "scheduleFile",
    params: {
      path: ".pinokio-test/wait-on-ready.txt",
      text: "ready",
      delayMs: 200
    }
  }, {
    method: "process.wait",
    params: {
      on: {
        resources: ["file:{{cwd}}/.pinokio-test/wait-on-ready.txt"],
        timeout: 5000
      },
      title: "Waiting for file",
      description: "Testing wait-on file resources"
    }
  }, {
    uri: "../_assert.js",
    method: "assertFileText",
    params: {
      path: ".pinokio-test/wait-on-ready.txt",
      equals: "ready",
      name: "process_wait_on_file"
    }
  }, {
    method: "fs.rm",
    params: {
      path: ".pinokio-test"
    }
  }]
}
