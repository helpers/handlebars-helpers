'use strict';

var path = require('path');
var relative = require('relative');

/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * Get the file extension from the given `filepath`.
 *
 * ```handlebars
 * {{basename "docs/toc.md"}}
 * //=> 'toc.md'
 * ```
 * @param {String} `ext`
 * @return {String}
 * @api public
 */

helpers.basename = function(filepath) {
  return path.basename(filepath);
};

/**
 * Get the directory path segment from the given `filepath`.
 *
 * ```handlebars
 * {{dirname "docs/toc.md"}}
 * //=> 'docs'
 * ```
 * @param {String} `ext`
 * @return {String}
 * @api public
 */

helpers.dirname = function(filepath) {
  return path.dirname(filepath);
};

/**
 * Get the file extension from the given `filepath`.
 *
 * ```handlebars
 * {{extname "docs/toc.md"}}
 * //=> '.md'
 * ```
 * @param {String} `filepath`
 * @return {String}
 * @api public
 */

helpers.extname = function(filepath) {
  return path.extname(filepath);
};

/**
 * Get the relative filepath from `a` to `b`.
 *
 * ```handlebars
 * {{relative a b}}
 * ```
 *
 * @param {String} `a`
 * @param {String} `b`
 * @return {String}
 * @api public
 */

helpers.relative = function(a, b) {
  return relative(a, b);
};
