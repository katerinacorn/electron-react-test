const webdriver = require('selenium-webdriver');

const driver = new webdriver.Builder()
  .usingServer('http://localhost:9515')
  .withCapabilities({
    'goog:chromeOptions': {
      // eslint-disable-next-line prettier/prettier
      binary: 'D:/newDownloads/Flow-win32-x64-1.0.15811/Flow-win32-x64/Flow.exe',
    },
  })
  .forBrowser('chrome')
  .build();

const runTest = async () => {
  /* const title = await driver.getTitle(); */
  // console.log('title: ', title);
  await driver.sleep(5000);
  /* const accountsButton = await driver.findElement(
    webdriver.By.className('form_container')
  ); */
  // const accountsButtonText = await accountsButton.getText()
  // console.log('accountsButton: ', accountsButton);
};

runTest();
