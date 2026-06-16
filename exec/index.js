module.exports = {
  run: [{
    method: "exec",
    params: {
      message: "echo API_TEST_OK exec"
    }
  }, {
    uri: "../_assert.js",
    method: "assertInputPathIncludes",
    params: {
      path: "stdout",
      includes: "API_TEST_OK exec",
      name: "exec"
    }
  }]
}
