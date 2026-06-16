module.exports = {
  run: [{
    method: "load",
    params: {
      fixture: "value.js"
    }
  }, {
    uri: "../_assert.js",
    method: "assertInputPathEquals",
    params: {
      path: "fixture.nested.answer",
      equals: 42,
      name: "load"
    }
  }]
}
