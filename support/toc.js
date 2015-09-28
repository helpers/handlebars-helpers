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
  engine.helper('bullet', toc.bullet);
  engine.helper('unitTest', toc.unitTest);
  engine.helper('code', toc.code);
  engine.helper('heading', toc.heading);
  engine.helper('link', toc.link);
  engine.helper('strong', toc.strong);

  return through.obj(function (file, enc, cb) {
    if (/summary/.test(file.path)) {
      var str = fs.readFileSync('support/utils/toc.tmpl', 'utf8');
      var res = engine.render(str, file.data);
      var file = new File({path: 'toc.md'});
      file.contents = new Buffer(res);
      cb(null, file);
    } else {
      cb();
    }
  });
}
