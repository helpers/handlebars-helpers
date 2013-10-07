/**
 * HTML Utils
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */
'use strict';


// Node.js
var fs = require('fs');


// node_modules
var prettify = require('js-prettify').html;


// Local utils.
var Utils = require('./utils');



// The module to be exported.
var HTML = module.exports = {};


/**
 * Remove extra newlines from HTML, respect indentation
 * @param  {String} html
 * @return {String}
 */
HTML.condense = function(str) {
  return str.replace(/(\n|\r){2,}/g, '\n');
};

/**
 * Add a single newline above code comments in HTML
 * @param  {[type]} html
 * @return {[type]}
 */
HTML.padcomments = function(str) {
  return str.replace(/(\s*<!--)/g, '\n$1');
};


/**
 * Parse HTML attributes from options hash
 * @param  {[type]} hash [description]
 * @return {[type]}      [description]
 */
HTML.parseAttributes = function (hash) {
  return Object.keys(hash).map(function (key) {
    return "" + key + "=\"" + hash[key] + "\"";
  }).join(' ');
};

/**
 * Escape specified `html`.
 * @param  {String} html string to be escaped
 * @return {String} escaped html
 * @example:
 *     utils.escape('<script></script>')
 *     // => '&lt;script&gt;&lt;/script&gt;'
 */
HTML.escape = function (str) {
  return String(str).replace(/&(?!\w+;)/g, '&amp;')
                     .replace(/</g, '&lt;')
                     .replace(/>/g, '&gt;');
};

/**
 * Add <pre><code> tags arround str
 * @param {String} str The string to modify
 * @param {String} lang The code of the
 */
HTML.addCodeTags = function (str, lang) {
  lang = lang ? ' language="' + lang + '"' : '';
  return '<pre class="language"><code' + lang + '>' + str + '</code></pre>';
};


/**
 * Convert new line (\n\r) to <br>
 * from http://phpjs.org/functions/nl2br:480
 */
HTML.nl2br = function(text) {
  var nl2br = (text + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
  return new Utils.SafeString(nl2br);
};
