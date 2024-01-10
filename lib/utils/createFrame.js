'use strict';

module.exports = function createFrame(data) {
  if (typeof(data) !== 'object') {
    throw new TypeError('createFrame expects data to be an object');
  }

  var frame = Object.assign({}, data);
  frame._parent = data;

  frame.extend = function(data) {
    Object.assign(this, data);
  };

  if (arguments.length > 1) {
    var args = [].slice.call(arguments, 1);
    var len = args.length, i = -1;
    while (++i < len) {
      frame.extend(args[i] || {});
    }
  }
  return frame;
};
