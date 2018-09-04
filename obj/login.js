let email = 'gbartrum2f@devbridge.com';
let password = 'AyBrDdHAsc';
const functions = {
  waitForPage: function () {
    return this.waitForElementVisible('@headline');
  },
  enterCredentials: function () {
    return this
      .setValue('@emailField', email)
      .setValue('@passwordField', password);
  },
  assertCredentials: function () {
    return this
      .assert.containsText('@emailField', email)
      .assert.containsText('@passwordField', password);
  }
}
module.exports = {
  commands: [functions],
  elements: {
    headline: '.headline',
    emailField: "[name='email']",
    passwordField: "[name='password']",
    loginBtn: ".btn__content",
  }
}