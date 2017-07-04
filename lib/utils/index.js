'use strict';

var util = require('handlebars-utils');
var utils = require('./utils');

/**
 * Returns true if the given value contains the given
 * `object`, optionally passing a starting index.
 *
 * @param {Array} val
 * @param {Object} obj
 * @param {Number} start
 * @return {Boolean}
 */

utils.contains = function(val, obj, start) {
  if (val == null || obj == null || !utils.isNumber(val.length)) {
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

utils.chop = function(str) {
  if (!util.isString(str)) return '';
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

utils.changecase = function(str, fn) {
  if (!util.isString(str)) return '';
  if (str.length === 1) {
    return str.toLowerCase();
  }

  str = utils.chop(str).toLowerCase();
  if (typeof fn !== 'function') {
    fn = utils.identity;
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

utils.random = function(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
};

/**
 * Expose `utils`
 */

module.exports = utils;
