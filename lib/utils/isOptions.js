'use strict';

const isObject = require('./isObject');

/**
 * This code was taken directly from handlebars-helpers,
 * https://github.com/helpers/handlebars-utils/blob/master/index.js#L398
 * 
 * that was taken directly from handlebars.
 * https://github.com/wycats/handlebars.js/blob/b55a120e8222785db3dc00096f6afbf91b656e8a/LICENSE
 * Released under the MIT License
 * Copyright (C) 2011-2016 by Yehuda Katz
 */

/**
 * Returns true if the given value is a handlebar `options` object.
 *
 * ```js
 * Handlebars.registerHelper('example', function(val, locals, options) {
 *   if (utils.isOptions(locals)) {
 *     options = locals;
 *     locals = {};
 *   }
 *   // do stuff
 * });
 * ```
 * @param {Object} `val`
 * @return {Boolean}
 * @api public
 */

module.exports = function(val) {
  return isObject(val) && isObject(val.hash);
};
