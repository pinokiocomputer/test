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
    method: "json.concat",
    params: {
      "arr.json": [4,5]
    }
  }, {
    method: "fs.cat",
    params: {
      path: "arr.json"
    }
  }]
}
