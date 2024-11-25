module.exports = {
  run: [{
    uri: "control.js",
    method: "run",
    params: {
      cmds: [
        { url: "https://google.com" },
        { wait: { selector: "[aria-label='Google Search']" } },
        { type: "pinokio.computer" },
        { press: "Enter" },
        { wait: { selector: "#search" } },
        { click: "#search a" }
      ]
    }
  }]
}
