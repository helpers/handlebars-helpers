/*! object helpers*/


(function() {
  var Utils, grunt, parseJSON, pkg, prop, stringify, value, _;

  Utils = require('../utils/utils');

  grunt = require('grunt');

  _ = require('lodash');

  pkg = grunt.file.readJSON('package.json');

  module.exports = {
    value: value = function(file, prop) {
      file = Utils.readJSON(file);
      prop = _.pick(file, prop);
      prop = _.pluck(prop);
      return Utils.safeString(prop);
    },
    prop: prop = function(file, prop) {
      file = Utils.readJSON(file);
      prop = _.pick(file, prop);
      return Utils.safeString("\n" + JSON.stringify(prop, null, 2));
    },
    stringify: stringify = function(file) {
      file = Utils.readJSON(file);
      return Utils.safeString(JSON.stringify(file, null, 2));
    },
    /*
    # From: Keegan Street (@keeganstreet)
    # https://github.com/assemble/assemble/issues/228#issuecomment-20855238
    */

    parseJSON: parseJSON = function(data, options) {
      return options.fn(JSON.parse(data));
    }
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper('stringify', stringify);
    Handlebars.registerHelper('parseJSON', parseJSON);
    Handlebars.registerHelper('value', value);
    Handlebars.registerHelper('prop', prop);
    Handlebars.registerHelper("opt", function(key) {
      return options[key] || "";
    });
    return this;
  };

}).call(this);
