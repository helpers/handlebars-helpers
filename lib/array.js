'use strict';

var Handlebars = require('handlebars');
var isNumber = require('is-number');
var filter = require('arr-filter');
var sortBy = require('array-sort');
var eachProperty = require('./utils/eachProperty');
var indexOf = require('./utils/indexOf');
var utils = require('./utils/utils');

/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * @param {Array} `array`
 * @param {Object} `options`
 * @api public
 */

helpers.any = function(array, options) {
  if (array.length > 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

/**
 * Return all of the items in the collection after the specified count.
 *
 * @param {Array} `array` Collection
 * @param {Number} `count` Number of items to exclude
 * @return {Array} Array excluding the number of items specified
 * @api public
 */

helpers.after = function(array, count) {
  return array.slice(count);
};

/**
 * Returns all of the items in an arry after the specified index.
 * Opposite of `{{before}}`.
 *
 * ```handlebars
 * {{after "['a', 'b', 'c']" 1}}
 * //=> '["c"]'
 * ```
 *
 * @param {Array} `array` Collection
 * @param {Number} `n` Starting index (number of items to exclude)
 * @return {Array} Array exluding `n` items.
 * @crosslink before
 * @api public
 */

helpers.after = function(arr, n) {
  if (utils.isUndefined(arr)) return '';
  return arr.slice(n);
};

/**
 * Cast `val` to an array.
 *
 * ```handlebars
 * {{arrayify "abc"}}
 * //=> '["a"]'
 * ```
 *
 * @param  {*} `val` The value to arrayify.
 * @return  {Array} An array.
 * @return {Array}
 * @api public
 */

helpers.arrayify = function(val) {
  return Array.isArray(val) ? val : [val];
};

/**
 * Return all of the items in the collection before the specified
 * count. Opposite of {{after}}.
 *
 * ```handlebars
 * {{before "['a', 'b', 'c']" 2}}
 * //=> '["a", "b"]'
 * ```
 *
 * @param {Array} `array`
 * @param {Number} `n`
 * @return {Array} Array excluding items after the given number.
 * @crosslink after
 * @api public
 */

helpers.before = function(arr, n) {
  if (utils.isUndefined(arr)) return '';
  return arr.slice(0, -n);
};

/**
 * Returns an array with all falsey values removed.
 *
 * ```handlebars
 * {{compact "[null, a, undefined, 0, false, b, c, '']"}}
 * //=> '["a", "b", "c"]'
 * ```
 * @param {Array} `array`
 * @return {Array}
 * @api public
 */

helpers.compact = function(array) {
  if (utils.isUndefined(array)) return '';
  if (typeof array === 'string' && /[[]/.test(array)) {
    array = utils.tryParse(array) || [];
  }
  return array.filter(Boolean);
};

/**
 * @name .filter
 * @param {type} `array`
 * @param {type} `value`
 * @param {type} `options`
 * @return {String}
 * @api public
 */

helpers.filter = function(array, value, options) {
  var data = void 0;
  var content = '';
  var results = [];

  if (options.data) {
    data = Handlebars.createFrame(options.data);
  }

  // filter on a specific property
  var prop = options.hash && options.hash.property;
  if (prop) {
    results = filter(array, function (val) {
      if (val[prop] === value) {
        return true;
      }
    });
  } else {

    // filter on a string value
    results = filter(array, function(v, k) {
      return value === v;
    });
  }

  if (results && results.length > 0) {
    for (var i = 0; i < results.length; i++) {
      content += options.fn(results[i], {
        data: data
      });
    }
  } else {
    content = options.inverse(this);
  }
  return content;
};

/**
 * ```handlebars
 * {{#eachIndex collection}}
 *   {{item}} is {{index}}
 * {{/eachIndex}}
 * ```
 * @param {Array} `array`
 * @param {Object} `options`
 * @return {String}
 */

helpers.eachIndex = function(arr, options) {
  var result = '';
  for (var i = 0; i < arr.length; i++) {
    result += options.fn({item: arr[i], index: i});
  }
  return result;
};

/**
 * Handlebars block helper to enumerate the properties
 * in an object
 *
 * @param {Object} `context`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */

helpers.eachProperty = function(context, options) {
  return eachProperty(context, options);
};

/**
 * ```handlebars
 * {{#eachIndexPlusOne array}}
 *   {{item}} is {{index}}
 * {{/eachIndexPlusOne}}
 * ```
 * @param {Array} `array`
 * @param {Object} `options`
 * @return {String}
 * @api public
 */

helpers.eachIndexPlusOne = function(arr, options) {
  var result = '';
  for (var i = 0; i < arr.length; i++) {
    result += options.fn({item: arr[i], index: i + 1});
  }
  return result;
};

/**
 * @name .empty
 * @param {type} `array`
 * @param {type} `options`
 * @return {String}
 * @api public
 */

helpers.empty = function(array, options) {
  if (array.length <= 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

/**
 * Returns the first item, or first `n` items of an array.
 *
 * ```handlebars
 * {{first "['a', 'b', 'c', 'd', 'e']" 2}}
 * //=> '["a", "b"]'
 * ```
 *
 * @param {Array} `array`
 * @param {Number} `n` Number of items to return, starting at `0`.
 * @return {Array}
 * @api public
 */

helpers.first = function(arr, n) {
  if (utils.isUndefined(arr)) return '';
  if (!isNumber(n)) {
    return arr[0];
  } else {
    return arr.slice(0, n);
  }
};

/**
 * Data:
 *
 * ```js
 * var accounts = [
 *   {'name': 'John', 'email': 'john@example.com'},
 *   {'name': 'Malcolm', 'email': 'malcolm@example.com'},
 *   {'name': 'David', 'email': 'david@example.com'}
 * ];
 * ```
 *
 * Templates:
 *
 * ```handlebars
 * {{#forEach accounts}}
 *   <a href="mailto:{{ email }}" title="Send an email to {{ name }}">
 *     {{ name }}
 *   </a>{{#unless isLast}}, {{/unless}}
 * {{/forEach}}
 * ```
 * Credit: http://bit.ly/14HLaDR
 * @api public
 */

helpers.forEach = function(array, options) {
  var len = array.length;
  var i = -1;
  var buffer = '';

  while (++i < len) {
    var item = array[i];
    item.index = i + 1;
    item.total = len;
    item.isFirst = i === 0;
    item.isLast = i === (len - 1);
    buffer += options.fn(item);
  }
  return buffer;
};

/**
 * @name .inArray
 * @param {type} `array`
 * @param {type} `value`
 * @param {type} `options`
 * @return {String}
 * @api public
 */

helpers.inArray = function(array, value, options) {
  if (indexOf.call(array, value) >= 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

/**
 * Returns true if `value` is an array.
 *
 * ```handlebars
 * {{isArray "abc"}}
 * //=> 'false'
 * ```
 *
 * @param {any} `value` The value to test.
 * @return {Boolean}
 * @api public
 */

helpers.isArray = function(value) {
  return Array.isArray(value);
};

/**
 * Similar to {{#each}} helper, but treats array-like objects
 * as arrays (e.g. objects with a `.length` property that
 * is a number) rather than objects. This lets us iterate
 * over our collections items.
 *
 * @api public
 */

helpers.iterate = function(context, options) {
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
        if (data) {
          data.index = i;
        }
        ret = ret + fn(context[i], {
          data: data
        });
        i++;
      }
    } else {
      for (var key in context) {
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
};

/**
 * Join all elements of array into a string, optionally using a
 * given separator.
 *
 * ```handlebars
 * {{join "['a', 'b', 'c']"}}
 * //=> 'a, b, c'
 *
 * {{join "['a', 'b', 'c']" '-'}}
 * //=> 'a-b-c'
 * ```
 *
 * @param {Array} `array`
 * @param {String} `sep` The separator to use.
 * @return {String}
 * @api public
 */

helpers.join = function(array, sep) {
  if (utils.isUndefined(array)) return '';
  sep = typeof sep !== 'string'
    ? ', '
    : sep;
  return array.join(sep);
};

/**
 * Handlebars "joinAny" block helper that supports arrays of objects
 * or strings. Sourced from: <https://github.com/wycats/handlebars.js/issues/133>
 *
 * If "delimiter" is not speficified, then it defaults to ",".
 * You can use "start", and "end" to do a "slice" of the array.
 *
 * Usage with objects
 *
 * ```handlebars
 * {{#join people delimiter=" and "}}{{name}}, {{age}}{{/join}}
 * ```
 * Usage with arrays:
 *
 * ```handlebars
 * {{join jobs delimiter=", " start="1" end="2"}}
 * ```
 * @api public
 */

helpers.joinAny = function(items, block) {
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
};

/**
 * Returns the last item, or last `n` items of an array.
 *
 * ```handlebars
 * {{last "['a', 'b', 'c', 'd', 'e']" 2}}
 * //=> '["d", "e"]'
 * ```
 *
 * @param {Array} `array`
 * @param {Number} `n` Number of items to return, starting with the last item.
 * @return {Array}
 * @api public
 */

helpers.last = function(array, n) {
  if (utils.isUndefined(array)) return '';
  if (!isNumber(n)) {
    return array[array.length - 1];
  } else {
    return array.slice(-n);
  }
};

/**
 * Returns the length of the given array.
 *
 * ```handlebars
 * {{length "['a', 'b', 'c']"}}
 * //=> 3
 * ```
 *
 * @param  {Array} `array`
 * @return {Number} The length of the array.
 * @api public
 */

helpers.length = function(val) {
  if (utils.isUndefined(val)) return '';
  if (typeof val === 'string' && /[[]/.test(val)) {
    val = utils.tryParse(val) || [];
  }
  return val.length;
};

/**
 * @name .lengthEqual
 * @param {type} `array`
 * @param {type} `length`
 * @param {type} `options`
 * @return {String}
 * @api public
 */

helpers.lengthEqual = function(array, length, options) {
  if (array.length === length) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

/**
 * Returns a new array, created by calling `function`
 * on each element of the given `array`.
 *
 * ```handlebars
 * function double(str) {
 *   return str + str;
 * }
 * ```
 *
 * Assuming that `double` has been registered as a helper:
 *
 * ```handlebars
 * {{map "['a', 'b', 'c']" double}}
 * //=> '["aa", "bb", "cc"]'
 * ```
 *
 * @param {Array} `array`
 * @param {String} `fn` The function to
 * @return {String}
 * @api public
 */

helpers.map = function(arary, fn) {
  if (utils.isUndefined(arary)) return '';
  if (typeof arary === 'string' && /[[]/.test(arary)) {
    arary = utils.tryParse(arary) || [];
  }
  var len = arary.length;
  var res = new Array(len);
  var i = -1;

  while (++i < len) {
    res[i] = fn(arary[i], i, arary);
  }
  return res;
};

/**
 * Sort the given `array`. If an array of objects is passed,
 * you may optionally pass a `key` to sort on as the second
 * argument. You may alternatively pass a sorting function as
 * the second argument.
 *
 * ```handlebars
 * {{sort "['b', 'a', 'c']"}}
 * //=> 'a,b,c'
 *
 * {{sort "[{a: 'zzz'}, {a: 'aaa'}]" "a"}}
 * //=> '[{"a":"aaa"},{"a":"zzz"}]'
 * ```
 *
 * @param {Array} `array` the array to sort.
 * @param {String|Function} `key` The object key to sort by, or sorting function.
 * @api public
 */

helpers.sort = function(arr, key) {
  if (utils.isUndefined(arr)) return '';
  if (typeof key === 'function') {
    return arr.sort(key);
  }
  if (typeof key !== 'string') {
    return arr.sort();
  }
  return arr.sort(function(a, b) {
    return a[key] > b[key];
  });
};

/**
 * Sort the given `array`. If an array of objects is passed,
 * you may optionally pass a `key` to sort on as the second
 * argument. You may alternatively pass a sorting function as
 * the second argument.
 *
 * ```handlebars
 * {{sortBy '["b", "a", "c"]'}}
 * //=> 'a,b,c'
 *
 * {{sortBy '[{a: "zzz"}, {a: "aaa"}]' "a"}}
 * //=> '[{"a":"aaa"},{"a":"zzz"}]'
 * ```
 *
 * @param {Array} `array` the array to sort.
 * @param {String|Function} `key` The object key to sort by, or sorting function.
 * @api public
 */

helpers.sortBy = function(arr, key) {
  if (utils.isUndefined(arr)) return '';
  var args = [].slice.call(arguments);
  var opts = args.pop();

  if (typeof args[0] === 'string' && /[[]/.test(args[0])) {
    args[0] = utils.tryParse(args[0]) || [];
  }
  if (utils.isUndefined(args[1])) {
    return args[0].sort();
  }
  return sortBy.apply(null, args);
};

/**
 * Shuffle the items in an array.
 *
 * ```js
 * {{shuffle '["a", "b", "c"]'}}
 * //=> ["c", "a", "b"]
 * ```
 *
 * @param  {Array} `arr`
 * @return {Array}
 * @api public
 */

helpers.shuffle = function(arr) {
  var len = arr.length;
  var res = new Array(len);
  var i = -1;

  while (++i < len) {
    var rand = utils.random(0, i);
    if (i != rand) {
      res[i] = res[rand];
    }
    res[rand] = arr[i];
  }
  return res;
};

/**
 * Use the first item in a collection inside a handlebars
 * block expression. Opposite of [withLast][].
 *
 * @param {Array} `array`
 * @param {Number} count
 * @param {Object} `options`
 * @return {*}
 * @api public
 */

helpers.withFirst = function(arr, num, options) {
  if (!utils.isUndefined(arr)) {
    arr = utils.result(arr);
    if (!utils.isUndefined(num)) {
      num = parseFloat(utils.result(num));
    }
    if (utils.isUndefined(num)) {
      options = num;
      return options.fn(arr[0]);
    } else {
      arr = arr.slice(0, num);
      var result = '';
      for (var item in arr) {
        result += options.fn(arr[item]);
      }
      return result;
    }
  } else {
    return console.error('{{withFirst}} takes at least one argument (array).');
  }
};

/**
 * Return the last item in an array. Opposite of [first][].
 *
 * @param {Array} `array`
 * @param {Number} `num` The number of elements to return.
 * @return {Array}
 * @api public
 */

helpers.last = function(array, num) {
  if (utils.isUndefined(num)) {
    return array[array.length - 1];
  } else {
    return array.slice(-num);
  }
};

/**
 * Use the last item in a collection inside a block.
 * Opposite of [withFirst][].
 *
 * @param {Array} `array`
 * @param {Number} count
 * @param {Object} `options`
 * @return {*}
 * @api public
 */

helpers.withLast = function(array, count, options) {
  if (utils.isUndefined(count)) {
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
};

/**
 * @name .withSort
 * @param {type} `array`
 * @param {type} `field`
 * @param {type} `options`
 * @return {String}
 * @api public
 */

helpers.withSort = function(array, field, options) {
  array = array.slice();

  function get(obj, desc) {
    var arr = desc.split('.');
    while (arr.length && (obj = obj[arr.shift()])) {
      continue;
    }
    return obj;
  }

  var result = '';
  var item;
  var i;
  var len;
  if (utils.isUndefined(field)) {
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
    array = array.sort(function(a, b) {
      var aProp = get(a, field);
      var bProp = get(b, field);
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
};

/**
 * Converts a string such as "foo, bar, baz" to an ES Array of strings.
 *
 * @source: http://bit.ly/1840DsB
 * @param {String} `str`
 * @return {String}
 * @api public
 */

helpers.toArray = function(str) {
  return str.split(',').map(function(ele) {
    return '"' + ele + '"';
  });
};

/**
 * Use all of the items in the collection after the specified count
 * inside a block.
 *
 * @param {Array} `array`
 * @param {Number} `count`
 * @param {Object} `options`
 * @return {Array}
 * @api public
 */

helpers.withAfter = function(array, count, options) {
  array = array.slice(count);
  var result = '';
  for (var item in array) {
    result += options.fn(array[item]);
  }
  return result;
};

/**
 * Use all of the items in the collection before the specified count
 * inside a block. Opposite of {{withAfter}}
 *
 * @param {Array} `array`
 * @param {Number} count
 * @param {Object} `options`
 * @return {Array}
 * @api public
 */

helpers.withBefore = function(array, count, options) {
  array = array.slice(0, -count);
  var result = '';
  for (var item in array) {
    result += options.fn(array[item]);
  }
  return result;
};
