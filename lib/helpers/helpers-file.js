(function() {
  var Utils, copy;

  Utils = require('../utils/utils');

  module.exports.copy = copy = function(a, b) {
    return Utils.copyFile(a, b);
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("copy", copy);
    return this;
  };

}).call(this);
