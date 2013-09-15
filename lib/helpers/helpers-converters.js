/**
 * Handlebars Helpers: Converters
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

'use strict';

// node_modules
var _ = require('lodash');

// Local utils
var Utils = require('../utils/utils');
var jade = require('../utils/jade');
var opts = require('assemble').options;

// The module to be exported
var helpers = module.exports = {

  jade: function (options) {
    options.hash = _.extend({}, opts, options.hash);
    return new Utils.SafeString(jade(options.hash.src));
  }

};

// Export helpers
module.exports.register = function (Handlebars, options) {
  options = opts || {};
  for (var helper in helpers) {
    if (helpers.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, helpers[helper]);
    }
  }
};