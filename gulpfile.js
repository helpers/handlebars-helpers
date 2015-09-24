'use strict';

var through = require('through2');
var stylish = require('jshint-stylish');
var istanbul = require('gulp-istanbul');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var gulp = require('gulp');

var lint = ['index.js', 'lib/**/*.js'];

gulp.task('lint', function () {
  return gulp.src(lint)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('coverage', function () {
  return gulp.src(lint)
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['coverage'], function () {
  return gulp.src('test/*.js')
    .pipe(mocha({reporter: 'spec'}))
    .pipe(istanbul.writeReports({
      reporters: [ 'text' ],
      reportOpts: {dir: 'coverage', file: 'summary.txt'}
    }))
});

gulp.task('organize', function () {
  return gulp.src('lib/*.js')
    .pipe(organize())
    .pipe(gulp.dest('lib/'));
});

function organize(options) {
  return through.obj(function (file, enc, cb) {

    cb(null, file);
  });
}


gulp.task('default', ['lint', 'test']);
