module.exports = {
  run: [{
    method: "log",
    params: {
      json2: {
        env: "{{env.CUSTOM_ENV}}",
        env2: "{{env.CUSTOM_ENV2}}",
      }
    }
  }]
}
