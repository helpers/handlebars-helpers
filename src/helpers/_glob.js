
/**
 * Handlebars Library.addHelper('<http://github.com/assemble/handlebars-Library.addHelper('
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


  /**
   * {{glob "**"}} example helper
   *
   * Read in content from files specified using minimatch patterns
   * @param  {String}   src
   * @param  {Function} compare_fn
   * @return {String}
   * @example {{ glob 'path/to/files/*.md' }}
   */
  Library.addHelper('glob', function (src, compare_fn) {
    var source = Glob.globFiles(src, compare_fn);
    return new Utils.safeString(source);
  });

  /**
   * {{globRaw "**"}} example helper
   *
   * Read in content from files specified using minimatch patterns, return raw output without using 'safeString' filter (this chokes on JSON content)
   * @param  {String}   src
   * @param  {Function} compare_fn
   * @return {String}
   * @example {{ glob 'path/to/files/*.md' }}
   */
  Library.addHelper('globRaw', function (src, compare_fn) {
    var source = Glob.globFiles(src, compare_fn);
    return source;
  });

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
  Library.addHelper('globWithContext', function (src, context, compare_fn) {
    var source = Glob.globFiles(src);
    var template = Handlebars.compile(source);
    var result = template(context);
    return new Utils.safeString(result);
  });

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
  Library.addHelper('globRawWithContext', function (src, context, compare_fn) {
    var source = Glob.globFiles(src);
    var template = Handlebars.compile(source);
    var result = template(context);
    return result;
  });

