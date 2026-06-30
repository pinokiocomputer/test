module.exports = {
  run: [{
    method: "fs.remove",
    params: {
      path: ".pinokio-test/hf-private"
    }
  }, {
    method: "fs.make",
    params: {
      path: ".pinokio-test/hf-private"
    }
  }, {
    // Opens the existing Pinokio Hugging Face login page and waits for it to save the token.
    method: "hf.login",
    params: {
      open: true,
      wait: true,
      timeout: 300000,
      interval: 2000
    }
  }, {
    // Requires the logged-in Hugging Face account to have access to this private repo.
    method: "hf.download",
    params: {
      path: ".pinokio-test/hf-private",
      _: ["cocktailpeanut/privatetest"],
      "local-dir": "."
    }
  }, {
    // This is included to exercise hf.logout; a successful run leaves Hugging Face logged out.
    method: "hf.logout"
  }]
}
