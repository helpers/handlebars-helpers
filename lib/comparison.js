'use strict';

var has = require('has-value');
var util = require('handlebars-utils');
var utils = require('./utils');
const falsey = require('./utils/falsey');
const isOdd = require('./utils/odd');
var helpers = module.exports;

/**
 * Helper that renders the block if **both** of the given values
 * are truthy. If an inverse block is specified it will be rendered
 * when falsy. Works as a block helper, inline helper or
 * subexpression.
 *
 * ```handlebars
 * <!-- {great: true, magnificent: true} -->
 * {{#and great magnificent}}A{{else}}B{{/and}}
 * <!-- results in: 'A' -->
 * ```
 * @param {any} `a`
 * @param {any} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String}
 * @block
 * @api public
 * @example {{#and great magnificent}}both{{else}}no{{/and}}
 */

helpers.and = function() {
  var len = arguments.length - 1;
  var options = arguments[len];
  var val = true;

  for (var i = 0; i < len; i++) {
    if (!arguments[i]) {
      val = false;
      break;
    }
  }

  return util.value(val, this, options);
};

/**
 * Render a block when a comparison of the first and third
 * arguments returns true. The second argument is
 * the [arithemetic operator][operators] to use. You may also
 * optionally specify an inverse block to render when falsy.
 *
 * @param `a`
 * @param `operator` The operator to use. Operators must be enclosed in quotes: `'>'`, `'='`, `'<='`, and so on.
 * @param `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or if specified the inverse block is rendered if falsey.
 * @block
 * @api public
 * @example {{compare 10 '<' 5 }} -> true
 */

helpers.compare = function(a, operator, b, options) {
  /*eslint eqeqeq: 0*/

  if (arguments.length < 4) {
    throw new Error('handlebars Helper {{compare}} expects 4 arguments');
  }

  var result;
  switch (operator) {
    case '==':
      result = a == b;
      break;
    case '===':
      result = a === b;
      break;
    case '!=':
      result = a != b;
      break;
    case '!==':
      result = a !== b;
      break;
    case '<':
      result = a < b;
      break;
    case '>':
      result = a > b;
      break;
    case '<=':
      result = a <= b;
      break;
    case '>=':
      result = a >= b;
      break;
    case 'typeof':
      result = typeof a === b;
      break;
    default: {
      throw new Error('helper {{compare}}: invalid operator: `' + operator + '`');
    }
  }

  return util.value(result, this, options);
};

/**
 * Block helper that renders the block if `collection` has the
 * given `value`, using strict equality (`===`) for comparison,
 * otherwise the inverse block is rendered (if specified). If a
 * `startIndex` is specified and is negative, it is used as the
 * offset from the end of the collection.
 *
 * ```handlebars
 * <!-- array = ['a', 'b', 'c'] -->
 * {{#contains array 'd'}}
 *   This will not be rendered.
 * {{else}}
 *   This will be rendered.
 * {{/contains}}
 * ```
 * @param {Array|Object|String} `collection` The collection to iterate over.
 * @param {any} `value` The value to check for.
 * @param {Number} `[startIndex=0]` Optionally define the starting index.
 * @param {Object} `options` Handlebars provided options object.
 * @block
 * @api public
 * @example {{#contains ['a', 'b', 'c'] 'd'}} This will not be rendered. {{else}} This will be rendered. {{/contains}}
 */

helpers.contains = function(collection, value, startIndex, options) {
  if (typeof startIndex === 'object') {
    options = startIndex;
    startIndex = undefined;
  }
  var val = utils.contains(collection, value, startIndex);
  return util.value(val, this, options);
};

/**
 * Returns the first value that is not undefined, otherwise the 'default' value is returned.
 *
 * @param {any} `value`
 * @param {any} `defaultValue`
 * @return {String}
 * @alias .or
 * @api public
 * @example {{default null null 'default'}} -> default 
 */

helpers.default = function() {
  for (var i = 0; i < arguments.length - 1; i++) {
    if (arguments[i] != null) return arguments[i];
  }
  return '';
};

/**
 * Block helper that renders a block if `a` is **equal to** `b`.
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=''` hash argument for the
 * second value.
 *
 * @param {String} `a`
 * @param {String} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @alias is
 * @block
 * @api public
 * @example {{#eq 3 3}} equal{{else}} not equal{{/eq}} -> equal
 */

helpers.eq = function(a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  return util.value(a === b, this, options);
};

/**
 * Block helper that renders a block if `a` is **greater than** `b`.
 *
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=''` hash argument for the
 * second value.
 *
 * @param {String} `a`
 * @param {String} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 * @example {{#gt 4 3}} greater than{{else}} not greater than{{/gt}} -> greater than
 */

helpers.gt = function(a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  return util.value(a > b, this, options);
};

/**
 * Block helper that renders a block if `a` is **greater than or
 * equal to** `b`.
 *
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=''` hash argument for the
 * second value.
 *
 * @param {String} `a`
 * @param {String} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 * @example {{#gte 4 3}} greater than or equal{{else}} not greater than{{/gte}} -> greater than or equal
 */

helpers.gte = function(a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  return util.value(a >= b, this, options);
};

/**
 * Block helper that renders a block if `value` has `pattern`.
 * If an inverse block is specified it will be rendered when falsy.
 *
 * @param {any} `val` The value to check.
 * @param {any} `pattern` The pattern to check for.
 * @param {Object} `options` Handlebars provided options object
 * @return {String}
 * @block
 * @api public
 * @example {{#has 'foobar' 'foo'}} has it{{else}} doesn't{{/has}} -> has it
 */

helpers.has = function(value, pattern, options) {
  if (util.isOptions(value)) {
    options = value;
    pattern = null;
    value = null;
  }

  if (util.isOptions(pattern)) {
    options = pattern;
    pattern = null;
  }

  if (value === null) {
    return util.value(false, this, options);
  }

  if (arguments.length === 2) {
    return util.value(has(this, value), this, options);
  }

  if ((Array.isArray(value) || util.isString(value)) && util.isString(pattern)) {
    if (value.indexOf(pattern) > -1) {
      return util.fn(true, this, options);
    }
  }
  if (util.isObject(value) && util.isString(pattern) && pattern in value) {
    return util.fn(true, this, options);
  }
  return util.inverse(false, this, options);
};

/**
 * Returns true if the given `value` is falsey. Uses the [falsey][]
 * library for comparisons. Please see that library for more information
 * or to report bugs with this helper.
 *
 * @param {any} `val`
 * @param {Options} `options`
 * @return {Boolean}
 * @api public
 * @example {{isFalsey '' }} -> true
 */

helpers.isFalsey = function(val, options) {
  return util.value(falsey(val), this, options);
};

/**
 * Returns true if the given `value` is truthy. Uses the [falsey][]
 * library for comparisons. Please see that library for more information
 * or to report bugs with this helper.
 *
 * @param {any} `val`
 * @param {Options} `options`
 * @return {Boolean}
 * @api public
 * @example {{isTruthy '12' }} -> true
 */

helpers.isTruthy = function(val, options) {
  return util.value(!falsey(val), this, options);
};

/**
 * Return true if the given value is an even number.
 *
 * ```handlebars
 * {{#ifEven value}}
 *   render A
 * {{else}}
 *   render B
 * {{/ifEven}}
 * ```
 * @param {Number} `number`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 * @example {{#ifEven 2}} even {{else}} odd {{/ifEven}} -> even 
 */

helpers.ifEven = function(num, options) {
  return util.value(!isOdd(num), this, options);
};

/**
 * Conditionally renders a block if the remainder is zero when
 * `a` operand is divided by `b`. If an inverse block is specified
 * it will be rendered when the remainder is **not zero**.
 *
 * @param {Number}
 * @param {Number}
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 * @example {{#ifNth 10 2}} remainder {{else}} no remainder {{/ifNth}} -> remainder 
 */

helpers.ifNth = function(a, b, options) {
  var isNth = !isNaN(a) && !isNaN(b) && b % a === 0;
  return util.value(isNth, this, options);
};

/**
 * Block helper that renders a block if `value` is **an odd number**.
 * If an inverse block is specified it will be rendered when falsy.
 *
 * ```handlebars
 * {{#ifOdd value}}
 *   render A
 * {{else}}
 *   render B
 * {{/ifOdd}}
 * ```
 * @param {Object} `value`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 * @example {{#ifOdd 3}} odd {{else}} even {{/ifOdd}} -> odd 
 */

helpers.ifOdd = function(val, options) {
  return util.value(isOdd(val), this, options);
};

/**
 * Block helper that renders a block if `a` is **equal to** `b`.
 * If an inverse block is specified it will be rendered when falsy.
 * Similar to [eq](#eq) but does not do strict equality.
 *
 * @param {any} `a`
 * @param {any} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String}
 * @block
 * @api public
 * @example {{#is 3 3}} is {{else}} is not {{/is}} -> is 
 */

helpers.is = function(a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  return util.value(a == b, this, options);
};

/**
 * Block helper that renders a block if `a` is **not equal to** `b`.
 * If an inverse block is specified it will be rendered when falsy.
 * Similar to [unlessEq](#unlesseq) but does not use strict equality for
 * comparisons.
 *
 * @param {String} `a`
 * @param {String} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String}
 * @block
 * @api public
 * @example {{#isnt 3 3}} isnt {{else}} is {{/isnt}} -> is 
 */

helpers.isnt = function(a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  return util.value(a != b, this, options);
};

/**
 * Block helper that renders a block if `a` is **less than** `b`.
 *
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=''` hash argument for the
 * second value.
 *
 * @param {Object} `context`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 * @example {{#lt 2 3}} less than {{else}} more than or equal {{/lt}} -> less than 
 */

helpers.lt = function(a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  return util.value(a < b, this, options);
};

/**
 * Block helper that renders a block if `a` is **less than or
 * equal to** `b`.
 *
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=''` hash argument for the
 * second value.
 *
 * @param {Sring} `a`
 * @param {Sring} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 * @example {{#lte 2 3}} less than or equal {{else}} more than {{/lte}} -> less than or equal
 */

helpers.lte = function(a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  return util.value(a <= b, this, options);
};

/**
 * Block helper that renders a block if **neither of** the given values
 * are truthy. If an inverse block is specified it will be rendered
 * when falsy.
 *
 * @param {any} `a`
 * @param {any} `b`
 * @param `options` Handlebars options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 * @example {{#neither null null}} both falsey {{else}} both not falsey {{/neither}} -> both falsey
 */

helpers.neither = function(a, b, options) {
  return util.value(!a && !b, this, options);
};

/**
 * Returns true if `val` is falsey. Works as a block or inline helper.
 *
 * @param {String} `val`
 * @param {Object} `options` Handlebars provided options object
 * @return {String}
 * @block
 * @api public
 * @example {{#not undefined }} falsey {{else}} not falsey {{/not}} -> falsey 
 */

helpers.not = function(val, options) {
  return util.value(!val, this, options);
};

/**
 * Block helper that renders a block if **any of** the given values
 * is truthy. If an inverse block is specified it will be rendered
 * when falsy.
 *
 * ```handlebars
 * {{#or a b c}}
 *   If any value is true this will be rendered.
 * {{/or}}
 * ```
 *
 * @param {...any} `arguments` Variable number of arguments
 * @param {Object} `options` Handlebars options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 * @example {{#or 1 2 undefined }} at least one truthy {{else}} all falsey {{/or}} -> at least one truthy 
 */

helpers.or = function(/* any, any, ..., options */) {
  var len = arguments.length - 1;
  var options = arguments[len];
  var val = false;

  for (var i = 0; i < len; i++) {
    if (arguments[i]) {
      val = true;
      break;
    }
  }
  return util.value(val, this, options);
};

/**
 * Block helper that always renders the inverse block **unless `a` is
 * is equal to `b`**.
 *
 * @param {String} `a`
 * @param {String} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Inverse block by default, or block if falsey.
 * @block
 * @api public
 * @example {{#unlessEq 2 1 }} not equal {{else}} equal {{/unlessEq}} -> not equal 
 */

helpers.unlessEq = function(a, b, options) {
  if (util.isOptions(b)) {
    options = b;
    b = options.hash.compare;
  }
  return util.value(a !== b, this, options);
};

/**
 * Block helper that always renders the inverse block **unless `a` is
 * is greater than `b`**.
 *
 * @param {Object} `a` The default value
 * @param {Object} `b` The value to compare
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Inverse block by default, or block if falsey.
 * @block
 * @api public
 * @example {{#unlessGt 20 1 }} not greater than {{else}} greater than {{/unlessGt}} -> greater than 
 */

helpers.unlessGt = function(a, b, options) {
  if (util.isOptions(b)) {
    options = b;
    b = options.hash.compare;
  }
  return util.value(a <= b, this, options);
};

/**
 * Block helper that always renders the inverse block **unless `a` is
 * is less than `b`**.
 *
 * @param {Object} `a` The default value
 * @param {Object} `b` The value to compare
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 * @example {{#unlessLt 20 1 }} greater than or equal {{else}} less than {{/unlessLt}} -> greater than or equal 
 */

helpers.unlessLt = function(a, b, options) {
  if (util.isOptions(b)) {
    options = b;
    b = options.hash.compare;
  }
  return util.value(a >= b, this, options);
};

/**
 * Block helper that always renders the inverse block **unless `a` is
 * is greater than or equal to `b`**.
 *
 * @param {any} `a`
 * @param {any} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 * @example {{#unlessGteq 20 1 }} less than {{else}} greater than or equal to {{/unlessGteq}} -> greater than or equal to
 */

helpers.unlessGteq = function(a, b, options) {
  if (util.isOptions(b)) {
    options = b;
    b = options.hash.compare;
  }
  return util.value(a < b, this, options);
};

/**
 * Block helper that always renders the inverse block **unless `a` is
 * is less than or equal to `b`**.
 *
 * @param {any} `a`
 * @param {any} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 * @example {{#unlessLteq 20 1 }} greater than {{else}} less than or equal to {{/unlessLteq}} -> greater than
 */

helpers.unlessLteq = function(a, b, options) {
  if (util.isOptions(b)) {
    options = b;
    b = options.hash.compare;
  }
  return util.value(a > b, this, options);
};
