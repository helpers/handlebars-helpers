
/**
 * Handlebars Library.addHelper('<http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


Library.addHelper('log', function (value) {
  if (!Utils.isUndefined(value)) {
    value = Utils.result(value);
    return console.log(value);
  } else {
    return Utils.err('{{log}} takes one arguments (string|number|boolean|array|object).');
  }
});

Library.addHelper('debug', function (value) {
  if (!Utils.isUndefined(value)) {
    value = Utils.result(value);
  }
  console.log('Context: ', this);
  if (!Utils.isUndefined(value)) {
    console.log('Value: ', value);
  }
  return console.log('-----------------------------------------------');
});
