module.exports = {
  run: [{
    when: "{{platform === 'darwin'}}",
    method: "log",
    params: {
      raw: "\r\nMac\r\n"
    },
    next: "end"
  }, {
    method: "log",
    params: {
      raw: "\r\nThis should be printed if NOT on mac\r\n"
    },
    next: "end"
  }, {
    when: "{{platform === 'win32'}}",
    method: "log",
    params: {
      raw: "\r\nWindows\r\n"
    },
    next: "end"
  }, {
    method: "log",
    params: {
      raw: "\r\nThis should be printed if NOT on windows\r\n"
    },
    next: "end"
  }, {
    when: "{{platform === 'linux'}}",
    method: "log",
    params: {
      raw: "\r\nLinux\r\n"
    },
    next: "end"
  }, {
    id: "end",
    method: "log",
    params: {
      raw: "\r\nTHE END\r\n"
    }
  }]
}
