'use strict';

var any = require('any');
var contains = require('../utils/contains');

/**
 * Checks if a given value is present in a collection using strict
 * equality for comparisons, i.e. `===`. If fromIndex is negative,
 * it is used as the offset from the end of the collection.
 *
 * @param {Array|Object|string} `collection` The collection to iterate over.
 * @param {*} `target` The value to check for.
 * @param {Number} `[fromIndex=0]` Optionally define the index to search from.
 * @api public
 */

exports.contains = function(collection, value, fromIndex, options) {
  if (typeof fromIndex === 'object') {
    options = fromIndex;
    fromIndex = null;
  }

  if (contains(collection, value, fromIndex)) {
    return options.fn(this);
  }

  return options.inverse(this);
};

/**
 * Returns `true` if a value exists in the given string, array or
 * object, or if a callback is passed checks to see if a truthy
 * value is returned for any element in a collection or for any
 * sub-string in a string.
 *
 * @param {*} `val` The value to check.
 * @param {*} `pattern` The pattern to check for.
 * @param {Object} `options`
 * @return {Boolean}
 * @api public
 */

exports.any = function(val, pattern, options) {
  if (any.apply(any, arguments)) {
    return options.fn(this);
  }
  return options.inverse(this);
};

exports.and = function(a, b, options) {
  if (a && b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

exports.gt = function(value, test, options) {
  if (value > test) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

exports.gte = function(value, test, options) {
  if (value >= test) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

exports.is = function(value, test, options) {
  if (value === test) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

exports.isnt = function(value, test, options) {
  if (value !== test) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

exports.lt = function(value, test, options) {
  if (value < test) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

exports.lte = function(value, test, options) {
  if (value <= test) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

/**
 * Conditionally render a block if one of the values is truthy.
 */

exports.or = function(a, b, options) {
  if (a || b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

/**
 * Conditionally render a block if `mod(nr, val)` is 0
 */

exports.ifNth = function(nr, val, options) {
  val = val + 1;
  if (val % nr === 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

/**
 * @param left value
 * @param operator The operator, must be between quotes ">", "=", "<=", etc...
 * @param right value
 * @param options option object sent by handlebars
 * @return {String} formatted html
 */

exports.compare = function(left, operator, right, options) {
  /*jshint eqeqeq: false*/

  if (arguments.length < 3) {
    throw new Error('handlebars Helper {{compare}} expects 2 parameters.');
  }

  if (options === undefined) {
    options = right;
    right = operator;
    operator = '===';
  }

  var operators = {
    '==': function(l, r) {
      return l == r;
    },
    '===': function(l, r) {
      return l === r;
    },
    '!=': function(l, r) {
      return l != r;
    },
    '!==': function(l, r) {
      return l !== r;
    },
    '<': function(l, r) {
      return l < r;
    },
    '>': function(l, r) {
      return l > r;
    },
    '<=': function(l, r) {
      return l <= r;
    },
    '>=': function(l, r) {
      return l >= r;
    },
    'typeof': function(l, r) {
      return typeof l == r;
    }
  };

  if (!operators[operator]) {
    throw new Error('helper {{compare}} doesn\'t know the operator: `' + operator + '`');
  }

  var res = operators[operator](left, right);
  if (res) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

/**
 * @source: Dan Harper <http://github.com/danharper>
 *
 * @param  {[type]} context
 * @param  {[type]} options
 * @return {[type]}
 *
 * @example: {{if_eq this compare=that}}
 */

exports.if_eq = function(context, options) {
  if (context === options.hash.compare) {
    return options.fn(this);
  }
  return options.inverse(this);
};

exports.unless_eq = function(context, options) {
  if (context === options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};

exports.if_gt = function(context, options) {
  if (context > options.hash.compare) {
    return options.fn(this);
  }
  return options.inverse(this);
};

exports.unless_gt = function(context, options) {
  if (context > options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};

exports.if_lt = function(context, options) {
  if (context < options.hash.compare) {
    return options.fn(this);
  }
  return options.inverse(this);
};

exports.unless_lt = function(context, options) {
  if (context < options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};

exports.if_gteq = function(context, options) {
  if (context >= options.hash.compare) {
    return options.fn(this);
  }
  return options.inverse(this);
};

exports.unless_gteq = function(context, options) {
  if (context >= options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};

exports.if_lteq = function(context, options) {
  if (context <= options.hash.compare) {
    return options.fn(this);
  }
  return options.inverse(this);
};

exports.unless_lteq = function(context, options) {
  if (context <= options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};

/**
 * Similar to {{#if}} block helper but accepts multiple arguments.
 *
 * ```js
 * {{ifAny this compare=that}}
 * ```
 */

exports.ifAny = function() {
  var argLength = arguments.length - 2;
  var content = arguments[argLength + 1];
  var success = true;
  var i = 0;
  while (i < argLength) {
    if (!arguments[i]) {
      success = false;
      break;
    }
    i += 1;
  }
  if (success) {
    return content(this);
  } else {
    return content.inverse(this);
  }
};

/**
 * Return true if `@index` is an even number.
 *
 * ```handlebars
 * {{ifEven @index}}
 * ```
 *
 * Contributed by Michael Sheedy <http://github.com/sheedy>
 * @source: Stack Overflow Answer <http://bit.ly/1tAgtpO>
 * @param  {Object} `context`
 * @param  {Object} `options`
 * @return {Boolean}
 */

exports.ifEven = function(conditional, options) {
  if ((conditional % 2) == 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};
