/*! path helpers
*/


(function() {
  var Utils, absolute, basename, directory, extname, filename, path, relative;

  path = require('path');

  Utils = require('../utils/utils');

  module.exports.directory = directory = function(dir) {
    return path.dirname();
  };

  module.exports.absolute = absolute = function(to) {
    var absolutePath;

    return absolutePath = Utils.urlNormalize(path.normalize(to, path.dirname()));
  };

  module.exports.relative = relative = function(a, b) {
    return Utils.getRelativePath(a, b);
  };

  module.exports.basename = basename = function(file) {
    return Utils.getBasename(file);
  };

  module.exports.filename = filename = function(file) {
    return path.basename(file);
  };

  module.exports.extname = extname = function(ext) {
    return Utils.getExt(ext);
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("directory", directory);
    Handlebars.registerHelper("absolute", absolute);
    Handlebars.registerHelper("relative", relative);
    Handlebars.registerHelper("basename", basename);
    Handlebars.registerHelper("filename", filename);
    Handlebars.registerHelper("extname", extname);
    return this;
  };

}).call(this);
