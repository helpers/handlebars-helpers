'use strict';

var Handlebars = require('handlebars');
var isNumber = require('is-number');
var filter = require('arr-filter');
var sortBy = require('array-sort');
var get = require('get-value');
var indexOf = require('./utils/indexOf');
var utils = require('./utils');

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
  }
  return options.inverse(this);
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
 * @api public
 */

helpers.after = function(arr, n) {
  if (utils.isUndefined(arr)) return '';
  return arr.slice(n);
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
 * @api public
 */

helpers.before = function(arr, n) {
  if (utils.isUndefined(arr)) return '';
  return arr.slice(0, -n);
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
  var content = '';
  var results = [];
  var data = {};

  if (typeof options.data === 'object') {
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
      content += options.fn(results[i], {data: data});
    }
    return content;
  }

  return options.inverse(this);
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
 * ```js
 * var accounts = [
 *   {'name': 'John', 'email': 'john@example.com'},
 *   {'name': 'Malcolm', 'email': 'malcolm@example.com'},
 *   {'name': 'David', 'email': 'david@example.com'}
 * ];
 *
 * // example usage
 * // {{#forEach accounts}}
 * //   <a href="mailto:{{ email }}" title="Send an email to {{ name }}">
 * //     {{ name }}
 * //   </a>{{#unless isLast}}, {{/unless}}
 * // {{/forEach}}
 * ```
 * @credit <http://stackoverflow.com/questions/13861007>
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
 * Returns the last item, or last `n` items of an array.
 * Opposite of [first][].
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
 * ```js
 * // register `double` as a helper
 * function double(str) {
 *   return str + str;
 * }
 * // then used like this:
 * // {{map "['a', 'b', 'c']" double}}
 * //=> '["aa", "bb", "cc"]'
 * ```
 *
 * @param {Array} `array`
 * @param {String} `fn` The function to
 * @return {String}
 * @api public
 */

helpers.map = function(array, fn) {
  if (utils.isUndefined(array)) return '';
  if (typeof array === 'string' && /[[]/.test(array)) {
    array = utils.tryParse(array) || [];
  }
  var len = array.length;
  var res = new Array(len);
  var i = -1;

  while (++i < len) {
    res[i] = fn(array[i], i, array);
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
 * ```
 *
 * @param {Array} `array` the array to sort.
 * @param {String|Function} `key` The object key to sort by, or sorting function.
 * @api public
 */

helpers.sort = function(arr, options) {
  if (utils.isUndefined(arr)) return '';
  if (get(options, 'hash.reverse')) {
    return arr.sort().reverse();
  }
  return arr.sort();
};

/**
 * Sort an `array`. If an array of objects is passed,
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
 * @param {String|Function} `props` One or more properties to sort by, or sorting functions to use.
 * @api public
 */

helpers.sortBy = function(arr, prop) {
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
 * Use the items in the array _after_ the specified index
 * as context inside a block. Opposite of [withBefore][].
 *
 * @param {Array} `array`
 * @param {Number} `idx`
 * @param {Object} `options`
 * @return {Array}
 * @api public
 */

helpers.withAfter = function(array, idx, options) {
  array = array.slice(idx);
  var result = '';

  var len = array.length, i = -1;
  while (++i < len) {
    result += options.fn(array[i]);
  }
  return result;
};

/**
 * Use the items in the array _before_ the specified index
 * as context inside a block.Opposite of [withAfter][].
 *
 * ```handlebars
 * {{#withBefore array 3}}
 *   {{this}}
 * {{/withBefore}}
 * ```
 * @param {Array} `array`
 * @param {Number} `idx`
 * @param {Object} `options`
 * @return {Array}
 * @api public
 */

helpers.withBefore = function(array, idx, options) {
  array = array.slice(0, -idx);
  var result = '';

  var len = array.length, i = -1;
  while (++i < len) {
    result += options.fn(array[i]);
  }
  return result;
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
  if (utils.isUndefined(arr)) return '';
  arr = utils.result(arr);

  if (!utils.isUndefined(num)) {
    num = parseFloat(utils.result(num));
  }
  if (utils.isUndefined(num)) {
    options = num;
    return options.fn(arr[0]);
  }
  arr = arr.slice(0, num);
  var result = '';
  for (var item in arr) {
    result += options.fn(arr[item]);
  }
  return result;
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
 * Block helper that sorts a collection and exposes the sorted
 * collection as context inside the block.
 *
 * @name .withSort
 * @param {type} `array`
 * @param {type} `prop`
 * @param {type} `options` Specify `reverse="true"` to reverse the array.
 * @return {String}
 * @api public
 */

helpers.withSort = function(array, prop, options) {
  array = array.slice();
  var result = '';

  if (utils.isUndefined(prop)) {
    options = prop;
    options = options || {};

    array = array.sort();
    if (get(options, 'hash.reverse')) {
      array = array.reverse();
    }

    for (var i = 0, len = array.length; i < len; i++) {
      result += options.fn(array[i]);
    }
    return result;
  }

  array.sort(function(a, b) {
    var aProp = get(a, prop);
    var bProp = get(b, prop);
    if (aProp > bProp) {
      return 1;
    }
    if (aProp < bProp) {
      return -1;
    }
    return 0;
  });

  if (get(options, 'hash.reverse')) {
    array = array.reverse();
  }

  var len = array.length, i = -1;
  while (++i < len) {
    result += options.fn(array[i]);
  }
  return result;
};
