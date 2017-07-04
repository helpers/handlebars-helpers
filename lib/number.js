'use strict';

var util = require('handlebars-utils');
var utils = require('./utils');

/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * Format a number to it's equivalent in bytes. If a string is passed,
 * it's length will be formatted and returned.
 *
 * **Examples:**
 *
 *   - `'foo' => 3 B`
 *   - `13661855 => 13.66 MB`
 *   - `825399 => 825.39 kB`
 *   - `1396 => 1.4 kB`
 *
 * @param {Number|String} `number`
 * @return {String}
 * @api public
 */

helpers.bytes = function(number, precision, options) {
  if (number == null) return '0 B';

  if (!utils.isNumber(number)) {
    number = number.length;
    if (!number) return '0 B';
  }

  if (!utils.isNumber(precision)) {
    precision = 2;
  }

  var abbr = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  precision = Math.pow(10, precision);
  number = Number(number);

  var len = abbr.length - 1;
  while (len-- >= 0) {
    var size = Math.pow(10, len * 3);
    if (size <= (number + 1)) {
      number = Math.round(number * precision / size) / precision;
      number += ' ' + abbr[len];
      break;
    }
  }

  return number;
};

/**
 * Add commas to numbers
 *
 * @param {Number} `num`
 * @return {Number}
 * @api public
 */

helpers.addCommas = function(num) {
  return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};

/**
 * Convert a string or number to a formatted phone number.
 *
 * @param  {Number|String} `num` The phone number to format, e.g. `8005551212`
 * @return {Number} Formatted phone number: `(800) 555-1212`
 * @source http://bit.ly/QlPmPr
 * @api public
 */

helpers.phoneNumber = function(num) {
  num = num.toString();

  return '(' + num.substr(0, 3) + ') '
    + num.substr(3, 3) + '-'
    + num.substr(6, 4);
};

/**
 * Generate a random number between two values
 *
 * @param  {Number} `min`
 * @param  {Number} `max`
 * @contributor Tim Douglas <https://github.com/timdouglas>
 * @return {String}
 * @api public
 */

helpers.random = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Abbreviate numbers to the given number of `precision`. This is for
 * general numbers, not size in bytes.
 *
 * @param  {Number} `number`
 * @param  {Number} `precision`
 * @return {String}
 * @api public
 */

helpers.toAbbr = function(number, precision) {
  if (!utils.isNumber(number)) {
    number = 0;
  }
  if (util.isUndefined(precision)) {
    precision = 2;
  }

  number = +number;
  // 2 decimal places => 100, 3 => 1000, etc.
  precision = Math.pow(10, precision);
  var abbr = ['k', 'm', 'b', 't', 'q'];
  var len = abbr.length - 1;

  while (len >= 0) {
    var size = Math.pow(10, (len + 1) * 3);
    if (size <= (number + 1)) {
      number = Math.round(number * precision / size) / precision;
      number += abbr[len];
      break;
    }
    len--;
  }
  return number;
};

/**
 * Returns a string representing the given number in exponential notation.
 *
 * ```js
 * {{toExponential number digits}};
 * ```
 * @param {Number} `number`
 * @param {Number} `fractionDigits` Optional. An integer specifying the number of digits to use after the decimal point. Defaults to as many digits as necessary to specify the number.
 * @return {Number}
 * @api public
 */

helpers.toExponential = function(number, digits) {
  if (!utils.isNumber(number)) {
    number = 0;
  }
  if (util.isUndefined(digits)) {
    digits = 0;
  }
  number = +number;
  return number.toExponential(digits);
};

/**
 * Formats the given number using fixed-point notation.
 *
 * @param {Number} `number`
 * @param {Number} `digits` Optional. The number of digits to use after the decimal point; this may be a value between 0 and 20, inclusive, and implementations may optionally support a larger range of values. If this argument is omitted, it is treated as 0.
 * @return {Number}
 * @api public
 */

helpers.toFixed = function(number, digits) {
  if (!utils.isNumber(number)) {
    number = 0;
  }
  if (util.isUndefined(digits)) {
    digits = 0;
  }
  number = +number;
  return number.toFixed(digits);
};

/**
 * @param {Number} `number`
 * @return {Number}
 * @api public
 */

helpers.toFloat = function(number) {
  return parseFloat(number);
};

/**
 * @param {Number} `number`
 * @return {Number}
 * @api public
 */

helpers.toInt = function(number) {
  return parseInt(number, 10);
};

/**
 * @param {Number} `number`
 * @param {Number} `precision` Optional. The number of significant digits.
 * @return {Number}
 * @api public
 */

helpers.toPrecision = function(number, precision) {
  if (!utils.isNumber(number)) {
    number = 0;
  }
  if (util.isUndefined(precision)) {
    precision = 1;
  }
  number = +number;
  return number.toPrecision(precision);
};
