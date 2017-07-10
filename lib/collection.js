'use strict';

var util = require('handlebars-utils');
var object = require('./object');
var array = require('./array');
var forEach = array.forEach;
var forOwn = object.forOwn;
var helpers = module.exports;

/**
 * Block helper that returns a block if the given collection is
 * empty. If the collection is not empty the inverse block is returned
 * (if supplied).
 *
 * @param {Object} `collection`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */

helpers.isEmpty = function(collection, options) {
  if (!util.isOptions(options)) {
    options = collection;
    return util.fn(true, this, options);
  }

  if (Array.isArray(collection) && !collection.length) {
    return util.fn(true, this, options);
  }

  var keys = Object.keys(collection);
  var isEmpty = typeof collection === 'object' && !keys.length;
  return util.value(isEmpty, this, options);
};

/**
 * Iterate over an array or object. If `collection` is an array,
 * `.forEach` is called, else if `collection` is an object, `.forOwn`
 * is called, otherwise the inverse block is returned.
 *
 * @param {Object|Array} `collection` The collection to iterate over
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */

helpers.iterate = function(collection, options) {
  if (Array.isArray(collection)) {
    return forEach.apply(forEach, arguments);
  } else if (util.isObject(collection)) {
    return forOwn.apply(forOwn, arguments);
  }
  return options.inverse(this);
};

