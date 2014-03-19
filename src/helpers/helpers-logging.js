/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


// Node.js
var util  = require('util');


// node_modules
var file = require('fs-utils');
var to    = require('to');
var sort  = require('sort-object');

// Local utils
var Utils = require('../utils/utils');

module.exports.register = function (Handlebars, options) {
  options = options || {};
  var helpers = {};

  helpers.log = function (value) {
    return console.log(value);
  };

  helpers.inspect = function(context, options) {
    var hash = options.hash || {};
    var ext = hash.ext || '.html';
    context = JSON.stringify(sort(context), null, 2);

    // Wrap the returned JSON in either markdown code fences
    // or HTML, depending on the extension.
    var md = '\n```json\n' + context + '\n```';
    var html = '<pre><code class="json">\n' + context + '\n</code></pre>';
    var result = Utils.switchOutput(ext, md, html);
    return new Utils.safeString(result);
  };

  helpers.debug = function (value) {
    console.log('=================================');
    console.log('Context: ', this);
    if (!Utils.isUndefined(value)) {
      console.log('Value: ', value);
    }
    return console.log('=================================');
  };

  for (var helper in helpers) {
    if (helpers.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, helpers[helper]);
    }
  }
};
