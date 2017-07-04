'use strict';

var utils = require('./utils');
var util = require('handlebars-utils');

/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * Returns all of the items in an array after the specified index.
 * Opposite of [before](#before).
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c'] -->
 * {{after array 1}}
 * //=> '["c"]'
 * ```
 *
 * @param {Array} `array` Collection
 * @param {Number} `n` Starting index (number of items to exclude)
 * @return {Array} Array exluding `n` items.
 * @api public
 */

helpers.after = function(array, n) {
  if (util.isUndefined(array)) return '';
  return array.slice(n);
};

/**
 * Cast the given `value` to an array.
 *
 * ```handlebars
 * {{arrayify "foo"}}
 * //=> '["foo"]'
 * ```
 * @param {any} `value`
 * @return {Array}
 * @api public
 */

helpers.arrayify = function(value) {
  return value ? (Array.isArray(value) ? value : [value]) : [];
};

/**
 * Return all of the items in the collection before the specified
 * count. Opposite of [after](#after).
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c'] -->
 * {{before array 2}}
 * //=> '["a", "b"]'
 * ```
 *
 * @param {Array} `array`
 * @param {Number} `n`
 * @return {Array} Array excluding items after the given number.
 * @api public
 */

helpers.before = function(array, n) {
  if (util.isUndefined(array)) return '';
  return array.slice(0, -n);
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
 */

helpers.eachIndex = function(array, options) {
  var result = '';
  for (var i = 0; i < array.length; i++) {
    result += options.fn({item: array[i], index: i});
  }
  return result;
};

/**
 * Block helper that filters the given array and renders the block for values that
 * evaluate to `true`, otherwise the inverse block is returned.
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c'] -->
 * {{#filter array "foo"}}AAA{{else}}BBB{{/filter}}
 * //=> 'BBB'
 * ```
 *
 * @name .filter
 * @param {Array} `array`
 * @param {any} `value`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */

helpers.filter = function(array, value, options) {
  var content = '';
  var results = [];

  // filter on a specific property
  var prop = options.hash && options.hash.property;
  if (prop) {
    results = utils.filter(array, function(val) {
      return utils.get(val, prop) === value;
    });
  } else {

    // filter on a string value
    results = utils.filter(array, function(v) {
      return value === v;
    });
  }

  if (results && results.length > 0) {
    for (var i = 0; i < results.length; i++) {
      content += options.fn(results[i]);
    }
    return content;
  }
  return options.inverse(this);
};

/**
 * Returns the first item, or first `n` items of an array.
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c', 'd', 'e'] -->
 * {{first array 2}}
 * //=> '["a", "b"]'
 * ```
 *
 * @param {Array} `array`
 * @param {Number} `n` Number of items to return, starting at `0`.
 * @return {Array}
 * @api public
 */

helpers.first = function(array, n) {
  if (util.isUndefined(array)) return '';
  if (!utils.isNumber(n)) {
    return array[0];
  }
  return array.slice(0, n);
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
 *   <a href="mailto:{{ email }}" title="Send an email to {{ name }}">
 *     {{ name }}
 *   </a>{{#unless isLast}}, {{/unless}}
 * {{/forEach}}
 * ```
 * @source <http://stackoverflow.com/questions/13861007>
 * @param {Array} `array`
 * @return {String}
 * @block
 * @api public
 */

helpers.forEach = function(array, options) {
  var data = utils.createFrame(options, options.hash);
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
};

/**
 * Block helper that renders the block if an array has the
 * given `value`. Optionally specify an inverse block to render
 * when the array does not have the given value.
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c'] -->
 * {{#inArray array "d"}}
 *   foo
 * {{else}}
 *   bar
 * {{/inArray}}
 * //=> 'bar'
 * ```
 *
 * @name .inArray
 * @param {Array} `array`
 * @param {any} `value`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */

helpers.inArray = function(array, value, options) {
  if (Array.isArray(array) && util.indexOf(array, value) > -1) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Returns true if `value` is an es5 array.
 *
 * ```handlebars
 * {{isArray "abc"}}
 * //=> false
 *
 * <!-- array: [1, 2, 3] -->
 * {{isArray array}}
 * //=> true
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
 * Block helper that returns the item with specified index.
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c'] -->
 * {{itemAt array 1}}
 * //=> 'b'
 * ```
 *
 * @name .itemAt
 * @param {Array} `array`
 * @param {Number} `idx`
 * @return {any} `value`
 * @block
 * @api public
 */

helpers.itemAt = function(array, idx) {
  array = util.result(array);
  if (Array.isArray(array)) {
    idx = utils.isNumber(idx) ? +idx : 0;
    if (idx < 0) {
      return array[array.length + idx];
    }
    if (idx < array.length) {
      return array[idx];
    }
  }
};

/**
 * Join all elements of array into a string, optionally using a
 * given separator.
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c'] -->
 * {{join array}}
 * //=> 'a, b, c'
 *
 * {{join array '-'}}
 * //=> 'a-b-c'
 * ```
 *
 * @param {Array} `array`
 * @param {String} `sep` The separator to use.
 * @return {String}
 * @api public
 */

helpers.join = function(array, sep) {
  if (typeof array === 'string') return array;
  if (!Array.isArray(array)) return '';
  sep = util.isString(sep) ? sep : ', ';
  return array.join(sep);
};

/**
 * Returns the last item, or last `n` items of an array or string.
 * Opposite of [first](#first).
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c', 'd', 'e'] -->
 * {{last array 2}}
 * //=> '["d", "e"]'
 * ```
 * @param {Array|String} `val` Array or string.
 * @param {Number} `n` Number of items to return from the end of the array.
 * @return {Array}
 * @api public
 */

helpers.last = function(val, n) {
  if (!Array.isArray(val) && typeof val !== 'string') {
    return '';
  }
  if (!utils.isNumber(n)) {
    return val[val.length - 1];
  }
  return val.slice(-n);
};

/**
 * Block helper that compares the length of the given array to
 * the number passed as the second argument. If the array length
 * is equal to the given `length`, the block is returned,
 * otherwise an inverse block may optionally be returned.
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c', 'd', 'e'] -->
 * {{#lengthEqual array 10}}AAA{{else}}BBB{{/lengthEqual}}
 * //=> 'BBB'
 * ```
 *
 * @name .lengthEqual
 * @param {Array} `array`
 * @param {Number} `length`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */

helpers.lengthEqual = function(array, length, options) {
  if (Array.isArray(array) && array.length === length) {
    return options.fn(this);
  }
  return options.inverse(this);
};

/**
 * Returns a new array, created by calling `function` on each
 * element of the given `array`. For example,
 *
 * ```handlebars
 * <!-- array: ['a', 'b', 'c'], and "double" is a
 * fictitious function that duplicates letters -->
 * {{map array double}}
 * //=> '["aa", "bb", "cc"]'
 * ```
 *
 * @param {Array} `array`
 * @param {Function} `fn`
 * @return {String}
 * @api public
 */

helpers.map = function(array, iter) {
  if (!Array.isArray(array)) return '';
  var len = array.length;
  var res = new Array(len);
  var i = -1;

  iter = utils.iterator(iter, this);
  while (++i < len) {
    res[i] = iter(array[i], i, array);
  }
  return res;
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
 * //=> 'Render me if the array has a string.'
 * ```
 * @name .some
 * @param {Array} `array`
 * @param {Function} `iter` Iteratee
 * @param {Options} Handlebars provided options object
 * @return {String}
 * @block
 * @api public
 */

helpers.some = function(array, iter, options) {
  if (Array.isArray(array)) {
    iter = utils.iterator(iter, this);
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
 * //=> '["a", "b", "c"]'
 * ```
 *
 * @param {Array} `array` the array to sort.
 * @param {String|Function} `key` The object key to sort by, or sorting function.
 * @api public
 */

helpers.sort = function(array, options) {
  if (!Array.isArray(array)) return '';
  if (utils.get(options, 'hash.reverse')) {
    return array.sort().reverse();
  }
  return array.sort();
};

/**
 * Sort an `array`. If an array of objects is passed,
 * you may optionally pass a `key` to sort on as the second
 * argument. You may alternatively pass a sorting function as
 * the second argument.
 *
 * ```handlebars
 * <!-- array: [{a: 'zzz'}, {a: 'aaa'}] -->
 * {{sortBy array "a"}}
 * //=> '[{"a":"aaa"}, {"a":"zzz"}]'
 * ```
 *
 * @param {Array} `array` the array to sort.
 * @param {String|Function} `props` One or more properties to sort by, or sorting functions to use.
 * @api public
 */

helpers.sortBy = function(array, prop, options) {
  if (!Array.isArray(array)) return '';
  var args = [].slice.call(arguments);
  // remove handlebars options
  args.pop();

  if (!util.isString(prop) && typeof prop !== 'function') {
    return array.sort();
  }
  return utils.sortBy.apply(null, args);
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
 * //=> "de"
 * ```
 * @param {Array} `array`
 * @param {Number} `idx`
 * @param {Object} `options`
 * @return {Array}
 * @block
 * @api public
 */

helpers.withAfter = function(array, idx, options) {
  if (!Array.isArray(array)) return '';
  array = array.slice(idx);
  var result = '';

  for (var i = 0; i < array.length; i++) {
    result += options.fn(array[i]);
  }
  return result;
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
 * //=> 'ab'
 * ```
 * @param {Array} `array`
 * @param {Number} `idx`
 * @param {Object} `options`
 * @return {Array}
 * @block
 * @api public
 */

helpers.withBefore = function(array, idx, options) {
  if (!Array.isArray(array)) return '';
  array = array.slice(0, -idx);
  var result = '';

  for (var i = 0; i < array.length; i++) {
    result += options.fn(array[i]);
  }
  return result;
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
 * //=> 'a'
 * ```
 * @param {Array} `array`
 * @param {Number} `idx`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */

helpers.withFirst = function(array, idx, options) {
  if (util.isUndefined(array)) return '';
  array = util.result(array);

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
 *
 * @name .withGroup
 * @param {Array} `array` The array to iterate over
 * @param {Number} `size` The desired length of each array "group"
 * @param {Object} `options` Handlebars options
 * @return {String}
 * @block
 * @api public
 */

helpers.withGroup = function(array, size, options) {
  var result = '';
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
 * @api public
 */

helpers.withLast = function(array, idx, options) {
  if (util.isUndefined(array)) return '';
  array = util.result(array);

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
};

/**
 * Block helper that sorts a collection and exposes the sorted
 * collection as context inside the block.
 *
 * ```handlebars
 * <!-- array: ['b', 'a', 'c'] -->
 * {{#withSort array}}{{this}}{{/withSort}}
 * //=> 'abc'
 * ```
 * @name .withSort
 * @param {Array} `array`
 * @param {String} `prop`
 * @param {Object} `options` Specify `reverse="true"` to reverse the array.
 * @return {String}
 * @block
 * @api public
 */

helpers.withSort = function(array, prop, options) {
  if (util.isUndefined(array)) return '';
  var result = '';

  if (util.isUndefined(prop)) {
    options = prop;

    array = array.sort();
    if (utils.get(options, 'hash.reverse')) {
      array = array.reverse();
    }

    for (var i = 0, len = array.length; i < len; i++) {
      result += options.fn(array[i]);
    }
    return result;
  }

  array.sort(function(a, b) {
    a = utils.get(a, prop);
    b = utils.get(b, prop);
    return a > b ? 1 : (a < b ? -1 : 0);
  });

  if (utils.get(options, 'hash.reverse')) {
    array = array.reverse();
  }

  var alen = array.length, j = -1;
  while (++j < alen) {
    result += options.fn(array[j]);
  }
  return result;
};
