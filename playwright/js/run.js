module.exports = {
  run: [{
    uri: "control.js",
    method: "run",
    params: {
      cmds: [
        { url: "https://google.com" },
        { wait: { selector: "textarea" } },
        { focus: "textarea" },
        { type: "pinokio.computer" },
        { press: "Enter" },
        { wait: { selector: "#search" } },
        { click: "#search a" },
//        { close: true }
      ]
    }
  }]
}
