'use strict';

var randomatic = require('randomatic');
var utils = require('./utils');

/**
 * Expose `helpers`
 */

var helpers = module.exports;

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
 * Uses [randomatic] to generate a randomized string based
 * on the given parameters.
 *
 * See the [randomatic] docs for the full range of options.
 *
 * @return {String}
 * @api public
 */

helpers.randomize = function() {
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

helpers.toAbbr = function(number, digits) {
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

/**
 * @name .toExponential
 * @param {type} `number`
 * @param {type} `fractions`
 * @return {Number}
 * @api public
 */

helpers.toExponential = function(number, fractions) {
  if (utils.isUndefined(fractions)) {
    fractions = 0;
  }
  return number.toExponential(fractions);
};

/**
 * @name .toFixed
 * @param {type} `number`
 * @param {type} `digits`
 * @return {Number}
 * @api public
 */

helpers.toFixed = function(number, digits) {
  if (utils.isUndefined(digits)) {
    digits = 0;
  }
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
 * @return {Number}
 * @api public
 */

helpers.toPrecision = function(number, precision) {
  if (utils.isUndefined(precision)) {
    precision = 1;
  }
  return number.toPrecision(precision);
};
