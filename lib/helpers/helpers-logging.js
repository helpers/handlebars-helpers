(function() {
  var Utils, debug, inspect, log;

  Utils = require('../utils/utils');

  module.exports.inspect = inspect = function(obj, language) {
    var result;

    if (Utils.isUndefined(language)) {
      language = "";
    }
    result = '``` ' + language + '\n' + require('util').inspect(obj, 10, null).replace('{', '{\n ').replace('}', '\n}') + '\n```';
    return Utils.safeString(result);
  };

  module.exports.log = log = function(value) {
    return console.log(value);
  };

  module.exports.debug = debug = function(value) {
    console.log('Context: ', this);
    if (!Utils.isUndefined(value)) {
      console.log('Value: ', value);
    }
    return console.log('-----------------------------------------------');
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("inspect", inspect);
    Handlebars.registerHelper("log", log);
    Handlebars.registerHelper("debug", debug);
    return this;
  };

}).call(this);
