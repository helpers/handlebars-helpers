/**
 * HTML Utils
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

var HTML = module.exports = {};

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
HTML.escape = function (html) {
  return String(html).replace(/&(?!\w+;)/g, '&amp;')
                     .replace(/</g, '&lt;')
                     .replace(/>/g, '&gt;');
};