'use strict';

var fs = require('fs');
var _ = require('lodash');
var Handlebars = require('handlebars');

/**
 * Extract a value from a specific property
 */

exports.value = function(filepath, prop) {
  filepath = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  prop = _.pick(filepath, prop);
  prop = _.pluck(prop);
  return new Handlebars.SafeString(prop);
};

/**
 * Extract a specific property
 */

exports.pick = function(arr, prop) {
  return String(_.pick(arr, prop));
};

/**
 * Stringify an object to JSON
 * @param  {Object|String} `data` Object to stringify (or path of JSON file)
 * @return {String}
 * @api public
 */

exports.stringify = function(data) {
  if (typeof data === 'string') {
    data = JSON.parse(fs.readFileSync(data, 'utf8'));
  }
  return new Handlebars.SafeString(JSON.stringify(data, null, 2));
};

/**
 * Contributed by github.com/keeganstreet
 */

exports.parseJSON = function(data, options) {
  return options.fn(JSON.parse(data));
};


exports.opt = function(key) {
  var opts = {};

  if (this && this.app && this.app.options) {
    opts = this.app.options;
  }

  return opts[key] || '';
};
