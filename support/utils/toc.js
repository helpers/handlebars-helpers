'use strict';

var link = require('markdown-link');

exports.bullet = function(name, item) {
  return '- ' + link(name, '#' + name) + ' (' + anchor(item.path, item) + ')';
  // return '- ' + link(name, '#' + name) + ' (' + codelink(name, item.path) + ')';
};

exports.heading = function(name, path) {
  return '**' + link(name, path) + '**';
};

function codelink(name, path) {
  return link('code', path + '#' + name);
}

function codepath(name, path) {
  return link('code', path + '#' + name);
}

function anchor(path, item) {
  return link('code', path + '#L' + item.code.start);
}

