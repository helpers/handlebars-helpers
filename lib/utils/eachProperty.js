'use strict';

module.exports = function eachProperty(context, options) {
  var res = '';

  for (var prop in context) {
    res += options.fn({property: prop, value: context[prop]});
  }

  return res;
};
