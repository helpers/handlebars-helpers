'use strict';

const isBlock = require('./isBlock');
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
 * Gets the return value for a helper, by either rendering the block
 * or inverse block if it's a block helper, or returning the given value
 * (when truthy) or an empty string (when falsey) if it's a non-block expression.
 *
 * ```js
 * Handlebars.registerHelper('example', function(val, locals, options) {
 *   return utils.value(val, locals, options);
 * });
 * ```
 * @param {any} `val`
 * @param {Object} `options`
 * @param {Object} `context`
 * @return {String}
 * @api public
 */

const value = function(val, context, options) {
  if (isOptions(val)) {
    return value(null, val, options);
  }
  if (isOptions(context)) {
    return value(val, {}, context);
  }
  if (isBlock(options)) {
    return val ? options.fn(context) : options.inverse(context);
  }
  return val;
};

module.exports = value;
