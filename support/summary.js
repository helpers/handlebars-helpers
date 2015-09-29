'use strict';

var fs = require('fs');
var stripAnsi = require('strip-ansi');

module.exports = function summary(fp) {
  var str = fs.readFileSync(fp, 'utf8');
  str = stripAnsi(str).replace(/^=.*/gm, '');
  return str;
};
