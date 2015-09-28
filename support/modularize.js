'use strict';

var path = require('path');
var through = require('through2');
var Vinyl = require('vinyl');

module.exports = function modularize(options) {
  var files = {};

  return through.obj(function (file, enc, cb) {
    var str = file.contents.toString();

    var methods = str.split('};\n\n/**');
    var len = methods.length;

    while (len--) {
      var method = '/**' + methods[len] + '};\n\n';
      var match = /^helpers\.([\w]+)/gm.exec(method);

      if (!match) return cb();
      var res = method.split(match[0]).join('module.exports');
      res = res.split('<%= ').join('');
      res = res.split(' %>').join(';');
      files[match[1]] ={ path: file.path, content: res };
    }

    cb();
  }, function (cb) {
    for (var key in files) {
      if (files.hasOwnProperty(key)) {
        var file = files[key];
        var ext = path.extname(file.path)
        var dir = path.basename(file.path, ext);

        var vinyl = new Vinyl({
          path: path.join(dir, key + '.js')
        });

        var str = '\'use strict\';\n\n' + file.content;
        vinyl.contents = new Buffer(str);
        this.push(vinyl);
      }
    }
    cb();
  });
};
