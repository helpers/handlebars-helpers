const utils = require('./utils');
/**
 * @exports string
 */
const helpers = module.exports;

// TODO: Docs
helpers.changecase = function(str, fn) {
  if (!utils.isString(str)) return '';
  if (str.length === 1) {
    return str.toLowerCase();
  }

  if (utils.isString(fn)) {
    const delimiter = fn;
    fn = ch => `${delimiter}${ch}`;
  } else if (typeof fn !== 'function') {
    fn = ch => ` ${ch}`;
  }

  str = str.trim().toLowerCase();
  const re = /[-_.\W\s]+(\w|$)/g;
  return str.replace(re, (_, ch) => fn(ch));
};

/**
 * Append the specified `suffix` to the given string.
 *
 * ```handlebars
 * <!-- given that "item.stem" is "foo" -->
 * {{append item.stem ".html"}}
 * <!-- results in:  'foo.html' -->
 * ```
 * @param {String} `str`
 * @param {String} `suffix`
 * @return {String}
 * @api public
 */

helpers.append = function(str, suffix) {
  if (typeof str === 'string' && typeof suffix === 'string') {
    return str + suffix;
  }
  return str;
};

/**
 * camelCase the characters in the given `string`.
 *
 * ```handlebars
 * {{camelcase "foo bar baz"}};
 * <!-- results in:  'fooBarBaz' -->
 * ```
 * @param {String} `string` The string to camelcase.
 * @return {String}
 * @api public
 */

helpers.camelcase = function(str) {
  if (!utils.isString(str)) return '';
  return helpers.changecase(str, ch => ch.toUpperCase());
};

/**
 * Capitalize the first word in a sentence.
 *
 * ```handlebars
 * {{capitalize "foo bar baz"}}
 * <!-- results in:  "Foo bar baz" -->
 * ```
 * @param {String} `str`
 * @return {String}
 * @api public
 */

helpers.capitalize = function(str) {
  if (!utils.isString(str)) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Capitalize all words in a string.
 *
 * ```handlebars
 * {{capitalizeAll "foo bar baz"}}
 * <!-- results in:  "Foo Bar Baz" -->
 * ```
 * @param {String} `str`
 * @return {String}
 * @api public
 */

helpers.capitalizeAll = function(str) {
  if (!utils.isString(str)) return '';
  if (utils.isString(str)) {
    return str.replace(/\w\S*/g, function(word) {
      return helpers.capitalize(word);
    });
  }
};

/**
 * Center a string using non-breaking spaces
 *
 * @param {String} `str`
 * @param {String} `spaces`
 * @return {String}
 * @api public
 */

helpers.center = function(str, spaces) {
  if (!utils.isString(str)) return '';
  let space = '';
  let i = 0;
  while (i < spaces) {
    space += '&nbsp;';
    i++;
  }
  return space + str + space;
};

/**
 * Like trim, but removes both extraneous whitespace **and
 * non-word characters** from the beginning and end of a string.
 *
 * ```handlebars
 * {{chop "_ABC_"}}
 * <!-- results in:  'ABC' -->
 *
 * {{chop "-ABC-"}}
 * <!-- results in:  'ABC' -->
 *
 * {{chop " ABC "}}
 * <!-- results in:  'ABC' -->
 * ```
 * @param {String} `string` The string to chop.
 * @return {String}
 * @api public
 */

helpers.chop = function(str) {
  if (!utils.isString(str)) return '';
  const re = /^[-_.\W\s]+|[-_.\W\s]+$/g;
  return str.trim().replace(re, '');
};

/**
 * dash-case the characters in `string`. Replaces non-word
 * characters and periods with hyphens.
 *
 * ```handlebars
 * {{dashcase "a-b-c d_e"}}
 * <!-- results in:  'a-b-c-d-e' -->
 * ```
 * @param {String} `string`
 * @return {String}
 * @api public
 */

helpers.dashcase = function(str) {
  if (!utils.isString(str)) return '';
  return helpers.changecase(str, '-');
};

/**
 * dot.case the characters in `string`.
 *
 * ```handlebars
 * {{dotcase "a-b-c d_e"}}
 * <!-- results in:  'a.b.c.d.e' -->
 * ```
 * @param {String} `string`
 * @return {String}
 * @api public
 */

helpers.dotcase = function(str) {
  if (!utils.isString(str)) return '';
  return helpers.changecase(str, '.');
};

/**
 * Lowercase all of the characters in the given string. Alias for [lowercase](#lowercase).
 *
 * ```handlebars
 * {{downcase "aBcDeF"}}
 * <!-- results in:  'abcdef' -->
 * ```
 * @param {String} `string`
 * @return {String}
 * @alias lowercase
 * @api public
 */

helpers.downcase = function() {
  return helpers.lowercase.apply(this, arguments);
};

/**
 * Truncates a string to the specified `length`, and appends
 * it with an elipsis, `…`.
 *
 * ```handlebars
 * {{ellipsis "foo bar baz" 7}}
 * <!-- results in:  'foo bar…' -->
 * ```
 * @param {String} `str`
 * @param {Number} `length` The desired length of the returned string.
 * @return {String} The truncated string.
 * @api public
 */

helpers.ellipsis = function(str, limit) {
  if (utils.isString(str)) {
    if (str.length <= limit) {
      return str;
    }
    return helpers.truncate(str, limit) + '…';
  }
};

/**
 * Replace spaces in a string with hyphens.
 *
 * ```handlebars
 * {{hyphenate "foo bar baz qux"}}
 * <!-- results in:  "foo-bar-baz-qux" -->
 * ```
 * @param {String} `str`
 * @return {String}
 * @api public
 */

helpers.hyphenate = function(str) {
  if (!utils.isString(str)) return '';
  return str.split(' ').join('-');
};

/**
 * Return true if `value` is a string.
 *
 * ```handlebars
 * {{isString "foo"}}
 * <!-- results in:  'true' -->
 * ```
 * @param {String} `value`
 * @return {Boolean}
 * @api public
 */

helpers.isString = function(value) {
  return typeof value === 'string';
};

/**
 * Lowercase all characters in the given string.
 *
 * ```handlebars
 * {{lowercase "Foo BAR baZ"}}
 * <!-- results in:  'foo bar baz' -->
 * ```
 * @param {String} `str`
 * @return {String}
 * @api public
 */

helpers.lowercase = function(str) {
  if (utils.isPlainObject(str) && str.fn) {
    return str.fn(this).toLowerCase();
  }
  if (!utils.isString(str)) return '';
  return str.toLowerCase();
};

/**
 * Return the number of occurrences of `substring` within the
 * given `string`.
 *
 * ```handlebars
 * {{occurrences "foo bar foo bar baz" "foo"}}
 * <!-- results in:  2 -->
 * ```
 * @param {String} `str`
 * @param {String} `substring`
 * @return {Number} Number of occurrences
 * @api public
 */

helpers.occurrences = function(str, substring) {
  if (!utils.isString(str)) return '';
  const len = substring.length;
  let pos = 0;
  let n = 0;

  while ((pos = str.indexOf(substring, pos)) > -1) {
    n++;
    pos += len;
  }
  return n;
};

/**
 * PascalCase the characters in `string`.
 *
 * ```handlebars
 * {{pascalcase "foo bar baz"}}
 * <!-- results in:  'FooBarBaz' -->
 * ```
 * @param {String} `string`
 * @return {String}
 * @api public
 */

helpers.pascalcase = function(str) {
  if (!utils.isString(str)) return '';
  str = helpers.changecase(str, ch => ch.toUpperCase());
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * path/case the characters in `string`.
 *
 * ```handlebars
 * {{pathcase "a-b-c d_e"}}
 * <!-- results in:  'a/b/c/d/e' -->
 * ```
 * @param {String} `string`
 * @return {String}
 * @api public
 */

helpers.pathcase = function(str) {
  if (!utils.isString(str)) return '';
  return helpers.changecase(str, '/');
};

/**
 * Replace spaces in the given string with pluses.
 *
 * ```handlebars
 * {{plusify "foo bar baz"}}
 * <!-- results in:  'foo+bar+baz' -->
 * ```
 * @param {String} `str` The input string
 * @return {String} Input string with spaces replaced by plus signs
 * @source Stephen Way <https://github.com/stephenway>
 * @api public
 */

helpers.plusify = function(str, ch) {
  if (!utils.isString(str)) return '';
  if (!utils.isString(ch)) ch = ' ';
  return str.split(ch).join('+');
};

/**
 * Prepends the given `string` with the specified `prefix`.
 *
 * ```handlebars
 * <!-- given that "val" is "bar" -->
 * {{prepend val "foo-"}}
 * <!-- results in:  'foo-bar' -->
 * ```
 * @param {String} `str`
 * @param {String} `prefix`
 * @return {String}
 * @api public
 */

helpers.prepend = function(str, prefix) {
  return typeof str === 'string' && typeof prefix === 'string'
    ? (prefix + str)
    : str;
};

/**
 * Render a block without processing mustache templates inside the block.
 *
 * ```handlebars
 * {{{{#raw}}}}
 * {{foo}}
 * {{{{/raw}}}}
 * <!-- results in:  '{{foo}}' -->
 * ```
 *
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */

helpers.raw = function(options) {
  let str = options.fn();
  const opts = utils.options(this, options);
  if (opts.escape !== false) {
    let idx = 0;
    while (((idx = str.indexOf('{{', idx)) !== -1)) {
      if (str[idx - 1] !== '\\') {
        str = str.slice(0, idx) + '\\' + str.slice(idx);
      }
      idx += 3;
    }
  }
  return str;
};

/**
 * Remove all occurrences of `substring` from the given `str`.
 *
 * ```handlebars
 * {{remove "a b a b a b" "a "}}
 * <!-- results in:  'b b b' -->
 * ```
 * @param {String} `str`
 * @param {String} `substring`
 * @return {String}
 * @api public
 */

helpers.remove = function(str, ch) {
  if (!utils.isString(str)) return '';
  if (!utils.isString(ch)) return str;
  return str.split(ch).join('');
};

/**
 * Remove the first occurrence of `substring` from the given `str`.
 *
 * ```handlebars
 * {{remove "a b a b a b" "a"}}
 * <!-- results in:  ' b a b a b' -->
 * ```
 * @param {String} `str`
 * @param {String} `substring`
 * @return {String}
 * @api public
 */

helpers.removeFirst = function(str, ch) {
  if (!utils.isString(str)) return '';
  if (!utils.isString(ch)) return str;
  return str.replace(ch, '');
};

/**
 * Replace all occurrences of substring `a` with substring `b`.
 *
 * ```handlebars
 * {{replace "a b a b a b" "a" "z"}}
 * <!-- results in:  'z b z b z b' -->
 * ```
 * @param {String} `str`
 * @param {String} `a`
 * @param {String} `b`
 * @return {String}
 * @api public
 */

helpers.replace = function(str, a, b) {
  if (!utils.isString(str)) return '';
  if (!utils.isString(a)) return str;
  if (!utils.isString(b)) b = '';
  return str.split(a).join(b);
};

/**
 * Replace the first occurrence of substring `a` with substring `b`.
 *
 * ```handlebars
 * {{replace "a b a b a b" "a" "z"}}
 * <!-- results in:  'z b a b a b' -->
 * ```
 * @param {String} `str`
 * @param {String} `a`
 * @param {String} `b`
 * @return {String}
 * @api public
 */

helpers.replaceFirst = function(str, a, b) {
  if (!utils.isString(str)) return '';
  if (!utils.isString(a)) return str;
  if (!utils.isString(b)) b = '';
  return str.replace(a, b);
};

/**
 * Reverse a string.
 *
 * ```handlebars
 * {{reverse "abcde"}}
 * <!-- results in:  'edcba' -->
 * ```
 * @param {String} `str`
 * @return {String}
 * @api public
 */

helpers.reverse = function(str) {
  if (!utils.isString(str)) return '';
  return str.split('').reverse().join('');
};

/**
 * Sentence case the given string
 *
 * ```handlebars
 * {{sentence "hello world. goodbye world."}}
 * <!-- results in:  'Hello world. Goodbye world.' -->
 * ```
 * @param {String} `str`
 * @return {String}
 * @api public
 */

helpers.sentence = function(str) {
  if (!utils.isString(str)) return '';
  return str.replace(/((?:\S[^\.\?\!]*)[\.\?\!]*)/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

/**
 * snake_case the characters in the given `string`.
 *
 * ```handlebars
 * {{snakecase "a-b-c d_e"}}
 * <!-- results in:  'a_b_c_d_e' -->
 * ```
 * @param {String} `string`
 * @return {String}
 * @api public
 */

helpers.snakecase = function(str) {
  if (!utils.isString(str)) return '';
  return helpers.changecase(str, '_');
};

/**
 * Split `string` by the given `character`.
 *
 * ```handlebars
 * {{split "a,b,c" ","}}
 * <!-- results in:  ['a', 'b', 'c'] -->
 * ```
 * @param {String} `string` The string to split.
 * @return {String} `character` Default is an empty string.
 * @api public
 */

helpers.split = function(str, ch) {
  if (!utils.isString(str)) return '';
  if (!utils.isString(ch)) ch = ',';
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
 * @contributor Dan Fox <http://github.com/iamdanfox>
 * @param {String} `prefix`
 * @param {String} `testString`
 * @param {String} `options`
 * @return {String}
 * @block
 * @api public
 */

helpers.startsWith = function(prefix, str, options) {
  const args = [].slice.call(arguments);
  options = args.pop();
  if (utils.isString(str) && str.indexOf(prefix) === 0) {
    return options.fn(this);
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
 * <!-- results in:  'This Is Title Case' -->
 * ```
 * @param {String} `str`
 * @return {String}
 * @api public
 */

helpers.titleize = function(str) {
  if (!utils.isString(str)) return '';
  const title = str.replace(/[- _]+/g, ' ');
  const words = title.split(' ');
  let len = words.length;
  const res = [];
  let i = 0;
  while (len--) {
    const word = words[i++];
    res.push(exports.capitalize(word));
  }
  return res.join(' ');
};

/**
 * Removes extraneous whitespace from the beginning and end
 * of a string.
 *
 * ```handlebars
 * {{trim " ABC "}}
 * <!-- results in:  'ABC' -->
 * ```
 * @param {String} `string` The string to trim.
 * @return {String}
 * @api public
 */

helpers.trim = function(str) {
  return typeof str === 'string' ? str.trim() : '';
};

/**
 * Removes extraneous whitespace from the beginning of a string.
 *
 * ```handlebars
 * {{trim " ABC "}}
 * <!-- results in:  'ABC ' -->
 * ```
 * @param {String} `string` The string to trim.
 * @return {String}
 * @api public
 */

helpers.trimLeft = function(str) {
  if (utils.isString(str)) {
    return str.replace(/^\s+/, '');
  }
};

/**
 * Removes extraneous whitespace from the end of a string.
 *
 * ```handlebars
 * {{trimRight " ABC "}}
 * <!-- results in:  ' ABC' -->
 * ```
 * @param {String} `string` The string to trim.
 * @return {String}
 * @api public
 */

helpers.trimRight = function(str) {
  if (utils.isString(str)) {
    return str.replace(/\s+$/, '');
  }
};

/**
 * Truncate a string to the specified `length`. Also see [ellipsis](#ellipsis).
 *
 * ```handlebars
 * {{truncate("foo bar baz" 7)}}
 * <!-- results in:  'foo bar' -->
 * ```
 * @param {String} `str`
 * @param {Number} `limit` The desired length of the returned string.
 * @param {String} `suffix` Optionally supply a string to use as a suffix to
 * denote when the string has been truncated. Otherwise an ellipsis (`…`) will be used.
 * @return {String} The truncated string.
 * @api public
 */

helpers.truncate = function(str, limit, suffix) {
  if (utils.isString(str)) {
    if (typeof suffix !== 'string') {
      suffix = '';
    }
    if (limit < 0 && str.length > -limit) {
      return str.slice(limit) + suffix;
    } else if (str.length > limit) {
      return str.slice(0, limit - suffix.length) + suffix;
    }
    return str;
  }
};

/**
 * Truncate a string to have the specified number of words.
 * Also see [truncate](#truncate).
 *
 * ```handlebars
 * {{truncateWords("foo bar baz" 1)}}
 * <!-- results in:  'foo…' -->
 * {{truncateWords("foo bar baz" 2)}}
 * <!-- results in:  'foo bar…' -->
 * {{truncateWords("foo bar baz" 3)}}
 * <!-- results in:  'foo bar baz' -->
 * ```
 * @param {String} `str`
 * @param {Number} `limit` The desired length of the returned string.
 * @param {String} `suffix` Optionally supply a string to use as a suffix to
 * denote when the string has been truncated.
 * @return {String} The truncated string.
 * @api public
 */

helpers.truncateWords = function(str, count, suffix) {
  if (utils.isString(str) && utils.isNumber(count)) {
    if (typeof suffix !== 'string') {
      suffix = '…';
    }

    const num = Number(count);
    let arr = str.split(/[ \t]/);
    let val;
    if (num < arr.length) {
      arr = arr.slice(0, num);
      val = arr.join(' ').trim() + suffix;
    } else {
      val = str;
    }

    return val;
  }
};

/**
 * Uppercase all of the characters in the given string. If used as a
 * block helper it will uppercase the entire block. This helper
 * does not support inverse blocks.
 *
 * ```handlebars
 * {{uppercase "aBcDeF"}}
 * <!-- results in:  'ABCDEF' -->
 * ```
 * @related capitalize capitalizeAll
 * @param {String} `str` The string to uppercase
 * @param {Object} `options` Handlebars options object
 * @return {String}
 * @block
 * @api public
 */

helpers.uppercase = function(str) {
  if (utils.isPlainObject(str) && str.fn) {
    return str.fn(this).toUpperCase();
  }
  if (!utils.isString(str)) return '';
  return str.toUpperCase();
};

/**
 * Uppercase all of the characters in the given string. Alias for [uppercase](#uppercase).
 *
 * ```handlebars
 * {{upcase "aBcDeF"}}
 * <!-- results in:  'ABCDEF' -->
 * ```
 * @param {String} `string`
 * @return {String}
 * @alias uppercase
 * @api public
 */

helpers.upcase = helpers.uppercase;

/**
 * Convert all slashes (back and forward) in a string to dots
 *
 * ```handlebars
 * {{slashToDot "one/two / three\four"}}
 * <!-- results in:  'one.two.three.four' -->
 * ```
 * @param {String} `string`
 * @return {String}
 * @api public
 */

helpers.slashToDot = function(str) {
  if (!utils.isString(str)) return '';
  let dot = str.replace(/\ \/\ /g, '.');
  dot = dot.replace(/\//g, '.');
  dot = dot.replace(/\ \\\ /g, '.');
  dot = dot.replace(/\\/g, '.');
  return dot;
};

// TODO: docs
helpers.pad = function(lower, nup, block) {
  if (!lower) return '';
  if (!nup) return '';
  if (!block) return '';
  const n = (Math.ceil(lower / 5) * 5) - lower;
  let accum = '';
  for (let i = 0; i < n; ++i) {
    accum += block.fn(i);
  }
  return accum;
};

// TODO: docs
helpers.zeroPad = function(n, paddedWidth) {
  if (utils.isNumber(n)) {
    if (!utils.isNumber(paddedWidth)) {
      paddedWidth = undefined;
    }

    const numberStr = `${n}`;
    const width = paddedWidth || 4;
    return (numberStr.length >= width) ? numberStr : new Array(width - numberStr.length + 1).join('0') + numberStr;
  }
  return '';
};
