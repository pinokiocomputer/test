class Control {
  async run(req, ondata, kernel) {
    console.log({ req })
    let { chromium, firefox, webkit, devices } = kernel.playwright
    const browser = await chromium.launch({ headless: false, });
    console.log("browser", browser)
    //const context = await browser.newContext(devices['Desktop Chrome'])
    const context = await browser.newContext({ viewport: null })
    console.log("context", context)
    ondata({ raw: "creating new page\n" })
    const page = await context.newPage()
    console.log("page", page)
    ondata({ raw: `goto ${req.params.uri}\n` })
    await page.goto(req.params.uri)
    await page.waitForLoadState('load');
    ondata({ raw: `loaded\n` })
  }
}
module.exports = Control
