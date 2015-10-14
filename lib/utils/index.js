
'use strict';

var utils = require('export-files')(__dirname);

/**
 * Remove leading and trailing whitespace and non-word
 * characters from the given string.
 *
 * @param {String} `str`
 * @return {String}
 */

utils.chop = function(str) {
  if (!utils.isString(str)) return '';
  var re = /^[-_.\W\s]+|[-_.\W\s]+$/g;
  return str.trim().replace(re, '');
};

/**
 * Change casing on the given `string`, optionally
 * passing a delimiter to use between words in the
 * returned string.
 *
 * ```js
 * utils.changecase('fooBarBaz');
 * //=> 'foo bar baz'
 *
 * utils.changecase('fooBarBaz' '-');
 * //=> 'foo-bar-baz'
 * ```
 *
 * @name .changecase
 * @param  {String} `string` The string to change.
 * @return {String}
 * @api public
 */

utils.changecase = function(str, fn) {
  if (!utils.isString(str)) return '';
  if (str.length === 1) {
    return str.toLowerCase();
  }

  str = utils.chop(str).toLowerCase();
  if (typeof fn !== 'function') {
    fn = utils.identity;
  }

  var re = /[-_.\W\s]+(\w|$)/g;
  return str.replace(re, function (_, ch) {
    return fn(ch);
  });
};

/**
 * Generate a random number
 *
 * @param  {Number} `min`
 * @param  {Number} `max`
 * @return {Number}
 * @api public
 */

utils.random = function(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
};

utils.isUndefined = function(val) {
  return typeof val === 'undefined'
    || (val.hash != null);
};

utils.isOptions = function(val) {
  return utils.isObject(val) && val.hasOwnProperty('hash');
};

utils.isObject = function(val) {
  return val && typeof val === 'object';
};

utils.isEmpty = function(val) {
  if (!val && val !== 0) {
    return true;
  }
  if (Array.isArray(val) && val.length === 0) {
    return true;
  }
  return false;
};

utils.tryParse = function(val) {
  try {
    return JSON.parse(val);
  } catch(err) {}
  return null;
};

utils.result = function(value) {
  if (typeof value === 'function') {
    return value();
  }
  return value;
};

/**
 * Return the given value, unchanged.
 *
 * @name .identity
 * @param  {any} `val`
 * @return {any}
 * @api public
 */

utils.identity = function(val) {
  return val;
};

/**
 * Return true if `val` is a string.
 */

utils.isString = function(val) {
  return val && typeof val === 'string';
};

/**
 * Cast `val` to an array.
 *
 * @param  {*} `val` The value to arrayify.
 * @return {Array}
 */

utils.arrayify = function(val) {
  return Array.isArray(val) ? val : [val];
};

/**
 * Expose `utils`
 */

module.exports = utils;
