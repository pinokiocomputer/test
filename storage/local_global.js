module.exports = {
  run: [{
    method: "local.set",
    params: {
      "api2_test.value": "local-value"
    }
  }, {
    uri: "../_assert.js",
    method: "assertMemory",
    params: {
      scope: "local",
      key: "api2_test.value",
      equals: "local-value",
      name: "local_set"
    }
  }, {
    method: "local.rm",
    params: ["api2_test.value"]
  }, {
    uri: "../_assert.js",
    method: "assertMemory",
    params: {
      scope: "local",
      key: "api2_test.value",
      absent: true,
      name: "local_rm"
    }
  }, {
    method: "global.set",
    params: {
      "api2_test.value": "global-value"
    }
  }, {
    uri: "../_assert.js",
    method: "assertMemory",
    params: {
      scope: "global",
      key: "api2_test.value",
      equals: "global-value",
      name: "global_set"
    }
  }, {
    method: "global.rm",
    params: ["api2_test.value"]
  }, {
    uri: "../_assert.js",
    method: "assertMemory",
    params: {
      scope: "global",
      key: "api2_test.value",
      absent: true,
      name: "global_rm"
    }
  }]
}
