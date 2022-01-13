'use strict';

const isNumber = require('lodash/isNumber');
const helpers = module.exports;

/**
 * Return the magnitude of `a`.
 *
 * @param {Number} `a`
 * @return {Number}
 * @api public
 */

helpers.abs = function(num) {
  if (!isNumber(num)) {
    throw new TypeError('expected a number');
  }
  return Math.abs(num);
};

/**
 * Return the sum of `a` plus `b`.
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @return {Number}
 * @api public
 */

helpers.add = function(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  }
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }
  return '';
};

/**
 * Returns the average of all numbers in the given array.
 *
 * ```handlebars
 * {{avg "[1, 2, 3, 4, 5]"}}
 * <!-- results in: '3' -->
 * ```
 *
 * @param {Array} `array` Array of numbers to add up.
 * @return {Number}
 * @api public
 */

helpers.avg = function() {
  const args = [].concat.apply([], arguments);
  // remove handlebars options object
  args.pop();
  return helpers.sum(args) / args.length;
};

/**
 * Get the `Math.ceil()` of the given value.
 *
 * @param {Number} `value`
 * @return {Number}
 * @api public
 */

helpers.ceil = function(num) {
  if (!isNumber(num)) {
    throw new TypeError('expected a number');
  }
  return Math.ceil(num);
};

/**
 * Divide `a` by `b`
 *
 * @param {Number} `a` numerator
 * @param {Number} `b` denominator
 * @api public
 */

helpers.divide = function(a, b) {
  if (!isNumber(a)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (!isNumber(b)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return a / b;
};

/**
 * Get the `Math.floor()` of the given value.
 *
 * @param {Number} `value`
 * @return {Number}
 * @api public
 */

helpers.floor = function(num) {
  if (!isNumber(num)) {
    throw new TypeError('expected a number');
  }
  return Math.floor(num);
};

/**
 * Return the product of `a` times `b`.
 *
 * @param {Number} `a` factor
 * @param {Number} `b` multiplier
 * @return {Number}
 * @api public
 */

helpers.multiply = function(a, b) {
  if (!isNumber(a)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (!isNumber(b)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return a * b;
};

/**
 * Generate a random number between two values
 *
 * @param {Number} `min`
 * @param {Number} `max`
 * @return {Number}
 * @api public
 */

helpers.random = function(min, max) {
  if (!isNumber(min)) {
    throw new TypeError('expected minimum to be a number');
  }
  if (!isNumber(max)) {
    throw new TypeError('expected maximum to be a number');
  }
  return min + Math.floor(Math.random() * (max - min + 1));
};

/**
 * Get the remainder of dividing `a` by `b`.
 *
 * ```handlebars
 * {{remainder 7 5}}
 * <!-- results in: 2 -->
 * ```
 * @param {Number} `a`
 * @param {Number} `b`
 * @return {Number}
 * @api public
 */

helpers.remainder = function(a, b) {
  if (!isNumber(a)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (!isNumber(b)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return a % b;
};

/**
 * Round the given number.
 *
 * @param {Number} `number`
 * @return {Number}
 * @api public
 */

helpers.round = function(num) {
  if (!isNumber(num)) {
    throw new TypeError('expected a number');
  }
  return Math.round(num);
};

/**
 * Return the product of `a` minus `b`.
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @return {Number}
 * @api public
 */

helpers.subtract = function(a, b) {
  if (!isNumber(a)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (!isNumber(b)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return a - b;
};

/**
 * Returns the sum of all numbers in the given array.
 *
 * ```handlebars
 * {{sum "[1, 2, 3, 4, 5]"}}
 * <!-- results in: '15' -->
 * ```
 * @param {Array} `array` Array of numbers to add up.
 * @return {Number}
 * @api public
 */

helpers.sum = function() {
  const args = [].concat.apply([], arguments);
  let len = args.length;
  let sum = 0;

  while (len--) {
    if (isNumber(args[len])) {
      sum += Number(args[len]);
    }
  }
  return sum;
};
