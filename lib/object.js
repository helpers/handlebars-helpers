'use strict';

/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * Block helper that iterates over the properties of
 * an object, exposing each key and value on the context.
 *
 * @name .forIn
 * @param {Object} `context`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */

helpers.forIn = function(context, options) {
  var res = '';
  for (var key in context) {
    res += options.fn({key: key, value: context[key]});
  }
  return res;
};

/**
 * Block helper that iterates over the **own** properties of
 * an object, exposing each key and value on the context.
 *
 * @name .forOwn
 * @param {Object} `context`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */

helpers.forOwn = function(context, options) {
  var res = '';
  for (var key in context) {
    if (context.hasOwnProperty(key)) {
      res += options.fn({key: key, value: context[key]});
    }
  }
  return res;
};

/**
 * Return true if `key` is an own, enumerable property
 * of the given `obj`.
 *
 * ```js
 * {{hasOwn obj key}}
 * ```
 *
 * @name .hasOwn
 * @param  {String} `key`
 * @param  {Object} `obj` The object to check.
 * @return {Boolean}
 * @api public
 */

helpers.hasOwn = function(o, key) {
  return {}.hasOwnProperty.call(o, key);
};

/**
 * Return true if `value` is an object.
 *
 * ```js
 * {{isObject "foo"}}
 * //=> false
 * ```
 * @name .isObject
 * @param  {String} `value`
 * @return {Boolean}
 * @api public
 */

helpers.isObject = function(value) {
  return value && typeof value === 'object'
    && !Array.isArray(value);
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

helpers.merge = function(o) {
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
