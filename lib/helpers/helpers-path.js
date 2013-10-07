/**
 * Handlebars Helpers: Path Helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */
'use strict';


// Node.js
var path = require('path');


// Local utils.
var Utils = require('../utils/utils');


// The module to be exported
var helpers = {

  /**
   * {{directory}}
   * Returns the absolute path to the current directory.
   * @param  {[type]} dir [description]
   * @return {[type]}     [description]
   * @example:
   *   {{dirname dir}}.
   * @returns:
   *   C:/path/to/the/current/current/directory
   */
  dirname: function (dir) {
    return path.dirname(dir);
  },

  /**
   * {{relative}}
   * Returns the derived relative path from A to B.
   * @param  {[type]} a [description]
   * @param  {[type]} b [description]
   * @return {[type]}   [description]
   * @example:
   *   {{relative [from] [to]}}
   */
  relative: function (a, b) {
    return Utils.getRelativePath(a, b);
  },

  /**
   * {{basename}}
   * Returns the basename of a given file.
   * @param  {[type]} file [description]
   * @return {[type]}      [description]
   * @example:
   *   {{basename "docs/toc.md"}}
   * @returns:
   *   toc
   */
  basename: function (file) {
    return Utils.getBasename(file);
  },

  /**
   * {{filename}}
   * Returns the filename of a given file.
   * @param  {[type]} file [description]
   * @return {[type]}      [description]
   * @example:
   *   {{filename "docs/toc.md"}}
   * @returns:
   *   toc.md
   */
  filename: function (file) {
    return path.basename(file);
  },

  /**
   * {{extname}}
   * Returns the extension of a given file
   * @param  {[type]} ext [description]
   * @return {[type]}     [description]
   * @example:
   *   {{extname "docs/toc.md"}}
   * @returns:
   *   .md
   */
  extname: function (ext) {
    return Utils.getExt(ext);
  }

};

// Export helpers
module.exports.register = function (Handlebars, options) {
  options = options || {};

  for (var helper in helpers) {
    if (helpers.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, helpers[helper]);
    }
  }
};
