'use strict';

var flatten = require('arr-flatten');
var isNumber = require('is-number');

/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * Return the product of `a` plus `b`.
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @api public
 */

helpers.add = function(a, b) {
  return a + b;
};

/**
 * Return the product of `a` minus `b`.
 *
 * @param {Number} a
 * @api public
 */

helpers.subtract = function(a, b) {
  return a - b;
};

/**
 * Divide `a` by `b`
 *
 * @param {Number} `a`
 * @param {Number} `b` divisor
 * @api public
 */

helpers.divide = function(value, divisor) {
  return value / divisor;
};

/**
 * Divide `a` by `b`.
 *
 * @param {Number} `a`
 * @param {Number} `b` multiplier
 * @api public
 */

helpers.multiply = function(value, multiplier) {
  return value * multiplier;
};

/**
 * Get the `Math.floor()` of the given value.
 *
 * @param {Number} `value`
 * @api public
 */

helpers.floor = function(value) {
  return Math.floor(value);
};

/**
 * Get the `Math.ceil()` of the given value.
 *
 * @param {Number} `value`
 * @api public
 */

helpers.ceil = function(value) {
  return Math.ceil(value);
};

/**
 * Round the given value.
 *
 * @param {Number} `value`
 * @api public
 */

helpers.round = function(value) {
  return Math.round(value);
};

/**
 * Returns the sum of all numbers in the given array.
 *
 * ```js
 * sum([1, 2, 3, 4, 5])
 * //=> '15'
 * ```
 *
 * @name .sum
 * @param {Array} `array` Array of numbers to add up.
 * @return {Number}
 * @api public
 */

helpers.sum = function() {
  var args = flatten([].concat.apply([], arguments));
  var i = args.length, sum = 0;
  while (i--) {
    if (!isNumber(args[i])) {
      continue;
    }
    sum += (+args[i]);
  }
  return sum;
};

/**
 * Returns the average of all numbers in the given array.
 *
 * ```js
 * avg([1, 2, 3, 4, 5])
 * //=> '3'
 * ```
 *
 * @name .avg
 * @param {Array} `array` Array of numbers to add up.
 * @return {Number}
 * @api public
 */

helpers.avg = function() {
  var args = flatten([].concat.apply([], arguments));
  args.pop(); // remove handlebars options
  return exports.sum(args) / args.length;
};
