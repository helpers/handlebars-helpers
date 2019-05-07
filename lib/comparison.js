const utils = require('./utils');
/**
 * @exports comparison
 */
const helpers = module.exports;

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
 */

helpers.and = function() {
  const len = arguments.length - 1;
  const options = arguments[len];
  let val = true;

  for (let i = 0; i < len; i++) {
    if (!arguments[i]) {
      val = false;
      break;
    }
  }

  return utils.value(val, this, options);
};

/**
 * Render a block when a comparison of the first and third
 * arguments returns true. The second argument is
 * the [arithemetic operator][operators] to use. You may also
 * optionally specify an inverse block to render when falsy.
 *
 * @param `a`
 * @param `operator` The operator to use. Operators must be enclosed in quotes: `">"`, `"="`, `"<="`, and so on.
 * @param `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or if specified the inverse block is rendered if falsey.
 * @block
 * @api public
 */

helpers.compare = function(a, operator, b, options) {
  /*eslint eqeqeq: 0*/

  if (arguments.length < 4) {
    throw new Error('handlebars Helper {{compare}} expects 4 arguments');
  }

  let result;
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

  return utils.value(result, this, options);
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
 * {{#contains array "d"}}
 *   This will not be rendered.
 * {{else}}
 *   This will be rendered.
 * {{/contains}}
 * ```
 * @param {Array|Object|String} `collection` The collection to iterate over.
 * @param {any} `value` The value to check for.
 * @param {Number} `[startIndex]` Optionally define the starting index.
 * @param {Object} `options` Handlebars provided options object.
 * @block
 * @api public
 */

helpers.contains = function(collection, value, startIndex, options) {
  if (typeof startIndex === 'object') {
    options = startIndex;
    startIndex = undefined;
  }
  const val = utils.includes(collection, value, startIndex);
  return utils.value(val, this, options);
};

/**
 * Returns the first value that is not undefined, otherwise the "default" value is returned.
 *
 * @param {any} `value`
 * @param {any} `defaultValue`
 * @return {String}
 * @alias .or
 * @api public
 */

helpers.default = function() {
  for (let i = 0; i < arguments.length - 1; i++) {
    if (arguments[i] != null) return arguments[i];
  }
  return '';
};

/**
 * Block helper that renders a block if `a` is **equal to** `b`.
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=""` hash argument for the
 * second value.
 *
 * @param {String} `a`
 * @param {String} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @alias is
 * @block
 * @api public
 */

helpers.eq = function(a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  return utils.value(a === b, this, options);
};

/**
 * Block helper that renders a block if `a` is **greater than** `b`.
 *
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=""` hash argument for the
 * second value.
 *
 * @param {String} `a`
 * @param {String} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

helpers.gt = function(a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  return utils.value(a > b, this, options);
};

/**
 * Block helper that renders a block if `a` is **greater than or
 * equal to** `b`.
 *
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=""` hash argument for the
 * second value.
 *
 * @param {String} `a`
 * @param {String} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

helpers.gte = function(a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  return utils.value(a >= b, this, options);
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
 */

helpers.has = function(value, pattern, options) {
  if (utils.isOptions(value)) {
    options = value;
    pattern = null;
    value = null;
  }

  if (utils.isOptions(pattern)) {
    options = pattern;
    pattern = null;
  }

  if (value === null) {
    return utils.value(false, this, options);
  }

  if (arguments.length === 2) {
    return utils.value(utils.has(this, value), this, options);
  }

  if ((Array.isArray(value) || utils.isString(value)) && utils.isString(pattern)) {
    if (value.indexOf(pattern) > -1) {
      return utils.fn(true, this, options);
    }
  }
  if (utils.isObject(value) && utils.isString(pattern) && pattern in value) {
    return utils.fn(true, this, options);
  }
  return utils.inverse(false, this, options);
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
 */

helpers.ifEven = function(num, options) {
  const isEven = (+num & 1) === 0;
  return utils.value(isEven, this, options);
};

/**
 * Conditionally renders a block if the remainder is zero when
 * `b` operand is divided by `a`. If an inverse block is specified
 * it will be rendered when the remainder is **not zero**.
 *
 * @param {Number}
 * @param {Number}
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

helpers.ifNth = function(a, b, options) {
  const isNth = utils.isNumber(a) && utils.isNumber(b) && b % a === 0;
  return utils.value(isNth, this, options);
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
 * @param {Number} `num`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

helpers.ifOdd = function(num, options) {
  const isOdd = (+num & 1) === 1;
  return utils.value(isOdd, this, options);
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
 */

helpers.is = function(a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  return utils.value(a == b, this, options);
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
 */

helpers.isnt = function(a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  return utils.value(a != b, this, options);
};

/**
 * Block helper that renders a block if `a` is **less than** `b`.
 *
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=""` hash argument for the
 * second value.
 *
 * @param {Object} `context`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

helpers.lt = function(a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  return utils.value(a < b, this, options);
};

/**
 * Block helper that renders a block if `a` is **less than or
 * equal to** `b`.
 *
 * If an inverse block is specified it will be rendered when falsy.
 * You may optionally use the `compare=""` hash argument for the
 * second value.
 *
 * @param {Sring} `a`
 * @param {Sring} `b`
 * @param {Object} `options` Handlebars provided options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @block
 * @api public
 */

helpers.lte = function(a, b, options) {
  if (arguments.length === 2) {
    options = b;
    b = options.hash.compare;
  }
  return utils.value(a <= b, this, options);
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
 */

helpers.neither = function(a, b, options) {
  return utils.value(!a && !b, this, options);
};

/**
 * Returns true if `val` is falsey. Works as a block or inline helper.
 *
 * @param {String} `val`
 * @param {Object} `options` Handlebars provided options object
 * @return {String}
 * @block
 * @api public
 */

helpers.not = function(val, options) {
  return utils.value(!val, this, options);
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
 */

helpers.or = function(/* any, any, ..., options */) {
  const len = arguments.length - 1;
  const options = arguments[len];
  let val = false;

  for (let i = 0; i < len; i++) {
    if (arguments[i]) {
      val = true;
      break;
    }
  }
  return utils.value(val, this, options);
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
 */

helpers.unlessEq = function(a, b, options) {
  if (utils.isOptions(b)) {
    options = b;
    b = options.hash.compare;
  }
  return utils.value(a !== b, this, options);
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
 */

helpers.unlessGt = function(a, b, options) {
  if (utils.isOptions(b)) {
    options = b;
    b = options.hash.compare;
  }
  return utils.value(a <= b, this, options);
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
 */

helpers.unlessLt = function(a, b, options) {
  if (utils.isOptions(b)) {
    options = b;
    b = options.hash.compare;
  }
  return utils.value(a >= b, this, options);
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
 */

helpers.unlessGteq = function(a, b, options) {
  if (utils.isOptions(b)) {
    options = b;
    b = options.hash.compare;
  }
  return utils.value(a < b, this, options);
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
 */

helpers.unlessLteq = function(a, b, options) {
  if (utils.isOptions(b)) {
    options = b;
    b = options.hash.compare;
  }
  return utils.value(a > b, this, options);
};
