
/**
 * Handlebars Library.addHelper('<http://github.com/assemble/handlebars-Library.addHelper('
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */

  Library.addHelper('contains', function (str, pattern, options) {
    if (str.indexOf(pattern) !== -1) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  Library.addHelper('and', function (a, b, options) {
    if (a && b) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Library.addHelper('gt', function (value, test, options) {
    if (value > test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Library.addHelper('gte', function (value, test, options) {
    if (value >= test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Library.addHelper('is', function (value, test, options) {
    if (value === test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Library.addHelper('isnt', function (value, test, options) {
    if (value !== test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Library.addHelper('lt', function (value, test, options) {
    if (value < test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  Library.addHelper('lte', function (value, test, options) {
    if (value <= test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  /**
   * Or
   * Conditionally render a block if one of the values is truthy.
   */
  Library.addHelper('or', function (a, b, options) {
    if (a || b) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  /**
   * ifNth
   * Conditionally render a block if mod(nr, v) is 0
   */
  Library.addHelper('ifNth', function (nr, v, options) {
    v = v+1;
    if (v % nr === 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });

  /**
   * {{#compare}}...{{/compare}}
   *
   * @credit: OOCSS
   * @param left value
   * @param operator The operator, must be between quotes ">", "=", "<=", etc...
   * @param right value
   * @param options option object sent by handlebars
   * @return {String} formatted html
   *
   * @example:
   *   {{#compare unicorns "<" ponies}}
   *     I knew it, unicorns are just low-quality ponies!
   *   {{/compare}}
   *
   *   {{#compare value ">=" 10}}
   *     The value is greater or equal than 10
   *     {{else}}
   *     The value is lower than 10
   *   {{/compare}}
   */
  Library.addHelper('compare', function(left, operator, right, options) {
    /*jshint eqeqeq: false*/

    if (arguments.length < 3) {
      throw new Error('Handlerbars Helper "compare" needs 2 parameters');
    }

    if (options === undefined) {
      options = right;
      right = operator;
      operator = '===';
    }

    var operators = {
      '==':     function(l, r) {return l == r; },
      '===':    function(l, r) {return l === r; },
      '!=':     function(l, r) {return l != r; },
      '!==':    function(l, r) {return l !== r; },
      '<':      function(l, r) {return l < r; },
      '>':      function(l, r) {return l > r; },
      '<=':     function(l, r) {return l <= r; },
      '>=':     function(l, r) {return l >= r; },
      'typeof': function(l, r) {return typeof l == r; }
    };

    if (!operators[operator]) {
      throw new Error('Handlerbars Helper "compare" doesn\'t know the operator ' + operator);
    }

    var result = operators[operator](left, right);

    if (result) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });


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
  Library.addHelper('if_eq', function (context, options) {
    if (context === options.hash.compare) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

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
  Library.addHelper('unless_eq', function (context, options) {
    if (context === options.hash.compare) {
      return options.inverse(this);
    }
    return options.fn(this);
  });

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
  Library.addHelper('if_gt', function (context, options) {
    if (context > options.hash.compare) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

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
  Library.addHelper('unless_gt', function (context, options) {
    if (context > options.hash.compare) {
      return options.inverse(this);
    }
    return options.fn(this);
  });

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
  Library.addHelper('if_lt', function (context, options) {
    if (context < options.hash.compare) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

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
  Library.addHelper('unless_lt', function (context, options) {
    if (context < options.hash.compare) {
      return options.inverse(this);
    }
    return options.fn(this);
  });

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
  Library.addHelper('if_gteq', function (context, options) {
    if (context >= options.hash.compare) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

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
  Library.addHelper('unless_gteq', function (context, options) {
    if (context >= options.hash.compare) {
      return options.inverse(this);
    }
    return options.fn(this);
  });

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
  Library.addHelper('if_lteq', function (context, options) {
    if (context <= options.hash.compare) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

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
  Library.addHelper('unless_lteq', function (context, options) {
    if (context <= options.hash.compare) {
      return options.inverse(this);
    }
    return options.fn(this);
  });

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
  Library.addHelper('ifAny', function () {
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
  });

  // Aliases
  Library.addHelper('ifeq',       Library.helpers['if_eq']);
  Library.addHelper('unlessEq',   Library.helpers['unless_eq']);
  Library.addHelper('ifgt',       Library.helpers['if_gt']);
  Library.addHelper('unlessGt',   Library.helpers['unless_gt']);
  Library.addHelper('iflt',       Library.helpers['if_lt']);
  Library.addHelper('unlessLt',   Library.helpers['unless_lt']);
  Library.addHelper('ifgteq',     Library.helpers['if_gteq']);
  Library.addHelper('unlessGtEq', Library.helpers['unless_gteq']);
  Library.addHelper('ifLtEq',     Library.helpers['if_lteq']);
  Library.addHelper('unlessLtEq', Library.helpers['unless_lteq']);

