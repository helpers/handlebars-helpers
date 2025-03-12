'use strict';

var gulp = require('gulp');
var unused = require('gulp-unused');

gulp.task('unused', function() {
  var utils = require('./lib/utils');
  return gulp.src(['index.js', 'lib/**/*.js'])
    .pipe(unused({keys: Object.keys(utils)}));
});
