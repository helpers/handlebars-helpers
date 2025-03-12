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
 * Returns the given value as-is, unchanged.
 *
 * ```js
 * console.log(utils.result('foo'));
 * //=> 'foo'
 * console.log(utils.result(function() {
 *   return 'foo';
 * }));
 * //=> [function]
 * ```
 * @param  {any} `val`
 * @return {any}
 * @api public
 */

module.exports = function(val) {
  return val;
};
