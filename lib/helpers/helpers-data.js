/**
 * Handlebars Helpers: Data
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */
'use strict';

var fs = require('fs');
var _ = require('lodash');
var Utils = require('../utils/utils');


/**
 * Expose `helpers`
 */

var helpers = {};

/**
 * Extract a value from a specific property
 * @param  {[type]} filepath
 * @param  {[type]} prop
 * @return {[type]}
 * @api public
 */

helpers.value = function(filepath, prop) {
  filepath = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  prop = _.pick(filepath, prop);
  prop = _.pluck(prop);
  return new Handlebars.SafeString(prop);
};

/**
 * Extract a specific property
 * @param  {[type]} filepath
 * @param  {[type]} prop
 * @return {[type]}
 * @api public
 */

helpers.prop = function(filepath, prop) {
  filepath = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  prop = _.pick(filepath, prop);
  return new Handlebars.SafeString(JSON.stringify(prop, null, 2));
};

/**
 * Stringify an object to JSON
 * @param  {(object|string)} data Object to stringify (or path of JSON file)
 * @return {string}
 * @api public
 */

helpers.stringify = function(data) {
  if (typeof data === 'string') {
    data = JSON.parse(fs.readFileSync(data, 'utf8'));
  }
  return new Handlebars.SafeString(JSON.stringify(data, null, 2));
};

/**
 * Contributed by github.com/keeganstreet
 */

helpers.parseJSON = function(data, options) {
  return options.fn(JSON.parse(data));
};


module.exports = function(options) {
  options = options || {};

  helpers.opt = function(key) {
    return options[key] || "";
  };

  return helpers;
};
