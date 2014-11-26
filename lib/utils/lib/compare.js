'use strict';
/**
 * Accepts two objects (a,b) and returning 1 if a >= b otherwise -1.
 * @param  {[type]} val [description]
 * @return {[type]}     [description]
 * @api public
 */
function compareFn(val) {
  val = val || function (a, b) {
    if (a.index >= b.index) {
      return 1;
    } else {
      return -1;
    }
  };
}

module.exports = exports = compareFn;
