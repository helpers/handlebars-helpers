'use strict';

var util = require('handlebars-utils');
var utils = require('./utils');
var helpers = module.exports;

/**
 * Convert the given string to a regular expression.
 *
 * ```handlebars
 * {{toRegex "foo"}}
  * <!-- results in: /foo/ -->
 * ```
 * @param {String} `str`
 * @return {RegExp}
 * @api public
 */

helpers.toRegex = function(str, locals, options) {
  var opts = util.options({}, locals, options);
  return new RegExp(str, opts.flags);
};

/**
 * Returns true if the given `str` matches the given regex. A regex can
 * be passed on the context, or using the [toRegex](#toregex) helper as a
 * subexpression.
 *
 * ```handlebars
 * {{test "bar" (toRegex "foo")}}
  * <!-- results in: false -->
 * {{test "foobar" (toRegex "foo")}}
  * <!-- results in: true -->
 * {{test "foobar" (toRegex "^foo$")}}
  * <!-- results in: false -->
 * ```
 * @param {String} `str`
 * @return {RegExp}
 * @api public
 */

helpers.test = function(str, regex) {
  if (!util.isString(str)) {
    return false;
  }
  if (!utils.typeOf(regex) === 'regexp') {
    throw new TypeError('expected a regular expression');
  }
  return regex.test(str);
};
