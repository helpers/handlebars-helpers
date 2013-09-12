/**
 * Handlebars Path Helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

var Utils = require('../utils/utils');
var grunt = require('grunt');
var util  = require('util');
var to    = require('to');


// The module to be exported
var helpers = module.exports = {

  debug: function (value) {
    console.log('Context: ', this);
    if (!Utils.isUndefined(value)) {
      console.log('Value: ', value);
    }
    return console.log('=================================');
  },

  /**
   * {{expandMapping}}
   * @author: Jon Schlinkert <http://github.com/jonschlinkert>
   * @param  {[type]} src [description]
   * @return {[type]}     [description]
   */
  expandMapping: function (src) {
    var list = Utils.expandMapping(src);
    var yml = to.format.yaml.stringify(list);
    return Utils.safeString(yml);
  },

  /**
   * {{expandJSON}}
   * @author: Jon Schlinkert <http://github.com/jonschlinkert>
   * @param  {[type]} src [description]
   * @return {[type]}     [description]
   */
  expandJSON: function (src) {
    var list = grunt.file.expand(src);
    var json = JSON.stringify(list, null, 2);
    return Utils.safeString(json);
  },

  /**
   * {{expandYAML}}
   * @author: Jon Schlinkert <http://github.com/jonschlinkert>
   * @param  {[type]} src [description]
   * @return {[type]}     [description]
   */
  expandYAML: function (src) {
    var list = grunt.file.expand(src);
    var yml = to.format.yaml.stringify(list);
    return Utils.safeString(yml);
  },

  log: function (value) {
    return console.log(value);
  }
};

// Export helpers
module.exports.register = function (Handlebars, options) {

  /**
   * {{inspect}}
   * @author: Brian Woodward <http://github.com/doowb>
   * @param  {[type]} obj [description]
   * @param  {[type]} ext [description]
   * @return {[type]}     [description]
   */
  Handlebars.registerHelper("inspect", function(obj, ext) {
    if (Utils.isUndefined(options.ext)) {
      ext = ".html";
    } else {
      ext = options.ext;
    }
    var md = "``` " + "json" + "\n" + (util.inspect(obj, true, null)) + "\n```";
    var html = '<pre class="json">' + '\n' + (util.inspect(obj, true, null)) + '\n</pre>';
    var result = Utils.switchOutput(ext, md, html);
    return Utils.safeString(result);
  });

  options = options || {};
  for (var helper in helpers) {
    if (helpers.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, helpers[helper]);
    }
  }
};