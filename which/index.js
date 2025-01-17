module.exports = {
  run: [{
    when: "{{which('brew')}}",
    method: "shell.run",
    params: {
      message: "{{which('brew')}}"
    },
  }, {
    when: "{{which('xcode-select')}}",
    method: "shell.run",
    params: {
      message: "{{which('xcode-select --help')}}"
    },
  }, {
    when: "{{which('winget')}}",
    method: "shell.run",
    params: {
      message: "{{which('winget')}}"
    },
  }, {
    when: "{{which('apt-get')}}",
    method: "shell.run",
    params: {
      message: "{{which('apt-get')}}"
    },
  }]
}
