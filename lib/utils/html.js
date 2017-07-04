'use strict';

var util = require('handlebars-utils');
var striptags = require('striptags');

/**
 * Expose `utils`
 */

var html = module.exports;

/**
 * Remove extra newlines from HTML, respect indentation.
 *
 * @param {String} html
 * @return {String}
 * @api public
 */

html.condense = function(str) {
  return str.replace(/(\r\n|\r|\n|\u2028|\u2029) {2,}/g, '\n');
};

/**
 * Add a single newline above code comments in HTML
 *
 * @param {String} `html`
 * @return {String}
 * @api public
 */

html.padcomments = function(str) {
  return str.replace(/(\s*<!--)/g, '\n$1');
};

/**
 * Parse HTML tag attributes from the `options.hash`.
 *
 * @param {Object} `hash` Helper options hash, e.g. `{foo: 'bar'}`
 * @return {String} Stringified attributes, e.g. `foo="bar"`
 * @api public
 */

html.parseAttributes = function parseAttributes(hash) {
  return Object.keys(hash).map(function(key) {
    var val = String(hash[key]).replace(/^['"]|["']$/g, '');
    return key + '="' + val + '"';
  }).join(' ');
};

/**
 * Strip HTML tags from a string, so that only the text nodes
 * are preserved.
 *
 * ```handlebars
 * {{sanitize "<span>foo</span>"}}
 * //=> 'foo'
 * ```
 *
 * @param {String} `str` The string of HTML to sanitize.
 * @return {String}
 * @api public
 */

html.sanitize = function(str) {
  if (!util.isString(str)) return '';
  return striptags(str).trim();
};

html.toAttributes = function toAttributes(hash) {
  var res = '';
  var keys = Object.keys(hash);
  for (var i = 0; i < keys.length; i++) {
    var val = hash[keys[i]];
    if (val === true) {
      res += ' ' + keys[i];
    } else {
      res += ' ' + keys[i] + '="' + String(val) + '"';
    }
  }
  return res;
};
