'use strict';

var fs = require('fs');

/**
 * Expose `utils`
 */

var utils = module.exports;

/**
 * Read a file at the given `filepath`
 *
 * @param {String} `fp`
 * @return {String}
 */

utils.read = function(fp) {
  return fs.readFileSync(fp, 'utf8');
};

/**
 * Returns a function for reading a test fixture 
 * of the given `type` at the given `filepath`.
 *
 * @param {String} `type`
 * @param {String} `fp`
 * @return {String}
 */

utils.fixture = function(type) {
  return function(fp) {
    return utils.read('test/fixtures/' + type + '/' + fp);
  };
};

/**
 * Returns a function for reading a file
 * of the given `type` at the given `filepath`.
 *
 * @param {String} `type`
 * @param {String} `fp`
 * @return {String}
 */

utils.expected = function(type) {
  return function(fp) {
    return utils.read('test/expected/' + type + '/' + fp);
  };
};
