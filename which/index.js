module.exports = {
  run: [{
    when: "{{which('brew')}}",
    method: "shell.run",
    params: {
      "{{which('brew')}}"
    },
  }, {
    when: "{{which('winget')}}",
    method: "shell.run",
    params: {
      "{{which('winget')}}"
    },
  }, {
    when: "{{which('apt-get')}}",
    method: "shell.run",
    params: {
      "{{which('apt-get')}}"
    },
  }]
}
