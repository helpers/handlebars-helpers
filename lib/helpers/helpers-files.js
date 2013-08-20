(function() {
  var Utils, glob, grunt;

  Utils = require('../utils/utils');

  grunt = require('grunt');

  module.exports = {
    /*
     * Use globbing patterns to embed content from specified file or files.
     * @param  {String} src          [description]
     * @param  {Function} compare_fn [description]
     * @return {String}              [description]
     * @example {{ glob 'path/to/files/*.md' }}
    */

    glob: glob = function(src, compare_fn) {
      var content;
      content = Utils.globFiles(src, compare_fn);
      return Utils.safeString(content);
    }
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper('glob', glob);
    return this;
  };

}).call(this);
