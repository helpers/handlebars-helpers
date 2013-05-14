(function() {
  var Utils, grunt, listprops, pkg, property, stringify, value, _;

  Utils = require('../utils/utils');

  grunt = require('grunt');

  _ = require('lodash');

  pkg = grunt.file.readJSON('package.json');

  module.exports.listprops = listprops = function(obj) {
    var file;

    file = Utils.readJSON(obj);
    return Utils.listAllProperties(file);
  };

  module.exports.value = value = function(file, prop) {
    file = Utils.readJSON(file);
    prop = _.pick(file, prop);
    prop = _.pluck(prop);
    return Utils.safeString(prop);
  };

  module.exports.property = property = function(file, prop) {
    file = Utils.readJSON(file);
    prop = _.pick(file, prop);
    return Utils.safeString(JSON.stringify(prop, null, 2));
  };

  module.exports.stringify = stringify = function(file, props) {
    file = Utils.readJSON(file);
    return Utils.safeString(JSON.stringify(file, null, 2));
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("listprops", listprops);
    Handlebars.registerHelper('property', property);
    Handlebars.registerHelper('value', value);
    Handlebars.registerHelper('stringify', stringify);
    return this;
  };

}).call(this);
