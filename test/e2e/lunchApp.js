var conf = require('../../nightwatch.conf.js');

module.exports = {
  before: function (browser) {
    browser.url(browser.launchUrl);
  },
  'Login as admin': function (browser) {
    let login = browser.page.login();
    login
      .waitForPage()
      .enterCredentials()
      .assertCredentials();
  },
  after: function (browser) {
    browser.end();
  }
}