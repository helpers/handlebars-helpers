
(function () {
  if (typeof module !== 'undefined' && module !== null) {
    module.exports = require('fs-utils');
  } else {
    this.Helpers.Mocks['fs-utils'] = file = {};
    // add any path functions used here
  }
}());
