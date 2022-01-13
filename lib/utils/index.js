'use strict';

const util = require('handlebars-utils');

/**
 * Remove leading and trailing whitespace and non-word
 * characters from the given string.
 *
 * @param {String} `str`
 * @return {String}
 */
function chop(str) {
  const re = /^[-_.\W\s]+|[-_.\W\s]+$/g;
  return str.trim().replace(re, '');
}

module.exports.chop = chop;

/**
 * Change casing on the given `string`, optionally
 * passing a delimiter to use between words in the
 * returned string.
 *
 * ```handlebars
 * utils.changecase('fooBarBaz');
 * //=> 'foo bar baz'
 *
 * utils.changecase('fooBarBaz' '-');
 * //=> 'foo-bar-baz'
 * ```
 * @param {String} `string` The string to change.
 * @return {String}
 * @api public
 */

module.exports.changecase = function(str, fn) {
  if (!util.isString(str)) return '';
  if (str.length === 1) {
    return str.toLowerCase();
  }

  str = chop(str).toLowerCase();
  if (typeof fn !== 'function') {
    fn = util.identity;
  }

  var re = /[-_.\W\s]+(\w|$)/g;
  return str.replace(re, function(_, ch) {
    return fn(ch);
  });
};
