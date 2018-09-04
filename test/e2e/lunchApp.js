var conf = require('../../nightwatch.conf.js');

module.exports = {
  before : function (browser) {
    browser.url(browser.launchUrl);
  },

  after : function (browser) {
    browser.end();
  }
}