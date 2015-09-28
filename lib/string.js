'use strict';

var utils = require('./utils');

/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * Capitalize first word in a sentence
 *
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

helpers.capitalize = function(str) {
  if (str && typeof str === 'string') {
    return str.charAt(0).toUpperCase()
      + str.slice(1);
  }
};

/**
 * Capitalize all words in a sentence
 *
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

helpers.capitalizeAll = function(str) {
  if (str && typeof str === 'string') {
    var words = str.split(' ');
    var len = words.length;
    var res = [];
    var i = 0;

    while(len--) {
      var word = words[i++];
      res.push(exports.capitalize(word));
    }
    return res.join(' ');
  }
};

/**
 * Capitalize each word in a sentence
 *
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

helpers.capitalizeEach = function(str) {
  if (str && typeof str === 'string') {
    return str.replace(/\w\S*/g, function(word) {
      return exports.capitalize(word);
    });
  }
};

/**
 * Capitalize the first word in a sentence
 *
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

helpers.capitalizeFirst = function(str) {
  if (str && typeof str === 'string') {
    return str.replace(/\w\S*/, function(word) {
      return exports.capitalize(word);
    });
  }
};

/**
 * Center a string using non-breaking spaces
 *
 * @param  {String} `str`
 * @param  {String} `spaces`
 * @return {String}
 * @api public
 */

helpers.center = function(str, spaces) {
  if (str && typeof str === 'string') {
    var space = '';
    var i = 0;
    while (i < spaces) {
      space += '&nbsp;';
      i++;
    }
    return space + str + space;
  }
};

/**
 * Replace periods in string with hyphens.
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

helpers.dashify = function(str) {
  if (str && typeof str === 'string') {
    return str.split('.').join('-');
  }
};

/**
 * Replace spaces in string with hyphens.
 *
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

helpers.hyphenate = function(str) {
  if (str && typeof str === 'string') {
    return str.split(' ').join('-');
  }
};

/**
 * Return true if val is a string
 *
 * @param  {String} `val`
 * @return {Boolean}
 * @api public
 */

helpers.isString = function(val) {
  return val && typeof val === 'string';
};

/**
 * Make all letters in the string lowercase
 *
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

helpers.lowercase = function(str) {
  if (str && typeof str === 'string') {
    return str.toLowerCase();
  }
};

/**
 * Replace spaces in string with pluses.
 *
 * @param  {String} `str` The input string
 * @return {String} Input string with spaces replaced by plus signs
 * @source Stephen Way <https://github.com/stephenway>
 * @api public
 */

helpers.plusify = function(str) {
  if (str && typeof str === 'string') {
    return str.split(' ').join('+');
  }
};

/**
 * Sentence case the given string
 *
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

helpers.sentence = function(str) {
  var re = /((?:\S[^\.\?\!]*)[\.\?\!]*)/g;

  if (str && typeof str === 'string') {
    return str.replace(re, function(txt) {
      return txt.charAt(0).toUpperCase()
        + txt.substr(1).toLowerCase();
    });
  }
};

/**
 * Title case. "This is Title Case"
 *
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

helpers.titleize = function(str) {
  if (str && typeof str === 'string') {
    var title = str.replace(/[ \-_]+/g, ' ');
    var words = title.match(/\w+/g);
    var len = words.length;
    var res = [];
    var i = 0;

    while (len--) {
      var word = words[i++];
      res.push(exports.capitalize(word));
    }

    return res.join(' ');
  }
};

/**
 * Reverse a string.
 *
 * @name .reverse
 * @param {type} `str`
 * @return {String}
 * @api public
 */

helpers.reverse = function(str) {
  if (str && typeof str === 'string') {
    return str.split('').reverse().join('');
  }
};

/**
 * Return the number of occurrances of a substring within a string.
 *
 * @param  {String} `str`
 * @param  {String} `substring`
 * @return {Number} Number of occurrances
 * @api public
 */

helpers.occurrences = function(str, substring) {
  if (str && typeof str === "string") {
    var n = 0;
    var pos = 0;
    var l = substring.length;
    while (pos = str.indexOf(substring, pos)) {
      if (pos > -1) {
        n++;
        pos += l;
      } else {
        break;
      }
    }
    return n;
  }
};

/**
 * Replace all occurrences of `a` in a string with `b`.
 *
 * @param  {String} `str`
 * @param  {String} `a`
 * @param  {String} `b`
 * @return {String}
 * @api public
 */

helpers.replace = function(str, a, b) {
  if (str && typeof str === "string") {
    return str.split(a).join(b);
  }
};

/**
 * Truncate the input string and removes all HTML tags
 *
 * @param  {String} `str` The input string.
 * @param  {Number} `limit` The number of characters to limit the string.
 * @param  {String} `append` The string to append if charaters are omitted.
 * @return {String}
 * @api public
 */

helpers.ellipsis = function(str, limit, append) {
  if (str && typeof str === "string") {
    if (utils.isUndefined(append)) append = '';
    var sanitized = str.replace(/(<([^>]+)>)/g, '');
    if (sanitized.length > limit) {
      return sanitized.substr(0, limit - append.length) + append;
    }
    return sanitized;
  }
};

/**
 * Truncates a string given a specified `length`, providing a
 * custom string to denote an `omission`.
 *
 * @param  {String} `str`
 * @param  {String} `length`
 * @param  {String} `omission`
 * @return {String}
 * @api public
 */

helpers.truncate = function(str, limit, omission) {
  if (str && typeof str === "string") {
    if (utils.isUndefined(omission)) {
      omission = '';
    }
    if (str.length > limit) {
      return str.substring(0, limit - omission.length) + omission;
    }
    return str;
  }
};

/**
 * Tests whether a string begins with the given prefix.
 * Behaves sensibly if the string is null.
 *
 * ```handlebars
 * {{#startsWith "Goodbye" "Hello, world!"}}
 *   Whoops
 * {{else}}
 *   Bro, do you even hello world?
 * {{/startsWith}}
 * ```
 * @param  {String} `prefix`
 * @param  {String} `testString`
 * @param  {String} `options`
 * @contributor Dan Fox <http://github.com/iamdanfox>
 * @return {String}
 * @block
 * @api public
 */

helpers.startsWith = function(prefix, str, options) {
  var args = [].slice.call(arguments);
  options = args.pop();
  if (str && typeof str === "string") {
    if (str.indexOf(prefix) === 0) {
      return options.fn(this);
    }
  }
  if (typeof options.inverse === 'function') {
    return options.inverse(this);
  }
  return '';
};

/**
 * Uppercase all of the characters in the given string. If used as a
 * block helper it will uppercase the entire block. This helper
 * does not support inverse blocks.
 *
 * @name .uppercase
 * @param {String} `str` The string to uppercase
 * @param {Object} `options` Handlebars options object
 * @return {String}
 * @block
 * @api public
 */

helpers.uppercase = function(str, options) {
  if (str && typeof str === "string") {
    return str.toUpperCase();
  } else {
    options = str;
  }
  if (typeof options === 'object' && options.fn) {
    return options.fn(this).toUpperCase();
  }
  return '';
};
