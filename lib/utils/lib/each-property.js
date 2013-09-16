/**
 * [eachProperty description]
 * @param  {[type]} context [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
var eachProperty = function(context, options) {
  var ret = "";
  for (var prop in context) {
    ret = ret + options.fn({
      property: prop,
      value: context[prop]
    });
  }
  return ret;
};

module.exports = exports = eachProperty;