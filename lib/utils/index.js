
'use strict';

var utils = require('export-files')(__dirname);

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
