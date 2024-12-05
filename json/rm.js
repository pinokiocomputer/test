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
    method: "json.rm",
    params: {
      "{{kernel.path('test.json')}}": ["a", "b"]
    }
  }]
}
