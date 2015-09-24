/*!
 * handlebars-helpers <https://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014-2015 Jon Schlinkert, Brian Woodward.
 * Licensed under the MIT license.
 */

'use strict';

var visit = require('collection-visit');
var groups = require('./lib/');
var utils = require('./lib/utils');

function Cache(options) {
  this.options = options || {};
  this.helpers = {};
  this.groups = {};

  if (this.options.helpers) {
    this.visit('register', this.options.helpers);
  }
  if (this.options.groups) {
    this.visit('group', this.options.groups);
  }
}

Cache.prototype.register = function(name, fn) {
  this.helpers[name] = fn;
  return this;
};

Cache.prototype.group = function(key, value) {
  this.groups[key] = new Cache({helpers: value});
  return this;
};

Cache.prototype.visit = function(method, value) {
  visit(this, method, value);
  return this;
};

var cache = new Cache({groups: groups});




console.log(cache)



// module.exports = cache;
// module.exports.Cache = Cache;
// module.exports.cache = cache;
// module.exports.utils = utils;
