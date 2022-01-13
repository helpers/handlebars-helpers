'use strict';
var helpers = module.exports;

/**
 * Get the current year.
 *
 * ```handlebars
 * {{year}}
 * <!-- 2017 -->
 * ```
 * @exposes year as year
 * @api public
 */

helpers.year = function() {
  return (new Date()).getUTCFullYear().toString();
};
