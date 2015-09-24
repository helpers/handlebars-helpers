'use strict';

var helpers = module.exports;

/**
 * Return true if `key` is an own, enumerable property
 * of the given `obj`.
 *
 * ```js
 * hasOwn(obj, key);
 * ```
 *
 * @name .hasOwn
 * @param  {String} `key`
 * @param  {Object} `obj` Optionally pass an object to check.
 * @return {Boolean}
 * @api public
 */

helpers.isObject = function isObject(o) {
  return o && typeof o === 'object' && !Array.isArray(o);
};

/**
 * Return true if `key` is an own, enumerable property
 * of the given `obj`.
 *
 * ```js
 * hasOwn(obj, key);
 * ```
 *
 * @name .hasOwn
 * @param  {String} `key`
 * @param  {Object} `obj` Optionally pass an object to check.
 * @return {Boolean}
 * @api public
 */

helpers.hasOwn = function hasOwn(o, key) {
  return {}.hasOwnProperty.call(o, key);
};

/**
 * Recursively combine the properties of `o` with the
 * properties of other `objects`.
 *
 * @name .merge
 * @param  {Object} `o` The target object. Pass an empty object to shallow clone.
 * @param  {Object} `objects`
 * @return {Object}
 * @api public
 */

helpers.merge = function merge(o) {
  if (!helpers.isObject(o)) { return {}; }
  var args = arguments;
  var len = args.length - 1;

  for (var i = 0; i < len; i++) {
    var obj = args[i + 1];

    if (helpers.isObject(obj)) {
      for (var key in obj) {
        if (helpers.hasOwn(obj, key)) {
          if (helpers.isObject(obj[key])) {
            o[key] = helpers.merge(o[key], obj[key]);
          } else {
            o[key] = obj[key];
          }
        }
      }
    }
  }
  return o;
};
