'use strict';

var fs = require('fs');
var path = require('path');
var File = require('vinyl');
var define = require('define-property');
var esprima = require('esprima');
var through = require('through2');
var toc = require('./utils/toc');
var cache = {};

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
    var match = matchTest('test/' + file.name + '.js');

    file.data.codepath = path.join(options.cwd, file.relative);

    var comments = res.comments.reduce(function (acc, comment) {
      if (comment.type.toLowerCase() === 'block') {
        acc.push({
          start: comment.loc.start.line,
          end: comment.loc.end.line,
          raw: comment.value,
          lines: stripStars(comment.value),
          hasBlockComment: hasBlockComment(comment.value)
        });
      }
      return acc;
    }, []);

    res.body.forEach(function (method) {
      if (method.type === 'ExpressionStatement') {
        var exp = method.expression;

        if (exp.left) {
          if (exp.left.object.name === options.name) {
            // increment the number of methods
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

            var testLine = match(method);

            var obj = {
              name: method,
              path: file.data.codepath,
              test: {
                path: 'test/' + file.name + '.js',
                code: {start: testLine}
              },
              stats: {
                isModule: !params && /require/.test(code),
                isBlockHelper: isBlockHelper(code)
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
              }
            };

            bullets.push(toc.bullet(method, obj));
            if (obj.stats.isBlockHelper && !comment.hasBlockComment) {
              console.log(obj.context.parent, obj.name);
            }

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
      tests: 'test/' + file.name + '.js',
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

function matchTest(fp) {
  var str = '';
  if (fs.existsSync(fp)) {
    str = cache[fp] || (cache[fp] = fs.readFileSync(fp, 'utf8'));
  }
  var lines = str.split('\n');

  return function (method) {
    if (!str) return;

    var re = new RegExp('\\s*(describe|it)\\([\'"](' + method + ')');
    var len = lines.length, i = -1;
    while (++i < len) {
      var line = lines[i];
      if (re.test(line)) {
        return i + 1;
      }
    }
    return;
  };
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
  for (var key in comments) {
    if (comments.hasOwnProperty(key)) {
      var comment = comments[key];
      if (start <= comment.end + 3) {
        return comment;
      }
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

function hasBlockComment(str) {
  return /@block/.test(str);
}
