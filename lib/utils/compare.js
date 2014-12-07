'use strict';

/**
 * Returns a comparison function to be used in `.sort()`ing.
 *
 * @param  {Array} `val`
 * @return {Array} Sorted array
 * @api public
 */

module.exports = function compareFn(val) {
  val = val || function (a, b) {
    if (a.index >= b.index) {
      return 1;
    } else {
      return -1;
    }
  };
};
