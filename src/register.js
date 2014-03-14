/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

'use strict';

// Node.js
var fs = require('fs');
var path = require('path');
var file = require('fs-utils');

// node_modules
var matchkeys = require('matchkeys');
var matchdep = require('matchdep');
var _ = require('lodash');

// Local utils.
var Utils = require('./utils/utils');

module.exports.register = function (Handlebars, options, params) {

  /**
   * Local package.json from the user's local directory
   * @type  {Object}
   */

  var pkg = file.readJSONSync(path.join(process.cwd(), 'package.json'));
  var helpersDir = path.join.bind(null, __dirname, 'helpers');

  /**
   * Register helper function
   */

  function registerHelper(file) {
    var helper = require(file);
    if (!(typeof helper === 'undefined' || typeof helper.register === 'undefined')) {
      return helper.register(Handlebars, options, params);
    }
  }

  /**
   * Register local helpers
   */

  var localHelpers = fs.readdirSync(helpersDir());
  localHelpers.map(function (helper) {
    registerHelper(helpersDir(helper));
  });


  /**
   * Register helpers from node_modules Attempt to find, resolve and register
   * any helpers that are both listed in the keywords and either dependencies
   * or devDependencies of package.json.
   */

  if (pkg.keywords && pkg.keywords.length > 0) {

    // Get keywords from package.json and search for matches in dependencies
    matchkeys.filter('*').map(function (keywords) {
      matchdep.filterAll(keywords, pkg).forEach(function (match) {
        registerHelper(match);
      });
    });
  }
};