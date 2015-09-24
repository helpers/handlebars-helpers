'use strict';

var isNumber = require('is-number');

/**
 * Returns true if `value` is an array.
 *
 * ```handlebars
 * {{isArray "abc"}}
 * //=> 'false'
 * ```
 *
 * @param {*} `value` The value to test.
 * @return {Boolean}
 * @api public
 */

exports.isArray = function isArray(val) {
  return Array.isArray(val);
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
 */

exports.arrayify = function arrayify(val){
  return Array.isArray(val) ? val : [val];
};

/**
 * Returns the first item, or first `n` items of an array.
 *
 * ```handlebars
 * {{first(['a', 'b', 'c', 'd', 'e'], 2)}}
 * //=> '["a", "b"]'
 * ```
 *
 * @param {Array} `array`
 * @param {Number} `n` Number of items to return, starting at `0`.
 * @return {Array}
 * @api public
 */

exports.first = function first(arr, n) {
  if (!arr || arr.length === 0) return '';
  if (!isNumber(n)) {
    return arr[0];
  } else {
    return arr.slice(0, n);
  }
};

/**
 * Returns the last item, or last `n` items of an array.
 *
 * ```handlebars
 * {{last(['a', 'b', 'c', 'd', 'e'], 2)}}
 * //=> '["d", "e"]'
 * ```
 *
 * @param {Array} `array`
 * @param {Number} `n` Number of items to return, starting with the last item.
 * @return {Array}
 * @api public
 */

exports.last = function last(arr, n) {
  if (!arr || arr.length === 0) return '';
  if (!isNumber(n)) {
    return arr[arr.length - 1];
  } else {
    return arr.slice(-n);
  }
};

/**
 * Returns all of the items in an array up to the specified number
 * Opposite of `<%= after() %`.
 *
 * ```handlebars
 * {{before(['a', 'b', 'c'], 2)}}
 * //=> '["a", "b"]'
 * ```
 *
 * @param {Array} `array`
 * @param {Number} `n`
 * @return {Array} Array excluding items after the given number.
 * @crosslink after
 * @api public
 */

exports.before = function before(arr, n) {
  if (!arr || arr.length === 0) return '';
  return arr.slice(0, -n);
};

/**
 * Returns all of the items in an arry after the specified index.
 * Opposite of `<%= before() %`.
 *
 * ```handlebars
 * {{after(['a', 'b', 'c'], 1)}}
 * //=> '["c"]'
 * ```
 *
 * @param {Array} `array` Collection
 * @param {Number} `n` Starting index (number of items to exclude)
 * @return {Array} Array exluding `n` items.
 * @crosslink before
 * @api public
 */

exports.after = function after(arr, n) {
  if (!arr || arr.length === 0) return '';
  return arr.slice(n);
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
 * {{map(['a', 'b', 'c'], double)}}
 * //=> '["aa", "bb", "cc"]'
 * ```
 *
 * @param {Array} `array`
 * @param {String} `fn` The function to
 * @return {String}
 * @api public
 */

exports.map = function map(arr, fn) {
  if (!arr || !Array.isArray(arr)) return '';
  var len = arr.length;
  var res = new Array(len);
  var i = -1;

  while (++i < len) {
    res[i] = fn(arr[i], i, arr);
  }

  return res;
};

/**
 * Join all elements of array into a string, optionally using a
 * given separator.
 *
 * ```handlebars
 * {{join(['a', 'b', 'c'])}}
 * //=> 'a, b, c'
 *
 * {{join(['a', 'b', 'c'], '-')}}
 * //=> 'a-b-c'
 * ```
 *
 * @param {Array} `array`
 * @param {String} `sep` The separator to use.
 * @return {String}
 * @api public
 */

exports.join = function join(arr, sep) {
  if (!arr || arr.length === 0) return '';
  sep = typeof sep !== 'string'
    ? ', '
    : sep;
  return arr.join(sep);
};

/**
 * Sort the given `array`. If an array of objects is passed,
 * you may optionally pass a `key` to sort on as the second
 * argument. You may alternatively pass a sorting function as
 * the second argument.
 *
 * ```handlebars
 * {{sort(["b", "a", "c"])}}
 * //=> 'a,b,c'
 *
 * {{sort([{a: "zzz"}, {a: "aaa"}], "a")}}
 * //=> '[{"a":"aaa"},{"a":"zzz"}]'
 * ```
 *
 * @param {Array} `array` the array to sort.
 * @param {String|Function} `key` The object key to sort by, or sorting function.
 */

exports.sort = function sort(arr, key) {
  if (!arr || arr.length === 0) return '';
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
 * Returns the length of the given array.
 *
 * ```handlebars
 * {{length(['a', 'b', 'c'])}}
 * //=> 3
 * ```
 *
 * @param  {Array} `array`
 * @return {Number} The length of the array.
 */

exports.length = function length(arr) {
  if (!arr || !arr.length) return '';
  return Array.isArray(arr) ? arr.length : 0;
};

/**
 * Returns an array with all falsey values removed.
 *
 * ```handlebars
 * {{compact([null, a, undefined, 0, false, b, c, ''])}}
 * //=> '["a", "b", "c"]'
 * ```
 *
 * @param {Array} `arr`
 * @return {Array}
 * @api public
 */

exports.compact = function compact(arr) {
  if (!arr || !arr.length) return '';
  return arr.filter(Boolean);
};

/**
 * Return the difference between the first array and
 * additional arrays.
 *
 * ```handlebars
 * {{difference(["a", "c"], ["a", "b"])}}
 * //=> '["c"]'
 * ```
 *
 * @param  {Array} `array` The array to compare againts.
 * @param  {Array} `arrays` One or more additional arrays.
 * @return {Array}
 * @api public
 */

exports.difference = function difference(a, b, c) {
  if (!a || !arguments.length) return '';
  var len = a.length;
  var arr = [];
  var rest;

  if (!b) {
    return a;
  }

  if (!c) {
    rest = b;
  } else {
    rest = [].concat.apply([], [].slice.call(arguments, 1));
  }
  while (len--) {
    if (rest.indexOf(a[len]) === -1) {
      arr.unshift(a[len]);
    }
  }
  return arr;
};

/**
 * Return an array, free of duplicate values.
 *
 * ```handlebars
 * {{unique(['a', 'b', 'c', 'c'])}}
 * => '["a", "b", "c"]'
 * ```
 *
 * @param  {Array} `array` The array to uniquify
 * @return {Array} Duplicate-free array
 * @api public
 */

exports.unique = function unique(arr) {
  var len = arr && arr.length;
  if (!arr || arr.length === 0) return '';

  var i = -1;

  while (i++ < len) {
    var j = i + 1;

    for (; j < arr.length; ++j) {
      if (arr[i] === arr[j]) {
        arr.splice(j--, 1);
      }
    }
  }
  return arr;
};

/**
 * Returns an array of unique values using strict equality for comparisons.
 *
 * ```handlebars
 * <%= union(["a"], ["b"], ["c"])}}
 * //=> '["a", "b", "c"]'
 * ```
 *
 * @param {Array} `arr`
 * @return {Array}
 * @api public
 */

exports.union = function union(arr) {
  if (!arr || arr.length === 0) return '';
  var res = [].concat.apply([], arguments);
  return exports.unique(res);
};

/**
 * Shuffle the items in an array.
 *
 * ```handlebars
 * <%= shuffle(["a", "b", "c"])}}
 * //=> ["c", "a", "b"]
 * ```
 *
 * @param  {Array} `arr`
 * @return {Array}
 */

exports.shuffle = function shuffle(arr) {
  var len = arr.length;
  var res = Array(len);
  var i = -1;

  while (++i < len) {
    var rand = random(0, i);
    if (i != rand) {
      res[i] = res[rand];
    }
    res[rand] = arr[i];
  }
  return res;
};
