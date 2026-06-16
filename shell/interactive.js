module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "echo API_TEST_OK shell_run_current",
      on: [{
        event: "/API_TEST_OK shell_run_current/",
        break: false
      }]
    }
  }]
}
