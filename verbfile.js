'use strict';

var verb = require('verb');

verb.task('docs', function () {
  verb.src('.verb.md')
    .pipe(verb.src('.'));
});

verb.task('default', ['docs']);
