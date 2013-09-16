/**
 * Handlebars Comparison Helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */


// NPM modules.
var _ = require('lodash');


// The module to be exported
var helpers = module.exports = {

  contains: function (str, pattern, options) {
    if (str.indexOf(pattern) !== -1) {
      return options.fn(this);
    }
    return options.inverse(this);
  },

  and: function (a, b, options) {
    if (a && b) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  },

  gt: function (value, test, options) {
    if (value > test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  },

  gte: function (value, test, options) {
    if (value >= test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  },

  is: function (value, test, options) {
    if (value === test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  },

  isnt: function (value, test, options) {
    if (value !== test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  },

  lt: function (value, test, options) {
    if (value < test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  },

  lte: function (value, test, options) {
    if (value <= test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  },

  or: function (a, b, options) {
    if (a || b) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  },

  /**
   * {{if_eq}}
   *
   * @author: Dan Harper <http://github.com/danharper>
   *
   * @param  {[type]} context [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   *
   * @example: {{if_eq this compare=that}}
   */
  if_eq: function (context, options) {
    if (context === options.hash.compare) {
      return options.fn(this);
    }
    return options.inverse(this);
  },

  /**
   * {{unless_eq}}
   * @author: Dan Harper <http://github.com/danharper>
   *
   * @param  {[type]} context [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   *
   * @example: {{unless_eq this compare=that}}
   */
  unless_eq: function (context, options) {
    if (context === options.hash.compare) {
      return options.inverse(this);
    }
    return options.fn(this);
  },

  /**
   * {{if_gt}}
   * @author: Dan Harper <http://github.com/danharper>
   *
   * @param  {[type]} context [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   *
   * @example: {{if_gt this compare=that}}
   */
  if_gt: function (context, options) {
    if (context > options.hash.compare) {
      return options.fn(this);
    }
    return options.inverse(this);
  },

  /**
   * {{unless_gt}}
   * @author: Dan Harper <http://github.com/danharper>
   *
   * @param  {[type]} context [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   *
   * @example: {{unless_gt this compare=that}}
   */
  unless_gt: function (context, options) {
    if (context > options.hash.compare) {
      return options.inverse(this);
    }
    return options.fn(this);
  },

  /**
   * {{if_lt}}
   * @author: Dan Harper <http://github.com/danharper>
   *
   * @param  {[type]} context [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   *
   * @example: {{if_lt this compare=that}}
   */
  if_lt: function (context, options) {
    if (context < options.hash.compare) {
      return options.fn(this);
    }
    return options.inverse(this);
  },

  /**
   * {{unless_lt}}
   * @author: Dan Harper <http://github.com/danharper>
   *
   * @param  {[type]} context [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   *
   * @example: {{unless_lt this compare=that}}
   */
  unless_lt: function (context, options) {
    if (context < options.hash.compare) {
      return options.inverse(this);
    }
    return options.fn(this);
  },

  /**
   * {{if_gteq}}
   * @author: Dan Harper <http://github.com/danharper>
   *
   * @param  {[type]} context [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   *
   * @example: {{if_gteq this compare=that}}
   */
  if_gteq: function (context, options) {
    if (context >= options.hash.compare) {
      return options.fn(this);
    }
    return options.inverse(this);
  },

  /**
   * {{unless_gteq}}
   * @author: Dan Harper <http://github.com/danharper>
   *
   * @param  {[type]} context [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   *
   * @example: {{unless_gteq this compare=that}}
   */
  unless_gteq: function (context, options) {
    if (context >= options.hash.compare) {
      return options.inverse(this);
    }
    return options.fn(this);
  },

  /**
   * {{if_lteq}}
   * @author: Dan Harper <http://github.com/danharper>
   *
   * @param  {[type]} context [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   *
   * @example: {{if_lteq this compare=that}}
   */
  if_lteq: function (context, options) {
    if (context <= options.hash.compare) {
      return options.fn(this);
    }
    return options.inverse(this);
  },

  /**
   * {{unless_lteq}}
   * @author: Dan Harper <http://github.com/danharper>
   *
   * @param  {[type]} context [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   *
   * @example: {{unless_lteq this compare=that}}
   */
  unless_lteq: function (context, options) {
    if (context <= options.hash.compare) {
      return options.inverse(this);
    }
    return options.fn(this);
  },

  /**
   * {{ifAny}}
   * Similar to {{#if}} block helper but accepts multiple arguments.
   * @author: Dan Harper <http://github.com/danharper>
   *
   * @param  {[type]} context [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   *
   * @example: {{ifAny this compare=that}}
   */
  ifAny: function () {
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
  }
};

// Aliases
helpers.ifeq       = helpers.if_eq;
helpers.unlessEq   = helpers.unless_eq;
helpers.ifgt       = helpers.if_gt;
helpers.unlessGt   = helpers.unless_gt;
helpers.iflt       = helpers.if_lt;
helpers.unlessLt   = helpers.unless_lt;
helpers.ifgteq     = helpers.if_gteq;
helpers.unlessGtEq = helpers.unless_gteq;
helpers.ifLtEq     = helpers.if_lteq;
helpers.unlessLtEq = helpers.unless_lteq;

// Export helpers
module.exports.register = function (Handlebars, options) {
  options = options || {};

  for (var helper in helpers) {
    if (helpers.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, helpers[helper]);
    }
  }
};