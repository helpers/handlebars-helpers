'use strict';

var utils = require('lazy-cache')(require);
var fn = require;
require = utils;

// Array utils
require('array-sort', 'sortBy');
require('arr-flatten', 'flatten');

// Html utils
require('to-gfm-code-block', 'block');
require('html-tag', 'tag');

// JavaScript language utils
require('kind-of', 'typeOf');

// matching utils
require('is-glob');
require('micromatch', 'mm');
require('falsey');

// Number utils
require('is-even');
require('is-number');

// Object utils
require('create-frame');
require('get-object');
require('get-value', 'get');
require('for-own');

// Path utils
require('relative');
require = fn;

/**
 * Expose `utils`
 */

module.exports = utils;
