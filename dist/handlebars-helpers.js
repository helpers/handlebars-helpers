/*!
 * handlebars-helpers v0.6.0 <https://github.com/assemble/handlebars-helpers>
 * Copyright (c) 2013-2014, Jon Schlinkert, Brian Woodward, contributors.
 * Source code licensed under the MIT license.

 * Thank you to Elving Rodriquez. Many of the helpers in this library
 * originated in Swag. This library has been super useful because of
 * your hard work!
 *
 * Swag <http://elving.github.com/swag/>
 * Copyright 2012 Elving Rodriguez <http://elving.me/>
 * MIT license <https://raw.github.com/elving/swag/master/LICENSE>
 */


var _ = require('lodash');
var path = require('path');
var file = require('fs-utils');
var matter = require('gray-matter');
var sort = require('sort-object');
var marked = require('marked');
var extras = require('marked-extras');
var url = require('url');
var helpersUtils = require('helpers-utils');

var utils = helpersUtils.Utils;
var Library = helpersUtils.Library;

var Utils = require("../../src/utils/utils");
var Glob = require("../../src/utils/glob");
var Dates = require("../../src/utils/dates");
var HTML = require("../../src/utils/html");
var _indexOf = require( "../../src/utils/lib/indexOf");

var specs = {
  context: function () { return {}; },
  options: { },
  registerHelper: function () { },
  registerFunction: function () { },
  registerHelpers: function () { },
  registerFunctions: function () { },
  Handlebars: {
    safeString: function (str) {
      return utils.safeString(str);
    }
  }
};

var HandlebarsHelpers = function (config) {
  utils.expects(config, specs);
  var Handlebars = config.Handlebars;
  var options = config.options;
	// Source File: ./src/helpers/collections.js


var _indexOf = [].indexOf || function (item) {
  for (var i = 0, l = this.length; i < l; i++) {
    if (i in this && this[i] === item) {
      return i;
    }
  }
  return -1;
};

Library.addHelper('first', function (array, count) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    if (!Utils.isUndefined(count)) {
      count = parseFloat(Utils.result(count));
    }
    if (Utils.isUndefined(count)) {
      return array[0];
    } else {
      return array.slice(0, count);
    }
  } else {
    return Utils.err('{{first}} takes at least one argument (array).');
  }
});

Library.addHelper('withFirst', function (array, count, options) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    if (!Utils.isUndefined(count)) {
      count = parseFloat(Utils.result(count));
    }
    if (Utils.isUndefined(count)) {
      options = count;
      return options.fn(array[0]);
    } else {
      array = array.slice(0, count);
      var result = '';
      for (var item in array) {
        result += options.fn(array[item]);
      }
      return result;
    }
  } else {
    return Utils.err('{{withFirst}} takes at least one argument (array).');
  }
});

Library.addHelper('last', function (array, count) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    if (!Utils.isUndefined(count)) {
      count = parseFloat(Utils.result(count));
    }
    if (Utils.isUndefined(count)) {
      return array[array.length - 1];
    } else {
      return array.slice(-count);
    }
  } else {
    return Utils.err('{{last}} takes at least one argument (array).');
  }
});

Library.addHelper('withLast', function (array, count, options) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    if (!Utils.isUndefined(count)) {
      count = parseFloat(Utils.result(count));
    }
    if (Utils.isUndefined(count)) {
      options = count;
      return options.fn(array[array.length - 1]);
    } else {
      array = array.slice(-count);
      var result = '';
      for (var item in array) {
        result += options.fn(array[item]);
      }
      return result;
    }
  } else {
    return Utils.err('{{withLast}} takes at least one argument (array).');
  }
});

Library.addHelper('after', function (array, count) {
  if (!((Utils.isUndefined(array)) && (Utils.isUndefined(count)))) {
    array = Utils.result(array);
    if (!Utils.isUndefined(count)) {
      count = parseFloat(Utils.result(count));
    }
    return array.slice(count);
  } else {
    return Utils.err('{{after}} takes two arguments (array, number).');
  }
});

Library.addHelper('withAfter', function (array, count, options) {
  if (!((Utils.isUndefined(array)) && (Utils.isUndefined(count)))) {
    array = Utils.result(array);
    if (!Utils.isUndefined(count)) {
      count = parseFloat(Utils.result(count));
    }
    array = array.slice(count);
    var result = '';
    for (var item in array) {
      result += options.fn(array[item]);
    }
    return result;
  } else {
    return Utils.err('{{withAfter}} takes two arguments (array, number).');
  }
});

Library.addHelper('before', function (array, count) {
  if (!((Utils.isUndefined(array)) && (Utils.isUndefined(count)))) {
    array = Utils.result(array);
    if (!Utils.isUndefined(count)) {
      count = parseFloat(Utils.result(count));
    }
    return array.slice(0, -count);
  } else {
    return Utils.err('{{before}} takes two arguments (array, number).');
  }
});

Library.addHelper('withBefore', function (array, count, options) {
  if (!((Utils.isUndefined(array)) && (Utils.isUndefined(count)))) {
    array = Utils.result(array);
    if (!Utils.isUndefined(count)) {
      count = parseFloat(Utils.result(count));
    }
    array = array.slice(0, -count);
    var result = '';
    for (var item in array) {
      result += options.fn(array[item]);
    }
    return result;
  } else {
    return Utils.err('{{withBefore}} takes two arguments (array, number).');
  }
});

Library.addHelper('join', function (array, separator) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    if (!Utils.isUndefined(separator)) {
      separator = Utils.result(separator);
    }
    return array.join(Utils.isUndefined(separator) ? ' ' : separator);
  } else {
    return Utils.err('{{join}} takes at least one argument (array).');
  }
});

Library.addHelper('sort', function (array, field) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    if (Utils.isUndefined(field)) {
      return array.sort();
    } else {
      field = Utils.result(field);
      return array.sort(function (a, b) {
        return a[field] > b[field];
      });
    }
  } else {
    return Utils.err('{{sort}} takes at least one argument (array).');
  }
});

Library.addHelper('withSort', function (array, field, options) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    var result = '';
    if (Utils.isUndefined(field)) {
      options = field;
      array = array.sort();
      for (var i = 0, len = array.length; i < len; i++) {
        var item = array[i];
        result += options.fn(item);
      }
    } else {
      field = Utils.result(field);
      array = array.sort(function (a, b) {
        return a[field] > b[field];
      });
      for (item in array) {
        result += options.fn(array[item]);
      }
    }
    return result;
  } else {
    return Utils.err('{{withSort}} takes at least one argument (array).');
  }
});

Library.addHelper('length', function (array) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    return array.length;
  } else {
    return Utils.err('{{length}} takes one argument (array).');
  }
});

Library.addHelper('lengthEqual', function (array, length, options) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    if (!Utils.isUndefined(length)) {
      length = parseFloat(Utils.result(length));
    }
    if (array.length === length) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{lengthEqual}} takes two arguments (array, number).');
  }
});

Library.addHelper('empty', function (array, options) {
  if (!Utils.isHandlebarsSpecific(array)) {
    array = Utils.result(array);
    if (!array || array.length <= 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{empty}} takes one argument (array).');
  }
});

Library.addHelper('any', function (array, options) {
  if (!Utils.isHandlebarsSpecific(array)) {
    array = Utils.result(array);
    if (array && array.length > 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{any}} takes one argument (array).');
  }
});

Library.addHelper('inArray', function (array, value, options) {
  if (!((Utils.isUndefined(array)) && (Utils.isUndefined(value)))) {
    array = Utils.result(array);
    value = Utils.result(value);
    if (_indexOf.call(array, value) >= 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{inArray}} takes two arguments (array, string|number).');
  }
});

Library.addHelper('eachIndex', function (array, options) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    var result = '';
    for (var index = i = 0, len = array.length; i < len; index = ++i) {
      var value = array[index];
      result += options.fn({
        item: value,
        index: index
      });
    }
    return result;
  } else {
    return Utils.err('{{eachIndex}} takes one argument (array).');
  }
});

Library.addHelper('eachProperty', function (obj, options) {
  if (!Utils.isUndefined(obj)) {
    obj = Utils.result(obj);
    var result = '';
    for (var key in obj) {
      var value = obj[key];
      result += options.fn({
        key: key,
        value: value
      });
    }
    return result;
  } else {
    return Utils.err('{{eachProperty}} takes one argument (object).');
  }
});

	// Source File: ./src/helpers/comparisons.js

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


	// Source File: ./src/helpers/dates.js

/**
 * Handlebars Library.addHelper('<http://github.com/assemble/handlebars-Library.addHelper('
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


  /**
   * {{formatData}}
   * Port of formatDate-js library (http://bit.ly/18eo2xw)
   * @param  {[type]} date   [description]
   * @param  {[type]} format [description]
   * @return {[type]}        [description]
   */
  Library.addHelper('formatDate', function (date, format) {
    date = new Date(date);
    return Dates.format(date, format);
  });

  /**
   * {{now}}
   * @param  {[type]} format [description]
   * @return {[type]}        [description]
   */
  Library.addHelper('now', function (format) {
    var date = new Date();
    if (Utils.isUndefined(format)) {
      return date;
    } else {
      return Dates.format(date, format);
    }
  });

  /**
   * {{timeago}}
   * Modified version of http://bit.ly/18WwJYf
   * @param  {[type]} date [description]
   * @return {[type]}      [description]
   */
  Library.addHelper('timeago', function (date) {
    date = new Date(date);
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {return "" + interval + " years ago"; }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {return "" + interval + " months ago"; }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {return "" + interval + " days ago"; }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {return "" + interval + " hours ago"; }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {return "" + interval + " minutes ago"; }
    if (Math.floor(seconds) === 0) {
      return 'Just now';
    } else {
      return Math.floor(seconds) + ' seconds ago';
    }
  });


	// Source File: ./src/helpers/html.js

/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */



    /**
     * {{css}}
     * Add an array of <link></link> tags. Automatically resolves
     * relative paths to `options.assets` in the Assemble task.
     * @param  {[type]} context [description]
     * @return {[type]}         [description]
     */
    Library.addHelper('css', function (context) {
      if (!Array.isArray(context)) {
        context = [context];
      }
      return new Utils.safeString(context.map(function (item) {
        var ext = Utils.getExt(item);
        var css = '<link rel="stylesheet" href="' + options.assets + '/css/' + item + '">';
        var less = '<link rel="stylesheet/less" href="' + options.assets + '/less/' + item + '">';
        switch (ext) {
          case "less":
            return less;
          case "css":
            return css;
          default:
            return css;
        }
      }).join("\n"));
    });

    /**
     * {{js "src/to/*.js"}}
     * @param  {[type]} context [description]
     * @return {[type]}         [description]
     */
    Library.addHelper('js', function (context) {
      if (!Array.isArray(context)) {
        context = [context];
      }
      return new Utils.safeString(context.map(function (item) {
        var ext = Utils.getExt(item);
        var js = '<script src="' + options.assets + '/js/' + item + '"></script>';
        var coffee = '<script type="text/coffeescript" src="' + options.assets + '/js/' + item + '"></script>';
        switch (ext) {
          case "js":
            return js;
          case "coffee":
            return coffee;
          default:
            return js;
        }
      }).join("\n"));
    });

    /**
     * {{#ul}}
     *   <li></li>
     * {{/ul}}
     * Block helper for creating unordered lists.
     * @param  {[type]} context [description]
     * @param  {[type]} opts    [description]
     * @return {[type]}         [description]
     */
    Library.addHelper('ul', function (context, opts) {
      return ("<ul " + (HTML.parseAttributes(opts.hash)) + ">") + context.map(function (item) {
        return "<li>" + (opts.fn(item)) + "</li>";
      }).join("\n") + "</ul>";
    });

    /**
     * {{#ol}}
     *   <li></li>
     * {{ol}}
     * Block helper for creating ordered lists.
     * @param  {[type]} context [description]
     * @param  {[type]} opts    [description]
     * @return {[type]}         [description]
     */
    Library.addHelper('ol', function (context, opts) {
      return ("<ol " + (HTML.parseAttributes(opts.hash)) + ">") + context.map(function (item) {
        return "<li>" + (opts.fn(item)) + "</li>";
      }).join("\n") + "</ol>";
    });


	// Source File: ./src/helpers/inflections.js

/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */



  Library.addHelper('inflect', function (count, singular, plural, include) {
    var word = count > 1 || count === 0 ? plural : singular;
    if (Utils.isUndefined(include) || include === false) {
      return word;
    } else {
      return "" + count + " " + word;
    }
  });

  Library.addHelper('ordinalize', function (value) {
    var _ref;
    var normal = Math.abs(Math.round(value));
    if (_ref = normal % 100, _indexOf.call([11, 12, 13], _ref) >= 0) {
      return "" + value + "th";
    } else {
      switch (normal % 10) {
      case 1:
        return "" + value + "st";
      case 2:
        return "" + value + "nd";
      case 3:
        return "" + value + "rd";
      default:
        return "" + value + "th";
      }
    }
  });

	// Source File: ./src/helpers/logging.js

/**
 * Handlebars Library.addHelper('<http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


  Library.addHelper('log', function (value) {
    return console.log(value);
  });

  Library.addHelper('inspect', function(context, options) {
    var hash = options.hash || {};
    var ext = hash.ext || '.html';
    context = JSON.stringify(sort(context), null, 2);

    // Wrap the returned JSON in either markdown code fences
    // or HTML, depending on the extension.
    var md = '\n```json\n' + context + '\n```';
    var html = '<pre><code class="json">\n' + context + '\n</code></pre>';
    var result = Utils.switchOutput(ext, md, html);
    return new Utils.safeString(result);
  });

  Library.addHelper('debug', function (value) {
    console.log('=================================');
    console.log('Context: ', this);
    if (!Utils.isUndefined(value)) {
      console.log('Value: ', value);
    }
    return console.log('=================================');
  });


	// Source File: ./src/helpers/markdown.js

/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */

  options.marked = options.marked || {};

  // Initialize `marked-extras`
  extras.init(options.marked);

  // Extend defaults from `marked-extras` with Gruntfile options
  var markedOpts = _.extend({}, extras.markedDefaults, options.marked);

  // Set marked.js options
  marked.setOptions(markedOpts);

  Library.addHelper('md', function (patterns, context, opts) {
    opts = _.extend({}, options, opts || {});

    _.extend(opts, opts.hash || {});

    var filepath = this;
    var str = file.readFileSync(filepath);
    var page = matter(str);
    var content = page.content;
    var metadata = page.context;

    var data = Handlebars.createFrame({filepath: filepath});

    // Prepend or append any content in the given partial to the output
    _.extend({}, markedOpts, context.data.root.markedOpts || {});

    var append = '';
    var prepend = '';

    if(markedOpts.prepend) {
      prepend = Handlebars.partials[markedOpts.prepend];
    }
    if(markedOpts.append) {
      append = Handlebars.partials[markedOpts.append];
    }

    _.defaults(metadata, context.data.root);
    var sections = [prepend, content, append].join('\n\n');

    var fn = Handlebars.compile(sections);
    var output = fn(metadata, {data: data});

    return new Handlebars.SafeString(marked(output));
  });

  Library.addHelper('markdown', function (options) {
    return marked(options.fn(this));
  });

	// Source File: ./src/helpers/math.js

/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */



  Library.addHelper('add', function (value, addition) {
    return value + addition;
  });

  Library.addHelper('subtract', function (value, substraction) {
    return value - substraction;
  });

  Library.addHelper('divide', function (value, divisor) {
    return value / divisor;
  });

  Library.addHelper('multiply', function (value, multiplier) {
    return value * multiplier;
  });

  Library.addHelper('floor', function (value) {
    return Math.floor(value);
  });

  Library.addHelper('ceil', function (value) {
    return Math.ceil(value);
  });

  Library.addHelper('round', function (value) {
    return Math.round(value);
  });

  Library.addHelper('sum', function () {
    var args = _.flatten(arguments);
    var sum = 0;
    var i = args.length - 1;
    while (i--) {
      if ("number" === typeof args[i]) {
        sum += args[i];
      }
    }
    return Number(sum);
  });

	// Source File: ./src/helpers/miscellaneous.js

/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */

  Library.addHelper('default', function (value, defaultValue) {
    return value != null ? value : defaultValue;
  });

  /**
   * http://handlebarsjs.com/block_helpers.html
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  Library.addHelper('noop', function (options) {
    return options.fn(this);
  });

  /**
   * {{#withHash}}
   * Build context from the attributes hash
   * @author Vladimir Kuznetsov <https://github.com/mistakster>
   */
  Library.addHelper('withHash', function (options) {
    return options.fn(options.hash || {});
  });



	// Source File: ./src/helpers/numbers.js

/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


  /**
   * {{addCommas}}
   *
   * Add commas to numbers
   * @param {[type]} number [description]
   */
  Library.addHelper('addCommas', function (number) {
    return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  });

 /**
  * {{formatPhoneNumber number}}
  * Output a formatted phone number
  * @author: http://bit.ly/QlPmPr
  * @param  {Number} phoneNumber [8005551212]
  * @return {Number}             [(800) 555-1212]
  */
  Library.addHelper('formatPhoneNumber', function (num) {
    num = num.toString();
    return "(" + num.substr(0, 3) + ") " + num.substr(3, 3) + "-" + num.substr(6, 4);
  });

  /**
   * {{random}}
   * Generate a random number between two values
   * @author Tim Douglas <https://github.com/timdouglas>
   * @param  {[type]} min [description]
   * @param  {[type]} max [description]
   * @return {[type]}     [description]
   */
  Library.addHelper('random', function (min, max) {
    return _.random(min, max);
  });

  /**
   * {{toAbbr}}
   *
   * Abbreviate numbers
   * @param  {[type]} number [description]
   * @param  {[type]} digits [description]
   * @return {[type]}        [description]
   */
  Library.addHelper('toAbbr', function (number, digits) {
    if (Utils.isUndefined(digits)) {
      digits = 2;
    }
    // @default: 2 decimal places => 100, 3 => 1000, etc.
    digits = Math.pow(10, digits);
    var abbr = ["k", "m", "b", "t"];
    var i = abbr.length - 1;
    while (i >= 0) {
      var size = Math.pow(10, (i + 1) * 3);
      if (size <= number) {
        number = Math.round(number * digits / size) / digits;
        // Special case where we round up to the next abbreviation
        if ((number === 1000) && (i < abbr.length - 1)) {
          number = 1;
          i++;
        }
        number += abbr[i];
        break;
      }
      i--;
    }
    return number;
  });

  Library.addHelper('toExponential', function (number, fractions) {
    if (Utils.isUndefined(fractions)) {
      fractions = 0;
    }
    return number.toExponential(fractions);
  });

  Library.addHelper('toFixed', function (number, digits) {
    if (Utils.isUndefined(digits)) {
      digits = 0;
    }
    return number.toFixed(digits);
  });

  Library.addHelper('toFloat', function (number) {
    return parseFloat(number);
  });

  Library.addHelper('toInt', function (number) {
    return parseInt(number, 10);
  });

  Library.addHelper('toPrecision', function (number, precision) {
    if (Utils.isUndefined(precision)) {
      precision = 1;
    }
    return number.toPrecision(precision);
  });

	// Source File: ./src/helpers/strings.js

/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


  /**
   * {{capitalizeFirst}}
   * Capitalize first word in a sentence
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  Library.addHelper('capitalizeFirst', function (str) {
    if(str && typeof str === "string") {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  });

  /**
   * {{capitalizeEach}}
   * Capitalize each word in a sentence
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  Library.addHelper('capitalizeEach', function (str) {
    if(str && typeof str === "string") {
      return str.replace(/\w\S*/g, function (word) {
        return word.charAt(0).toUpperCase() + word.substr(1);
      });
    }
  });

  /**
   * {{center}}
   * Center a string using non-breaking spaces
   * @param  {[type]} str    [description]
   * @param  {[type]} spaces [description]
   * @return {[type]}        [description]
   */
  Library.addHelper('center', function (str, spaces) {
    if(str && typeof str === "string") {
      var space = '';
      var i = 0;
      while (i < spaces) {
        space += '&nbsp;';
        i++;
      }
      return "" + space + str + space;
    }
  });

  /**
   * {{dashify}}
   * Replace periods in string with hyphens.
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  Library.addHelper('dashify', function (str) {
    if(str && typeof str === "string") {
      return str.split(".").join("-");
    }
  });

  /**
   * {{hyphenate}}
   * Replace spaces in string with hyphens.
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  Library.addHelper('hyphenate', function (str) {
    if(str && typeof str === "string") {
      return str.split(" ").join("-");
    }
  });

  /**
   * {{lowercase}}
   * Make all letters in the string lowercase
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  Library.addHelper('lowercase', function (str) {
    if(str && typeof str === "string") {
      return str.toLowerCase();
    }
  });

  /**
   * {{plusify}}
   * Replace spaces in string with pluses.
   * @author: Stephen Way <https://github.com/stephenway>
   * @param  {[type]} str The input string
   * @return {[type]}     Input string with spaces replaced by plus signs
   */
  Library.addHelper('plusify', function (str) {
    if (str && typeof str === 'string') {
      return str.split(' ').join('+');
    }
  });

  /**
   * {{safeString}}
   * Output a Handlebars safeString
   * @param  {[type]} str [description]
   * @return {[type]}       [description]
   */
  Library.addHelper('safeString', function (str) {
    if(str && typeof str === "string") {
      return new Utils.safeString(str);
    }
  });

  /**
   * {{sentence}}
   * Sentence case
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  Library.addHelper('sentence', function (str) {
    if(str && typeof str === "string") {
      return str.replace(/((?:\S[^\.\?\!]*)[\.\?\!]*)/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  });

  /**
   * {{titleize}}
   * Title case. "This is Title Case"
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  Library.addHelper('titleize', function (str) {
    if(str && typeof str === "string") {
      var title = str.replace(/[ \-_]+/g, ' ');
      var words = title.match(/\w+/g);
      var capitalize = function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      };
      return ((function () {
        var i, len, results;
        results = [];
        for (i = 0, len = words.length; i < len; i++) {
          var word = words[i];
          results.push(capitalize(word));
        }
        return results;
      })()).join(' ');
    }
  });

  Library.addHelper('uppercase', function (options) {
    if(options && typeof options === "string") {
      return options.toUpperCase();
    } else if(options && typeof options === "object") {
      return options.fn(this).toUpperCase();
    }
  });

  Library.addHelper('reverse', function (str) {
    if(str && typeof str === "string") {
      return str.split('').reverse().join('');
    }
  });

  /**
   * {{count}}
   * Return the number of occurrances of a string, within a string
   * @author: Jon Schlinkert <http://github.com/jonschlinkert>
   * @param  {String} str       The haystack
   * @param  {String} substring The needle
   * @return {Number}           The number of times the needle is found in the haystack.
   */
  Library.addHelper('count', function (str, substring) {
    if(str && typeof str === "string") {
      var n = 0;
      var pos = 0;
      var l = substring.length;
      while (true) {
        pos = str.indexOf(substring, pos);
        if (pos > -1) {
          n++;
          pos += l;
        } else {
          break;
        }
      }
      return n;
    }
  });

  /**
   * {{replace}}
   * Replace occurrences of string "A" with string "B"
   * @author: Jon Schlinkert <http://github.com/jonschlinkert>
   * @param  {[type]} str [description]
   * @param  {[type]} a   [description]
   * @param  {[type]} b   [description]
   * @return {[type]}     [description]
   */
  Library.addHelper('replace', function (str, a, b) {
    if(str && typeof str === "string") {
      return str.split(a).join(b);
    }
  });

  /**
   * {{ellipsis}}
   * @author: Jon Schlinkert <http://github.com/jonschlinkert>
   * Truncate the input string and removes all HTML tags
   * @param  {String} str      The input string.
   * @param  {Number} limit    The number of characters to limit the string.
   * @param  {String} append   The string to append if charaters are omitted.
   * @return {String}          The truncated string.
   */
  Library.addHelper('ellipsis', function (str, limit, append) {
    if (Utils.isUndefined(append)) {
      append = '';
    }
    var sanitized = str.replace(/(<([^>]+)>)/g, '');
    if (sanitized.length > limit) {
      return sanitized.substr(0, limit - append.length) + append;
    } else {
      return sanitized;
    }
  });

  /**
   * {{truncate}}
   * Truncates a string given a specified `length`,
   * providing a custom string to denote an `omission`.
   * @param  {[type]} str      [description]
   * @param  {[type]} length   [description]
   * @param  {[type]} omission [description]
   * @return {[type]}          [description]
   */
  Library.addHelper('truncate', function (str, limit, omission) {
    if (Utils.isUndefined(omission)) {
      omission = '';
    }
    if (str.length > limit) {
      return str.substring(0, limit - omission.length) + omission;
    } else {
      return str;
    }
  });

  /**
   * {{startsWith}}
   * @author: Dan Fox <http://github.com/iamdanfox>
   *
   * Tests whether a string begins with the given prefix.
   * Behaves sensibly if the string is null.
   * @param  {[type]} prefix     [description]
   * @param  {[type]} testString [description]
   * @param  {[type]} options    [description]
   * @return {[type]}            [description]
   *
   * @example:
   *   {{#startsWith "Goodbye" "Hello, world!"}}
   *     Whoops
   *   {{else}}
   *     Bro, do you even hello world?
   *   {{/startsWith}}
   */
  Library.addHelper('startsWith', function (prefix, str, options) {
    if ((str != null ? str.indexOf(prefix) : void 0) === 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });


  Library.registerHelpers(config.Handlebars);
};

