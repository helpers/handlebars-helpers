'use strict';

var utils = require('../utils/utils');
var Handlebars = require('handlebars');

/**
 * Capitalize first word in a sentence
 *
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

exports.capitalize = function(str) {
  if (str && typeof str === 'string') {
    return str.charAt(0).toUpperCase()
      + str.slice(1);
  }
};

/**
 * Capitalize the first word in a sentence
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

exports.capitalizeFirst = function(str) {
  if (str && typeof str === 'string') {
    return str.replace(/\w\S*/, function(word) {
      return exports.capitalize(word);
    });
  }
};

/**
 * Capitalize each word in a sentence
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

exports.capitalizeEach = function(str) {
  if (str && typeof str === 'string') {
    return str.replace(/\w\S*/g, function(word) {
      return exports.capitalize(word);
    });
  }
};

/**
 * Capitalize each word in a sentence
 *
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

exports.capitalizeAll = function(str) {
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
 * Center a string using non-breaking spaces
 * @param  {String} str
 * @param  {String} spaces
 * @return {String}
 * @api public
 */

exports.center = function(str, spaces) {
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
 * @param  {String} str
 * @return {String}
 * @api public
 */

exports.dashify = function(str) {
  if (str && typeof str === 'string') {
    return str.split('.').join('-');
  }
};

/**
 * Replace spaces in string with hyphens.
 * @param  {String} str
 * @return {String}
 * @api public
 */

exports.hyphenate = function(str) {
  if (str && typeof str === 'string') {
    return str.split(' ').join('-');
  }
};

/**
 * Make all letters in the string lowercase
 * @param  {String} str
 * @return {String}
 * @api public
 */

exports.lowercase = function(str) {
  if (str && typeof str === 'string') {
    return str.toLowerCase();
  }
};

/**
 * Replace spaces in string with pluses.
 * @source: Stephen Way <https://github.com/stephenway>
 * @param  {String} str The input string
 * @return {String}     Input string with spaces replaced by plus signs
 * @api public
 */

exports.plusify = function(str) {
  if (str && typeof str === 'string') {
    return str.split(' ').join('+');
  }
};

/**
 * Output a Handlebars safeString
 * @param  {String} str
 * @return {String}
 * @api public
 */

exports.safeString = function(str) {
  if (str && typeof str === 'string') {
    return new Handlebars.SafeString(str);
  }
};

/**
 * Sentence case
 * @param  {String} str
 * @return {String}
 * @api public
 */

exports.sentence = function(str) {
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
 * @param  {String} str
 * @return {String}
 * @api public
 */

exports.titleize = function(str) {
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

exports.uppercase = function(options) {
  if (options && typeof options === 'string') {
    return options.toUpperCase();
  } else if (options && typeof options === 'object') {
    return options.fn(this).toUpperCase();
  }
};

exports.reverse = function(str) {
  if (str && typeof str === 'string') {
    return str.split('').reverse().join('');
  }
};

/**
 * Return the number of occurrances of a string, within a string
 *
 * @param  {String} str       The haystack
 * @param  {String} substring The needle
 * @return {Number}           The number of times the needle is found in the haystack.
 * @api public
 */

exports.count = function(str, substring) {
  if (str && typeof str === "string") {
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
};

/**
 * Replace occurrences of string "A" with string "B"
 *
 * @param  {String} str
 * @param  {String} a
 * @param  {String} b
 * @return {String}
 * @api public
 */

exports.replace = function(str, a, b) {
  if (str && typeof str === "string") {
    return str.split(a).join(b);
  }
};

/**
 * Truncate the input string and removes all HTML tags
 *
 * @param  {String} str      The input string.
 * @param  {Number} limit    The number of characters to limit the string.
 * @param  {String} append   The string to append if charaters are omitted.
 * @return {String}          The truncated string.
 * @api public
 */

exports.ellipsis = function(str, limit, append) {
  if (utils.isUndefined(append)) {
    append = '';
  }
  var sanitized = str.replace(/(<([^>]+)>)/g, '');
  if (sanitized.length > limit) {
    return sanitized.substr(0, limit - append.length) + append;
  } else {
    return sanitized;
  }
};

/**
 * Truncates a string given a specified `length`, providing a
 * custom string to denote an `omission`.
 *
 * @param  {String} str
 * @param  {String} length
 * @param  {String} omission
 * @return {String}
 * @api public
 */

exports.truncate = function(str, limit, omission) {
  if (utils.isUndefined(omission)) {
    omission = '';
  }
  if (str.length > limit) {
    return str.substring(0, limit - omission.length) + omission;
  } else {
    return str;
  }
};

/**
 * @source: Dan Fox <http://github.com/iamdanfox>
 *
 * Tests whether a string begins with the given prefix.
 * Behaves sensibly if the string is null.
 * @param  {String} prefix
 * @param  {String} testString
 * @param  {String} options
 * @return {String}
 *
 * @example:
 *   {{#startsWith "Goodbye" "Hello, world!"}}
 *
 *     Whoops
 *   {{else}}
 *
 *     Bro, do you even hello world?
 *   {{/startsWith}}
 */

exports.startsWith = function(prefix, str, options) {
  if ((str != null ? str.indexOf(prefix) : void 0) === 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};
