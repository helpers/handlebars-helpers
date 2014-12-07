'use strict';

/**
 * Remove extra newlines from HTML, respect indentation
 * @param  {String} html
 * @return {String}
 * @api public
 */

exports.condense = function(str) {
  return str.replace(/(\n|\r){2,}/g, '\n');
};

/**
 * Add a single newline above code comments in HTML
 * @param  {[type]} html
 * @return {[type]}
 * @api public
 */

exports.padcomments = function(str) {
  return str.replace(/(\s*<!--)/g, '\n$1');
};
