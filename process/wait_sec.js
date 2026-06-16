module.exports = {
  run: [{
    uri: "../_assert.js",
    method: "startTimer",
    params: {
      id: "process_wait_sec"
    }
  }, {
    method: "process.wait",
    params: {
      sec: 0.2,
      title: "Waiting",
      description: "Testing fixed-duration process.wait"
    }
  }, {
    uri: "../_assert.js",
    method: "assertElapsed",
    params: {
      id: "process_wait_sec",
      minMs: 150,
      maxMs: 5000,
      name: "process_wait_sec"
    }
  }]
}
