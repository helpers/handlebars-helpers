'use strict';
var helpers = module.exports;

/**
 * Get the current year.
 * @exposes year as year
 * @api public
 */

helpers.year = require('year');

/**
 * Expose `moment` helper
 * @exposes helper-date as moment
 * @api public
 */

helpers.moment = require('helper-date');
