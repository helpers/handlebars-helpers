'use strict';

var util = require('handlebars-utils');
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
 * @example {{ bytes 1386 1 }} -> 1.4 kB
 */

helpers.bytes = function(number, precision, options) {
  if (number == null) return '0 B';

  if (isNaN(number)) {
    number = number.length;
    if (!number) return '0 B';
  }

  if (isNaN(precision)) {
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
 * @example {{ addCommas 1000000 }} -> 1,000,000
 */

helpers.addCommas = function(num) {
  return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};

/**
 * Convert a string or number to a formatted phone number.
 *
 * @param {Number|String} `num` The phone number to format, e.g. `8005551212`
 * @return {Number} Formatted phone number: `(800) 555-1212`
 * @source http://bit.ly/QlPmPr
 * @api public
 * @example {{ phoneNumber 8005551212 }} -> (800) 555-1212
 */

helpers.phoneNumber = function(num) {
  num = num.toString();

  return '(' + num.substr(0, 3) + ') '
    + num.substr(3, 3) + '-'
    + num.substr(6, 4);
};

/**
 * Abbreviate numbers to the given number of `precision`. This is for
 * general numbers, not size in bytes.
 *
 * @param {Number} `number`
 * @param {Number} `precision`
 * @return {String}
 * @api public
 * @example {{ toAbbr 10123 2 }} -> 10.12k
 */

helpers.toAbbr = function(number, precision) {
  if (isNaN(number)) {
    number = 0;
  }
  if (util.isUndefined(precision)) {
    precision = 2;
  }

  number = Number(number);
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
 * ```handlebars
 * {{toExponential number digits}};
 * ```
 * @param {Number} `number`
 * @param {Number} `fractionDigits` Optional. An integer specifying the number of digits to use after the decimal point. Defaults to as many digits as necessary to specify the number.
 * @return {Number}
 * @api public
 * @example {{ toExponential 10123 2 }} -> 1.01e+4
 */

helpers.toExponential = function(number, digits) {
  if (isNaN(number)) {
    number = 0;
  }
  if (util.isUndefined(digits)) {
    digits = 0;
  }
  return Number(number).toExponential(digits);
};

/**
 * Formats the given number using fixed-point notation.
 *
 * ```handlebars
 * {{toFixed '1.1234' 2}}
 * //=> '1.12'
 * ```
 * @param {Number} `number`
 * @param {Number} `digits` (Optional) The number of digits to appear after the decimal point; this may be a value between 0 and 20. If this argument is omitted, it is treated as 0.
 * @return {String} A string representing the given number using fixed-point notation.
 * @api public
 * @example {{ toFixed 1.1234 2 }} -> 1.12
 */

helpers.toFixed = function(number, digits) {
  if (isNaN(number)) {
    number = 0;
  }
  if (isNaN(digits)) {
    digits = 0;
  }
  return Number(number).toFixed(digits);
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
 * Returns a string representing the `Number` object to the specified precision.
 *
 * ```handlebars
 * {{toPrecision '1.1234' 2}}
 * //=> '1.1'
 * ```
 * @param {Number} `number`
 * @param {Number} `precision` (Optional) An integer specifying the number of significant digits. If precison is not between 1 and 100 (inclusive), it will be coerced to `0`.
 * @return {String} A string representing a Number object in fixed-point or exponential notation rounded to precision significant digits.
 * @api public
 * @example {{toPrecision '1.1234' 2}} -> 1.1
 */

helpers.toPrecision = function(number, precision) {
  if (isNaN(number)) {
    number = 0;
  }
  if (isNaN(precision)) {
    precision = 1;
  }
  return Number(number).toPrecision(precision);
};
