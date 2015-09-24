'use strict';

var helpers = module.exports;

/**
 * `JSON.stringify` exposed as a helper.
 *
 * @param  {Object} `obj` Object to stringify
 * @return {String}
 * @api public
 */

helpers.stringify = function(obj) {
  return JSON.stringify(obj, null, 2);
};

/**
 * Contributed by github.com/keeganstreet
 */

helpers.parseJSON = function(obj, options) {
  return options.fn(JSON.parse(obj));
};
