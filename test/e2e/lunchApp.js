var conf = require('../../nightwatch.conf.js');

module.exports = {
  before : function (browser) {
    browser.url(browser.launchUrl);
  },

  'Login': function(browser) {
    // POM objects
    const login = browser.page.login();

    // Testing data
    const email = 'gbartrum2f@devbridge.com';
    const password = 'AyBrDdHAsc';

    login
      .waitForPage();
      .setValue('@email', email)
      .assert.containsText("@email", email)
      .setValue('@password', password)
      .assert.containsText("@password", password)
      .click('@submitBtn');
  },

  after : function (browser) {
    browser.end();
  }
}