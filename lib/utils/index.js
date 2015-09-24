
'use strict';

var utils = require('export-files')(__dirname);

/**
 * Expose `toString()` method
 */

utils.toString = Object.prototype.toString;

/**
 * Generate a random number
 *
 * @param  {Number} `min`
 * @param  {Number} `max`
 * @return {Number}
 */

utils.random = function(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
};

utils.isUndefined = function(val) {
  return typeof val === 'undefined'
    || (val.hash != null);
};

utils.isEmpty = function(val) {
  return !val || (Array.isArray(val) && val.length === 0);
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
