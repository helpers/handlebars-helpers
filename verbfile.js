'use strict';

var fs = require('fs');
var path = require('path');
var gutil = require('gulp-util');
var stripAnsi = require('strip-ansi');
var coveralls = require('gulp-coveralls');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var relative = require('relative');
var code = require('code-context');
var mdu = require('markdown-utils');
var verb = require('verb');

verb.data({docsDiff: {}, testDiff: {}});

verb.task('default', function() {
  verb.src('.verb.md')
    .pipe(verb.dest('.'));
});

verb.task('test', function (cb) {
  verb.src('lib/**/*.js')
    .pipe(istanbul({includeUntested: true}))
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
      verb.src(['test/*.js'])
        .pipe(mocha())
        .on('error', gutil.log)
        .pipe(istanbul.writeReports({
          reportOpts: {dir: 'coverage', file: 'summary.txt'}
        }))
        .on('end', cb)
        .on('end', function () {
          summary('coverage/summary.txt');
        })
    });
});

verb.helper('list', function (pattern) {
  var files = fs.readdirSync('lib/helpers');
  var res = files.reduce(function (acc, fp) {
    fp = path.resolve('lib/helpers', fp);
    if (!/index\.js/.test(fp) && /\.js/.test(fp)) {
      acc[fp] = require(fp);
    }
    return acc;
  }, {});
  return format(res).replace(/^\s*/, '');
});

/**
 *
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
    res += '\n+ **' + mdu.link(name, './' + relative(fp)) + '**\n';

    var list = obj[fp];
    var items = Object.keys(list);
    // todo: move this to a new function
    res += items.map(function (method) {
      count++;
      var line = ctx[method];
      var link = method;
      if (line) {
        link = mdu.link(method, './' + relative(fp) + '#L' + line);
      }
      return '  - ' + link;
    }).sort().join('\n');
  }

  return count
    + ' helpers organized into'
    + ' the following categories:'
    + res;
}
