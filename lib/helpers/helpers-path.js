'use strict';

var path = require('path');
var Utils = require('../utils/utils');


/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * Returns the derived relative path from A to B.
 * @param  {[type]} a [description]
 * @param  {[type]} b [description]
 * @return {[type]}   [description]
 * @example:
 *   {{relative [from] [to]}}
 */

helpers.relative = function(a, b) {
  return Utils.getRelativePath(a, b);
};

/**
 * Returns the extension of a given file
 * @param  {[type]} ext [description]
 * @return {[type]}     [description]
 * @example:
 *   {{extname "docs/toc.md"}}
 *
 * @returns:
 *   .md
 */

helpers.extname = function(ext) {
  return Utils.getExt(ext);
};
