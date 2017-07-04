'use strict';

var util = require('handlebars-utils');
var utils = require('./utils');
var helpers = module.exports;

/**
 * Block helper for exposing private `@` variables on the context
 */

helpers.frame = require('handlebars-helper-create-frame');

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
  return utils.get(util.options(this, locals, options), prop);
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

helpers.typeOf = require('kind-of');

/**
 * Block helper that builds the context for the block
 * from the options hash.
 *
 * @param {Object} `options` Handlebars provided options object.
 * @contributor Vladimir Kuznetsov <https://github.com/mistakster>
 * @block
 * @api public
 */

helpers.withHash = function(options) {
  if (options.hash && Object.keys(options.hash).length) {
    return options.fn(options.hash);
  } else {
    return options.inverse(this);
  }
};
