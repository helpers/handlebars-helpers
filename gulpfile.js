'use strict';

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');
const eslint = require('gulp-eslint');
const unused = require('gulp-unused');

gulp.task('unused', function() {
  const utils = require('./lib/utils');
  return gulp.src(['index.js', 'lib/**/*.js'])
    .pipe(unused({keys: Object.keys(utils)}));
});

gulp.task('eslint', function() {
  return gulp.src(['*.js', 'lib/**/*.js', 'test/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('coverage', gulp.parallel('eslint'), function() {
  return gulp.src(['index.js', 'lib/**/*.js'])
    .pipe(istanbul({includeUntested: true}))
    .pipe(istanbul.hookRequire());
});

gulp.task('mocha', gulp.parallel('coverage'), function() {
  return gulp.src('test/{integration/,}*.js')
    .pipe(mocha({reporter: 'spec'}))
    .pipe(istanbul.writeReports())
    .pipe(istanbul.writeReports({
      reporters: [ 'text', 'text-summary' ],
      reportOpts: {dir: 'coverage', file: 'summary.txt'}
    }));
});

gulp.task('default', gulp.parallel('mocha'));
