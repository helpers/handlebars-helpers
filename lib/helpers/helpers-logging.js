(function() {
  module.exports.register = function(Handlebars, options) {
    var Utils;

    Utils = require('../utils/utils');
    Handlebars.registerHelper('inspect', function(obj, language) {
      var result;

      if (Utils.isUndefined(language)) {
        language = "";
      }
      result = '``` ' + language + '\n' + require('util').inspect(obj, 10, null).replace('{', '{\n ').replace('}', '\n}') + '\n```';
      return new Handlebars.SafeString(result);
    });
    Handlebars.registerHelper('log', function(value) {
      return console.log(value);
    });
    Handlebars.registerHelper('debug', function(value) {
      console.log('Context: ', this);
      if (!Utils.isUndefined(value)) {
        console.log('Value: ', value);
      }
      return console.log('-----------------------------------------------');
    });
    return this;
  };

}).call(this);
