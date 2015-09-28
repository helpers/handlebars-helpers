'use strict';

var link = require('markdown-link');

exports.bullet = function(name, item) {
  return '- **' + link(name, '#' + name) + '**';
};

exports.code = function(name, item) {
  return anchor('code', item.path, item.code.start);
};

exports.unitTest = function(name, item) {
  var line = item.test.code.start;
  if (!line) return '[no tests]';
  return anchor('tests', item.test.path, line);
};

exports.link = function(name, path) {
  return link(name, path);
};

exports.strong = function(name, path) {
  return '**' + link(name, path) + '**';
};

function anchor(title, path, start) {
  return link(title, path + '#L' + start);
}

