'use strict';

var util = require('util');
var to = require('to');
var sort = require('sort-object');
var Utils = require('../utils/utils');


/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * Use console.log to return context of the 'this' and options from Handlebars
 * @param {Object} value
 * @example
 *   {{debug}}
 */

helpers.debug = function(value) {
  console.log('=================================');
  console.log('Context: ', this);
  if (!Utils.isUndefined(value)) {
    console.log('Value: ', value);
  }
  return console.log('=================================');
};


/**
 * @contributor: Jon Schlinkert <http://github.com/jonschlinkert>
 * @param  {Object} src
 * @return {Object}
 * @api public
 */

helpers.expandMapping = function(src) {
  var obj = Utils.expandMapping(src);
  var yml = to.format.yaml.stringify(obj);
  return new Handlebars.SafeString(yml);
};

/**
 * @contributor: Jon Schlinkert <http://github.com/jonschlinkert>
 * @param  {object} src
 * @return {object}
 * @api public
 */

helpers.expandJSON = function(src) {
  var obj = src; //grunt.file.expand(src);
  var json = JSON.stringify(obj, null, 2);
  return new Handlebars.SafeString(json);
};

/**
 * @contributor: Jon Schlinkert <http://github.com/jonschlinkert>
 * @param  {object} src
 * @return {object}
 * @api public
 */

helpers.expandYAML = function(src) {
  var obj = src; //grunt.file.expand(src);
  var yml = to.format.yaml.stringify(obj);
  return new Handlebars.SafeString(yml);
};

helpers.log = function(value) {
  return console.log(value);
};


/**
 * @contributor: Brian Woodward <http://github.com/doowb>
 * @param  {[type]} obj
 * @param  {[type]} ext
 * @return {[type]}
 * @api public
 */

helpers.inspect = function(context, options) {
  options = options || {};
  var hash = options && options.hash || {};
  var ext = hash.ext || '.html';
  context = JSON.stringify(sort(context), null, 2);

  // Wrap the returned JSON in either markdown code fences
  // or HTML, depending on the extension.
  var md = '\n```json\n' + context + '\n```';
  var html = '<pre><code class="json">\n' + context + '\n</code></pre>';
  var result = Utils.switchOutput(ext, md, html);
  return new Handlebars.SafeString(result);
};
