'use strict';

var fs = require('fs');
var path = require('path');
var _ = require('lodash');

/**
 * Helper collections
 */

var cwd = path.join(__dirname, 'helpers');
var files = fs.readdirSync(cwd).map(function(fp) {
  if (fp !== 'index.js') return path.join(cwd, fp);
}).filter(Boolean);

/**
 * Pass in a list of helper collections to return, or if nothing
 * is passed all collections are returned.
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
  if (typeof collections === 'object') {
    options = collections;
    collections = files;
  }

  collections = arrayify(collections);
  collections = collections.length > 0
    ? collections
    : files;

  collections.forEach(addHelpers.bind(addHelpers, this, options));
  // files.forEach(addCollection.bind(addCollection, this, options));
}

/**
 * Utility method to add helpers.
 *
 * @param  {Object} `obj`
 * @param  {String} `category`
 * @api private
 */

function addHelpers (helpers, options, category) {
  var collection = require(path.join(__dirname, 'helpers', category));
  _.extend(helpers, typeof collection === 'function'
      ? collection(options)
      : collection);
}

/**
 * Utility method to add helper collections.
 *
 * @param  {Object} `obj`
 * @param  {String} `name`
 * @api private
 */

function addCollection (obj, options, name) {
  var collection = require(path.join(__dirname, 'helpers', name));

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

module.exports = Helpers;
