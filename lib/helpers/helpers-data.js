/*! object helpers
*/


(function() {
  var Utils, grunt, pkg, prop, stringify, value, _;

  Utils = require('../utils/utils');

  grunt = require('grunt');

  _ = require('lodash');

  pkg = grunt.file.readJSON('package.json');

  module.exports.value = value = function(file, prop) {
    file = Utils.readJSON(file);
    prop = _.pick(file, prop);
    prop = _.pluck(prop);
    return Utils.safeString(prop);
  };

  module.exports.prop = prop = function(file, prop) {
    file = Utils.readJSON(file);
    prop = _.pick(file, prop);
    return Utils.safeString("\n" + JSON.stringify(prop, null, 2));
  };

  module.exports.stringify = stringify = function(file, props) {
    file = Utils.readJSON(file);
    return Utils.safeString(JSON.stringify(file, null, 2));
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper('stringify', stringify);
    Handlebars.registerHelper('value', value);
    Handlebars.registerHelper('prop', prop);
    return this;
  };

}).call(this);
