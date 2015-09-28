'use strict';

var through = require('through2');

module.exports = function organize(options) {
  return through.obj(function (file, enc, cb) {
    console.log(file.path);
    cb(null, file);
  });
}
