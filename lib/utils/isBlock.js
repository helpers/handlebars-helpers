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
 * Returns true if a helper is a block helper.
 *
 * ```js
 * Handlebars.registerHelper('example', function(options) {
 *   if (utils.isBlock(options)) {
 *     // do something if this is a block helper
 *   } else {
 *     // do something else if this is a not block helper
 *   }
 * });
 * ```
 * @param {Object} `options` Helper options object
 * @return {Boolean}
 * @api public
 */

module.exports = 

function(options) {
  return isOptions(options)
    && typeof options.fn === 'function'
    && typeof options.inverse === 'function';
};
