module.exports = {
  "pre": [{
    "title": "OPENAI API Key",
    "description": "OPENAI API KEY https://platform.openai.com/api-keys",
    "env": "OPENAI_API_KEY",
    "default": "<DEFAULT KEY GOES HERE>"
  }],
  run: [{
    method: "log",
    params: {
      json2: {
        env: "{{envs.OPENAI_API_KEY}}"
      }
    }
  }]
}
