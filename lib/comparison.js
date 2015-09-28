'use strict';

var isOdd = require('is-odd');
var isEven = require('is-even');
var contains = require('./utils/contains');
var isObject = require('./object').isObject;
var isString = require('./string').isString;
var utils = require('./utils/');

/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * Block helper that renders the block if **both** of the given values
 * are truthy. If an inverse block is specified it will be rendered
 * when falsy.
 *
 * @param {type} `a`
 * @param {type} `b`
 * @param {type} `options`
 * @return {String}
 * @api public
 */

helpers.and = function(a, b, options) {
  if (a && b) {
    return options.fn(this);
  }
  return options.inverse(this);
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
 * @param `options` Handlebars options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @api public
 */

helpers.compare = function(a, operator, b, options) {
  /*jshint eqeqeq: false*/

  if (arguments.length < 4) {
    throw new Error('handlebars Helper {{compare}} expects 2 arguments.');
  }

  var result;

  switch(operator) {
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
  };

  if (result === false) {
    return options.inverse(this);
  }
  return options.fn(this);
};

/**
 * Block helper that renders the block if `collection` has the
 * given `value`, using strict equality (`===`) for comparison,
 * otherwise the inverse block is rendered (if specified). If a
 * `startIndex` is specified and is negative, it is used as the
 * offset from the end of the collection.
 *
 * Given the array `['a', 'b', 'c']`:
 *
 * ```handlebars
 * {{#contains array "d"}}
 *   This will not be rendered.
 * {{else}}
 *   This will be rendered.
 * {{/contains}}
 * ```
 * @param {Array|Object|String} `collection` The collection to iterate over.
 * @param {any} `value` The value to check for.
 * @param {Number} `[startIndex=0]` Optionally define the starting index.
 * @param {Object} `options` Handlebars provided options object.
 * @api public
 */

helpers.contains = function(collection, value, startIndex, options) {
  if (typeof startIndex === 'object') {
    options = startIndex;
    startIndex = undefined;
  }
  if (contains(collection, value, startIndex)) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * @name .gt
 * @param {type} `value`
 * @param {type} `test`
 * @param {type} `options`
 * @return {Boolean}
 * @api public
 */

helpers.gt = function(value, test, options) {
  if (value > test) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * @name .gte
 * @param {type} `value`
 * @param {type} `test`
 * @param {type} `options`
 * @return {Boolean}
 * @api public
 */

helpers.gte = function(value, test, options) {
  if (value >= test) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Block helper that renders a block if `value` has `pattern`.
 * If an inverse block is specified it will be rendered when falsy.
 *
 * @param {any} `val` The value to check.
 * @param {any} `pattern` The pattern to check for.
 * @param {Object} `options`
 * @return {String}
 * @api public
 */

helpers.has = function(value, pattern, options) {
  if (typeof pattern === 'undefined') {
    return options.inverse(this);
  }

  if ((Array.isArray(value) || isString(value)) && isString(pattern)) {
    if (value.indexOf(pattern) > -1) {
      return options.fn(this);
    }
  }

  if (isObject(value) && isString(pattern) && pattern in value) {
    return options.fn(this);
  }

  if (typeof value === 'object' && Array.isArray(pattern)) {
    var len = pattern.length;
    while (len--) {
      if (helpers.has(value, pattern[len])) {
        return options.fn(this);
      }
    }
    return options.inverse(this);
  }
};

/**
 * Similar to {{#if}} block helper but accepts multiple arguments.
 *
 * ```js
 * {{ifAny this compare=that}}
 * ```
 * @param {type} `context`
 * @param {type} `options`
 * @return {String} Block, or inverse block if specified and falsey.
 * @api public
 */

helpers.ifAny = function() {
  var len = arguments.length - 2;
  var options = arguments[len + 1];
  var success = true;
  var i = 0;
  while (i < len) {
    if (!arguments[i]) {
      success = false;
      break;
    }
    i += 1;
  }
  if (success) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

/**
 * @name .ifEq
 * @param {type} `context`
 * @param {type} `options`
 * @return {String} Block, or inverse block if specified and falsey.
 * @api public
 */

helpers.ifEq = function(context, options) {
  if (context === options.hash.compare) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Return true if the given vaue is an even number.
 *
 * ```handlebars
 * {{#ifEven value}}
 *   render A
 * {{else}}
 *   render B
 * {{/ifEven}}
 * ```
 * @param  {Object} `context`
 * @param  {Object} `options`
 * @return {String} Block, or inverse block if specified and falsey.
 * @api public
 */

helpers.ifEven = function(val, options) {
  return isEven(val) ? options.fn(this) : options.inverse(this);
};

/**
 * @name .ifGt
 * @param {type} `context`
 * @param {type} `options`
 * @return {String} Block, or inverse block if specified and falsey.
 * @api public
 */

helpers.ifGt = function(context, options) {
  if (context > options.hash.compare) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * @name .ifGt
 * @param {type} `context`
 * @param {type} `options`
 * @return {String} Block, or inverse block if specified and falsey.
 * @api public
 */

helpers.ifGteq = function(context, options) {
  if (context >= options.hash.compare) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * @name .ifGt
 * @param {type} `context`
 * @param {type} `options`
 * @return {String} Block, or inverse block if specified and falsey.
 * @api public
 */

helpers.ifLt = function(context, options) {
  if (context < options.hash.compare) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * @name .ifGt
 * @param {type} `context`
 * @param {type} `options`
 * @return {String} Block, or inverse block if specified and falsey.
 * @api public
 */

helpers.ifLteq = function(context, options) {
  if (context <= options.hash.compare) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Conditionally renders a block if the remainder is zero when
 * an operand is divided by a second operand. If an inverse block is
 * specified it will be rendered when the remainder is not zero.
 *
 * @param {Number}
 * @param {Number}
 * @param `options` Handlebars options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @api public
 */

helpers.ifNth = function(a, b, options) {
  if (++b % a === 0) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Return true if the given vaue is an odd number.
 *
 * ```handlebars
 * {{#ifOdd value}}
 *   render A
 * {{else}}
 *   render B
 * {{/ifOdd}}
 * ```
 * @param  {Object} `context`
 * @param  {Object} `options`
 * @return {String} Block, or inverse block if specified and falsey.
 * @api public
 */

helpers.ifOdd = function(val, options) {
  return isOdd(val) ? options.fn(this) : options.inverse(this);
};

/**
 * @name .is
 * @param {type} `value`
 * @param {type} `test`
 * @param {type} `options`
 * @return {Boolean}
 * @api public
 */

helpers.is = function(value, test, options) {
  if (value === test) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * @name .isnt
 * @param {type} `value`
 * @param {type} `test`
 * @param {type} `options`
 * @return {Boolean}
 * @api public
 */

helpers.isnt = function(value, test, options) {
  if (value !== test) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * @name .lt
 * @param {type} `value`
 * @param {type} `test`
 * @param {type} `options`
 * @return {Boolean}
 * @api public
 */

helpers.lt = function(value, test, options) {
  if (value < test) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * @name .lte
 * @param {type} `value`
 * @param {type} `test`
 * @param {type} `options`
 * @param `options` Handlebars options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @api public
 */

helpers.lte = function(value, test, options) {
  if (value <= test) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Conditionally render a block if **either of** the given values
 * is truthy. If an inverse block is specified it will be rendered
 * when falsy.
 *
 * @param {any} `a`
 * @param {any} `b`
 * @param `options` Handlebars options object
 * @return {String} Block, or inverse block if specified and falsey.
 * @api public
 */

helpers.or = function(a, b, options) {
  if (a || b) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * @name .unlessEq
 * @param {type} `context`
 * @param {type} `options`
 * @return {String} Inverse block by default, or block if falsey.
 * @api public
 */

helpers.unlessEq = function(context, options) {
  if (context === options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};

/**
 * @name .unlessGt
 * @param {type} `context`
 * @param {type} `options`
 * @return {String} Inverse block by default, or block if falsey.
 * @api public
 */

helpers.unlessGt = function(context, options) {
  if (context > options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};

/**
 * @name .ifGt
 * @param {type} `context`
 * @param {type} `options`
 * @return {String} Block, or inverse block if specified and falsey.
 * @api public
 */

helpers.unlessLt = function(context, options) {
  if (context < options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};

/**
 * @name .ifGt
 * @param {type} `context`
 * @param {type} `options`
 * @return {String} Block, or inverse block if specified and falsey.
 * @api public
 */

helpers.unlessGteq = function(context, options) {
  if (context >= options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};

/**
 * @name .ifGt
 * @param {type} `context`
 * @param {type} `options`
 * @return {String} Block, or inverse block if specified and falsey.
 * @api public
 */

helpers.unlessLteq = function(context, options) {
  if (context <= options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};
