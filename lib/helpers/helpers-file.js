(function() {
  module.exports.register = function(Handlebars, options) {
    var Utils;

    Utils = require('../utils/utils');
    /*
    Copy: copies src file from A to B. USE WITH CAUTION!!!
    Usage: {{copy [a] [b]}}
    */

    return Handlebars.registerHelper('copy', function(a, b) {
      return Utils.copyFile(a, b);
    });
  };

}).call(this);
