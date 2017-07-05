'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var eslint = require('gulp-eslint');
var unused = require('gulp-unused');

gulp.task('coverage', ['eslint'], function() {
  return gulp.src(['index.js', 'lib/**/*.js'])
    .pipe(istanbul({includeUntested: true}))
    .pipe(istanbul.hookRequire());
});

gulp.task('mocha', ['coverage'], function() {
  return gulp.src('test/{integration/,}*.js')
    .pipe(mocha({reporter: 'spec'}))
    .pipe(istanbul.writeReports())
    .pipe(istanbul.writeReports({
      reporters: [ 'text', 'text-summary' ],
      reportOpts: {dir: 'coverage', file: 'summary.txt'}
    }));
});

gulp.task('eslint', function() {
  return gulp.src(['*.js', 'lib/**/*.js', 'test/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('unused', function() {
  var utils = require('./lib/utils');
  return gulp.src(['index.js', 'lib/**/*.js'])
    .pipe(unused({keys: Object.keys(utils)}));
});

gulp.task('default', ['mocha']);
