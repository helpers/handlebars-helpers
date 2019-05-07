const crypto = require('crypto');
const utils = require('./utils');

/**
 * @exports misc
 */
const helpers = module.exports;

/**
 * Return the given value of `prop` from `this.options`.
 *
 * ```handlebars
 * <!-- context = {options: {a: {b: {c: 'ddd'}}}} -->
 * {{option "a.b.c"}}
 * <!-- results => `ddd` -->
 * ```
 * @param {String} `prop`
 * @return {any}
 * @api public
 */
helpers.option = function(prop, locals, options) {
  return utils.get(utils.options(this, locals, options), prop);
};

/**
 * Block helper that renders the block without taking any arguments.
 *
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */
helpers.noop = function(options) {
  return options.fn(this);
};

/**
 * Get the native type of the given `value`
 *
 * ```handlebars
 * {{typeOf 1}}
 * //=> 'number'
 * {{typeOf "1"}}
 * //=> 'string'
 * {{typeOf "foo"}}
 * //=> 'string'
 * ```
 * @param {any} `value`
 * @return {String} Returns the type of value.
 * @api public
 */
helpers.typeOf = val => typeof val;

/**
 * Get the MD5 hash of a piece of data
 *
 * ```handlebars
 * {{md5 data}}
 * //=> '527bd5b5d689e2c32ae974c6229ff785'
 * ```
 * @param {any} data - the data to hash
 * @return {String} - The MD5 hash of the data
 * @api public
 */
helpers.md5 = function(data) {
  return data ? crypto.createHash('md5').update(`${data}`).digest('hex') : '';
};
