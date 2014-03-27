
/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


Library.addHelper('ul', function (context, options) {
  return ("<ul " + (HTML.parseAttributes(options.hash)) + ">") + context.map(function (item) {
    return "<li>" + (options.fn(Utils.result(item))) + "</li>";
  }).join('\n') + "</ul>";
});

Library.addHelper('ol', function (context, options) {
  return ("<ol " + (HTML.parseAttributes(options.hash)) + ">") + context.map(function (item) {
    return "<li>" + (options.fn(Utils.result(item))) + "</li>";
  }).join('\n') + "</ol>";
});

Library.addHelper('br', function (count, options) {
  var br = '<br>';
  if (!Utils.isUndefined(count)) {
    var i = 0;
    count = Utils.result(count);
    while (i < (parseFloat(count)) - 1) {
      br += '<br>';
      i++;
    }
  }
  return Utils.safeString(br);
});

