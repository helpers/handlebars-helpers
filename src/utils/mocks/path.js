(function () {
  if (typeof module !== 'undefined' && module !== null) {
    module.exports = require('path');
  } else {
    this.Helpers.Mocks.path = path = {};
    // add any path functions used here
  }
}());
