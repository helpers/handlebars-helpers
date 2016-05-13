'use strict';

var utils = require('./utils');

/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * camelCase the characters in the given `string`.
 *
 * ```js
 * {{camelcase "foo bar baz"}};
 * //=> 'fooBarBaz'
 * ```
 *
 * @name .camelcase
 * @param  {String} `string` The string to camelcase.
 * @return {String}
 * @api public
 */

helpers.camelcase = function(str) {
  return utils.changecase(str, function(ch) {
    return ch.toUpperCase();
  });
};

/**
 * Capitalize the first word in a sentence.
 *
 * ```handlebars
 * {{capitalize "foo bar baz"}}
 * //=> "Foo bar baz"
 * ```
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
 * Capitalize all words in a string.
 *
 * ```handlebars
 * {{capitalize "foo bar baz"}}
 * //=> "Foo Bar Baz"
 * ```
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

helpers.capitalizeAll = function(str) {
  if (str && typeof str === 'string') {
    return str.replace(/\w\S*/g, function(word) {
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
 * Like trim, but removes both extraneous whitespace **and
 * non-word characters** from the beginning and end of a string.
 *
 * ```js
 * {{chop "_ABC_"}}
 * //=> 'ABC'
 *
 * {{chop "-ABC-"}}
 * //=> 'ABC'
 *
 * {{chop " ABC "}}
 * //=> 'ABC'
 * ```
 *
 * @name .chop
 * @param  {String} `string` The string to chop.
 * @return {String}
 * @api public
 */

helpers.chop = function(str) {
  return utils.chop(str);
};

/**
 * dash-case the characters in `string`. Replaces non-word
 * characters and periods with hyphens.
 *
 * ```js
 * {{dashcase "a-b-c d_e"}}
 * //=> 'a-b-c-d-e'
 * ```
 *
 * @param  {String} `string`
 * @return {String}
 * @api public
 */

helpers.dashcase = function(str) {
  return utils.changecase(str, function(ch) {
    return '-' + ch;
  });
};

/**
 * dot.case the characters in `string`.
 *
 * ```js
 * {{dotcase "a-b-c d_e"}}
 * //=> 'a.b.c.d.e'
 * ```
 *
 * @param  {String} `string`
 * @return {String}
 * @api public
 */

helpers.dotcase = function(str) {
  return utils.changecase(str, function(ch) {
    return '.' + ch;
  });
};

/**
 * Replace spaces in a string with hyphens.
 *
 * ```handlebars
 * {{hyphenate "foo bar baz qux"}}
 * //=> "foo-bar-baz-qux"
 * ```
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
 * Return true if `value` is a string.
 *
 * ```handlebars
 * {{isString "foo"}}
 * //=> 'true'
 * ```
 * @param  {String} `value`
 * @return {Boolean}
 * @api public
 */

helpers.isString = function(value) {
  return utils.isString(value);
};

/**
 * Lowercase all characters in the given string.
 *
 * ```handlebars
 * {{lowercase "Foo BAR baZ"}}
 * //=> 'foo bar baz'
 * ```
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
 * Return the number of occurrances of `substring` within the
 * given `string`.
 *
 * ```handlebars
 * {{occurrances "foo bar foo bar baz" "foo"}}
 * //=> 2
 * ```
 * @param  {String} `str`
 * @param  {String} `substring`
 * @return {Number} Number of occurrances
 * @api public
 */

helpers.occurrences = function(str, substring) {
  if (str && typeof str === 'string') {
    var len = substring.length;
    var pos = 0;
    var n = 0;

    while ((pos = str.indexOf(substring, pos))) {
      if (pos > -1) {
        n++;
        pos += len;
      } else {
        break;
      }
    }
    return n;
  }
};

/**
 * PascalCase the characters in `string`.
 *
 * ```js
 * {{pascalcase "foo bar baz"}}
 * //=> 'FooBarBaz'
 * ```
 *
 * @name .pascalcase
 * @param  {String} `string`
 * @return {String}
 * @api public
 */

helpers.pascalcase = function(str) {
  str = utils.changecase(str, function(ch) {
    return ch.toUpperCase();
  });
  return str.charAt(0).toUpperCase()
    + str.slice(1);
};

/**
 * path/case the characters in `string`.
 *
 * ```js
 * {{pathcase "a-b-c d_e"}}
 * //=> 'a/b/c/d/e'
 * ```
 *
 * @param  {String} `string`
 * @return {String}
 * @api public
 */

helpers.pathcase = function(str) {
  return utils.changecase(str, function(ch) {
    return '/' + ch;
  });
};

/**
 * Replace spaces in the given string with pluses.
 *
 * ```handlebars
 * {{plusify "foo bar baz"}}
 * //=> 'foo+bar+baz'
 * ```
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
 * Reverse a string.
 *
 * ```handlebars
 * {{reverse "abcde"}}
 * //=> 'edcba'
 * ```
 * @name .reverse
 * @param {String} `str`
 * @return {String}
 * @api public
 */

helpers.reverse = function(str) {
  if (str && typeof str === 'string') {
    return str.split('').reverse().join('');
  }
};

/**
 * Replace all occurrences of `a` with `b`.
 *
 * ```handlebars
 * {{replace "a b a b a b" "a" "z"}}
 * //=> 'z b z b z b'
 * ```
 * @param  {String} `str`
 * @param  {String} `a`
 * @param  {String} `b`
 * @return {String}
 * @api public
 */

helpers.replace = function(str, a, b) {
  if (str && typeof str === 'string') {
    if (!a || typeof a !== 'string') return str;
    if (!b || typeof b !== 'string') b = '';
    return str.split(a).join(b);
  }
};

/**
 * Sentence case the given string
 *
 * ```handlebars
 * {{sentence "hello world. goodbye world."}}
 * //=> 'Hello world. Goodbye world.'
 * ```
 * @param  {String} `str`
 * @return {String}
 * @api public
 */

helpers.sentence = function(str) {
  if (str && typeof str === 'string') {
    var re = /((?:\S[^\.\?\!]*)[\.\?\!]*)/g;
    return str.replace(re, function(txt) {
      return txt.charAt(0).toUpperCase()
        + txt.substr(1).toLowerCase();
    });
  }
};

/**
 * snake_case the characters in the given `string`.
 *
 * ```js
 * {{snakecase "a-b-c d_e"}}
 * //=> 'a_b_c_d_e'
 * ```
 *
 * @param  {String} `string`
 * @return {String}
 * @api public
 */

helpers.snakecase = function(str) {
  return utils.changecase(str, function(ch) {
    return '_' + ch;
  });
};

/**
 * Split `string` by the given `character`.
 *
 * ```js
 * {{split "a,b,c" ","}}
 * //=> ['a', 'b', 'c']
 * ```
 *
 * @param  {String} `string` The string to split.
 * @return {String} `character` Default is `,`
 * @api public
 */

helpers.split = function(str, ch) {
  if (!helpers.isString(str)) return '';
  if (typeof ch !== 'string') ch = ',';
  return str.split(ch);
};

/**
 * Tests whether a string begins with the given prefix.
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
  if (str && typeof str === 'string') {
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
 * Title case the given string.
 *
 * ```handlebars
 * {{titleize "this is title case"}}
 * //=> 'This Is Title Case'
 * ```
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
 * Removes extraneous whitespace from the beginning and end
 * of a string.
 *
 * ```js
 * {{trim " ABC "}}
 * //=> 'ABC'
 * ```
 *
 * @name .trim
 * @param  {String} `string` The string to trim.
 * @return {String}
 * @api public
 */

helpers.trim = function(str) {
  if (!helpers.isString(str)) return '';
  return str.trim();
};

/**
 * Uppercase all of the characters in the given string. If used as a
 * block helper it will uppercase the entire block. This helper
 * does not support inverse blocks.
 *
 * @name .uppercase
 * @related capitalize capitalizeAll
 * @param {String} `str` The string to uppercase
 * @param {Object} `options` Handlebars options object
 * @return {String}
 * @block
 * @api public
 */

helpers.uppercase = function(str, options) {
  if (str && typeof str === 'string') {
    return str.toUpperCase();
  } else {
    options = str;
  }
  if (typeof options === 'object' && options.fn) {
    return options.fn(this).toUpperCase();
  }
  return '';
};
