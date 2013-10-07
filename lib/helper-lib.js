/**
 * Handlebars Helpers
 * http://github.com/assemble/handlebars-helpers
 *
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

'use strict';


// Node.js
var path = require('path');
var fs   = require('fs');

// node_modules
var matchkeys = require('matchkeys');
var matchdep  = require('matchdep');
var _         = require('lodash');



module.exports.register = function(Handlebars, options) {

  var cwd = path.join.bind(null, __dirname, 'helpers');
  var config = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json')));

  var endsWith = function(str, search) {
    var result = str.indexOf(search, str.length - search.length);
    return result !== -1;
  };

  var registerHelper = function(file) {
    var helper;
    if (!endsWith(file, 'helpers.js')) {
      helper = require(file);
    }
    if (!(typeof helper === 'undefined' || typeof helper.register === 'undefined')) {
      return helper.register(Handlebars, options);
    }
  };

  /**
   * Register local helpers
   */
  var localHelpers = fs.readdirSync(cwd());

  // Load local helpers.
  localHelpers.map(function(helper) {
    registerHelper(cwd(helper));
  });

  /**
   * Register helpers from node_modules
   * Attempt to find, resolve and register any helpers that are both
   * listed in the keywords and either dependencies or devDependencies
   * of package.json.
   */
  if(config.keywords && !_.isEmpty(config.keywords)) {
    var loadNpmHelpers = [];

    // Get keywords from package.json and search for matches in dependencies
    matchkeys.filter('*').map(function(keywords) {
      matchdep.filterAll(keywords).forEach(function(match) {
        loadNpmHelpers.push(match);
      });
    });

    loadNpmHelpers.map(function(helper) {
      registerHelper(helper);
    });
  }
};

