/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */

// Local utils
var Utils = require('../utils/utils');
var Glob = require('../utils/glob');


module.exports.register = function (Handlebars, options) {

  var helpers = {};

  /**
   * {{glob "**"}} example helper
   *
   * Read in content from files specified using minimatch patterns
   * @param  {String}   src
   * @param  {Function} compare_fn
   * @return {String}
   * @example {{ glob 'path/to/files/*.md' }}
   */
  helpers.glob = function (src, compare_fn) {
    var source = Glob.globFiles(src, compare_fn);
    return new Utils.safeString(source);
  };

  /**
   * {{globRaw "**"}} example helper
   *
   * Read in content from files specified using minimatch patterns, return raw output without using 'safeString' filter (this chokes on JSON content)
   * @param  {String}   src
   * @param  {Function} compare_fn
   * @return {String}
   * @example {{ glob 'path/to/files/*.md' }}
   */
  helpers.globRaw = function (src, compare_fn) {
    var source = Glob.globFiles(src, compare_fn);
    return source;
  };

  /**
   * {{globWithContext "**"}} example helper
   *
   * Read in content from files specified using minimatch patterns
   * @param  {String}   src
   * @param  {Object}   context
   * @param  {Function} compare_fn
   * @return {String}
   * @example {{ glob 'path/to/files/*.md' }}
   */
  helpers.globWithContext = function (src, context, compare_fn) {
    var source = Glob.globFiles(src);
    var template = Handlebars.compile(source);
    var result = template(context);
    return new Utils.safeString(result);
  };

  /**
   * {{globRawWithContext "**"}} example helper
   *
   * Read in content from files specified using minimatch patterns, return raw output without using 'safeString' filter (this chokes on JSON content)
   * @param  {String}   src
   * @param  {Object}   context
   * @param  {Function} compare_fn
   * @return {String}
   * @example {{ glob 'path/to/files/*.md' }}
   */
  helpers.globRawWithContext = function (src, context, compare_fn) {
    var source = Glob.globFiles(src);
    var template = Handlebars.compile(source);
    var result = template(context);
    return result;
  };


  for (var helper in helpers) {
    if (helpers.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, helpers[helper]);
    }
  }
};

