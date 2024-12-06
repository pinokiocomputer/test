module.exports = {
  run: [{
    method: "hf.download",
    params: {
      path: "model",
      _: ["gpt2", "config.json"],
      "local-dir": "."
    }
  }]
}
