'use strict';

var path = require('path');
var utils = require('./utils');
var helpers = module.exports;

/**
 * Get the directory path segment from the given `filepath`.
 *
 * ```handlebars
 * {{absolute "docs/toc.md"}}
 * //=> 'docs'
 * ```
 * @param {String} `ext`
 * @return {String}
 * @api public
 */

helpers.absolute = function(filepath, options) {
  var context = utils.merge({}, this, options);
  var ctx = utils.merge({}, context.root, context, context._parent, context.hash);
  var cwd = ctx.cwd || process.cwd();
  return path.resolve(cwd, filepath);
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

helpers.dirname = function(filepath, options) {
  if (typeof filepath !== 'string') {
    throw new TypeError(utils.expectedType('filepath', 'string', filepath));
  }
  return path.dirname(filepath);
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
  if (typeof a !== 'string') {
    throw new TypeError(utils.expectedType('first path', 'string', a));
  }
  if (typeof b !== 'string') {
    throw new TypeError(utils.expectedType('second path', 'string', b));
  }
  return utils.relative(a, b);
};

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
  if (typeof filepath !== 'string') {
    throw new TypeError(utils.expectedType('filepath', 'string', filepath));
  }
  return path.basename(filepath);
};

/**
 * Get the "stem" from the given `filepath`.
 *
 * ```handlebars
 * {{stem "docs/toc.md"}}
 * //=> 'toc'
 * ```
 * @param {String} `filepath`
 * @return {String}
 * @api public
 */

helpers.stem = function(filepath) {
  if (typeof filepath !== 'string') {
    throw new TypeError(utils.expectedType('filepath', 'string', filepath));
  }
  return path.basename(filepath, path.extname(filepath));
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
  if (typeof filepath !== 'string') {
    throw new TypeError(utils.expectedType('filepath', 'string', filepath));
  }
  return path.extname(filepath);
};

/**
 * Resolve an absolute path from the given `filepath`.
 *
 * ```handlebars
 * {{resolve "docs/toc.md"}}
 * //=> '/User/dev/docs/toc.md'
 * ```
 * @param {String} `filepath`
 * @return {String}
 * @api public
 */

helpers.resolve = function(filepath) {
  var args = [].slice.call(arguments);
  var options = args.pop();
  var opts = utils.merge({}, this.options, options.hash);
  var cwd = path.resolve(opts.cwd || process.cwd());
  args.unshift(cwd);
  return path.resolve.apply(path, args);
};

/**
 * Get specific (joined) segments of a file path by passing a
 * range of array indices.
 *
 * ```handlebars
 * {{segments "a/b/c/d" "2" "3"}}
 * //=> 'c/d'
 *
 * {{segments "a/b/c/d" "1" "3"}}
 * //=> 'b/c/d'
 *
 * {{segments "a/b/c/d" "1" "2"}}
 * //=> 'b/c'
 * ```
 *
 * @param {String} `filepath` The file path to split into segments.
 * @return {String} Returns a single, joined file path.
 * @api public
 */

helpers.segments = function(filepath, a, b) {
  if (typeof filepath !== 'string') {
    throw new TypeError(utils.expectedType('filepath', 'string', filepath));
  }
  return utils.normalize(filepath).split('/').slice(a, b).join('/');
};
