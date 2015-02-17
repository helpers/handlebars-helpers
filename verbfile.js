'use strict';

var gutil = require('gulp-util');
var coveralls = require('gulp-coveralls');
var istanbul = require('gulp-istanbul');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

var fs = require('fs');
var path = require('path');
var stripAnsi = require('strip-ansi');
var code = require('code-context');
var mdu = require('markdown-utils');
var relative = require('relative');
var verb = require('verb');


verb.helper('list', function (dir) {
  var files = fs.readdirSync(dir);
  var res = files.reduce(function (acc, fp) {
    fp = path.resolve(dir, fp);
    if (!/index\.js/.test(fp) && /\.js/.test(fp)) {
      acc[fp] = require(fp);
    }
    return acc;
  }, {});
  return format(res).replace(/^\s*/, '');
});

verb.option('debugEngine', true);
verb.data({docsDiff: {}, testDiff: {}});

verb.task('readme', function() {
  verb.src('.verb.md')
    .pipe(verb.dest('.'));
});

verb.task('lint', function () {
  verb.src(['index.js', 'lib/**/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

verb.task('test', function (cb) {
  verb.src(['index.js', 'lib/**/*.js'])
    .pipe(istanbul({includeUntested: true}))
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
      verb.src('test/*.js')
        .on('error', gutil.log)
        .pipe(mocha())
        .pipe(istanbul.writeReports())
        .on('end', cb);
    });
});

verb.task('default', ['readme', 'lint', 'test']);



/**
 * TODO: move this out into a plugin
 */

function summary(fp) {
  var str = fs.readFileSync(fp, 'utf8');
  str = stripAnsi(str).replace(/^=.*/gm, '');
  return str;
}


function context(str) {
  return code(str).reduce(function (acc, ele) {
    if (ele && ele.type !== 'comment') {
      acc[ele.name] = ele.begin;
    }
    return acc;
  }, {});
}

function format(obj) {
  var keys = Object.keys(obj);
  var len = keys.length;
  var i = 0;
  var res = '\n';
  var count = len;

  while (len--) {
    var fp = keys[i++];
    var ctx = context(fs.readFileSync(fp, 'utf8'));
    var name = path.basename(fp, path.extname(fp));
    res += '\n+ ' + mdu.strong(mdu.link(name, relative(fp))) + '\n';

    var list = obj[fp];
    var items = Object.keys(list);
    // todo: move this to a new function
    res += items.map(function (method) {
      count++;
      var line = ctx[method];
      var link = method;
      if (line) {
        link = mdu.link(method, relative(fp) + '#L' + line);
      }
      return '  - ' + link;
    }).sort().join('\n');
  }

  return count
    + ' helpers organized into the following categories:'
    + res;
}
