'use strict';

var util = require('handlebars-utils');
var utils = require('./utils');
var helpers = module.exports;

/**
 * Returns an array of strings that match the given glob pattern(s).
 * Options may be passed on the options hash or locals.
 *
 * ```handlebars
 * {{match (readdir "foo") "*.js"}}
 * {{match (readdir "foo") (toRegex "\\.js$")}}
 * ```
 * @param {Array|String} `files`
 * @param {Array|String} `patterns` One or more glob patterns.
 * @param {Object} `locals`
 * @param {Object} `options`
 * @return {Array} Array of matches
 * @api public
 */

helpers.match = function(files, patterns, locals, options) {
  var opts = util.options(this, locals, options);
  if (typeof patterns === 'string') {
    patterns = patterns.split(/, */);
  }
  return utils.mm(files, patterns, opts);
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
  var opts = util.options(this, locals, options);
  return utils.mm.isMatch(files, patterns, opts);
};

/**
 * Alias for micromatch helper. Deprecated in v0.9.0.
 */

helpers.mm = function() {
  console.log('the {{mm}} helper is depcrecated and will be removed');
  console.log('in handlebars-helpers v1.0.0, please use the {{match}}');
  console.log('helper instead.');
  return helpers.match.apply(this, arguments);
};
