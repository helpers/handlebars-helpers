
/**
 * Handlebars Library.addHelper('<http://github.com/assemble/handlebars-Library.addHelper('
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


  /**
   * {{value}} extract a value from the specified property
   *
   * @param  {String} filepath [description]
   * @param  {String} prop     [description]
   * @return {String}          [description]
   */

  Library.addHelper('value', function (filepath, prop) {
    var str = file.readJSONSync(filepath);
    var val = _.pick(str, prop);
    var result = _.pluck(val);
    return new Handlebars.SafeString(result);
  });

  /**
   * {{prop}} extract a specific property
   * @param  {[type]} filepath [description]
   * @param  {[type]} prop     [description]
   * @return {[type]}          [description]
   */

  Library.addHelper('prop', function (filepath, prop) {
    var str = file.readJSONSync(filepath);
    var result = JSON.stringify(_.pick(str, prop));
    return new Handlebars.SafeString(result);
  });

  /**
   * {{parseJSON}}
   * Contributed by github.com/keeganstreet
   */

  Library.addHelper('parseJSON', function (data, options) {
    return options.fn(JSON.parse(data));
  });

  /**
   * {{opt}} get a property from assemble.options
   *
   * @param {String} key The name of the property
   * @return Returns value from `assemble.options`
   */

  Library.addHelper('opt', function(key) {
    return options[key] || '';
  });

