const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const { elementTextIs } = require('selenium-webdriver/lib/until');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleContains('webdriver'), 1000);
  } catch (error) {
    await driver.quit();
    console.log(error);
    process.exit(1);
  }
  finally {
    await driver.quit();
  }
})();