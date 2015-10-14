'use strict';

var utils = require('./utils');

/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * The main function. Pass an array of filepaths,
 * and a string or array of glob patterns
 *
 * @param  {Array|String} `files`
 * @param  {Array|String} `patterns` One or more glob patterns.
 * @param  {Object} `opts`
 * @return {Array} Array of matches
 * @api public
 */

helpers.mm = function () {
  var args = utils.getArgs(this, arguments);
  return utils.mm.apply(utils.mm, args);
};

helpers.isMatch = function () {
  var args = utils.getArgs(this, arguments);
  return utils.mm.isMatch.apply(utils.mm, args);
};

helpers.match = function () {
  var args = utils.getArgs(this, arguments);
  return utils.mm.match.apply(utils.mm, args);
};
