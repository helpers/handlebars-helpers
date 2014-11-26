'use strict';

var _ = require('lodash');


/**
 * Expose `helpers`
 */

var helpers = {};


helpers.contains = function(str, pattern, options) {
  if (str.indexOf(pattern) !== -1) {
    return options.fn(this);
  }
  return options.inverse(this);
};

helpers.and = function(a, b, options) {
  if (a && b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

helpers.gt = function(value, test, options) {
  if (value > test) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

helpers.gte = function(value, test, options) {
  if (value >= test) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

helpers.is = function(value, test, options) {
  if (value === test) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

helpers.isnt = function(value, test, options) {
  if (value !== test) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

helpers.lt = function(value, test, options) {
  if (value < test) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

helpers.lte = function(value, test, options) {
  if (value <= test) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

/**
 * Or
 * Conditionally render a block if one of the values is truthy.
 */

helpers.or = function(a, b, options) {
  if (a || b) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

/**
 * ifNth
 * Conditionally render a block if mod(nr, v) is 0
 */

helpers.ifNth = function(nr, v, options) {
  v = v + 1;
  if (v % nr === 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

/**
 * @credit: OOCSS
 * @param left value
 * @param operator The operator, must be between quotes ">", "=", "<=", etc...
 * @param right value
 * @param options option object sent by handlebars
 * @return {String} formatted html
 *
 * @example:
 *   {{#compare unicorns "<" ponies}}
 *
 *
    I knew it, unicorns are just low-quality ponies!
 *   {{/compare}}
 *
 *   {{#compare value ">=" 10}}
 *
 *
    The value is greater or equal than 10
 *     {{else}}
 *
 *
    The value is lower than 10
 *   {{/compare}}
 */

helpers.compare = function(left, operator, right, options) {
  /*jshint eqeqeq: false*/

  if (arguments.length < 3) {
    throw new Error('Handlebars Helper "compare" needs 2 parameters');
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
    throw new Error('Handlebars Helper "compare" doesn\'t know the operator ' + operator);
  }

  var result = operators[operator](left, right);

  if (result) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};


/**
 * @contributor: Dan Harper <http://github.com/danharper>
 *
 * @param  {[type]} context [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 *
 * @example: {{if_eq this compare=that}}
 */

helpers.if_eq = function(context, options) {
  if (context === options.hash.compare) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 *
@contributor: Dan Harper <http://github.com/danharper>
 *
 * @param  {[type]} context [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 *
 * @example: {{unless_eq this compare=that}}
 */

helpers.unless_eq = function(context, options) {
  if (context === options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};

/**
 *
@contributor: Dan Harper <http://github.com/danharper>
 *
 * @param  {[type]} context [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 *
 * @example: {{if_gt this compare=that}}
 */

helpers.if_gt = function(context, options) {
  if (context > options.hash.compare) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 *
@contributor: Dan Harper <http://github.com/danharper>
 *
 * @param  {[type]} context [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 *
 * @example: {{unless_gt this compare=that}}
 */

helpers.unless_gt = function(context, options) {
  if (context > options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};

/**
 *
@contributor: Dan Harper <http://github.com/danharper>
 *
 * @param  {[type]} context [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 *
 * @example: {{if_lt this compare=that}}
 */

helpers.if_lt = function(context, options) {
  if (context < options.hash.compare) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 *
@contributor: Dan Harper <http://github.com/danharper>
 *
 * @param  {[type]} context [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 *
 * @example: {{unless_lt this compare=that}}
 */

helpers.unless_lt = function(context, options) {
  if (context < options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};

/**
 *
@contributor: Dan Harper <http://github.com/danharper>
 *
 * @param  {[type]} context [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 *
 * @example: {{if_gteq this compare=that}}
 */

helpers.if_gteq = function(context, options) {
  if (context >= options.hash.compare) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 *
@contributor: Dan Harper <http://github.com/danharper>
 *
 * @param  {[type]} context [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 *
 * @example: {{unless_gteq this compare=that}}
 */

helpers.unless_gteq = function(context, options) {
  if (context >= options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};

/**
 *
@contributor: Dan Harper <http://github.com/danharper>
 *
 * @param  {[type]} context [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 *
 * @example: {{if_lteq this compare=that}}
 */

helpers.if_lteq = function(context, options) {
  if (context <= options.hash.compare) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 *
@contributor: Dan Harper <http://github.com/danharper>
 *
 * @param  {[type]} context [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 *
 * @example: {{unless_lteq this compare=that}}
 */

helpers.unless_lteq = function(context, options) {
  if (context <= options.hash.compare) {
    return options.inverse(this);
  }
  return options.fn(this);
};

/**
 *
Similar to {{#if}} block helper but accepts multiple arguments.
 * @contributor: Dan Harper <http://github.com/danharper>
 *
 * @param  {[type]} context [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 *
 * @example: {{ifAny this compare=that}}
 */

helpers.ifAny = function() {
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
 *
Determine whether or not the @index is an even number or not
 * @contributor: Stack Overflow Answer <http://stackoverflow.com/questions/18976274/odd-and-even-number-comparison-helper-for-handlebars/18993156#18993156>
 * @contributor: Michael Sheedy <http://github.com/sheedy> (found code and added to repo)
 *
 * @param  {[type]} context [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 *
 * @example: {{ifEven @index}}
 */

helpers.ifEven = function(conditional, options) {
  if ((conditional % 2) == 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};


// Aliases
helpers.ifeq = helpers.if_eq;
helpers.unlessEq = helpers.unless_eq;
helpers.ifgt = helpers.if_gt;
helpers.unlessGt = helpers.unless_gt;
helpers.iflt = helpers.if_lt;
helpers.unlessLt = helpers.unless_lt;
helpers.ifgteq = helpers.if_gteq;
helpers.unlessGtEq = helpers.unless_gteq;
helpers.ifLtEq = helpers.if_lteq;
helpers.unlessLtEq = helpers.unless_lteq;


// Export helpers
module.exports = helpers;
