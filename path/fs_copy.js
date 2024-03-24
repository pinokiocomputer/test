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
    "method": "fs.copy",
    "params": {
      "src": "items.json",
      "dest": "items2.json"
    }
  }]
}
