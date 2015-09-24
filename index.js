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
  this.handlebars = this.options.handlebars;
  delete this.options.handlebars;

  if (!this.handlebars) {
    throw new Error('handlebars-helpers expects an instance of handlebars.');
  }

  this.helpers = this.handlebars.helpers;
  this.groups = {};

  if (this.options.helpers) {
    this.visit('register', this.options.helpers);
    delete this.options.helpers;
  }

  if (this.options.groups) {
    this.visit('group', this.options.groups);
    delete this.options.groups;
  }
}

Cache.prototype.register = function(name, fn) {
  this.handlebars.registerHelper(name, fn);
  return this;
};

Cache.prototype.group = function(key, value) {
  this.groups[key] = new Cache({
    handlebars: this.handlebars,
    helpers: value
  });
  return this;
};

Cache.prototype.visit = function(method, value) {
  visit(this, method, value);
  return this;
};

module.exports = function (handlebars) {
  return new Cache({
    handlebars: handlebars,
    groups: groups
  });
};

// module.exports.Cache = Cache;
// module.exports.cache = cache;
// module.exports.utils = utils;
