'use strict';

const define = require('define-property');
const extend = require('extend-shallow');

module.exports = function createFrame(data) {
  if (typeof(data) !== 'object') {
    throw new TypeError('createFrame expects data to be an object');
  }

  var frame = extend({}, data);
  frame._parent = data;

  define(frame, 'extend', function(data) {
    extend(this, data);
  });

  if (arguments.length > 1) {
    var args = [].slice.call(arguments, 1);
    var len = args.length, i = -1;
    while (++i < len) {
      frame.extend(args[i] || {});
    }
  }
  return frame;
};
