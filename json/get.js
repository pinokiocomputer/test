module.exports = {
  run: [{
    method: "json.set",
    params: {
      "{{kernel.path('test.json')}}": {
        a: 1,
        b: 2,
        c: 3
      }
    }
  }, {
    method: "json.get",
    params: {
      a: "{{kernel.path('test.json')}}",
      b: "../update.json"
    }
  }, {
    method: "log",
    params: {
      "json2": "{{local.a}}"
    }
  }]
}
