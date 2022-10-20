const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');
const { elementTextIs } = require('selenium-webdriver/lib/until');

(async function example() {
  
  var options = new Options();
  options.addArguments("--headless");
  options.addArguments('--disable-infobars')
  options.addArguments('--disable-dev-shm-usage')
  options.addArguments('--no-sandbox')
  options.addArguments('--remote-debugging-port=9222')
  
  let driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
  try {
    await driver.get('https://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleContains('webdriver'), 1000);
    console.log("ok?");
  } catch (error) {
    await driver.quit();
    console.log(error);
    process.exit(1);
  }
  finally {
    await driver.quit();
  }
})();