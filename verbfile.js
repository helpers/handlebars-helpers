'use strict';

var gutil = require('gulp-util');
var istanbul = require('gulp-istanbul');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var verb = require('verb');


verb.task('lint', function () {
  /* deps:jshint-stylish */
  return verb.src(['index.js', 'lib/**/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

verb.task('test', ['lint'], function (cb) {
  /* deps:mocha */
  verb.src(['index.js', 'lib/**/*.js'])
    .pipe(istanbul({includeUntested: true}))
    .pipe(istanbul.hookRequire())
    .on('finish', function () {
      verb.src(['test/*.js'])
        .pipe(mocha())
        .on('error', gutil.log)
        .pipe(istanbul.writeReports())
        .on('end', function () {
          cb();
        });
    });
});


// ignore patterns for excluding TOC headings
// (passed to the built-in `toc` helper in verb)
verb.option('toc.ignore', [
  'Install',
  'Contributing',
  'Author',
  'License'
]);

verb.task('readme', function () {
  return verb.src('.verb.md')
    .pipe(verb.dest('.'));
});

verb.task('default', ['readme', 'lint', 'test']);
