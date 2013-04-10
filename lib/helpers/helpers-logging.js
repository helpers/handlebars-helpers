(function() {
  module.exports.register = function(Handlebars, options) {
    var Utils;

    Utils = require('../utils/utils');
    Handlebars.registerHelper('log', function(value) {
      return console.log(value);
    });
    return Handlebars.registerHelper('debug', function(value) {
      console.log('Context: ', this);
      if (!Utils.isUndefined(value)) {
        console.log('Value: ', value);
      }
      return console.log('-----------------------------------------------');
    });
  };

}).call(this);
