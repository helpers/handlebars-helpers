'use strict';

var path = require('path');
var relative = require('relative');


/**
 * Get the relative path from `a` to `b`.
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

exports.relative = function(a, b) {
  return relative(a, b);
};

/**
 * ```handlebars
 * {{extname "docs/toc.md"}}
 * //=> '.js'
 * ```
 *
 * @param {String} `ext`
 * @return {String}
 * @api public
 */

exports.extname = function(ext) {
  return path.extname(ext);
};
