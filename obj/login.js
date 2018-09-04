const functions = {
  waitForPage : function () {
    return this.waitForElementVisible('@headline');
  },
}

module.exports = {
  commands: [functions],
  elements: {
    headline: {
      selector: '.headline', 
      locateStrategy: 'css selector'
    },
    email: {
      selector: '.headline', 
      locateStrategy: 'css selector'
    },
    password: {
      selector: '.headline', 
      locateStrategy: 'css selector'
    },
    submitBtn: {
      selector: '[type="submit"]',
      locateStrategy: 'css selector'
    }
  }
}