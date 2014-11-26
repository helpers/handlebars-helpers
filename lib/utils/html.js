'use strict';

var fs = require('fs');
var Utils = require('./utils');
var html = module.exports = {};


/**
 * Remove extra newlines from HTML, respect indentation
 * @param  {String} html
 * @return {String}
 * @api public
 */
html.condense = function(str) {
  return str.replace(/(\n|\r){2,}/g, '\n');
};

/**
 * Add a single newline above code comments in HTML
 * @param  {[type]} html
 * @return {[type]}
 * @api public
 */
html.padcomments = function(str) {
  return str.replace(/(\s*<!--)/g, '\n$1');
};


/**
 * Parse HTML attributes from options hash
 * @param  {[type]} hash [description]
 * @return {[type]}      [description]
 * @api public
 */
html.parseAttributes = function (hash) {
  return Object.keys(hash).map(function (key) {
    return "" + key + "=\"" + hash[key] + "\"";
  }).join(' ');
};
