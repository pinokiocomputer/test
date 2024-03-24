module.exports = {
  "run": [{
    "method": "fs.download",
    "params": {
      "uri": "https://raw.githubusercontent.com/pinokiocomputer/test/main/update.json",
      "path": "{{cwd}}"
    }
  }]
}
