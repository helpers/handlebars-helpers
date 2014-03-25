
/**
 * Handlebars Library.addHelper('<http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


  Library.addHelper('log', function (value) {
    return console.log(value);
  });

  Library.addHelper('inspect', function(context, options) {
    var hash = options.hash || {};
    var ext = hash.ext || '.html';
    context = JSON.stringify(sort(context), null, 2);

    // Wrap the returned JSON in either markdown code fences
    // or HTML, depending on the extension.
    var md = '\n```json\n' + context + '\n```';
    var html = '<pre><code class="json">\n' + context + '\n</code></pre>';
    var result = Utils.switchOutput(ext, md, html);
    return new Utils.safeString(result);
  });

  Library.addHelper('debug', function (value) {
    console.log('=================================');
    console.log('Context: ', this);
    if (!Utils.isUndefined(value)) {
      console.log('Value: ', value);
    }
    return console.log('=================================');
  });

