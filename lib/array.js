'use strict';

var util = require('handlebars-utils');
var helpers = module.exports;
const arraySort = require('array-sort');
const getValue = require('get-value');
const createFrame = require('./utils/createFrame');

/**
 * Returns all of the items in an array after the specified index.
 * Opposite of [before](#before).
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c'] -->
 * {{after array 1}}
 * <!-- results in: '['c']' -->
 * ```
 * @param {Array} `array` Collection
 * @param {Number} `n` Starting index (number of items to exclude)
 * @return {Array} Array exluding `n` items.
 * @api public
 * @example {{ after [1, 2, 3] 1}} -> [3]
 */

helpers.after = function(array, n) {
  if (util.isUndefined(array)) return '';
  array = util.result(array);
  if (Array.isArray(array)) {
    return array.slice(n);
  }
  return '';
};

/**
 * Cast the given `value` to an array.
 *
 * ```handlebars
 * {{arrayify 'foo'}}
 * <!-- results in: [ 'foo' ] -->
 * ```
 * @param {any} `value`
 * @return {Array}
 * @api public
 * @example {{ arrayify 'foo' }} -> ['foo']
 */

helpers.arrayify = function(value) {
  if (util.isUndefined(value)) return [];
  return value ? (Array.isArray(value) ? value : [value]) : [];
};

/**
 * Return all of the items in the collection before the specified
 * count. Opposite of [after](#after).
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c'] -->
 * {{before array 2}}
 * <!-- results in: '['a', 'b']' -->
 * ```
 * @param {Array} `array`
 * @param {Number} `n`
 * @return {Array} Array excluding items after the given number.
 * @api public
 * @example {{ before [1, 2, 3] 2}} -> [1, 2]
 */

helpers.before = function(array, n) {
  if (util.isUndefined(array)) return '';
  array = util.result(array);
  if (Array.isArray(array)) {
    return array.slice(0, -n);
  }
  return '';
};

/**
 * ```handlebars
 * <!-- array: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] -->
 * {{#eachIndex array}}
 *   {{item}} is {{index}}
 * {{/eachIndex}}
 * ```
 * @param {Array} `array`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 * @example  {{#eachIndex [1, 2, 3]}} {{item}} is {{index}} {{/eachIndex}}
 */

helpers.eachIndex = function(array, options) {
  var result = '';
  if (util.isUndefined(array)) return '';
  array = util.result(array);
  if (Array.isArray(array)) {
    for (var i = 0; i < array.length; i++) {
      result += options.fn({item: array[i], index: i});
    }
  }
  return result;
};

/**
 * Block helper that filters the given array and renders the block for values that
 * evaluate to `true`, otherwise the inverse block is returned.
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c'] -->
 * {{#filter array 'foo'}}AAA{{else}}BBB{{/filter}}
 * <!-- results in: 'BBB' -->
 * ```
 * @param {Array} `array`
 * @param {any} `value`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 * @example {{#filter [1, 2, 3] 2}}2 Found{{else}}2 not found{{/filter}}
 */

helpers.filter = function(array, value, options) {
  if (util.isUndefined(array)) return options.inverse(this);
  array = util.result(array);
  if (Array.isArray(array)) {

    var content = '';
    var results = [];

    // filter on a specific property
    var prop = options.hash && (options.hash.property || options.hash.prop);
    if (prop) {
      results = array.filter(function(val) {
        return value === getValue(val, prop);
      });
    } else {

      // filter on a string value
      results = array.filter(function(v) {
        return value === v;
      });
    }

    if (results && results.length > 0) {
      for (var i = 0; i < results.length; i++) {
        content += options.fn(results[i]);
      }
      return content;
    }
  }
  return options.inverse(this);
};

/**
 * Returns the first item, or first `n` items of an array.
 *
 * ```handlebars
 * {{first '['a', 'b', 'c', 'd', 'e']' 2}}
 * <!-- results in: '['a', 'b']' -->
 * ```
 * @param {Array} `array`
 * @param {Number} `n` Number of items to return, starting at `0`.
 * @return {Array}
 * @api public
 * @example {{first [1, 2, 3, 4] 2}} -> [1, 2]
 */

helpers.first = function(array, n) {
  if (util.isUndefined(array)) return [];
  array = util.result(array);
  if (Array.isArray(array)) {
    if (isNaN(n)) {
      return array[0];
    }
    return array.slice(0, n);
  }
  return [];
};

/**
 * Iterates over each item in an array and exposes the current item
 * in the array as context to the inner block. In addition to
 * the current array item, the helper exposes the following variables
 * to the inner block:
 *
 * - `index`
 * - `total`
 * - `isFirst`
 * - `isLast`
 *
 * Also, `@index` is exposed as a private variable, and additional
 * private variables may be defined as hash arguments.
 *
 * ```handlebars
 * <!-- accounts = [
 *   {'name': 'John', 'email': 'john@example.com'},
 *   {'name': 'Malcolm', 'email': 'malcolm@example.com'},
 *   {'name': 'David', 'email': 'david@example.com'}
 * ] -->
 *
 * {{#forEach accounts}}
 *   <a href='mailto:{{ email }}' title='Send an email to {{ name }}'>
 *     {{ name }}
 *   </a>{{#unless isLast}}, {{/unless}}
 * {{/forEach}}
 * ```
 * @source <http://stackoverflow.com/questions/13861007>
 * @param {Array} `array`
 * @return {String}
 * @block
 * @api public
 * @example {{#forEach [{ 'name': 'John' }] }} {{ name }} {{/forEach}}
 */

helpers.forEach = function(array, options) {
  if (util.isUndefined(array)) return options.inverse(this);
  array = util.result(array);
  if (Array.isArray(array)) {
    var data = createFrame(options, options.hash);
    var len = array.length;
    var buffer = '';
    var i = -1;

    while (++i < len) {
      var item = array[i];
      data.index = i;
      item.index = i + 1;
      item.total = len;
      item.isFirst = i === 0;
      item.isLast = i === (len - 1);
      buffer += options.fn(item, {data: data});
    }
    return buffer;
  }
  return options.inverse(this);
};

/**
 * Block helper that renders the block if an array has the
 * given `value`. Optionally specify an inverse block to render
 * when the array does not have the given value.
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c'] -->
 * {{#inArray array 'd'}}
 *   foo
 * {{else}}
 *   bar
 * {{/inArray}}
 * <!-- results in: 'bar' -->
 * ```
 * @param {Array} `array`
 * @param {any} `value`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 * @example {{#inArray [1, 2, 3] 2}} 2 exists {{else}} 2 does not exist {{/inArray}} -> 2 exists
 */

helpers.inArray = function(array, value, options) {
  if (util.isUndefined(array)) return '';
  array = util.result(array);
  if (Array.isArray(array)) {
    return util.value(util.indexOf(array, value) > -1, this, options);
  }
  return '';
};

/**
 * Returns true if `value` is an es5 array.
 *
 * ```handlebars
 * {{isArray 'abc'}}
 * <!-- results in: false -->
 *
 * <!-- array: [1, 2, 3] -->
 * {{isArray array}}
 * <!-- results in: true -->
 * ```
 * @param {any} `value` The value to test.
 * @return {Boolean}
 * @api public
 * @example {{isArray [1, 2]}} -> true
 */

helpers.isArray = function(value) {
  return Array.isArray(value);
};

/**
 * Returns the item from `array` at index `idx`.
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c'] -->
 * {{itemAt array 1}}
 * <!-- results in: 'b' -->
 * ```
 * @param {Array} `array`
 * @param {Number} `idx`
 * @return {any} `value`
 * @block
 * @api public
 * @example {{itemAt [1, 2, 3] 1}} -> 2
 */

helpers.itemAt = function(array, idx) {
  if (util.isUndefined(array)) return null;
  array = util.result(array);
  if (Array.isArray(array)) {
    idx = !isNaN(idx) ? +idx : 0;
    if (idx < 0) {
      return array[array.length + idx];
    }
    if (idx < array.length) {
      return array[idx];
    }
  }
  return null;
};

/**
 * Join all elements of array into a string, optionally using a
 * given separator.
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c'] -->
 * {{join array}}
 * <!-- results in: 'a, b, c' -->
 *
 * {{join array '-'}}
 * <!-- results in: 'a-b-c' -->
 * ```
 * @param {Array} `array`
 * @param {String} `separator` The separator to use. Defaults to `, `.
 * @return {String}
 * @api public
 * @example {{join [1, 2, 3]}} -> '1, 2, 3'
 */

helpers.join = function(array, separator) {
  if (util.isUndefined(array)) return '';
  if (typeof array === 'string') return array;
  array = util.result(array);
  if (Array.isArray(array)) {
    separator = util.isString(separator) ? separator : ', ';
    return array.join(separator);
  }
  return '';
};

/**
 * Returns true if the the length of the given `value` is equal
 * to the given `length`. Can be used as a block or inline helper.
 *
 * @param {Array|String} `value`
 * @param {Number} `length`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 * @example {{equalsLength '[1,2,3]' 3}} -> true
 */

helpers.equalsLength = function(value, length, options) {
  if (util.isOptions(length)) {
    options = length;
    length = 0;
  }

  var len = helpers.length(value);

  return util.value(len === length, this, options);
};

/**
 * Returns the last item, or last `n` items of an array or string.
 * Opposite of [first](#first).
 *
 * ```handlebars
 * <!-- var value = ['a', 'b', 'c', 'd', 'e'] -->
 *
 * {{last value}}
 * <!-- results in: ['e'] -->
 *
 * {{last value 2}}
 * <!-- results in: ['d', 'e'] -->
 *
 * {{last value 3}}
 * <!-- results in: ['c', 'd', 'e'] -->
 * ```
 * @param {Array|String} `value` Array or string.
 * @param {Number} `n` Number of items to return from the end of the array.
 * @return {Array}
 * @api public
 * @example {{last [1, 2, 3]}} -> 3
 */

helpers.last = function(array, n) {
  if (util.isUndefined(array)) return '';
  if (!Array.isArray(array) && typeof value !== 'string') {
    return '';
  }
  if (isNaN(n)) {
    return array[array.length - 1];
  }
  return array.slice(-Math.abs(n));
};

/**
 * Returns the length of the given string or array.
 *
 * ```handlebars
 * {{length '['a', 'b', 'c']'}}
 * <!-- results in: 3 -->
 *
 * <!-- results in: myArray = ['a', 'b', 'c', 'd', 'e']; -->
 * {{length myArray}}
 * <!-- results in: 5 -->
 *
 * <!-- results in: myObject = {'a': 'a', 'b': 'b'}; -->
 * {{length myObject}}
 * <!-- results in: 2 -->
 * ```
 * @param {Array|Object|String} `value`
 * @return {Number} The length of the value.
 * @api public
 * @example {{length '[1, 2, 3]'}} -> 3
 */

helpers.length = function(array) {
  if (util.isUndefined(array)) return 0;
  if (util.isObject(array) && !util.isOptions(array)) {
    array = Object.keys(array);
  }
  // this is an inline array, split it
  if (typeof array === 'string' && array.startsWith('[') && array.endsWith(']')) {
    return array.split(',').length;
  }
  if (typeof array === 'string' || Array.isArray(array)) {
    return array.length;
  }
  return 0;
};

/**
 * Alias for [equalsLength](#equalsLength)
 *
 * @api public
 */

helpers.lengthEqual = helpers.equalsLength;

/**
 * Returns a new array, created by calling `function` on each
 * element of the given `array`. For example,
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c'], and 'double' is a
 * fictitious function that duplicates letters -->
 * {{map array double}}
 * <!-- results in: '['aa', 'bb', 'cc']' -->
 * ```
 *
 * @param {Array} `array`
 * @param {Function} `fn`
 * @return {String}
 * @api public
 * @example {{map [1, 2, 3] double}} -> [2, 4, 6]
 */

helpers.map = function(array, iter) {
  if (util.isUndefined(array)) return '';
  if (!Array.isArray(array)) return '';
  var len = array.length;
  var res = new Array(len);
  var i = -1;

  if (typeof iter !== 'function') {
    return array;
  }

  while (++i < len) {
    res[i] = iter(array[i], i, array);
  }
  return res;
};

/**
 * Map over the given object or array or objects and create an array of values
 * from the given `prop`. Dot-notation may be used (as a string) to get
 * nested properties.
 *
 * ```handlebars
 * // {{pluck items 'data.title'}}
 * <!-- results in: '['aa', 'bb', 'cc']' -->
 * ```
 * @param {Array|Object} `collection`
 * @param {Function} `prop`
 * @return {String}
 * @api public
 * @example {{pluck [{ 'name': 'Bob' }] 'name' }} -> ['Bob']
 */

helpers.pluck = function(array, prop) {
  if (util.isUndefined(array)) return '';
  array = util.result(array);
  if (Array.isArray(array)) {
    var res = [];
    for (var i = 0; i < array.length; i++) {
      var val = getValue(array[i], prop);
      if (typeof val !== 'undefined') {
        res.push(val);
      }
    }
    return res;
  }
  return '';
};

/**
 * Reverse the elements in an array, or the characters in a string.
 *
 * ```handlebars
 * <!-- value: 'abcd' -->
 * {{reverse value}}
 * <!-- results in: 'dcba' -->
 * <!-- value: ['a', 'b', 'c', 'd'] -->
 * {{reverse value}}
 * <!-- results in: ['d', 'c', 'b', 'a'] -->
 * ```
 * @param {Array|String} `value`
 * @return {Array|String} Returns the reversed string or array.
 * @api public
 * @example {{reverse [1, 2, 3]}} -> [3, 2, 1]
 */

helpers.reverse = function(array) {
  if (util.isUndefined(array)) return '';
  array = util.result(array);
  if (Array.isArray(array)) {
    array.reverse();
    return array;
  }
  if (array && typeof array === 'string') {
    return array.split('').reverse().join('');
  }
  return '';
};

/**
 * Block helper that returns the block if the callback returns true
 * for some value in the given array.
 *
 * ```handlebars
 * <!-- array: [1, 'b', 3] -->
 * {{#some array isString}}
 *   Render me if the array has a string.
 * {{else}}
 *   Render me if it doesn't.
 * {{/some}}
 * <!-- results in: 'Render me if the array has a string.' -->
 * ```
 * @param {Array} `array`
 * @param {Function} `iter` Iteratee
 * @param {Options} Handlebars provided options object
 * @return {String}
 * @block
 * @api public
 * @example {{#some [1, 'b', 3] isString}} string found {{else}} No string found {{/some}} -> string found
 */

helpers.some = function(array, iter, options) {
  if (util.isUndefined(array)) return options.inverse(this);
  array = util.result(array);
  if (Array.isArray(array)) {
    for (var i = 0; i < array.length; i++) {
      if (iter(array[i], i, array)) {
        return options.fn(this);
      }
    }
  }
  return options.inverse(this);
};

/**
 * Sort the given `array`. If an array of objects is passed,
 * you may optionally pass a `key` to sort on as the second
 * argument. You may alternatively pass a sorting function as
 * the second argument.
 *
 * ```handlebars
 * <!-- array: ['b', 'a', 'c'] -->
 * {{sort array}}
 * <!-- results in: '['a', 'b', 'c']' -->
 * ```
 *
 * @param {Array} `array` the array to sort.
 * @param {String|Function} `key` The object key to sort by, or sorting function.
 * @api public
 * @example {{ sort ['b', 'a', 'c'] }} -> ['a', 'b', 'c']
 */

helpers.sort = function(array, options) {
  if (util.isUndefined(array)) return '';
  array = util.result(array);
  if (Array.isArray(array)) {
    if (getValue(options, 'hash.reverse')) {
      return array.sort().reverse();
    }
    return array.sort();
  }
  return '';
};

/**
 * Sort an `array`. If an array of objects is passed,
 * you may optionally pass a `key` to sort on as the second
 * argument. You may alternatively pass a sorting function as
 * the second argument.
 *
 * ```handlebars
 * <!-- array: [{a: 'zzz'}, {a: 'aaa'}] -->
 * {{sortBy array 'a'}}
 * <!-- results in: '[{'a':'aaa'}, {'a':'zzz'}]' -->
 * ```
 *
 * @param {Array} `array` the array to sort.
 * @param {String|Function} `props` One or more properties to sort by, or sorting functions to use.
 * @api public
 * @example {{ sortBy [{a: 'zzz'}, {a: 'aaa'}] 'a' }} -> [{'a':'aaa'}, {'a':'zzz'}]
 */

helpers.sortBy = function(array, prop, options) {
  if (util.isUndefined(array)) return '';
  array = util.result(array);
  if (Array.isArray(array)) {
    var args = [].slice.call(arguments);
    // remove handlebars options
    args.pop();

    if (!util.isString(prop) && typeof prop !== 'function') {
      return array.sort();
    }
    return arraySort.apply(null, args);
  }
  return '';
};

/**
 * Use the items in the array _after_ the specified index
 * as context inside a block. Opposite of [withBefore](#withBefore).
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c', 'd', 'e'] -->
 * {{#withAfter array 3}}
 *   {{this}}
 * {{/withAfter}}
 * <!-- results in: 'de' -->
 * ```
 * @param {Array} `array`
 * @param {Number} `idx`
 * @param {Object} `options`
 * @return {Array}
 * @block
 * @api public
 * @example {{ withAfter [1, 2, 3] 1 }} {{this}} {{/withAfter}}
 */

helpers.withAfter = function(array, idx, options) {
  if (util.isUndefined(array)) return '';
  array = util.result(array);
  if (Array.isArray(array)) {
    array = array.slice(idx);
    var result = '';

    for (var i = 0; i < array.length; i++) {
      result += options.fn(array[i]);
    }
    return result;
  }
  return '';
};

/**
 * Use the items in the array _before_ the specified index
 * as context inside a block. Opposite of [withAfter](#withAfter).
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c', 'd', 'e'] -->
 * {{#withBefore array 3}}
 *   {{this}}
 * {{/withBefore}}
 * <!-- results in: 'ab' -->
 * ```
 * @param {Array} `array`
 * @param {Number} `idx`
 * @param {Object} `options`
 * @return {Array}
 * @block
 * @api public
 * @example {{ withBefore [1, 2, 3] 2 }} {{this}} {{/withBefore}}
 */

helpers.withBefore = function(array, idx, options) {
  if (util.isUndefined(array)) return '';
  array = util.result(array);
  if (Array.isArray(array)) {
    array = array.slice(0, -idx);
    var result = '';

    for (var i = 0; i < array.length; i++) {
      result += options.fn(array[i]);
    }
    return result;
  }
  return '';
};

/**
 * Use the first item in a collection inside a handlebars
 * block expression. Opposite of [withLast](#withLast).
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c'] -->
 * {{#withFirst array}}
 *   {{this}}
 * {{/withFirst}}
 * <!-- results in: 'a' -->
 * ```
 * @param {Array} `array`
 * @param {Number} `idx`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 * @example {{ withFirst [1, 2, 3] }} {{this}} {{/withFirst}}
 */

helpers.withFirst = function(array, idx, options) {
  if (util.isUndefined(array)) return '';
  array = util.result(array);
  if (Array.isArray(array)) {
    if (!util.isUndefined(idx)) {
      idx = parseFloat(util.result(idx));
    }

    if (util.isUndefined(idx)) {
      options = idx;
      return options.fn(array[0]);
    }

    array = array.slice(0, idx);
    var result = '';
    for (var i = 0; i < array.length; i++) {
      result += options.fn(array[i]);
    }
    return result;
  }
  return '';
};

/**
 * Block helper that groups array elements by given group `size`.
 *
 * ```handlebars
 * <!-- array: ['a','b','c','d','e','f','g','h'] -->
 * {{#withGroup array 4}}
 *   {{#each this}}
 *     {{.}}
 *   {{each}}
 *   <br>
 * {{/withGroup}}
 * <!-- results in: -->
 * <!-- 'a','b','c','d'<br> -->
 * <!-- 'e','f','g','h'<br> -->
 * ```
 * @param {Array} `array` The array to iterate over
 * @param {Number} `size` The desired length of each array 'group'
 * @param {Object} `options` Handlebars options
 * @return {String}
 * @block
 * @api public
 * @example {{#withGroup [1, 2, 3, 4] 2}} {{#each this}} {{.}} {{each}} <br> {{/withGroup}} -> 1,2<br> 3,4<br>
 * */

helpers.withGroup = function(array, size, options) {
  if (util.isUndefined(array)) return '';
  var result = '';
  array = util.result(array);
  if (Array.isArray(array) && array.length > 0) {
    var subcontext = [];
    for (var i = 0; i < array.length; i++) {
      if (i > 0 && (i % size) === 0) {
        result += options.fn(subcontext);
        subcontext = [];
      }
      subcontext.push(array[i]);
    }
    result += options.fn(subcontext);
  }
  return result;
};

/**
 * Use the last item or `n` items in an array as context inside a block.
 * Opposite of [withFirst](#withFirst).
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c'] -->
 * {{#withLast array}}
 *   {{this}}
 * {{/withLast}}
 * <!-- results in: 'c' -->
 * ```
 * @param {Array} `array`
 * @param {Number} `idx` The starting index.
 * @param {Object} `options`
 * @return {String}
 * @block
 * @example {{#withLast [1, 2, 3, 4]}} {{this}} {{/withLast}} -> 4
 */

helpers.withLast = function(array, idx, options) {
  if (util.isUndefined(array)) return '';
  array = util.result(array);
  if (Array.isArray(array)) {
    if (!util.isUndefined(idx)) {
      idx = parseFloat(util.result(idx));
    }

    if (util.isUndefined(idx)) {
      options = idx;
      return options.fn(array[array.length - 1]);
    }

    array = array.slice(-idx);
    var len = array.length, i = -1;
    var result = '';
    while (++i < len) {
      result += options.fn(array[i]);
    }
    return result;
  }
  return '';
};

/**
 * Block helper that sorts a collection and exposes the sorted
 * collection as context inside the block.
 *
 * ```handlebars
 * <!-- array: ['b', 'a', 'c'] -->
 * {{#withSort array}}{{this}}{{/withSort}}
 * <!-- results in: 'abc' -->
 * ```
 * @param {Array} `array`
 * @param {String} `prop`
 * @param {Object} `options` Specify `reverse='true'` to reverse the array.
 * @return {String}
 * @block
 * @api public
 * @example {{#withSort ['b', 'a', 'c']}} {{this}} {{/withSort}} -> abc
 */

helpers.withSort = function(array, prop, options) {
  if (util.isUndefined(array)) return '';
  array = util.result(array);
  if (Array.isArray(array)) {
    var result = '';

    if (util.isUndefined(prop)) {
      options = prop;
 
      array = array.sort();
      if (getValue(options, 'hash.reverse')) {
        array = array.reverse();
      }

      for (var i = 0, len = array.length; i < len; i++) {
        result += options.fn(array[i]);
      }
      return result;
    }

    array.sort(function(a, b) {
      a = getValue(a, prop);
      b = getValue(b, prop);
      return a > b ? 1 : (a < b ? -1 : 0);
    });

    if (getValue(options, 'hash.reverse')) {
      array = array.reverse();
    }

    var alen = array.length, j = -1;
    while (++j < alen) {
      result += options.fn(array[j]);
    }
    return result;
  }
  return '';
};

/**
 * Block helper that return an array with all duplicate
 * values removed. Best used along with a [each](#each) helper.
 *
  * ```handlebars
  * <!-- array: ['a', 'a', 'c', 'b', 'e', 'e'] -->
  * {{#each (unique array)}}{{.}}{{/each}}
  * <!-- results in: 'acbe' -->
  * ```
 * @param {Array} `array`
 * @param {Object} `options`
 * @return {Array}
 * @api public
 * @example {{#each (unique ['a', 'a', 'c', 'b', 'e', 'e']) }} {{.}} {{/each}} -> acbe
 */

helpers.unique = function(array, options) {
  if (util.isUndefined(array)) return '';

  array = util.result(array);
  if (Array.isArray(array)) {
    return array.filter(function(item, index, arr) {
      return arr.indexOf(item) === index;
    });
  }
  return '';
};
