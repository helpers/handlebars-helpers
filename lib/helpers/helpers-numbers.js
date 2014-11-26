'use strict';

var _ = require('lodash');
var Utils = require('../utils/utils');


/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * Add commas to numbers
 * @param {[type]} number
 */

helpers.addCommas = function(number) {
  return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
};

/**
 * Output a formatted phone number
 *
 * @contributor: http://bit.ly/QlPmPr
 * @param  {Number} phoneNumber [8005551212]
 * @return {Number}             [(800) 555-1212]
 * @api public
 */

helpers.formatPhoneNumber = function(num) {
  num = num.toString();
  return "(" + num.substr(0, 3) + ") " + num.substr(3, 3) + "-" + num.substr(6, 4);
};

/**
 * Generate a random number between two values
 *
 * @param  {[type]} min
 * @param  {[type]} max
 * @return {[type]}
 * @contributor Tim Douglas <https://github.com/timdouglas>
 */

helpers.random = function(min, max) {
  return _.random(min, max);
};

/**
 * Abbreviate numbers
 *
 * @param  {[type]} number
 * @param  {[type]} digits
 * @return {[type]}
 * @api public
 */

helpers.toAbbr = function(number, digits) {
  if (Utils.isUndefined(digits)) {
    digits = 2;
  }
  // @default: 2 decimal places => 100, 3 => 1000, etc.
  digits = Math.pow(10, digits);
  var abbr = ["k", "m", "b", "t"];
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

helpers.toExponential = function(number, fractions) {
  if (Utils.isUndefined(fractions)) {
    fractions = 0;
  }
  return number.toExponential(fractions);
};

helpers.toFixed = function(number, digits) {
  if (Utils.isUndefined(digits)) {
    digits = 0;
  }
  return number.toFixed(digits);
};

helpers.toFloat = function(number) {
  return parseFloat(number);
};

helpers.toInt = function(number) {
  return parseInt(number, 10);
};

helpers.toPrecision = function(number, precision) {
  if (Utils.isUndefined(precision)) {
    precision = 1;
  }
  return number.toPrecision(precision);
};
