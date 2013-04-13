(function() {
  module.exports.register = function(Handlebars, options) {
    var Utils, path;

    path = require('path');
    Utils = require('../utils/utils');
    /*
    WARNING!!! WARNING!!! WARNING!!!
    These are not stable, do not use them 
    in production yet!!!
    */

    /*
    directory: Returns the absolute path to the current directory.
    Usage: {{directory [path]}}
    Returns: C:\path\to\the\current\current\directory
    */

    Handlebars.registerHelper("directory", function(file) {
      return file = path.dirname();
    });
    /*
    absolute: Returns the absolute path to the current directory.
    Usage: {{absolute [to]}}
    Returns: C:\path\to\the\current\current\directory
    */

    Handlebars.registerHelper("absolute", function(to) {
      var absolutePath;

      absolutePath = Utils.urlNormalize(path.normalize(to, path.dirname()));
      return absolutePath;
    });
    /*
    Relative: {{relative [from] [to]}}
    Returns the derived relative path from one to the other.
    */

    Handlebars.registerHelper("relative", function(from, to) {
      var relativePath;

      relativePath = Utils.urlNormalize(path.relative(from, to));
      return relativePath;
    });
    /*
    filename: Returns the full-name of a given file.
    Usage:    {{filename "docs/toc.md"}}
    Returns:  toc.md
    */

    Handlebars.registerHelper('filename', function(base, ext) {
      var fullName;

      fullName = path.basename(base, ext);
      return fullName;
    });
    /*
    Basename: Returns the basename of a given file.
    Usage:    {{base "docs/toc.md"}}
    Returns:  toc
    */

    Handlebars.registerHelper('basename', function(base, ext) {
      var fullName;

      fullName = path.basename(base, ext);
      base = path.basename(base, path.extname(fullName));
      return base;
    });
    /*
    Extension: Returns the extension of a given file.
    Usage:    {{ext "docs/toc.md"}}
    Returns:  .md
    */

    Handlebars.registerHelper("extension", function(ext) {
      var extension;

      extension = path.extname(ext);
      return extension;
    });
    return this;
  };

}).call(this);
