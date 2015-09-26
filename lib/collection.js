'use strict';

var createFrame = require('create-frame');
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
 * Iterate over an array or object,
 *
 * @name .iterate
 * @param {Object|Array} `context` The collection to iterate over
 * @param {Object} `options`
 * @return {String}
 * @api public
 */

helpers.iterate = function(context, options) {
  var data = createFrame(options, options.hash);
  var res = '';

  if (Array.isArray(context)) {
    return forEach.apply(forEach, arguments);
  } else if (utils.isObject(context)) {
    return forOwn.apply(forOwn, arguments);
  }
  return options.inverse(this);
};
