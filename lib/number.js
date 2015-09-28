'use strict';

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
 * Abbreviate numbers to the given number of `precision`.
 *
 * @param  {String} `number`
 * @param  {String} `precision`
 * @return {String}
 * @api public
 */

helpers.toAbbr = function(number, precision) {
  if (utils.isUndefined(precision)) {
    precision = 2;
  }

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
 * @param {type} `precision`
 * @return {Number}
 * @api public
 */

helpers.toFixed = function(number, precision) {
  if (utils.isUndefined(precision)) {
    precision = 0;
  }
  return number.toFixed(precision);
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
