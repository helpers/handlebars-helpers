/**
 * handlebars-helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

var fs = require('fs');
var path = require('path');
var dir = path.join(__dirname, 'helpers');


module.exports.register = function(Handlebars, options) {
  var endsWith = function(str, search) {
    var result;
    result = str.indexOf(search, str.length - search.length);
    return result !== -1;
  };
  var loadFile = function(file) {
    var helper;
    if (!endsWith(file, 'helpers.js')) {
      helper = require(file);
    }
    if (!(typeof helper === 'undefined' || typeof helper.register === 'undefined')) {
      return helper.register(Handlebars, options);
    }
  };
  var ref = fs.readdirSync(dir);
  var results = [];
  var i, len;
  for (i = 0, len = ref.length; i < len; i++) {
    var file = ref[i];
    results.push(loadFile(path.join(dir, file)));
  }
  return results;
};

