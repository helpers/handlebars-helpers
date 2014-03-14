/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */



/**
 * Compare function. Accepts two objects (a,b) and returning 1 if a >= b otherwise -1.
 *
 * @param  {[type]} val [description]
 * @return {[type]}     [description]
 */
module.exports = function(val) {
  val = val || function (a, b) {
    if (a.index >= b.index) {
      return 1;
    } else {
      return -1;
    }
  };
};
