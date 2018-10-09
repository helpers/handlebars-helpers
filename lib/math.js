'use strict';

var utils = require('./utils');
var helpers = module.exports;

function isNumber(num) {
  if (typeof num === 'number') {
    return num - num === 0;
  }
  if (typeof num === 'string' && num.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }
  return false;
}

function coerceToNumber(num) {
  if (typeof num === 'number') {
    return num;
  }

  if (typeof num === 'string') {
    return Number(num);
  }
}

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
  const numA = coerceToNumber(a);
  const numB = coerceToNumber(b);

  if (isNumber(numA) && isNumber(numB)) {
    return numA + numB;
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
  var args = [].concat.apply([], arguments);
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
  const numA = coerceToNumber(a);
  const numB = coerceToNumber(b);

  if (!isNumber(numA)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (!isNumber(numB)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return numA / numB;
};

/**
 * Get the `Math.floor()` of the given value.
 *
 * @param {Number} `value`
 * @return {Number}
 * @api public
 */

helpers.floor = function(num) {
  const numA = coerceToNumber(num);

  if (!isNumber(numA)) {
    throw new TypeError('expected a number');
  }
  return Math.floor(numA);
};

/**
 * Return the difference of `a` minus `b`.
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @alias subtract
 * @api public
 */

helpers.minus = function(a, b) {
  const numA = coerceToNumber(a);
  const numB = coerceToNumber(b);

  if (!isNumber(numA)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (!isNumber(numB)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return numA - numB;
};

/**
 * Get the remainder of a division operation.
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @return {Number}
 * @api public
 */

helpers.modulo = function(a, b) {
  if (!isNumber(a)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (!isNumber(b)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return Number(a) % Number(b);
};

/**
 * Return the product of `a` times `b`.
 *
 * @param {Number} `a` factor
 * @param {Number} `b` multiplier
 * @return {Number}
 * @alias times
 * @api public
 */

helpers.multiply = function(a, b) {
  const numA = coerceToNumber(a);
  const numB = coerceToNumber(b);

  if (!isNumber(numA)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (!isNumber(numB)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return numA * numB;
};

/**
 * Add `a` by `b`.
 *
 * @param {Number} `a` factor
 * @param {Number} `b` multiplier
 * @api public
 */

helpers.plus = function(a, b) {
  const numA = coerceToNumber(a);
  const numB = coerceToNumber(b);

  if (!isNumber(numA)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (!isNumber(numB)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return numA + numB;
};

/**
 * Generate a random number between two values
 *
 * @param {Number} `min`
 * @param {Number} `max`
 * @return {String}
 * @api public
 */

helpers.random = function(min, max) {
  if (!isNumber(min)) {
    throw new TypeError('expected minimum to be a number');
  }
  if (!isNumber(max)) {
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
 * @alias minus
 * @api public
 */

helpers.subtract = function(a, b) {
  const numA = coerceToNumber(a);
  const numB = coerceToNumber(b);

  if (!isNumber(numA)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (!isNumber(numB)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return numA - numB;
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
  var args = [].concat.apply([], arguments);
  var len = args.length;
  var sum = 0;

  while (len--) {
    if (utils.isNumber(args[len])) {
      sum += Number(args[len]);
    }
  }
  return sum;
};

/**
 * Multiply number `a` by number `b`.
 *
 * @param {Number} `a` factor
 * @param {Number} `b` multiplier
 * @return {Number}
 * @alias multiply
 * @api public
 */

helpers.times = function() {
  return helpers.multiply.apply(this, arguments);
};
