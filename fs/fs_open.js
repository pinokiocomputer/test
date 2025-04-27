module.exports = {
  "run": [{
    "method": "fs.open",
    "params": {
      "command": "view",
      "path": "array.js"
    }
  }, {
    "method": "fs.open",
    "params": {
      "command": "open",
      "path": "fs_open.js"
    }
  }, {
    "method": "fs.open",
    "params": {
      "command": "cursor",
      "path": "fs_copy.js"
    }
  }]
}
