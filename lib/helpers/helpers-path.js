(function() {
  module.exports.register = function(Handlebars, options) {
    var Utils, path;

    path = require('path');
    Utils = require('../utils/utils');
    /*
    WARNING!!! WARNING!!! WARNING!!!
    These are not correct orstable, feel free to test
    or submit pull requests for fixes, but do not 
    use them in projects yet!!!
    */

    /*
    directory: Returns the absolute path to the current directory.
    Usage: {{directory [path]}}
    Returns: C:\path\to\the\current\current\directory
    */

    Handlebars.registerHelper("directory", function(dir) {
      return dir = path.dirname();
    });
    /*
    absolute: Returns the absolute path to the current directory.
    Usage: {{absolute [to]}}
    Returns: C:\path\to\the\current\current\directory
    */

    Handlebars.registerHelper("absolute", function(to) {
      var absolutePath;

      return absolutePath = Utils.urlNormalize(path.normalize(to, path.dirname()));
    });
    /*
    Relative: {{relative [from] [to]}}
    Returns the derived relative path from one to the other.
    */

    Handlebars.registerHelper("relative", function(from, to) {
      var relativePath;

      return relativePath = Utils.getRelativePath(from, to);
    });
    /*
    filename: Returns the full-name of a given file.
    Usage:    {{filename "docs/toc.md"}}
    Returns:  toc.md
    */

    Handlebars.registerHelper('filename', function(base, ext) {
      var fullName;

      return fullName = path.basename(base, ext);
    });
    /*
    Basename: Returns the basename of a given file.
    Usage:    {{base "docs/toc.md"}}
    Returns:  toc
    */

    Handlebars.registerHelper('basename', function(base, ext) {
      var basename;

      return basename = Utils.getBasename(base, ext);
    });
    /*
    Extension: Returns the extension of a given file.
    Usage:    {{ext "docs/toc.md"}}
    Returns:  .md
    */

    Handlebars.registerHelper("extname", function(ext) {
      var extname;

      return extname = Utils.getExt(ext);
    });
    return this;
  };

}).call(this);
