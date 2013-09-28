/**
 * Handlebars Helpers
 * http://github.com/assemble/handlebars-helpers
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

var matchkeys = require('matchkeys');
var matchdep = require('matchdep');
var path = require('path');
var fs = require('fs');

var dir = path.join.bind(null, __dirname, 'helpers');

module.exports.register = function(Handlebars, options) {

  var endsWith = function(str, search) {
    var result = str.indexOf(search, str.length - search.length);
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

  var i, len;
  var localFiles = fs.readdirSync(dir());
  for (i = 0, len = localFiles.length; i < len; i++) {
    loadFile(dir(localFiles[i]));
  }

  var requiredModules = [];
  var keys = matchkeys.filter('*');
  for (i = 0, len = keys.length; i < len; i++) {
    var foundDeps = matchdep.filter(keys[i]);
    for (var j = 0; j < foundDeps.length; j++) {
      requiredModules.push(foundDeps[j]);
    }
  }

  for (i = 0, len = requiredModules.length; i < len; i++) {
    loadFile(requiredModules[i]);
  }

};

