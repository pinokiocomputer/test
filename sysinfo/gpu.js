module.exports = {
  run: [{
    "method": "log",
    "params": {
      "raw": "gpu: {{gpu}}"
    }
  }, {
    "method": "log",
    "params": {
      "raw": "gpus:\r\n"
    }
  }, {
    "method": "log",
    "params": {
      "json2": "{{gpus}}"
    }
  }]
}
