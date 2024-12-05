module.exports = {
  pre: [{
    title: "custom env",
    description: "custom env 1",
    env: "CUSTOM_ENV"
  }, {
    title: "custom env 2",
    description: "custom env 2",
    env: "CUSTOM_ENV2"
  }],
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
