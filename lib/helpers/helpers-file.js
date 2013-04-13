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
    Package.json: get the current version from package.json
    Usage: {{ pkg-name [pkg] }}
    */

    Handlebars.registerHelper("pkg-name", function(pkg) {
      var name;

      if (Utils.isUndefined(pkg)) {
        pkg = Utils.readJSON("package.json");
      } else {
        pkg = Utils.readJSON(pkg);
      }
      return name = pkg.name;
    });
    /*
    Version: get the current version from package.json
    Usage: {{ pkg-version [pkg] }}
    */

    Handlebars.registerHelper("pkg-version", function(pkg) {
      var version;

      if (Utils.isUndefined(pkg)) {
        pkg = Utils.readJSON("package.json");
      } else {
        pkg = Utils.readJSON(pkg);
      }
      return version = pkg.version;
    });
    /*
    Version: get the current version from package.json
    Usage: {{ pkg-description [pkg] }}
    */

    Handlebars.registerHelper("pkg-description", function(pkg) {
      var description;

      if (Utils.isUndefined(pkg)) {
        pkg = Utils.readJSON("package.json");
      } else {
        pkg = Utils.readJSON(pkg);
      }
      return description = pkg.description;
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
