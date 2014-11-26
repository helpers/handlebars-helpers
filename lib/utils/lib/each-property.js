'use strict';
/**
 * [eachProperty description]
 * @param  {[type]} context [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 * @api public
 */
exports.eachProperty = function(context, options) {
  var ret = "";
  for (var prop in context) {
    ret = ret + options.fn({
      property: prop,
      value: context[prop]
    });
  }
  return ret;
};
