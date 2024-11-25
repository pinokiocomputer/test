class Control {
  async run(req, ondata, kernel) {
    let { chromium, firefox, webkit, devices } = kernel.playwright
    const browser = await chromium.launch({ headless: false, });
    console.log("browser", browser)
    //const context = await browser.newContext(devices['Desktop Chrome'])
    const context = await browser.newContext({ viewport: null })
    console.log("context", context)
    ondata({ raw: "creating new page\r\n" })
    const page = await context.newPage()
    let cmds = req.params.cmds
    for(let cmd of cmds) {
      if (cmd.url) {
        ondata({ raw: `goto: ${cmd.url}\r\n` })
        await page.goto(cmd.url)
//        await page.waitForLoadState('load');
      } else if (cmd.type) {
        ondata({ raw: `type: ${cmd.type}\r\n` })
        await page.type(cmd.type)
      } else if (cmd.press) {
        ondata({ raw: `press: ${cmd.press}\r\n` })
        await page.press(cmd.press)
      } else if (cmd.wait) {
        ondata({ raw: `wait: ${cmd.wait.selector}\r\n` })
        if (cmd.wait.selector) {
          await page.waitForSelector(cmd.wait.selector)
        } else {
        }
      } else if (cmd.click) {
        ondata({ raw: `click: ${cmd.click}\r\n` })
        await page.click(cmd.click)
      } else if (cmd.focus) {
        ondata({ raw: `focus: ${cmd.focus}\r\n` })
        await page.focus(cmd.focus)
      } else if (cmd.close) {
        ondata({ raw: `close browser\r\n` })
        await browser.close()
      }
    }
  }
}
module.exports = Control
