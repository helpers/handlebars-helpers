'use strict';

var forIn = require('for-in');
var esprima = require('esprima');
var through = require('through2');

module.exports = function(options) {
  var helpers = {};

  return through.obj(function (file, enc, cb) {
    var str = file.contents.toString();
    var res = esprima.parse(str);
    file.helpers = [];
    helpers[file.path] = [];

    res.body.forEach(function (method) {
      forIn(method, function (val, key) {

        // if (val === 'ExpressionStatement') {
        //   var exp = method.expression;
        //   if (exp.left) {
        //     if (exp.left.object.name === 'helpers') {
        //       var name = exp.left.property.name;
        //       file.helpers.push(name);
        //       helpers[file.path].push(name);
        //     }
        //   }
        // }
      });
    });

    cb(null, file);
  });
}
