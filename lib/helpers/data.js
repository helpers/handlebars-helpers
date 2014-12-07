'use strict';

/**
 * `JSON.stringify` exposed as a helper.
 *
 * @param  {Object} `obj` Object to stringify
 * @return {String}
 * @api public
 */

exports.stringify = function(obj) {
  return JSON.stringify(obj, null, 2);
};

/**
 * Contributed by github.com/keeganstreet
 */

exports.parseJSON = function(obj, options) {
  return options.fn(JSON.parse(obj));
};
