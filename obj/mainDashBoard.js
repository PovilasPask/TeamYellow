const functions = {
    waitForPage: function () {
      return this.waitForElementVisible('@providerName');
    },
    orderFirstitem: function () {
        this.click('@firstMenuItem');
        this.click('@confimOrderBtn');
    },
  }
  module.exports = {
    commands: [functions],
    elements: {
        providerName: '.headline.red--text',
        firstMenuItem: '.container.fluid > div:nth-child(1) > div:nth-child(3) > span:nth-child(1) > div:nth-child(1)',
        confimOrderBtn: "[class='flex pt-1'] .btn__content"
    }
}