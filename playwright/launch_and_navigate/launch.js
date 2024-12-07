class Launch {
  async open(req, ondata, kernel) {
    console.log("Playwright", kernel.playwright)
    let { firefox, devices } = kernel.playwright
    const browser = await firefox.launch({ headless: false, });
    const context = await browser.newContext({ viewport: null })
    ondata({ raw: "creating new page\r\n" })
    const page = await context.newPage()
    ondata({ raw: `goto: ${req.params.url}\r\n` })
    await page.goto(req.params.url)
    await page.waitForSelector("textarea")
    await page.focus("textarea")
    await page.keyboard.type("a fuzzy gentleman cat sipping coffee")
    await page.click("button.primary")

    await page.exposeFunction('handleSrcChange', () => {
      page.click("button.primary")
    });
    await page.evaluate((selector) => {
      const div = document.querySelector(selector);
      console.log("div", div)
      if (!div) {
        console.error(`Element not found: ${selector}`);
        return;
      }

      // Observe changes using MutationObserver
      const observer = new MutationObserver(() => {
        console.log("Mutated")
        window.handleSrcChange();
      });

      observer.observe(img, { attributes: true, attributeFilter: ['src'] });
    }, ".wrap.default");

//    let cmds = req.params.cmds
//    for(let cmd of cmds) {
//      if (cmd.url) {
//        ondata({ raw: `goto: ${cmd.url}\r\n` })
//        await page.goto(cmd.url)
//      } else if (cmd.type) {
//        ondata({ raw: `type: ${cmd.type}\r\n` })
//        await page.keyboard.type(cmd.type)
//      } else if (cmd.down) {
//        ondata({ raw: `down: ${cmd.down}\r\n` })
//        await page.keyboard.down(cmd.down)
//      } else if (cmd.up) {
//        ondata({ raw: `up: ${cmd.up}\r\n` })
//        await page.keyboard.up(cmd.up)
//      } else if (cmd.press) {
//        ondata({ raw: `press: ${cmd.press}\r\n` })
//        await page.keyboard.press(cmd.press)
//      } else if (cmd.wait) {
//        ondata({ raw: `wait: ${cmd.wait.selector}\r\n` })
//        if (cmd.wait.selector) {
//          await page.waitForSelector(cmd.wait.selector)
//        } else if (cmd.wait.load) {
//          await page.waitForLoadState('load');
//        }
//      } else if (cmd.click) {
//        ondata({ raw: `click: ${cmd.click}\r\n` })
//        await page.click(cmd.click)
//      } else if (cmd.focus) {
//        ondata({ raw: `focus: ${cmd.focus}\r\n` })
//        await page.focus(cmd.focus)
//      } else if (cmd.close) {
//        ondata({ raw: `close browser\r\n` })
//        await browser.close()
//      }
//    }
  }
}
module.exports = Launch
