module.exports = {
  "run": [{
    "method": "shell.run",
    "params": {
      "message": "sleep 5 && npx http-server -y",
      "on": [{
        "event": "/.+/",
        "done": true
      }]
    }
  }, {
    "method": "process.wait",
    "params": {
      "url": "http://127.0.0.1:8080",
    }
  }]
}
