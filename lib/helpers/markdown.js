'use strict';

var hljs  = require('highlight.js');
var Remarkable = require('remarkable');

exports.md = function (str, options) {
  var md = new Remarkable(options);
  return md.render(str, options);
};

exports.markdown = function (options) {
  var md = new Remarkable(options);
  return md.render(options.fn(), options);
};
