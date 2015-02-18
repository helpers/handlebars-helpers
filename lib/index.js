'use strict';

var path = require('path');
var _ = require('lodash');
var extend = _.extend;

/**
 * Expose `Helpers`
 */

module.exports = Helpers;

/**
 * All the collections of helpers
 */

var lib = require('./helpers');

/**
 * Helpers constructor method.
 * Pass in a list of helper collections to add to the object, or nothing for all.
 *
 * ```js
 * var helpers = require('handlebars-helpers')(['code']);
 * ```
 *
 * @param {String|Array} `collections` Array of collection names to add to the helpers object.
 * @param {Object} `options` Additional options to pass to a collection if it returns a function to load.
 * @return {Object} object containing the helpers as `{key: value}` pairs
 * @api public
 */

function Helpers(collections, options) {
  if (!(this instanceof Helpers)) {
    return new Helpers(collections, options);
  }

  if (typeof collections === 'object' && !Array.isArray(collections)) {
    options = collections;
    collections = Object.keys(lib.helpers);
  }

  collections = arrayify(collections || Object.keys(lib.helpers));
  collections.forEach(addHelpers.bind(addHelpers, this, options));
  // lib.forEach(addCollection.bind(addCollection, this, options));
}

/**
 * Utility method to add helpers.
 *
 * @param  {Object} `obj`
 * @param  {String} `name`
 * @api private
 */

function addHelpers(obj, options, name) {
  var collection = lib.helpers[name];
  var result = typeof collection === 'function'
    ? collection(options)
    : collection;
  extend(obj, result);
}

/**
 * Utility method to add helper collections.
 *
 * @param  {Object} `obj`
 * @param  {String} `name`
 * @api private
 */

function addCollection (obj, options, name) {
  var collection = lib.helpers[name];
  defineGetter(obj, name, function () {
    return typeof collection === 'function'
      ? collection(options)
      : collection;
  });
}

/**
 * Utility method to define getters.
 *
 * @param  {Object} `obj`
 * @param  {String} `name`
 * @param  {Function} `getter`
 * @api private
 */

function defineGetter(obj, name, getter, enumerable) {
  Object.defineProperty(obj, name, {
    configurable: false,
    enumerable: enumerable == null ? false : enumerable,
    get: getter,
    set: function() {}
  });
}

/**
 * Coerce the value to an array.
 *
 * @param  {*} `val`
 * @api private
 */

function arrayify(val) {
  return !Array.isArray(val)
    ? [val]
    : val;
}
