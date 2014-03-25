
/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */

  Library.addHelper('default', function (value, defaultValue) {
    return value != null ? value : defaultValue;
  });

  /**
   * http://handlebarsjs.com/block_helpers.html
   * @param  {[type]} options [description]
   * @return {[type]}         [description]
   */
  Library.addHelper('noop', function (options) {
    return options.fn(this);
  });

  /**
   * {{#withHash}}
   * Build context from the attributes hash
   * @author Vladimir Kuznetsov <https://github.com/mistakster>
   */
  Library.addHelper('withHash', function (options) {
    return options.fn(options.hash || {});
  });


