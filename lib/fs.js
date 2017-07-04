'use strict';

var fs = require('fs');
var path = require('path');
var util = require('handlebars-utils');
var utils = require('./utils');
var number = require('./number');
var helpers = module.exports;

/**
 * Helper `fileSize` is deprecated. Use `helper.prettyBytes` instead.
 */

helpers.fileSize = number.bytes;

/**
 * Read a file from the file system. This is useful in composing
 * "include"-style helpers using sub-expressions.
 *
 * ```handlebars
 * {{read "a/b/c.js"}}
 * {{someHelper (read "a/b/c.md")}}
 * ```
 * @param {String} `filepath`
 * @return {String}
 * @api public
 */

helpers.read = function(filepath, options) {
  return fs.readFileSync(filepath, 'utf8');
};

/**
 * Return an array of files from the given
 * directory.
 *
 * @param {String} `directory`
 * @return {Array}
 * @api public
 */

helpers.readdir = function(dir, filter) {
  var files = fs.readdirSync(dir);
  files = files.map(function(fp) {
    return path.join(dir, fp);
  });
  if (util.isOptions(filter)) {
    return files;
  }
  if (typeof filter === 'function') {
    return filter(files);
  }
  if (utils.typeOf(filter) === 'regexp') {
    return files.filter(function(fp) {
      return filter.test(fp);
    });
  }
  if (utils.isGlob(filter)) {
    return files.filter(utils.mm.matcher(filter));
  }
  if (['isFile', 'isDirectory'].indexOf(filter) !== -1) {
    return files.filter(function(fp) {
      var stat = fs.statSync(fp);
      return stat[filter]();
    });
  }
  return files;
};
