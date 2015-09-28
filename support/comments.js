'use strict';

var through = require('through2');
var parse = require('parse-comments');
var context = require('code-context');
var extract = require('extract-comments');
var engine = require('engine')();
var forOwn = require('for-own');

var base = [
  '/**',
  ' * @name .<%= name %>',
  '<% params.forEach(function(param) { %>' +
  ' * @param {type} `<%= param %>`',
  '<% }) %>' +
  ' * @return {<%= ret || "" %>}',
  ' * @api public',
  ' */',
  ''
].join('\n');

module.exports = function organize(options) {
  return through.obj(function (file, enc, cb) {
    var str = file.contents.toString();
    str = addComment(str, file.path);

    var lines = str.split('\n');
    var comments = parse(str);
    file.comments = [];

    forOwn(comments, function (obj, key) {
      var block = lines.slice(obj.comment.begin - 1, obj.comment.end);

      var orig = block.join('\n');
      var param = paramLine(block, 'param');

      // fix spacing
      if (param && hasText(block[param - 1])) {
        block.splice(param, 0, ' *');
      }

      // add @name
      var idx = paramLine(block, 'name');
      if (!idx && param) {
        var method = obj.context.name;
        block.splice(param, 0, ' * @name .' + method);
      }


      idx = paramLine(block, 'api');
      var ret = paramLine(block, 'return');
      if (!ret) {
        if (idx) {
          ret = idx;
          block.splice(ret, 0, ' * @return');
        } else {
          ret = block.length - 1;
          block.splice(ret, 0, ' * @return');
        }
      }

      if (!idx && ret) {
        block.splice(ret + 1, 0, ' * @api public');
      }

      var res = lines.slice(0, obj.comment.begin - 1);
      res = res.concat(block);
      res = res.concat(lines.slice(obj.comment.end));
      var parts = str.split(orig);
      if (parts && parts.length) {
        var updated = parts.join(res.join('\n'));
        if (updated) {

        // console.log(updated)
        }
        // str = parts.join(res.join('\n'));
      }

      file.comments.push(obj);
    });

    str = str.split(/^\s*exports\./gm).join('\nhelpers.');

    file.contents = new Buffer(str);
    cb(null, file);
  });
}

function paramLine(lines, param) {
  var re = new RegExp('@' + param);
  var len = lines.length, i = -1;
  while (++i < len) {
    if (re.test(lines[i])) {
      return i;
    }
  }
  return null;
}

function addComment(str, fp) {
  var lines = str.split('\n');
  var len = lines.length, i = -1;
  while (++i < len) {
    var line = lines[i];
    if (/^\s*exports\./.test(line)) {
      if (!hasComment(lines, i)) {
        var ctx = context(line)[0];
        if (/comp/.test(fp)) {
          ctx.ret = 'Boolean';
        } else if (/math|number/.test(fp)) {
          ctx.ret = 'Number';
        } else if (/object/.test(fp)) {
          ctx.ret = 'Object';
        } else if (/array/.test(fp)) {
          ctx.ret = 'Array';
        } else if (/date/.test(fp)) {
          ctx.ret = 'Date';
        } else {
          ctx.ret = 'String';
        }
        var res = engine.render(base, ctx);
        lines = lines.slice(0, i).concat(res.split('\n')).concat(lines.slice(i));
      }
    }
  }
  return lines.join('\n');
}

function hasText(line) {
  return / \* \w+/.test(line);
}

function hasComment(lines, i) {
  return / \*\//.test(lines[i - 1])
    || / \*\//.test(lines[i - 2])
    || / \*\//.test(lines[i - 3]);
}
