'use strict';

var utils = require('./utils');

/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * The main function. Pass an array of filepaths,
 * and a string or array of glob patterns. Options may
 * be passed on the hash or on `this.options`.
 *
 * ```handlebars
 * {{match (readdir "foo") "*.js"}}
 * ```
 * @param  {Array|String} `files`
 * @param  {Array|String} `patterns` One or more glob patterns.
 * @param  {Object} `options`
 * @return {Array} Array of matches
 * @api public
 */

helpers.mm = function() {
  var args = utils.getArgs(this, arguments);
  return utils.mm.apply(utils.mm, args);
};

/**
 * Returns an array of files that match the given glob pattern.
 * Options may be passed on the hash or on `this.options`.
 *
 * ```handlebars
 * {{match (readdir "foo") "*.js"}}
 * ```
 * @param  {Array} `files`
 * @param  {String} `pattern`
 * @param  {Object} `options`
 * @return {Array}
 * @api public
 */

helpers.match = function() {
  var args = utils.getArgs(this, arguments);
  return utils.mm.match.apply(utils.mm, args);
};

/**
 * Returns true if a filepath contains the given pattern.
 * Options may be passed on the hash or on `this.options`.
 *
 * ```js
 * {{isMatch "foo.md" "*.md"}}
 * //=> true
 * ```
 *
 * @param  {String} `filepath`
 * @param  {String} `pattern`
 * @param  {Object} `options`
 * @return {Boolean}
 * @api public
 */

helpers.isMatch = function() {
  var args = utils.getArgs(this, arguments);
  return utils.mm.isMatch.apply(utils.mm, args);
};
