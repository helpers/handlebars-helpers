'use strict';

var isNumber = require('is-number');
var helpers = module.exports;

/**
 * `JSON.stringify` exposed as a helper.
 *
 * @param  {Object} `obj` Object to stringify
 * @return {String}
 * @api public
 */

helpers.stringify = function(obj, indent) {
  if (!isNumber(indent)) {
    indent = 2;
  }
  return JSON.stringify(obj, null, indent);
};

/**
 * Contributed by github.com/keeganstreet
 */

helpers.parseJSON = function(obj, options) {
  return options.fn(JSON.parse(obj));
};
