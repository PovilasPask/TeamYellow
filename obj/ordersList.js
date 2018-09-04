const functions = {
  navigate: function () {
    this.click('@ordersHistory');
  },
  waitForPage: function () {
    this.waitForElementVisible('@headline');
  },
  searchOrder: function (serachTerm) {
    this.setValue('@searchField', searchTerm);
  },
  assertItemFound: function (searchTerm) {
    this.waitForElementVisible('firstListItem');
    this.assert.containsText('@firstListItem', searchTerm);
  }
}
module.exports = {
  commands: [functions],
  elements: {
    ordersHistory: 'aside .list--dense:nth-child(3) div:nth-of-type(3) span',
    headline: ".headline",
    searchField: "[class='card__title pb-0 card__title--primary'] [tabindex]",
    firstListItem: "tbody tr td:nth-of-type(1)"
  }
}