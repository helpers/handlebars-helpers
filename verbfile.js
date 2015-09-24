'use strict';

var verb = require('verb');

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

verb.task('default', ['readme']);
