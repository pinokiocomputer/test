module.exports = {
//  daemon: true,
  run: [{
    method: "shell.run",
    params: {
      id: "term",
      venv: "env",
      input: true,
      message: "",
      on: [{
        event: "/fuck/i",
        kill: true
      }]
    }
  }, {
    method: "input",
    params: {
      title: "INPUT",
      description: "THIS IS INPUT"
    }
  }, {
    method: "shell.connect",
    params: {
      id: "term",
      venv: "env",
      on: [{
        event: "/fuck/i",
        kill: true
      }]
    }
  }]
}
