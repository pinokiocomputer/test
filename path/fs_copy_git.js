{
  "run": [{
    "method": "fs.write",
    "params": {
      "path": "items.json",
      "json2": {
        "names": ["alice", "bob", "carol"]
      }
    }
  }, {
    "method": "fs.copy",
    "params": {
      "src": "items.json",
      "dest": "https://github.com/pinokiocomputer/test.git/path/items2.json"
    }
  }]
}
