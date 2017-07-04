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

helpers.year = require('year');

/**
 * Use [moment][] as a helper. See [helper-date][] for more details.
 *
 * @exposes helper-date as moment
 * @api public
 */

helpers.moment = helpers.date = require('helper-date');
