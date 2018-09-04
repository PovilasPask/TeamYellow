const functions = {
  waitForPage: function () {
    return this.waitForElementVisible('@headline');
  },
  enterCredentials: function (email, password) {
    return this
      .setValue('@emailField', email)
      .setValue('@passwordField', password);
  },
  assertCredentials: function (email, password) {
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