const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const { elementTextIs } = require('selenium-webdriver/lib/until');

(async function example() {

  var options = new chrome.Options();   
  options.add_argument('headless')
  options.add_argument('--disable-infobars')
  options.add_argument('--disable-dev-shm-usage')
  options.add_argument('--no-sandbox')
  options.add_argument('--remote-debugging-port=9222')
  
  let driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
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