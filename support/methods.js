'use strict';

var path = require('path');
var File = require('vinyl');
var define = require('define-property');
var esprima = require('esprima');
var through = require('through2');
var toc = require('./utils/toc');

module.exports = function(options) {
  options = options || {};
  options.cwd = options.cwd || '';
  var total = 0;
  var data = {};

  return through.obj(function (file, enc, cb) {
    if (/index/.test(file.path)) {
      return cb();
    }

    var bullets = [];
    var count = 0;

    var str = file.contents.toString();
    var lines = str.split('\n');
    var res = esprima.parse(str, {loc: true, comment: true, tolerant: true});
    file.data = {};
    file.data.methods = {};
    var nocomment = [];

    file.name = name(file.path);
    file.data.codepath = path.join(options.cwd, file.relative);

    var comments = res.comments.reduce(function (acc, comment) {
      if (comment.type.toLowerCase() === 'block') {
        acc.push({
          start: comment.loc.start.line,
          end: comment.loc.end.line,
          raw: comment.value,
          lines: stripStars(comment.value)
        });
      }
      return acc;
    }, []);

    res.body.forEach(function (method) {
      if (method.type === 'ExpressionStatement') {
        var exp = method.expression;

        if (exp.left) {
          if (exp.left.object.name === options.name) {
            // count the method
            total++;
            count++;

            // get the starting/ending line numbers
            var method = exp.left.property.name;
            var start = exp.loc.start.line;
            var end = exp.loc.end.line;

            var code = extract(lines, start, end);
            var comment = closest(start, code, comments);
            var params = groupParams(exp.right.params);
            if (!comment) {
              nocomment.push(method);
              comment = {};
            }

            var obj = {
              name: method,
              path: file.data.codepath,
              stats: {
                isModule: !params && /require/.test(code),
                isBlockHelper: isBlockHelper(code),
              },
              code: {
                start: start,
                end: end,
                raw: code,
                params: params
              },
              comment: comment,
              context: {
                parent: file.name,
                tests: 'test/' + file.name + '.js'
              }
            };

            bullets.push(toc.bullet(method, obj));

            define(obj, 'exp', exp);
            file.data.methods[method] = obj;
          }
        }
      }
    });

    file.data.count = count;
    data[file.name] = {
      name: file.name,
      path: file.data.codepath,
      data: file.data,
      missingdocs: nocomment
    };

    cb(null, file);
  }, function (cb) {
    var file = new File({path: 'summary.md'});
    file.data = {};
    file.data.methods = data;
    file.data.total = total;
    this.push(file);
    cb();
  });
}

function name(fp) {
  return path.basename(fp, path.extname(fp));
}

function extract(lines, start, end) {
  return lines.slice(start - 1, end).join('\n');
}

function groupParams(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map(function (ele) {
    return ele.name;
  });
}

function closest(start, code, comments) {
  var keys = Object.keys(comments);
  var len = keys.length;
  while (len--) {
    var comment = comments[keys[len]];
    if (start <= comment.end + 3) {
      return comment;
    }
  }
  return null;
}

function stripStars(str) {
  var lines = str.split('\n');
  return lines.map(function (line) {
    return line.replace(/^[\s*]*/, '');
  });
}

function isBlockHelper(str) {
  return /(options\.fn|options\.inverse)/.test(str);
}
