const utils = require('./utils');

/**
 * @exports math
 */
const helpers = module.exports;

function coerceAndTransform(a, b, fn) {
  const aa = +a;
  const bb = +b;
  if (!isFinite(aa)) {
    throw new TypeError('expected the first argument to be a number');
  }
  if (!isFinite(bb)) {
    throw new TypeError('expected the second argument to be a number');
  }
  return fn(aa, bb);
}

/**
 * Return the magnitude of `a`.
 *
 * @param {Number} `a`
 * @return {Number}
 * @api public
 */

helpers.abs = function(num) {
  if (!utils.isNumber(num)) {
    throw new TypeError('expected a number');
  }
  return Math.abs(num);
};

/**
 * Return the sum of `a` plus `b`.
 *
 * @param {Number} `a` augend
 * @param {Number} `b` addend
 * @return {Number}
 * @api public
 */

helpers.add = function(a, b) {
  return coerceAndTransform(a, b, (na, nb) => na + nb);
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
  const val = +num;
  if (!isFinite(val)) {
    throw new TypeError('expected a number');
  }
  return Math.ceil(val);
};

/**
 * Divide `a` by `b`
 *
 * @param {Number} `a` numerator
 * @param {Number} `b` denominator
 * @api public
 */

helpers.divide = function(a, b) {
  return coerceAndTransform(a, b, (na, nb) => na / nb);
};

/**
 * Get the `Math.floor()` of the given value.
 *
 * @param {Number} `value`
 * @return {Number}
 * @api public
 */

helpers.floor = function(value) {
  const num = +value;
  if (!isFinite(num)) {
    throw new TypeError('expected a number');
  }
  return Math.floor(num);
};

/**
 * Return the difference of `a` minus `b`.
 *
 * @param {Number} `a` minuend
 * @param {Number} `b` subtrahend
 * @alias subtract
 * @api public
 */

helpers.minus = function(a, b) {
  return coerceAndTransform(a, b, (na, nb) => na - nb);
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
  return coerceAndTransform(a, b, (na, nb) => na % nb);
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
  return coerceAndTransform(a, b, (na, nb) => na * nb);
};

/**
 * Add `a` by `b`.
 *
 * @param {Number} `a` factor
 * @param {Number} `b` multiplier
 * @api public
 */

helpers.plus = helpers.add;

/**
 * Generate a random number between two values
 *
 * @param {Number} `min`
 * @param {Number} `max`
 * @return {String}
 * @api public
 */

helpers.random = function(min, max) {
  return coerceAndTransform(min, max, (nmin, nmax) => nmin + Math.floor(Math.random() * (nmax - nmin + 1)));
};

/**
 * Get the remainder when `a` is divided by `b`.
 *
 * @param {Number} `a` a
 * @param {Number} `b` b
 * @api public
 */

helpers.remainder = helpers.modulo;

/**
 * Round the given number.
 *
 * @param {Number} `number`
 * @return {Number}
 * @api public
 */

helpers.round = function(num) {
  const nn = +num;
  if (!isFinite(nn)) {
    throw new TypeError('expected a number');
  }
  return Math.round(nn);
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

helpers.subtract = helpers.minus;

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

helpers.times = helpers.multiply;
