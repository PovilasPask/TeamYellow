var conf = require('../../nightwatch.conf.js');
const email = 'gbartrum2f@devbridge.com';
const password = 'AyBrDdHAsc';

module.exports = {
  before: function (browser) {
    browser.url(browser.launchUrl);
  },
  'Login as admin': function (browser) {
    let login = browser.page.login();
    login
      .waitForPage()
      .enterCredentials(email, password)
      .assertCredentials(email, password);
  },
  'Make an order': function (browser) {
    let mainDashboard = browser.page.mainDashboard();
    let ordersHistory = browser.page.ordersHistory();
    mainDashboard.waitForPage();
    mainDashboard.orderFirstItem();
    ordersHistory.navigate();
    ordersHistory.waitForPage();
    ordersHistory.searchOrder(email);
    ordersHistory.assertItemFound(email);
  },
  after: function (browser) {
    browser.end();
  }
}