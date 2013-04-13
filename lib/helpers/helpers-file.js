(function() {
  module.exports.register = function(Handlebars, options) {
    var Utils, path, _;

    Utils = require('../utils/utils');
    path = require('path');
    _ = require('lodash');
    Handlebars.registerHelper("value", function(file, prop) {
      file = Utils.readJSON(file);
      prop = _.pick(file, prop);
      prop = _.pluck(prop);
      return new Handlebars.SafeString(prop);
    });
    Handlebars.registerHelper("property", function(file, prop) {
      file = Utils.readJSON(file);
      prop = _.pick(file, prop);
      return new Handlebars.SafeString(JSON.stringify(prop, null, 2));
    });
    Handlebars.registerHelper("stringify", function(file, props) {
      file = Utils.readJSON(file);
      return new Handlebars.SafeString(JSON.stringify(file, null, 2));
    });
    /*
    Copy: copies src file from A to B. USE WITH CAUTION!!!
    Usage: {{copy [a] [b]}}
    */

    return Handlebars.registerHelper('copy', function(a, b) {
      return Utils.copyFile(a, b);
    });
  };

}).call(this);
