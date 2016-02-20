'use strict';

var plugin = require('./support/');

module.exports = function(verb, base) {
  verb.extendWith('verb-generate-readme');

  // verb.task('categories', function(cb) {
  //   verb.include('categories', require('./support/categories'));

  //   // console.log(verb.views.includes.categories.content)
  //   cb();
  // });

  verb.task('namify', function () {
    return verb.src('lib/*.js')
      .pipe(plugin.namify())
      .pipe(verb.dest('lib/'));
  });

  verb.task('modularize', function () {
    return verb.src('lib/*.js')
      .pipe(plugin.modularize())
      .pipe(verb.dest('lib/tmp'));
  });

  verb.task('comments', function () {
    return verb.src('lib/*.js')
      .pipe(plugin.comments())
      .pipe(verb.dest('actual'));
  });

  verb.task('toc', function () {
    return verb.src('lib/*.js')
      .pipe(plugin.methods({name: 'helpers', cwd: 'lib'}))
      .pipe(plugin.toc())
      .pipe(verb.dest('.'));
  });

  verb.task('default', ['toc']);
}
