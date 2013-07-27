/*! logging helpers*/


(function() {
  var Utils, debug, expandJSON, expandMapping, expandYAML, grunt, log, to, util;

  Utils = require('../utils/utils');

  grunt = require('grunt');

  util = require('util');

  to = require('to');

  module.exports = {
    debug: debug = function(value) {
      console.log('Context: ', this);
      if (!Utils.isUndefined(value)) {
        console.log('Value: ', value);
      }
      return console.log('-----------------------------------------------');
    },
    expandJSON: expandJSON = function(src) {
      var json, list;
      list = grunt.file.expand(src);
      json = JSON.stringify(list, null, 2);
      return Utils.safeString(json);
    },
    expandMapping: expandMapping = function(src) {
      var list, yml;
      list = Utils.expandMapping(src);
      yml = to.format.yaml.stringify(list);
      return Utils.safeString(yml);
    },
    expandYAML: expandYAML = function(src) {
      var list, yml;
      list = grunt.file.expand(src);
      yml = to.format.yaml.stringify(list);
      return Utils.safeString(yml);
    },
    log: log = function(value) {
      return console.log(value);
    }
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("debug", debug);
    Handlebars.registerHelper("expandJSON", expandJSON);
    Handlebars.registerHelper("expandMapping", expandMapping);
    Handlebars.registerHelper("expandYAML", expandYAML);
    Handlebars.registerHelper("log", log);
    Handlebars.registerHelper("inspect", function(obj, ext) {
      var html, md, result;
      if (Utils.isUndefined(options.ext)) {
        ext = ".html";
      } else {
        ext = options.ext;
      }
      md = "``` " + "json" + "\n" + (util.inspect(obj, true, null)) + "\n```";
      html = '<pre class="json">' + '\n' + (util.inspect(obj, true, null)) + '\n</pre>';
      result = Utils.switchOutput(ext, md, html);
      return Utils.safeString(result);
    });
    return this;
  };

}).call(this);
