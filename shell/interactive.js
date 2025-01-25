module.exports = {
  daemon: true,
  run: [{
    method: "shell.run",
    params: {
      venv: "env",
      persistent: true,
      message: ""
    }
  }]
}
