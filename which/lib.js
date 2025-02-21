module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "which libsqlite3.dylib"
    },
  }, {
    method: "log",
    params: {
      raw: ">>> {{which('libsqlite3.dylib')}}"
    }
  }]
}
