/*! path helpers*/


(function() {
  var Utils, basename, dirname, extname, filename, path, relative;

  path = require('path');

  Utils = require('../utils/utils');

  module.exports = {
    dirname: dirname = function(dir) {
      return path.dirname(dir);
    },
    relative: relative = function(a, b) {
      return Utils.getRelativePath(a, b);
    },
    basename: basename = function(file) {
      return Utils.getBasename(file);
    },
    filename: filename = function(file) {
      return path.basename(file);
    },
    extname: extname = function(ext) {
      return Utils.getExt(ext);
    }
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("dirname", dirname);
    Handlebars.registerHelper("relative", relative);
    Handlebars.registerHelper("basename", basename);
    Handlebars.registerHelper("filename", filename);
    Handlebars.registerHelper("extname", extname);
    return this;
  };

}).call(this);
