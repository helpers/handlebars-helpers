'use strict';

var Handlebars = require('handlebars');
var Utils = require('../utils/utils');
var glob = require('globby');
var _ = require('lodash');


/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * Return a list of files from glob patterns.
 *
 * ```handlebars
 * {{glob 'files/*.md'}}
 * ```
 * @param {String} `patterns`
 * @param {Options} `options`
 * @return {String}
 */

helpers.glob = function(patterns, options) {
  var opts = _.extend({}, options, options.hash);
  return glob.sync(patterns, opts);
};

/**
 * Return the contatenated content of a list of files
 * using glob patterns.
 *
 * ```handlebars
 * {{concat 'files/*.md'}}
 * ```
 * @param {String} `patterns`
 * @param {Options} `options`
 * @return {String}
 */

helpers.concat = function(patterns, context, options) {
  var files = helpers.glob(patterns, options);

  var template = Handlebars.compile(source);
  var result = template(context);
  return new Handlebars.SafeString(result);
};

/**
 * Converts bytes into a nice representation with unit.
 *
 * **Examples:**
 *
 *   - `13661855 => 13.7 MB`
 *   - `825399 => 825 KB`
 *   - `1396 => 1 KB`
 *
 * @param {String} `value`
 * @return {String}
 */

helpers.fileSize = function(value) {
  var bytes = parseInt(value, 10);
  if (isNaN(bytes)) {
    console.error("helper {{fileSize}} couldn't parse '" + value + "'");
    return value; // Graceful degradation
  }
  // KB is technically a Kilobit, but it seems more readable.
  var resInt, resValue;
  var metric = ['byte', 'bytes', 'KB', 'MB', 'GB'];
  if (bytes === 0) {
    resInt = resValue = 0;
  } else {
    // Base 1000 (rather than 1024) matches Mac OS X
    resInt = Math.floor(Math.log(bytes) / Math.log(1000));
    // No decimals for anything smaller than 1 MB
    resValue = (bytes / Math.pow(1000, Math.floor(resInt))).toFixed(resInt < 2 ? 0 : 1);
    if (bytes === 1) {
      resInt = -1; // special case: 1 byte (singular)
    }
  }
  return new Handlebars.SafeString(resValue + ' ' + metric[resInt + 1]);
};
