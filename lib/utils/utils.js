'use strict';

var utils = require('lazy-cache')(require);
var fn = require;
require = utils;

// Array utils
require('array-sort', 'sortBy');
require('arr-filter', 'filter');
require('arr-flatten', 'flatten');
require('index-of');

// Collection utils
require('make-iterator', 'iterator');

// Html utils
require('to-gfm-code-block', 'block');
require('html-tag', 'tag');

// JavaScript language utils
require('kind-of', 'typeOf');

// matching utils
require('is-glob');
require('micromatch', 'mm');

// Number utils
require('is-even');
require('is-number');
require('is-odd');

// Object utils
require('create-frame');
require('get-object');
require('get-value', 'get');
require('for-own');
require('mixin-deep', 'merge');

// Path utils
require('normalize-path', 'normalize');
require('relative');
require = fn;

/**
 * Expose `utils`
 */

module.exports = utils;
