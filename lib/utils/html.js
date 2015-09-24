'use strict';

var typeOf = require('kind-of');

/**
 * Expose `utils`
 */

var utils = module.exports;

/**
 * Remove extra newlines from HTML, respect indentation.
 *
 * @param  {String} html
 * @return {String}
 * @api public
 */

utils.condense = function(str) {
  return str.replace(/(\n|\r){2,}/g, '\n');
};

/**
 * Add a single newline above code comments in HTML
 *
 * @param  {String} `html`
 * @return {String}
 * @api public
 */

utils.padcomments = function(str) {
  return str.replace(/(\s*<!--)/g, '\n$1');
};

/**
 * Parse HTML tag attributes from the `options.hash`.
 *
 * @param {Object} `hash` Helper options hash, e.g. `{foo: 'bar'}`
 * @return {String} Stringified attributes, e.g. `foo="bar"`
 * @api public
 */

utils.parseAttributes = function parseAttributes(hash) {
  return Object.keys(hash).map(function(key) {
    return key + '="' + hash[key] + '"';
  }).join(' ');
};


utils.toAttributes = function toAttributes(hash) {
  var res = '';
  for (var key in hash) {
    if (hash.hasOwnProperty(key) && typeOf(hash[key] === 'string')) {
      res += ' ' + key + '="' + hash[key] + '"';
    }
  }
  return res;
};
