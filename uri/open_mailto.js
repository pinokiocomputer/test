module.exports = {
  run: [{
    method: "uri.open",
    params: {
      uri: "mailto:test@example.com",
      params: {
        subject: "Pinokio uri.open test"
      }
    }
  }]
}
