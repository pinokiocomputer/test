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
    method: "json.set",
    params: {
      "{{kernel.path('test.json')}}": {
        d: 2
      }
    }
  }]
}
