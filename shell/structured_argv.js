module.exports = {
  run: [{
    method: "fs.make",
    params: {
      path: ".pinokio-test"
    }
  }, {
    method: "shell.run",
    params: {
      message: {
        _: [
          "node",
          "-e",
          "require('fs').writeFileSync(process.argv[1], process.argv[2])",
          "{{cwd}}/.pinokio-test/shell-structured-argv.txt",
          "line one\nline two"
        ]
      }
    }
  }, {
    method: "fs.read",
    params: {
      path: ".pinokio-test/shell-structured-argv.txt",
      encoding: "utf8"
    }
  }, {
    uri: "../_assert.js",
    method: "assertInputEquals",
    params: {
      equals: "line one\nline two",
      name: "shell_structured_argv"
    }
  }, {
    method: "fs.rm",
    params: {
      path: ".pinokio-test"
    }
  }]
}
