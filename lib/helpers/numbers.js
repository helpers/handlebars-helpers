'use strict';

var utils = require('../utils/utils');
var randomatic = require('randomatic');

/**
 * Add commas to numbers
 * @param {Number} `num`
 */

exports.addCommas = function(num) {
  return num.toString()
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};

/**
 * Output a formatted phone number
 *
 * @source: http://bit.ly/QlPmPr
 * @param  {Number} `num` The phone number to format, e.g. `8005551212`
 * @return {Number} Formatted phone number: `(800) 555-1212`
 * @api public
 */

exports.phoneNumber = function(num) {
  num = num.toString();

  return '(' + num.substr(0, 3) + ') '
    + num.substr(3, 3) + '-'
    + num.substr(6, 4);
};

/**
 * Generate a random number between two values
 *
 * @source Tim Douglas <https://github.com/timdouglas>
 * @param  {Number} `min`
 * @param  {Number} `max`
 * @return {String}
 */

exports.random = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


/**
 * Uses [randomatic] to generate a randomized string based
 * on the given parameters.
 *
 * See the [randomatic] docs for the full range of options.
 *
 * @return {String}
 * @api public
 */

exports.randomize = function() {
  return randomatic.apply(randomatic, arguments);
};

/**
 * Abbreviate numbers to the given number of `digits`.
 *
 * @param  {String} `number`
 * @param  {String} `digits`
 * @return {String}
 * @api public
 */

exports.toAbbr = function(number, digits) {
  if (utils.isUndefined(digits)) {
    digits = 2;
  }
  // 2 decimal places => 100, 3 => 1000, etc.
  digits = Math.pow(10, digits);
  var abbr = ['k', 'm', 'b', 't'];
  var i = abbr.length - 1;
  while (i >= 0) {
    var size = Math.pow(10, (i + 1) * 3);
    if (size <= number) {
      number = Math.round(number * digits / size) / digits;
      // Special case where we round up to the next abbreviation
      if ((number === 1000) && (i < abbr.length - 1)) {
        number = 1;
        i++;
      }
      number += abbr[i];
      break;
    }
    i--;
  }
  return number;
};

exports.toExponential = function(number, fractions) {
  if (utils.isUndefined(fractions)) {
    fractions = 0;
  }
  return number.toExponential(fractions);
};

exports.toFixed = function(number, digits) {
  if (utils.isUndefined(digits)) {
    digits = 0;
  }
  return number.toFixed(digits);
};

exports.toFloat = function(number) {
  return parseFloat(number);
};

exports.toInt = function(number) {
  return parseInt(number, 10);
};

exports.toPrecision = function(number, precision) {
  if (utils.isUndefined(precision)) {
    precision = 1;
  }
  return number.toPrecision(precision);
};
