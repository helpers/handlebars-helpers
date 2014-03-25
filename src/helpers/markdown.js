
/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */

  options.marked = options.marked || {};

  // Initialize `marked-extras`
  extras.init(options.marked);

  // Extend defaults from `marked-extras` with Gruntfile options
  var markedOpts = _.extend({}, extras.markedDefaults, options.marked);

  // Set marked.js options
  marked.setOptions(markedOpts);

  Library.addHelper('md', function (patterns, context, opts) {
    opts = _.extend({}, options, opts || {});

    _.extend(opts, opts.hash || {});

    var filepath = this;
    var str = file.readFileSync(filepath);
    var page = matter(str);
    var content = page.content;
    var metadata = page.context;

    var data = Handlebars.createFrame({filepath: filepath});

    // Prepend or append any content in the given partial to the output
    _.extend({}, markedOpts, context.data.root.markedOpts || {});

    var append = '';
    var prepend = '';

    if(markedOpts.prepend) {
      prepend = Handlebars.partials[markedOpts.prepend];
    }
    if(markedOpts.append) {
      append = Handlebars.partials[markedOpts.append];
    }

    _.defaults(metadata, context.data.root);
    var sections = [prepend, content, append].join('\n\n');

    var fn = Handlebars.compile(sections);
    var output = fn(metadata, {data: data});

    return new Handlebars.SafeString(marked(output));
  });

  Library.addHelper('markdown', function (options) {
    return marked(options.fn(this));
  });
