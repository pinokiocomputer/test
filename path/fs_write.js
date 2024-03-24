module.exports = {
  "run": [{
    "method": "fs.write",
    "params": {
      "path": "items.json",
      "json2": {
        "names": ["alice", "bob", "carol"]
      }
    }
  }, {
    "method": "fs.read",
    "params": {
      "path": "https://github.com/pinokiocomputer/test.git/pinokio.js",
      "encoding": "utf8"
    }
  }, {
    "method": "log",
    "params": {
      "text": "{{input}}"
    }
  }, {
    "method": "fs.read",
    "params": {
      "path": "https://github.com/pinokiocomputer/test.git/path/items.json",
      "encoding": "utf8"
    }
  }, {
    "method": "log",
    "params": {
      "text": "{{input}}"
    }
  }]
}
