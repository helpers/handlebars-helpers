'use strict';

const fs = require('fs');

const read = (fp) => {
  return fs.readFileSync(fp, 'utf8');
};

/**
 * Returns a function for reading a test fixture
 * of the given `type` at the given `filepath`.
 *
 * @param {String} `type`
 * @return {(filePath: String) => String}
 */

const fixture = function(type) {
  return function(fp) {
    return read('test/fixtures/' + type + '/' + fp);
  };
};

module.exports.fixture = fixture;

/**
 * Returns a function for reading a file
 * of the given `type` at the given `filepath`.
 *
 * @param {String} `type`
 * @return {(filePath: String) => String}
 */

const expected = function(type) {
  return function(fp) {
    return read('test/expected/' + type + '/' + fp);
  };
};

module.exports.expected = expected;
