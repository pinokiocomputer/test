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
    method: "json.rm",
    params: {
      "arr.json": [1]
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
        "2": {
          "xyz": "abc"
        }
      }
    }
  }, {
    method: "fs.cat",
    params: {
      path: "arr.json"
    }
  }, {
    method: "json.rm",
    params: {
      "arr.json": ["2.xyz"]
    }
  }, {
    method: "fs.cat",
    params: {
      path: "arr.json"
    }
  }]
}
