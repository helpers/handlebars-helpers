'use strict';

var utils = require('./utils');
var helpers = module.exports;

/**
 * Return the magnitude of `a`.
 *
 * @param {Number} `a`
 * @return {Number}
 * @api public
 * @example {{ abs 12012.1000 }} -> 12012.1
 */

helpers.abs = function(num) {
  if (isNaN(num)) {
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
 * @example {{ add 1 2 }} -> 3
 */

helpers.add = function(a, b) {
  if (!isNaN(a) && !isNaN(b)) {
    return Number(a) + Number(b);
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
 * {{avg 1 2 3 4 5}}
 * <!-- results in: '3' -->
 * ```
 *
 * @param {Array} `array` Array of numbers to add up.
 * @return {Number}
 * @api public
 * @example {{ avg 1 2 3 4 5 }} -> 3
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
 * @example {{ ceil 1.2 }} -> 2
 */

helpers.ceil = function(num) {
  if (isNaN(num)) {
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
 * @example {{ divide 10 5 }} -> 2
 */

helpers.divide = function(a, b) {
  if (isNaN(a)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (isNaN(b)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return Number(a) / Number(b);
};

/**
 * Get the `Math.floor()` of the given value.
 *
 * @param {Number} `value`
 * @return {Number}
 * @api public
 * @example {{ floor 1.2 }} -> 1
 */

helpers.floor = function(num) {
  if (isNaN(num)) {
    throw new TypeError('expected a number');
  }
  return Math.floor(num);
};

/**
 * Return the difference of `a` minus `b`.
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @alias subtract
 * @api public
 * @example {{ minus 10 5 }} -> 5
 */

helpers.minus = function(a, b) {
  if (isNaN(a)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (isNaN(b)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return Number(a) - Number(b);
};

/**
 * Get the remainder of a division operation.
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @return {Number}
 * @api public
 * @example {{ modulo 10 5 }} -> 0
 */

helpers.modulo = function(a, b) {
  if (isNaN(a)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (isNaN(b)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return Number(a) % Number(b);
};

/**
 * Multiply number `a` by number `b`.
 *
 * @param {Number} `a` factor
 * @param {Number} `b` multiplier
 * @return {Number}
 * @alias multiply
 * @api public
 * @example {{ multiply 10 5 }} -> 50
 */

helpers.multiply = function(a, b) {
  if (isNaN(a)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (isNaN(b)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return Number(a) * Number(b);
};

/**
 * Add `a` by `b`.
 *
 * @param {Number} `a` factor
 * @param {Number} `b` multiplier
 * @api public
 * @example {{ plus 10 5 }} -> 15
 */

helpers.plus = function(a, b) {
  if (isNaN(a)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (isNaN(b)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return Number(a) + Number(b);
};

/**
 * Generate a random number between two values
 *
 * @param {Number} `min`
 * @param {Number} `max`
 * @return {String}
 * @api public
 * @example {{ random 0 20 }} -> 10
 */

helpers.random = function(min, max) {
  if (isNaN(min)) {
    throw new TypeError('expected minimum to be a number');
  }
  if (isNaN(max)) {
    throw new TypeError('expected maximum to be a number');
  }
  return utils.random(min, max);
};

/**
 * Get the remainder when `a` is divided by `b`.
 *
 * @param {Number} `a` a
 * @param {Number} `b` b
 * @api public
 * @example {{ remainder 10 6 }} -> 4
 */

helpers.remainder = function(a, b) {
  return a % b;
};

/**
 * Round the given number.
 *
 * @param {Number} `number`
 * @return {Number}
 * @api public
 * @example {{ round 10.3 }} -> 10
 */

helpers.round = function(num) {
  if (isNaN(num)) {
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
 * @alias minus
 * @api public
 * @example {{ subtract 10 5 }} -> 5
 */

helpers.subtract = function(a, b) {
  if (isNaN(a)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (isNaN(b)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return Number(a) - Number(b);
};

/**
 * Returns the sum of all numbers in the given array.
 *
 * ```handlebars
 * {{sum '[1, 2, 3, 4, 5]'}}
 * <!-- results in: '15' -->
 * ```
 * @param {Array} `array` Array of numbers to add up.
 * @return {Number}
 * @api public
 * @example {{ sum [1, 2, 3] }} -> 6
 */

helpers.sum = function() {
  var args = [].concat.apply([], arguments);
  var len = args.length;
  var sum = 0;

  while (len--) {
    if (!isNaN(args[len])) {
      sum += Number(args[len]);
    }
  }
  return sum;
};
