module.exports = {
  run: [{
    method: "shell.run",
    params: {
      input: true,
      message: "tail -f /var/log/system.log",
    }
  }]
}
