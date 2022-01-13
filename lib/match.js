'use strict';

const util = require('handlebars-utils');
const micromatch = require('micromatch');
const helpers = module.exports;

/**
 * Returns an array of strings that match the given glob pattern(s).
 * Options may be passed on the options hash or locals.
 *
 * ```handlebars
 * {{match files "*.js"}}
 * {{match files (toRegex "\\.js$")}}
 * ```
 * @param {Array|String} `files`
 * @param {Array|String} `patterns` One or more glob patterns.
 * @param {Object} `locals`
 * @param {Object} `options`
 * @return {Array} Array of matches
 * @api public
 */

helpers.match = function(files, patterns, locals, options) {
  const opts = util.options(this, locals, options);
  if (typeof patterns === 'string') {
    patterns = patterns.split(/, */);
  }
  return micromatch(files, patterns, opts);
};

/**
 * Returns true if a filepath contains the given pattern.
 * Options may be passed on the options hash or locals.
 *
 * ```handlebars
 * {{isMatch "foo.md" "*.md"}}
 * <!-- results in: true -->
 * ```
 *
 * @param {String} `filepath`
 * @param {String} `pattern`
 * @param {Object} `options`
 * @return {Boolean}
 * @api public
 */

helpers.isMatch = function(files, patterns, locals, options) {
  const opts = util.options(this, locals, options);
  return micromatch.isMatch(files, patterns, opts);
};
