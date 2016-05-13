'use strict';

var array = require('./array');
var object = require('./object');
var utils = require('./utils');
var forEach = array.forEach;
var forOwn = object.forOwn;

/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * Block helper that returns a block if the given collection is
 * empty. If the collection is not empty the inverse block is returned
 * (if supplied).
 *
 * @name .isEmpty
 * @param {Object} `collection`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */

helpers.isEmpty = function(collection, options) {
  if (options == null) {
    options = collection;
    return options.fn(this);
  }

  if (Array.isArray(collection) && !collection.length) {
    return options.fn(this);
  }

  var keys = Object.keys(collection);
  if (typeof collection === 'object' && !keys.length) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Iterate over an array or object,
 *
 * @name .iterate
 * @param {Object|Array} `context` The collection to iterate over
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */

helpers.iterate = function(context, options) {
  if (Array.isArray(context)) {
    return forEach.apply(forEach, arguments);
  } else if (utils.isObject(context)) {
    return forOwn.apply(forOwn, arguments);
  }
  return options.inverse(this);
};

/**
 * Returns the length of the given collection.
 *
 * ```handlebars
 * {{length "['a', 'b', 'c']"}}
 * //=> 3
 * ```
 * @param  {Array|Object|String} `value`
 * @return {Number} The length of the value.
 * @api public
 */

helpers.length = function(value) {
  if (utils.isUndefined(value)) return '';
  if (typeof value === 'string' && /[[]/.test(value)) {
    value = utils.tryParse(value) || [];
  }
  if (utils.isObject(value)) {
    value = Object.keys(value);
  }
  return value.length;
};
