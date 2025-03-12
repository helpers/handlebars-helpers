'use strict';

const isOptions = require('./isOptions');

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
 * Returns true if the given value is `undefined` or is a handlebars
 * options hash (which means that a value was not passed by the user).
 *
 * ```js
 * Handlebars.registerHelper('example', function(val, options) {
 *   if (utils.isUndefined(val)) {
 *     return '';
 *   }
 *   // do stuff
 * });
 * ```
 * @param {any} `value`
 * @return {Boolean}
 * @api public
 */

module.exports = function(val) {
  return val == null || (isOptions(val) && val.hash != null);
};
