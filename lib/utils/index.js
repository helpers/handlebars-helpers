'use strict';

const util = require('handlebars-utils');

/**
 * Returns true if the given value contains the given
 * `object`, optionally passing a starting index.
 *
 * @param {Array} val
 * @param {Object} obj
 * @param {Number} start
 * @return {Boolean}
 */

exports.contains = function(val, obj, start) {
  if (val == null || obj == null || isNaN(val.length)) {
    return false;
  }
  return val.indexOf(obj, start) !== -1;
};

/**
 * Remove leading and trailing whitespace and non-word
 * characters from the given string.
 *
 * @param {String} `str`
 * @return {String}
 */

exports.chop = function(str) {
  if (typeof(str) !== 'string') return '';
  var re = /^[-_.\W\s]+|[-_.\W\s]+$/g;
  return str.trim().replace(re, '');
};

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

exports.changecase = function(str, fn) {
  if (typeof(str) !== 'string') return '';
  if (str.length === 1) {
    return str.toLowerCase();
  }

  str = exports.chop(str).toLowerCase();
  if (typeof fn !== 'function') {
    fn = util.identity;
  }

  var re = /[-_.\W\s]+(\w|$)/g;
  return str.replace(re, function(_, ch) {
    return fn(ch);
  });
};

/**
 * Generate a random number
 *
 * @param {Number} `min`
 * @param {Number} `max`
 * @return {Number}
 * @api public
 */

exports.random = function(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
};
