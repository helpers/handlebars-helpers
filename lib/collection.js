'use strict';

/**
 * Expose `helpers`
 */

module.exports = function (options) {
  var handlebars = options.handlebars;
  var helpers = {};

  /**
   * Similar to {{#each}} helper, but treats array-like objects
   * as arrays (e.g. objects with a `.length` property that
   * is a number) rather than objects. This lets us iterate
   * over our collections items.
   *
   * @name .iterate
   * @param {Object|Array} `context` The collection to iterate over
   * @param {Object} `options`
   * @return {String}
   * @api public
   */

  helpers.iterate = function(context, options) {
    var inverse = options.inverse;
    var fn = options.fn;
    var res = '';
    var i = 0;
    var data = void 0;

    if (typeof options.data === 'object') {
      data = handlebars.createFrame(options.data);
    }

    if (context && typeof context === 'object') {
      if (typeof context.length === 'number') {
        var j = context.length;
        while (i < j) {
          if (data) {
            data.index = i;
          }
          res = res + fn(context[i], {data: data});
          i++;
        }
      } else {
        for (var key in context) {
          if (context.hasOwnProperty(key)) {
            if (data) {
              data.key = key;
            }
            res = res + fn(context[key], {
              data: data
            });
            i++;
          }
        }
      }
    }

    if (i === 0) {
      res = inverse(this);
    }
    return res;
  };

  return helpers;
};
