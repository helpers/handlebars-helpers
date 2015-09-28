'use strict';

var fs = require('fs');
var Engine = require('engine');
var through = require('through2');
var File = require('vinyl');
var toc = require('./utils/toc');

module.exports = function(options) {
  options = options || {};
  var engine = new Engine(options);

  engine.helper('forOwn', require('for-own'));
  engine.helper('heading', toc.heading);
  engine.helper('bullet', toc.bullet);

  return through.obj(function (file, enc, cb) {
    if (/summary/.test(file.path)) {
      var str = fs.readFileSync('support/utils/toc.tmpl', 'utf8');
      var res = engine.render(str, file.data);
    console.log(res)
      var file = new File({
        path: 'toc.md',
        contents: new Buffer(str)
      });
      // var str = file.contents.toString();
      // toc.push(file.data.toc);
      // toc.push('\n');
    }
    cb(null, file);
  });
}
