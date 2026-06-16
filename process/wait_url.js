module.exports = {
  run: [{
    uri: "../_assert.js",
    method: "startHttpServer",
    params: {
      id: "process_wait_url",
      routes: {
        "/": "API_TEST_SERVER process_wait_url"
      }
    }
  }, {
    method: "local.set",
    params: {
      process_wait_url: "{{input.url}}"
    }
  }, {
    method: "process.wait",
    params: {
      url: "{{local.process_wait_url}}",
      interval: 0.1,
      title: "Waiting for URL",
      description: "Testing process.wait URL polling"
    }
  }, {
    method: "net",
    params: {
      method: "get",
      url: "{{local.process_wait_url}}"
    }
  }, {
    uri: "../_assert.js",
    method: "assertInputIncludes",
    params: {
      includes: "API_TEST_SERVER process_wait_url",
      name: "process_wait_url"
    }
  }, {
    uri: "../_assert.js",
    method: "stopHttpServer",
    params: {
      id: "process_wait_url"
    }
  }]
}
