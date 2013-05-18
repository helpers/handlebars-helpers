/*! logging helpers
*/


(function() {
  var Utils, debug, expandJSON, expandYAML, grunt, inspect, log, to;

  Utils = require('../utils/utils');

  grunt = require('grunt');

  to = require('to');

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

  module.exports.expandYAML = expandYAML = function(src) {
    var list, yml;

    list = grunt.file.expand(src);
    yml = to.format.yaml.stringify(list);
    return Utils.safeString(yml);
  };

  module.exports.expandJSON = expandJSON = function(src) {
    var json, list;

    list = grunt.file.expand(src);
    json = JSON.stringify(list, null, 2);
    return Utils.safeString(json);
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("expandYAML", expandYAML);
    Handlebars.registerHelper("expandJSON", expandJSON);
    Handlebars.registerHelper("inspect", inspect);
    Handlebars.registerHelper("log", log);
    Handlebars.registerHelper("debug", debug);
    return this;
  };

}).call(this);
