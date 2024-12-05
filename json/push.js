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
    method: "json.push",
    params: {
      "arr.json": {
        a: 1
      }
    }
  }, {
    method: "fs.cat",
    params: {
      path: "arr.json"
    }
  }]
}
