/*!
 * handlebars-helpers <https://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2013-2015 Jon Schlinkert, Brian Woodward.
 * Licensed under the MIT license.
 */

'use strict';

var forIn = require('for-in');
var define = require('define-property');
var lib = require('./lib/');

/**
 * Expose helpers
 */

module.exports = function helpers(opts) {
  opts = opts || {};
  var hbs = opts.handlebars || require('handlebars');

  forIn(lib, function (group, key) {
    forIn(group, function (v, k) {
      hbs.registerHelper(k, v);
    });
  });
  return hbs.helpers;
};

/**
 * Expose helper groups as getters
 */

forIn(lib, function (group, key) {
  define(module.exports, key, function (opts) {
    opts = opts || {};
    var hbs = opts.handlebars || require('handlebars');

    hbs.registerHelper(group);
    return group;
  });
});
