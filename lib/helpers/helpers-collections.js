/**
 * Handlebars Collections Helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

var Handlebars = require('../helpers/helpers').Handlebars;
var Utils = require('../utils/utils');


// The module to be exported
var helpers = module.exports = {


  /**
   * {{first}}
   * Returns the first item in a collection.
   *
   * @param  {[type]} array [description]
   * @param  {[type]} count [description]
   * @return {[type]}       [description]
   */
  first: function (array, count) {
    if (Utils.isUndefined(count)) {
      return array[0];
    } else {
      return array.slice(0, count);
    }
  },

  /**
   * {{withFirst}}
   * Use the first item in a collection inside a block.
   *
   * @param  {[type]} array   [description]
   * @param  {[type]} count   [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  withFirst: function (array, count, options) {
    var item, result;
    if (Utils.isUndefined(count)) {
      options = count;
      return options.fn(array[0]);
    } else {
      array = array.slice(0, count);
      result = '';
      for (item in array) {
        result += options.fn(array[item]);
      }
      return result;
    }
  },

  /**
   * Returns the last item in a collection. Opposite of `first`.
   * @param  {[type]} array [description]
   * @param  {[type]} count [description]
   * @return {[type]}       [description]
   */
  last: function (array, count) {
    if (Utils.isUndefined(count)) {
      return array[array.length - 1];
    } else {
      return array.slice(-count);
    }
  },

  /**
   * Use the last item in a collection inside a block.
   * Opposite of {{withFirst}}.
   * @param  {[type]} array   [description]
   * @param  {[type]} count   [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  withLast: function (array, count, options) {
    var item, result;
    if (Utils.isUndefined(count)) {
      options = count;
      return options.fn(array[array.length - 1]);
    } else {
      array = array.slice(-count);
      result = '';
      for (item in array) {
        result += options.fn(array[item]);
      }
      return result;
    }
  },

  /**
   * Returns all of the items in the collection after the specified count.
   * @param  {[type]} array [description]
   * @param  {[type]} count [description]
   * @return {[type]}       [description]
   */
  after: function (array, count) {
    return array.slice(count);
  },

  /**
   * Returns all of the items in the collection before
   * the specified count. Opposite of {{after}}.
   * @param  {[type]} array [description]
   * @param  {[type]} count [description]
   * @return {[type]}       [description]
   */
  before: function (array, count) {
    return array.slice(0, -count);
  },

  /**
   * Use all of the items in the collection after the
   * specified count inside a block.
   * @param  {[type]} array   [description]
   * @param  {[type]} count   [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  withAfter: function (array, count, options) {
    var item, result;
    array = array.slice(count);
    result = '';
    for (item in array) {
      result += options.fn(array[item]);
    }
    return result;
  },

  /**
   * Use all of the items in the collection before the
   * specified count inside a block. Opposite of {{withAfter}}
   * @param  {[type]} array   [description]
   * @param  {[type]} count   [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  withBefore: function (array, count, options) {
    var item, result;
    array = array.slice(0, -count);
    result = '';
    for (item in array) {
      result += options.fn(array[item]);
    }
    return result;
  },

  /**
   * Joins all elements of a collection into a string
   * using a separator if specified.
   * @param  {[type]} array     [description]
   * @param  {[type]} separator [description]
   * @return {[type]}           [description]
   */
  join: function (array, separator) {
    return array.join(Utils.isUndefined(separator) ? ' ' : separator);
  },


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
  joinAny: function (items, block) {
    var delimiter, end, i, len, out, start;
    delimiter = block.hash.delimiter || ",";
    start = start = block.hash.start || 0;
    len = (items ? items.length : 0);
    end = block.hash.end || len;
    out = "";
    if (end > len) {
      end = len;
    }
    if ("function" === typeof block) {
      i = start;
      while (i < end) {
        if (i > start) {
          out += delimiter;
        }
        if ("string" === typeof items[i]) {
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
  },


  sort: function (array, field) {
    if (Utils.isUndefined(field)) {
      return array.sort();
    } else {
      return array.sort(function (a, b) {
        return a[field] > b[field];
      });
    }
  },


  withSort: function (array, field, options) {
    var getDescendantProp, item, result, i, len;
    getDescendantProp = function (obj, desc) {
      var arr;
      arr = desc.split(".");
      while (arr.length && (obj = obj[arr.shift()])) {
        continue;
      }
      return obj;
    };
    result = '';
    if (Utils.isUndefined(field)) {
      options = field;
      array = array.sort();
      for (i = 0, len = array.length; i < len; i++) {
        item = array[i];
        result += options.fn(item);
      }
    } else {
      array = array.sort(function (a, b) {
        var aProp, bProp;
        aProp = getDescendantProp(a, field);
        bProp = getDescendantProp(b, field);
        if (aProp > bProp) {
          return 1;
        } else {
          if (aProp < bProp) {
            return -1;
          }
        }
        return 0;
      });
      for (item in array) {
        result += options.fn(array[item]);
      }
    }
    return result;
  },


  length: function (array) {
    return array.length;
  },


  lengthEqual: function (array, length, options) {
    if (array.length === length) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  },


  empty: function (array, options) {
    if (array.length <= 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  },


  any: function (array, options) {
    if (array.length > 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  },

  /**
   * {{inArray}}
   *
   * @param  {[type]} array   [description]
   * @param  {[type]} value   [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  inArray: function (array, value, options) {
    var _indexOf = [].indexOf || function (item) {
        for (var i = 0, l = this.length; i < l; i++) {
          if (i in this && this[i] === item) {
            return i;
          }
        }
        return -1;
      };
    if (_indexOf.call(array, value) >= 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  },

  /**
   * {{iterate}}
   *
   * Similar to {{#each}} helper, but treats array-like objects
   * as arrays (e.g. objects with a `.length` property that
   * is a number) rather than objects. This lets us iterate
   * over our collections items.
   *
   * @param  {[type]} context [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  iterate: function (context, options) {
    var data, fn, i, inverse, j, key, ret;
    fn = options.fn;
    inverse = options.inverse;
    i = 0;
    ret = "";
    data = void 0;
    if (options.data) {
      data = Handlebars.createFrame(options.data);
    }
    if (context && typeof context === "object") {
      if (typeof context.length === "number") {
        j = context.length;
        while (i < j) {
          if (data) {
            data.index = i;
          }
          ret = ret + fn(context[i], {
            data: data
          });
          i++;
        }
      } else {
        for (key in context) {
          if (context.hasOwnProperty(key)) {
            if (data) {
              data.key = key;
            }
            ret = ret + fn(context[key], {
              data: data
            });
            i++;
          }
        }
      }
    }
    if (i === 0) {
      ret = inverse(this);
    }
    return ret;
  },


  /**
   * {{forEach}}
   *
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
   *   ]
   *
   *   {{#forEach accounts}}
   *     <a href="mailto:{{ email }}" title="Send an email to {{ name }}">
   *       {{ name }}
   *     </a>{{#unless isLast}}, {{/unless}}
   *   {{/forEach}}
   */
  forEach: function (array, fn) {
    var buffer, i, item, j, total;
    total = array.length;
    buffer = "";
    // Better performance: http://jsperf.com/for-vs-forEach/2
    i = 0;
    j = total;
    while (i < j) {
      // stick an index property onto the item, starting
      // with 1, may make configurable later
      item = array[i];
      item["index"] = i + 1;
      item["_total"] = total;
      item["isFirst"] = i === 0;
      item["isLast"] = i === (total - 1);
      // show the inside of the block
      buffer += fn.fn(item);
      i++;
    }
    // return the finished buffer
    return buffer;
  },


  /**
   * {{eachProperty}}
   * Handlebars block helper to enumerate
   * the properties in an object
   *
   * @param  {[type]} context [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  eachProperty: function (context, options) {
    var content = (function () {
      var _results = [];
      for (var key in context) {
        var value = context[key];
        _results.push(options.fn({
          key: key,
          value: value
        }));
      }
      return _results;
    })();
    return content.join("");
  },


  /**
   * {{eachIndex}}
   *
   * @param  {[type]} array   [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   * @example:
   *   {{#eachIndex collection}}
   *     {{item}} is {{index}}
   *   {{/eachIndex}}
   */
  eachIndex: function (array, options) {
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
  },

  /**
   * {{eachIndexPlusOne}}
   *
   * @param  {[type]} array   [description]
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   * @example:
   *   {{#eachIndexPlusOne collection}}
   *     {{item}} is {{index}}
   *   {{/eachIndexPlusOne}}
   */
  eachIndexPlusOne: function (array, options) {
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
  },

  /**
   * {{arrayify}}
   *
   * Takes a string, such as "foo, bar, baz", and converts
   * to an ES Array of strings.
   *
   * @credit: http://bit.ly/1840DsB
   *
   * @param  {[type]} data [description]
   * @return {[type]}      [description]
   */
  arrayify: function (data) {
    return data.split(",").map(function (tag) {
      return "\"" + tag + "\"";
    });
  }
};

module.exports.register = function (Handlebars, options) {
  options = options || {};

  for (var helper in helpers) {
    Handlebars.registerHelper(helper, helpers[helper]);
  }
  return this;
};