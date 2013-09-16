/**
 * Handlebars Data Helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

var Utils = require('../utils/utils');
var _     = require('lodash');


// The module to be exported
var helpers = module.exports = {

  /**
   * {{value}}
   * Extract a value from a specific property
   * @param  {[type]} filepath [description]
   * @param  {[type]} prop     [description]
   * @return {[type]}          [description]
   */
  value: function (filepath, prop) {
    filepath = Utils.readJSON(filepath);
    prop = _.pick(filepath, prop);
    prop = _.pluck(prop);
    return Utils.safeString(prop);
  },

  /**
   * {{prop}}
   * Extract a specific property
   * @param  {[type]} filepath [description]
   * @param  {[type]} prop     [description]
   * @return {[type]}          [description]
   */
  prop: function (filepath, prop) {
    filepath = Utils.readJSON(filepath);
    prop = _.pick(filepath, prop);
    return Utils.safeString("\n" + JSON.stringify(prop, null, 2));
  },

  /**
   * {{stringify}}
   * Stringify an object to JSON
   * @param  {[type]} filepath [description]
   * @return {[type]}          [description]
   */
  stringify: function (filepath) {
    filepath = Utils.readJSON(filepath);
    return Utils.safeString(JSON.stringify(filepath, null, 2));
  },

  /**
   * {{parseJSON}}
   * Contributed by github.com/keeganstreet
   */
  parseJSON: function (data, options) {
    return options.fn(JSON.parse(data));
  }

};

// Export helpers
module.exports.register = function (Handlebars, options) {

  /**
   * {{opt}} example helper
   * Return a property from the `assemble.options` object
   * @param  {[type]} key [description]
   * @return {[type]}     [description]
   */
  Handlebars.registerHelper("opt", function(key) {
    return options[key] || "";
  });

  options = options || {};
  for (var helper in helpers) {
    if (helpers.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, helpers[helper]);
    }
  }
};