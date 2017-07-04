/*!
 * handlebars-helpers <https://github.com/helpers/handlebars-helpers>
 *
 * Copyright (c) 2013-2017, Jon Schlinkert, Brian Woodward.
 * Released under the MIT License.
 */

'use strict';

var forIn = require('for-in');
var define = require('define-property');
var lib = require('./lib/');

/**
 * Expose helpers
 */

module.exports = function helpers(groups, options) {
  if (typeof groups === 'string') {
    groups = [groups];
  } else if (!Array.isArray(groups)) {
    options = groups;
    groups = null;
  }

  options = options || {};
  var hbs = options.handlebars || options.hbs || require('handlebars');
  define(module.exports, 'handlebars', hbs);

  if (groups) {
    groups.forEach(function(key) {
      hbs.registerHelper(lib[key]);
    });
  } else {
    forIn(lib, function(group, key) {
      hbs.registerHelper(group);
    });
  }

  return hbs.helpers;
};

/**
 * Expose helper groups
 */

forIn(lib, function(group, key) {
  define(module.exports, key, function(options) {
    options = options || {};
    var hbs = options.handlebars || options.hbs || require('handlebars');
    define(module.exports, 'handlebars', hbs);
    hbs.registerHelper(group);
    return hbs.helpers;
  });
});

/**
 * Expose `utils`
 */

module.exports.utils = require('./lib/utils');
