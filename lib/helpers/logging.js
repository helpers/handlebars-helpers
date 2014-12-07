'use strict';

var sort = require('sort-object');
var utils = require('../utils/utils');
var Handlebars = require('handlebars');


/**
 * Use console.log to return context of the 'this' and options from Handlebars
 * @param {Object} value
 * @example
 *   {{debug}}
 */

exports.debug = function(value) {
  console.log('=================================');
  console.log('Context: ', this);
  if (!utils.isUndefined(value)) {
    console.log('Value: ', value);
  }
  return console.log('=================================');
};


exports.log = function(value) {
  return console.log(value);
};


/**
 * @source: Brian Woodward <http://github.com/doowb>
 * @api public
 */

exports.inspect = function(context, options) {
  context = JSON.stringify(sort(context), null, 2);
  options = options || {};
  var ext = options.hash && options.hash.ext || '.html';

  // Wrap the returned JSON in either markdown code fences
  // or HTML, depending on the extension.
  var md = '\n```json\n' + context + '\n```';
  var html = '<pre><code class="json">\n' + context + '\n</code></pre>';
  var result = utils.switchOutput(ext, md, html);
  return new Handlebars.SafeString(result);
};
