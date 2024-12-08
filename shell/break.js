module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "{{platform === 'win32' ? 'dir' : 'ls'}}",
      on: [{
        event: "/break.*js/",
        break: true
      }]
    }
  }]
}
