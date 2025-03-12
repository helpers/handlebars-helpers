'use strict';

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
 * Returns true if the given value is an object.
 *
 * ```js
 * console.log(utils.isObject(null));
 * //=> false
 * console.log(utils.isObject([]));
 * //=> false
 * console.log(utils.isObject(function() {}));
 * //=> false
 * console.log(utils.isObject({}));
 * //=> true
 * ```
 * @param {Object} `val`
 * @return {Boolean}
 * @api public
 */

module.exports = function(val) {
  return !!val && typeof val === 'object';
};
