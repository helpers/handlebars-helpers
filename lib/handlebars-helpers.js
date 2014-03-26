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

var handlebarsHelpers = function (config) {
  utils.expects(config, specs);
  var Handlebars = config.Handlebars;
  var options = config.options;
// Source File: ./src/helpers/code.js

  /**
  * Handlebars Library.addHelper('<http://github.com/assemble/handlebars-Library.addHelper('
  *
  * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
  * Licensed under the MIT License (MIT)
  */



  /**
   * {{embed}}
   *
   * Embeds code from an external file as preformatted
   * text. The first parameter requires a path to the file
   * you want to embed. There second second optional parameter
   * is for specifying (forcing) syntax highlighting for
   * language of choice.
   *
   * @syntax:
   *   {{ embed [file] [lang] }}
   * @usage:
   *   {{embed 'path/to/file.js'}} or
   *   {{embed 'path/to/file.hbs' 'html'}}
   */

  Library.addHelper('embed', function (src, lang) {
    var content = Glob.globFiles(src);
    var ext = path.extname(src).replace(/^(\.)/gm, '');
    var output;

    lang = lang || ext;

    if (utils.isUndefined(lang)) {
      lang = ext;
    } else {
      lang = lang;
    }
    switch (ext) {
    case 'md':
    case 'markdown':
    case 'mdown':
      output = content.replace(/^(```)/gm, '&#x60;&#x60;&#x60;');
      ext = 'md';
      break;
    case 'txt':
      output = content;
      ext = 'text';
      break;
    case 'hbs':
    case 'hbars':
      output = content.replace(/^(---)/gm, '---');
      ext = 'html';
      break;
    case 'less':
      output = content;
      ext = 'scss';
      break;
    case void 0:
      output = content;
      ext = '';
      break;
    default:
      output = content;
      ext = '';
    }
    var result = '```' + lang + '\n' + output + '\n```\n';
    return new utils.safeString(result);
  });

  /**
   * {{jsFiddle}}
   * Embed a jsFiddle, second parameter sets tabs
   * @usage: {{ jsfiddle [id] [tabs] }}
   */
  Library.addHelper('jsfiddle', function (options) {
    var hash = options.hash || {};
    hash.id = 'http://jsfiddle.net/' + (hash.id || '');
    hash.width = hash.width || '100%';
    hash.height = hash.height || '300';
    hash.skin = hash.skin || '/presentation/';
    hash.tabs = (hash.tabs || 'result,js,html,css') + hash.skin;
    hash.src = hash.id + '/embedded/' + hash.tabs;
    hash.allowfullscreen = hash.allowfullscreen || 'allowfullscreen';
    hash.frameborder = hash.frameborder || '0';

    delete hash.id;
    delete hash.tabs;
    delete hash.skin;

    var attrs = HTML.parseAttributes(hash);
    return new Handlebars.SafeString('<iframe ' + attrs + '></iframe>');
  });

  /**
   * {{gist}}
   * Embed a GitHub Gist using only the id of the Gist
   *
   * @param  {String} id   [description]
   * @param  {String} file [description]
   * @usage: {{ gist [id] [file] }}
   */
  Library.addHelper('gist', function (id, file) {
    file = file || '';
    var result = '<script src="https://gist.github.com/' + id + '.js"></script>';
    return new Handlebars.SafeString(result);
  });


// Source File: ./src/helpers/collections.js

/**
 * Handlebars Library.addHelper('<http://github.com/assemble/handlebars-Library.addHelper('
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */



  /**
   * {{any}}
   * @param  {Array}  array
   * @param  {Object} options
   */
  Library.addHelper('any', function (array, options) {
    if (array.length > 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });


  /**
   * Returns all of the items in the collection after the specified count.
   * @param  {Array}  array Collection
   * @param  {Number} count Number of items to exclude
   * @return {Array}        Array excluding the number of items specified
   */
  Library.addHelper('after', function (array, count) {
    return array.slice(count);
  });


  /**
   * Use all of the items in the collection after the specified count
   * inside a block.
   * @param  {Array}  array
   * @param  {Number} count
   * @param  {Ojbect} options
   * @return {Array}
   */
  Library.addHelper('withAfter', function (array, count, options) {
    array = array.slice(count);
    var result = '';
    for (var item in array) {
      result += options.fn(array[item]);
    }
    return result;
  });


  /**
   * {{arrayify}}
   * Converts a string such as "foo, bar, baz" to an ES Array of strings.
   * @credit: http://bit.ly/1840DsB
   * @param  {[type]} data [description]
   * @return {[type]}      [description]
   */
  Library.addHelper('arrayify', function (str) {
    return str.split(",").map(function (tag) {
      return "\"" + tag + "\"";
    });
  });


  /**
   * Returns all of the items in the collection before the specified
   * count. Opposite of {{after}}.
   * @param  {Array}  array [description]
   * @param  {[type]} count [description]
   * @return {[type]}       [description]
   */
  Library.addHelper('before', function (array, count) {
    return array.slice(0, -count);
  });


  /**
   * Use all of the items in the collection before the specified count
   * inside a block. Opposite of {{withAfter}}
   * @param  {Array}  array   [description]
   * @param  {[type]} count   [description]
   * @param  {Object} options [description]
   * @return {[type]}         [description]
   */
  Library.addHelper('withBefore', function (array, count, options) {
    array = array.slice(0, -count);
    var result = '';
    for (var item in array) {
      result += options.fn(array[item]);
    }
    return result;
  });


  /**
   * {{first}}
   * Returns the first item in a collection.
   *
   * @param  {Array}  array
   * @param  {[type]} count
   * @return {[type]}
   */
  Library.addHelper('first', function (array, count) {
    if (Utils.isUndefined(count)) {
      return array[0];
    } else {
      return array.slice(0, count);
    }
  });

  /**
   * {{withFirst}}
   * Use the first item in a collection inside a block.
   *
   * @param  {Array}  array   [description]
   * @param  {[type]} count   [description]
   * @param  {Object} options [description]
   * @return {[type]}         [description]
   */
  Library.addHelper('withFirst', function(array, count, options) {
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
      return console.error('{{withFirst}} takes at least one argument (array).');
    }
  });

  /**
   * Returns the last item in a collection. Opposite of `first`.
   * @param  {Array}  array [description]
   * @param  {[type]} count [description]
   * @return {[type]}       [description]
   */
  Library.addHelper('last', function (array, count) {
    if (Utils.isUndefined(count)) {
      return array[array.length - 1];
    } else {
      return array.slice(-count);
    }
  });

  /**
   * Use the last item in a collection inside a block.
   * Opposite of {{withFirst}}.
   * @param  {Array}  array   [description]
   * @param  {[type]} count   [description]
   * @param  {Object} options [description]
   * @return {[type]}         [description]
   */
  Library.addHelper('withLast', function (array, count, options) {
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
  });

  /**
   * Joins all elements of a collection into a string
   * using a separator if specified.
   * @param  {Array}  array     [description]
   * @param  {[type]} separator [description]
   * @return {[type]}           [description]
   */
  Library.addHelper('join', function (array, separator) {
    return array.join(Utils.isUndefined(separator) ? ' ' : separator);
  });


  /**
   * Handlebars "joinAny" block helper that supports
   * arrays of objects or strings. implementation found here:
   * https://github.com/wycats/handlebars.js/issues/133
   *
   * @param  {[type]} items [description]
   * @param  {[type]} block [description]
   * @return {[type]}       [description]
   *
   * If "delimiter" is not speficified, then it defaults to ",".
   * You can use "start", and "end" to do a "slice" of the array.
   * @example:
   *   Use with objects:
   *   {{#join people delimiter=" and "}}{{name}}, {{age}}{{/join}}
   * @example:
   *   Use with arrays:
   *   {{join jobs delimiter=", " start="1" end="2"}}
   *
   */
  Library.addHelper('joinAny', function (items, block) {
    var delimiter = block.hash.delimiter || ",";
    var start = block.hash.start || 0;
    var len = (items ? items.length : 0);
    var end = block.hash.end || len;
    var out = '';
    if (end > len) {
      end = len;
    }
    if ('function' === typeof block) {
      var i = start;
      while (i < end) {
        if (i > start) {
          out += delimiter;
        }
        if ('string' === typeof items[i]) {
          out += items[i];
        } else {
          out += block(items[i]);
        }
        i++;
      }
      return out;
    } else {
      return [].concat(items).slice(start, end).join(delimiter);
    }
  });


  Library.addHelper('sort', function (array, field) {
    if (Utils.isUndefined(field)) {
      return array.sort();
    } else {
      return array.sort(function (a, b) {
        return a[field] > b[field];
      });
    }
  });


  Library.addHelper('withSort', function (array, field, options) {
    array = _.cloneDeep(array);
    var getDescendantProp = function (obj, desc) {
      var arr = desc.split('.');
      while (arr.length && (obj = obj[arr.shift()])) {
        continue;
      }
      return obj;
    };
    var result = '';
    var item;
    var i;
    var len;
    if (Utils.isUndefined(field)) {
      options = field;
      array = array.sort();
      if (options.hash && options.hash.dir === 'desc') {
        array = array.reverse();
      }
      for (i = 0, len = array.length; i < len; i++) {
        item = array[i];
        result += options.fn(item);
      }
    } else {
      array = array.sort(function (a, b) {
        var aProp = getDescendantProp(a, field);
        var bProp = getDescendantProp(b, field);
        if (aProp > bProp) {
          return 1;
        } else {
          if (aProp < bProp) {
            return -1;
          }
        }
        return 0;
      });
      if (options.hash && options.hash.dir === 'desc') {
        array = array.reverse();
      }
      for (item in array) {
        result += options.fn(array[item]);
      }
    }
    return result;
  });


  Library.addHelper('length', function (array) {
    return (!array) ? 0 : array.length;
  });


  Library.addHelper('lengthEqual', function (array, length, options) {
    if (array.length === length) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });


  Library.addHelper('empty', function (array, options) {
    if (array.length <= 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });


  /**
   * {{inArray}}
   *
   * @param  {Array}  array   [description]
   * @param  {[type]} value   [description]
   * @param  {Object} options [description]
   * @return {[type]}         [description]
   */
  Library.addHelper('inArray', function (array, value, options) {
    if (_indexOf.call(array, value) >= 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });


  /**
   * {{filter}}
   * @param  {[type]} array   [description]
   * @param  {[type]} value   [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  Library.addHelper('filter', function(array, value, options) {

    var data = void 0;
    var content = '';
    var results = [];

    if(options.data) {
      data = Handlebars.createFrame(options.data);
    }

    // filtering on a specific property
    if(options.hash && options.hash.property) {

      var search = {};
      search[options.hash.property] = value;
      results = _.filter(array, search);

    } else {

      // filtering on a string value
      results = _.filter(array, function(v, k) {
        return value === v;
      });

    }

    if(results && results.length > 0) {
      for(var i=0; i < results.length; i++){
        content += options.fn(results[i], {data: data});
      }
    } else {
      content = options.inverse(this);
    }
    return content;
  });

  /**
   * {{iterate}}
   *
   * Similar to {{#each}} helper, but treats array-like objects
   * as arrays (e.g. objects with a `.length` property that
   * is a number) rather than objects. This lets us iterate
   * over our collections items.
   *
   * @param  {[type]} context [description]
   * @param  {Object} options [description]
   * @return {[type]}         [description]
   */
  Library.addHelper('iterate', function (context, options) {
    var fn = options.fn;
    var inverse = options.inverse;
    var i = 0;
    var ret = "";
    var data = void 0;
    if (options.data) {
      data = Handlebars.createFrame(options.data);
    }
    if (context && typeof context === 'object') {
      if (typeof context.length === 'number') {
        var j = context.length;
        while (i < j) {
          if (data) {data.index = i;}
          ret = ret + fn(context[i], {data: data});
          i++;
        }
      } else {
        for (var key in context) {
          if (context.hasOwnProperty(key)) {
            if (data) {data.key = key;}
            ret = ret + fn(context[key], {data: data});
            i++;
          }
        }
      }
    }
    if (i === 0) {ret = inverse(this);}
    return ret;
  });


  /**
   * {{forEach}}
   * Credit: http://bit.ly/14HLaDR
   *
   * @param  {[type]}   array [description]
   * @param  {Function} fn    [description]
   * @return {[type]}         [description]
   *
   * @example:
   *   var accounts = [
   *     {'name': 'John', 'email': 'john@example.com'},
   *     {'name': 'Malcolm', 'email': 'malcolm@example.com'},
   *     {'name': 'David', 'email': 'david@example.com'}
   *   ];
   *
   *   {{#forEach accounts}}
   *     <a href="mailto:{{ email }}" title="Send an email to {{ name }}">
   *       {{ name }}
   *     </a>{{#unless isLast}}, {{/unless}}
   *   {{/forEach}}
   */
  Library.addHelper('forEach', function (array, fn) {
    var total = array.length;
    var buffer = "";
    // Better performance: http://jsperf.com/for-vs-forEach/2
    var i = 0;
    var j = total;
    while (i < j) {
      // stick an index property onto the item, starting
      // with 1, may make configurable later
      var item = array[i];
      item['index'] = i + 1;
      item['_total'] = total;
      item['isFirst'] = i === 0;
      item['isLast'] = i === (total - 1);
      // show the inside of the block
      buffer += fn.fn(item);
      i++;
    }
    // return the finished buffer
    return buffer;
  });


  /**
   * {{eachProperty}}
   * Handlebars block helper to enumerate
   * the properties in an object
   *
   * @param  {[type]} context [description]
   * @param  {Object} options [description]
   * @return {[type]}         [description]
   */
  Library.addHelper('eachProperty', function (context, options) {
    var content = (function () {
      var results = [];
      for (var key in context) {
        var value = context[key];
        results.push(options.fn({
          key: key,
          value: value
        }));
      }
      return results;
    })();
    return content.join('');
  });


  /**
   * {{eachIndex}}
   *
   * @param  {Array}  array   [description]
   * @param  {Object} options [description]
   * @return {[type]}         [description]
   * @example:
   *   {{#eachIndex collection}}
   *     {{item}} is {{index}}
   *   {{/eachIndex}}
   */
  Library.addHelper('eachIndex', function (array, options) {
    var i;
    var len;
    var result = '';
    var index;
    for (index = i = 0, len = array.length; i < len; index = ++i) {
      var value = array[index];
      result += options.fn({
        item: value,
        index: index
      });
    }
    return result;
  });

  /**
   * {{eachIndexPlusOne}}
   *
   * @param  {Array}  array   [description]
   * @param  {Object} options [description]
   * @return {[type]}         [description]
   * @example:
   *   {{#eachIndexPlusOne collection}}
   *     {{item}} is {{index}}
   *   {{/eachIndexPlusOne}}
   */
  Library.addHelper('eachIndexPlusOne', function (array, options) {
    var result = '';
    var len;
    var i;
    var index;
    for (index = i = 0, len = array.length; i < len; index = ++i) {
      var value = array[index];
      result += options.fn({
        item: value,
        index: index + 1
      });
    }
    return result;
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


// Source File: ./src/helpers/data.js

/**
 * Handlebars Library.addHelper('<http://github.com/assemble/handlebars-Library.addHelper('
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


  /**
   * {{value}} extract a value from the specified property
   *
   * @param  {String} filepath [description]
   * @param  {String} prop     [description]
   * @return {String}          [description]
   */

  Library.addHelper('value', function (filepath, prop) {
    var str = file.readJSONSync(filepath);
    var val = _.pick(str, prop);
    var result = _.pluck(val);
    return new Handlebars.SafeString(result);
  });

  /**
   * {{prop}} extract a specific property
   * @param  {[type]} filepath [description]
   * @param  {[type]} prop     [description]
   * @return {[type]}          [description]
   */

  Library.addHelper('prop', function (filepath, prop) {
    var str = file.readJSONSync(filepath);
    var result = JSON.stringify(_.pick(str, prop));
    return new Handlebars.SafeString(result);
  });

  /**
   * {{parseJSON}}
   * Contributed by github.com/keeganstreet
   */

  Library.addHelper('parseJSON', function (data, options) {
    return options.fn(JSON.parse(data));
  });

  /**
   * {{opt}} get a property from assemble.options
   *
   * @param {String} key The name of the property
   * @return Returns value from `assemble.options`
   */

  Library.addHelper('opt', function(key) {
    return options[key] || '';
  });


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


// Source File: ./src/helpers/fs.js

/**
 * Handlebars Library.addHelper('<http://github.com/assemble/handlebars-Library.addHelper('
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


  /**
   * {{#each (expand files)}} {{/each}}
   */

  Library.addHelper('expand', function (patterns) {
    return file.expand(patterns);
  });


  /**
   * {{read}}
   * Uses gray-matter to extract content only,
   * YAML front matter is stripped.
   */

  Library.addHelper('read', function (filepath, context, options) {
    var page = matter.read(filepath);
    var metadata = _.extend(context.data.root, page.context);
    var template = Handlebars.compile(page.content);
    return new Handlebars.SafeString(template(metadata));
  });


  /**
   * {{fileSize}}
   *
   * Converts bytes into a nice representation with unit.
   * e.g. 13661855 => 13.7 MB, 825399 => 825 KB, 1396 => 1 KB
   * @param  {[type]} value
   * @return {[type]}
   */
  Library.addHelper('fileSize', function (value) {
    var bytes = parseInt(value, 10);
    if (isNaN(bytes)) {
      console.error("Handlebars helper fileSize couldn't parse '" + value + "'");
      return value; // Graceful degradation
    }
    // KB is technically a Kilobit, but it seems more readable.
    var resInt, resValue;
    var metric = ['byte', 'bytes', 'KB', 'MB', 'GB'];
    if (bytes === 0) {
      resInt = resValue = 0;
    } else {
      // Base 1000 (rather than 1024) matches Mac OS X
      resInt = Math.floor(Math.log(bytes) / Math.log(1000));
      // No decimals for anything smaller than 1 MB
      resValue = (bytes / Math.pow(1000, Math.floor(resInt))).toFixed(resInt < 2 ? 0 : 1);
      if (bytes === 1) {
        resInt = -1; // special case: 1 byte (singular)
      }
    }
    return new Utils.safeString(resValue + ' ' + metric[resInt + 1]);
  });


// Source File: ./src/helpers/glob.js

/**
 * Handlebars Library.addHelper('<http://github.com/assemble/handlebars-Library.addHelper('
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


  /**
   * {{glob "**"}} example helper
   *
   * Read in content from files specified using minimatch patterns
   * @param  {String}   src
   * @param  {Function} compare_fn
   * @return {String}
   * @example {{ glob 'path/to/files/*.md' }}
   */
  Library.addHelper('glob', function (src, compare_fn) {
    var source = Glob.globFiles(src, compare_fn);
    return new Utils.safeString(source);
  });

  /**
   * {{globRaw "**"}} example helper
   *
   * Read in content from files specified using minimatch patterns, return raw output without using 'safeString' filter (this chokes on JSON content)
   * @param  {String}   src
   * @param  {Function} compare_fn
   * @return {String}
   * @example {{ glob 'path/to/files/*.md' }}
   */
  Library.addHelper('globRaw', function (src, compare_fn) {
    var source = Glob.globFiles(src, compare_fn);
    return source;
  });

  /**
   * {{globWithContext "**"}} example helper
   *
   * Read in content from files specified using minimatch patterns
   * @param  {String}   src
   * @param  {Object}   context
   * @param  {Function} compare_fn
   * @return {String}
   * @example {{ glob 'path/to/files/*.md' }}
   */
  Library.addHelper('globWithContext', function (src, context, compare_fn) {
    var source = Glob.globFiles(src);
    var template = Handlebars.compile(source);
    var result = template(context);
    return new Utils.safeString(result);
  });

  /**
   * {{globRawWithContext "**"}} example helper
   *
   * Read in content from files specified using minimatch patterns, return raw output without using 'safeString' filter (this chokes on JSON content)
   * @param  {String}   src
   * @param  {Object}   context
   * @param  {Function} compare_fn
   * @return {String}
   * @example {{ glob 'path/to/files/*.md' }}
   */
  Library.addHelper('globRawWithContext', function (src, context, compare_fn) {
    var source = Glob.globFiles(src);
    var template = Handlebars.compile(source);
    var result = template(context);
    return result;
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


// Source File: ./src/helpers/i18n.js

/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */



  /**
   * {{i18n}}
   * @author: Laurent Goderre <https://github.com/LaurentGoderrre>
   * @param  {String} context
   * @param  {Object} options
   * @return {String}
   * @example: <https://github.com/assemble/buttons> (See the "button-i18n" example)
   */
  Library.addHelper('i18n', function (context, options) {
    var language = void 0;
    if (typeof context !== "string") {
      throw "Key must be of type 'string'";
    }
    language = (typeof options.hash.language === "string" ? options.hash.language : this.language);
    if (typeof language === "undefined") {
      throw "The 'language' parameter is not defined";
    }
    if (typeof this[language] === "undefined") {
      throw "No strings found for language '" + language + "'";
    }
    if (typeof this[language][context] === "undefined") {
      throw "No string for key '" + context + "' for language '" + language + "'";
    }
    return this[language][context];
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

// Source File: ./src/helpers/layouts.js

/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */



/**
 * These helpers are inspired by handlebars-layouts.
 * https://github.com/shannonmoeller/handlebars-layouts *
 */


    /**
     * Extend a layout that contains block definitions
     * @param  {String} layout  name of the layout to extend
     * @param  {Object} options normal handlebars options
     * @return {String}         rendered layout
     */
    Library.addHelper('extend', function (layout, options) {
      var output = null;
      var context = Object.create(this || null);
      var template = Handlebars.partials[layout];

      if (typeof template === 'undefined') {
        throw new Error("Missing layout: '" + layout + "'");
      }

      if (typeof template === 'string') {
        template = Handlebars.compile(template);
      }

      if (typeof options.fn === 'function') {
        options.fn(context);
      }

      return template(context);

    });


    /**
     * Used within layouts to define block sections
     * @param  {String} name    name of block to be referenced later
     * @param  {Object} options normal handlebars options
     * @return {String}         rendered block section
     */
      Library.addHelper('block', function (name, options) {
        var block = null;

        this.blocks = this.blocks || {};
        block = this.blocks[name];

        var optionsFn = options.fn || function () {return '';};

        switch (block && block.fn && block.mode.toLowerCase()) {
          case 'append':
            return optionsFn(this) + block.fn(this);

          case 'prepend':
            return block.fn(this) + optionsFn(this);

          case 'replace':
            return block.fn(this);

          default:
            return optionsFn(this);
        }
      });


    /**
     * Used within templates that extend a layout to define
     * content that will replace block sections
     * @param  {String} name    name of the block to replace
     * @param  {Object} options normal handlebars options
     * @return {String}         rendered content section
     */
      Library.addHelper('content', function (name, options) {
        options = options || {};
        options.hash = options.hash || {};
        var mode = options.hash['mode'] || 'replace';

        this.blocks = this.blocks || {};
        this.blocks[name] = {
          mode: mode.toLowerCase(),
          fn: options.fn
        };
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

// Source File: ./src/helpers/objects.js


/**
 * Expose Lo-Dash as Handlebars helpers
 */

(function () {
  for (var helper in _) {
    if (_.hasOwnProperty(helper)) {
      Library.addHelper('_' + helper, _[helper]);
    }
  }
}());

// Source File: ./src/helpers/path.js

/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


  /**
   * {{relative}}
   * Returns the derived relative path from A to B.
   * @param  {[type]} a [description]
   * @param  {[type]} b [description]
   * @return {[type]}   [description]
   * @example:
   *   {{relative [from] [to]}}
   */
  Library.addHelper('relative', function (a, b) {
    return Utils.getRelativePath(a, b);
  });

  /**
   * {{extname}}
   * Returns the extension of a given file
   * @param  {[type]} ext [description]
   * @return {[type]}     [description]
   * @example:
   *   {{extname "docs/toc.md"}}
   * @returns:
   *   .md
   */
  Library.addHelper('extname', function (ext) {
    return Utils.getExt(ext);
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

// Source File: ./src/helpers/url.js

/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */



    Library.addHelper('stripQuerystring', function (url) {
      return url.split("?")[0];
    });

    /**
     * {{encodeURI}}
     * Encodes a Uniform Resource Identifier (URI) component
     * by replacing each instance of certain characters by
     * one, two, three, or four escape sequences representing
     * the UTF-8 encoding of the character.
     *
     * @author: Jon Schlinkert <http://github.com/jonschlinkert>
     * @param  {String} uri: The un-encoded string
     * @return {String}      The endcoded string.
     */
    Library.addHelper('encodeURI', function (uri) {
      return encodeURIComponent(uri);
    });

    /**
     * {{decodeURI}}
     * Decodes a Uniform Resource Identifier (URI) component
     * previously created by encodeURIComponent or by a
     * similar routine.
     *
     * @author: Jon Schlinkert <http://github.com/jonschlinkert>
     * @param  {[type]} encodedURI [description]
     * @return {[type]}            [description]
     */
    Library.addHelper('decodeURI', function (encodedURI) {
      return decodeURIComponent(encodedURI);
    });

    /**
     * {{urlresolve}}
     * Take a base URL, and a href URL, and resolve them as a
     * browser would for an anchor tag.
     *
     * @author: Jon Schlinkert <http://github.com/jonschlinkert>
     * @param  {[type]} base [description]
     * @param  {[type]} href [description]
     * @return {[type]}      [description]
     */
    Library.addHelper('urlresolve', function (base, href) {
      return url.resolve(base, href);
    });

    /**
     * {{urlparse}}
     * Take a URL string, and return an object. Pass true as the
     * second argument to also parse the query string using the
     * querystring module. Defaults to false.
     *
     * @author: Jon Schlinkert <http://github.com/jonschlinkert>
     * @param  {[type]} path  [description]
     * @param  {[type]} type  [description]
     * @param  {[type]} query [description]
     * @return {[type]}       [description]
     */
    Library.addHelper('urlparse', function (path, type, query) {
      var result = Utils.stringifyObj(url.parse(path), type, query);
      return new Handlebars.safeString(result);
    });

  Library.registerHelpers(config.Handlebars);
};

export { handlebarsHelpers };
