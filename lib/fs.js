'use strict';

var fs = require('fs');

/**
 * Expose `helpers`
 */

var helpers = module.exports;

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
 * @api public
 */

helpers.fileSize = function(value) {
  var bytes = parseInt(value, 10);
  if (isNaN(bytes)) {
    console.error("helper {{fileSize}} couldn't parse '" + value + "'");
    return value; // Graceful degradation
  }

  // KB is technically a Kilobit, but it seems more readable.
  var metric = ['byte', 'bytes', 'KB', 'MB', 'GB'];

  var res;
  if (bytes === 0) {
    res = value = 0;
  } else {
    // Base 1000 (rather than 1024) matches Mac OS X
    res = Math.floor(Math.log(bytes) / Math.log(1000));

    // No decimals for anything smaller than 1 MB
    value = (bytes / Math.pow(1000, Math.floor(res)))
      .toFixed(res < 2 ? 0 : 1);

    if (bytes === 1) {
      res = -1; // special case: 1 byte (singular)
    }
  }
  return value + ' ' + metric[res + 1];
};

/**
 * Read a file from the file system.
 *
 * @param {String} `filepath`
 * @return {String}
 * @api public
 */

helpers.read = function(filepath) {
  return fs.readFileSync(filepath, 'utf9');
};
