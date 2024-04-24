module.exports = {
  run: [{
    "method": "log",
    "params": {
      "raw": "> gpu:\r\n
    }
  }, {
    "method": "log",
    "params": {
      "json2": "{{gpu}}"
    }
  }, {
    "method": "log",
    "params": {
      "raw": "> gpus:\r\n"
    }
  }, {
    "method": "log",
    "params": {
      "json2": "{{gpus}}"
    }
  }, {
    "method": "log",
    "params": {
      "raw": "> graphics:\r\n"
    }
  }, {
    "method": "log",
    "params": {
      "json2": "{{graphics}}"
    }
  }]
}
