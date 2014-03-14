/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


// Node.js
var fs = require('fs');
var file = require('fs-utils');


// node_modules
var _ = require('lodash');


// Local utils
var Utils = require('../utils/utils');

// Export helpers
module.exports.register = function (Handlebars, options) {
  options = options || {};
  var helpers = {};

  /**
   * {{value}} extract a value from the specified property
   *
   * @param  {String} filepath [description]
   * @param  {String} prop     [description]
   * @return {String}          [description]
   */

  helpers.value = function (filepath, prop) {
    var str = file.readJSONSync(filepath);
    var val = _.pick(str, prop);
    var result = _.pluck(val);
    return new Handlebars.SafeString(result);
  };

  /**
   * {{prop}} extract a specific property
   * @param  {[type]} filepath [description]
   * @param  {[type]} prop     [description]
   * @return {[type]}          [description]
   */

  helpers.prop = function (filepath, prop) {
    var str = file.readJSONSync(filepath);
    var result = JSON.stringify(_.pick(str, prop));
    return new Handlebars.SafeString(result);
  };

  /**
   * {{parseJSON}}
   * Contributed by github.com/keeganstreet
   */

  helpers.parseJSON = function (data, options) {
    return options.fn(JSON.parse(data));
  };

  /**
   * {{opt}} get a property from assemble.options
   *
   * @param {String} key The name of the property
   * @return Returns value from `assemble.options`
   */

  helpers.opt = function(key) {
    return options[key] || '';
  };

  for (var helper in helpers) {
    if (helpers.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, helpers[helper]);
    }
  }
};
