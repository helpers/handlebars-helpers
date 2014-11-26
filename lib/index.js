'use strict';

var arrayify = require('arrayify-compact');
var path = require('path');
var _ = require('lodash');

/**
 * Helper collections
 */

var all = [
  'code',
  'collections',
  'comparisons',
  'data',
  'dates',
  'files',
  'html',
  'i18n',
  'inflections',
  'layouts',
  'logging',
  'markdown',
  'math',
  'miscellaneous',
  'numbers',
  'path',
  'strings',
  'url'
];

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
    collections = all;
  }
  collections = arrayify(collections);
  collections = collections.length === 0 ? all : collections;

  collections.forEach(addHelpers.bind(addHelpers, this, options));
  // all.forEach(addCollection.bind(addCollection, this, options));
}

/**
 * Utility method to add helpers.
 *
 * @param  {Object} `obj`
 * @param  {String} `name`
 * @api private
 */

function addHelpers (obj, options, name) {
  var collection = require(path.join(__dirname, 'helpers', 'helpers-' + name));
  _.extend(obj, typeof collection === 'function' ? collection(options) : collection);
}

/**
 * Utility method to add helper collections.
 *
 * @param  {Object} `obj`
 * @param  {String} `name`
 * @api private
 */

function addCollection (obj, options, name) {
  var collection = require(path.join(__dirname, 'helpers', 'helpers-' + name));
  defineGetter(obj, name, function () {
    return typeof collection === 'function' ? collection(options) : collection;
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

module.exports = Helpers;
