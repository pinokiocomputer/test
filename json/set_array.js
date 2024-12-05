module.exports = {
  run: [{
    method: "json.set",
    params: {
      "arr.json": [1,2,3]
    }
  }, {
    method: "fs.cat",
    params: {
      path: "arr.json"
    }
  }, {
    method: "json.set",
    params: {
      "arr.json": {
        "1": 0
      }
    }
  }, {
    method: "fs.cat",
    params: {
      path: "arr.json"
    }
  }, {
    method: "json.set",
    params: {
      "arr.json": {
        "2": { xxx: "yyy" }
      }
    }
  }, {
    method: "fs.cat",
    params: {
      path: "arr.json"
    }
  }, {
    method: "json.set",
    params: {
      "arr.json": {
        "2": { yyy: "zzz" }
      }
    }
  }, {
    method: "fs.cat",
    params: {
      path: "arr.json"
    }
  }, {
    method: "json.set",
    params: {
      "arr.json": {
        "2.zzz": "abc"
      }
    }
  }, {
    method: "fs.cat",
    params: {
      path: "arr.json"
    }
  }]
}
