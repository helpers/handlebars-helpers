/**
 * Handlebars Helpers Tests: Markdown Utils
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

// Node.js
var path = require('path');

// node_modules
require('should');
var Handlebars = require('handlebars');
var expect     = require('chai').expect;
var chalk      = require('chalk');

// Local helpers
var markdown = require('../../lib/utils/markdown').Markdown({
  gfm: true,
  highlight: 'auto'
});

var fixtures = path.join.bind(process.cwd(), 'test/fixtures');
var context;

describe(chalk.bold('Convert Markdown to HTML: '), function() {
  var simple         = '## Some Markdown\n\n - one\n - two\n - three\n\n[Click here](http://github.com)';
  var simpleExpected = '<h2>Some Markdown</h2>\n<ul>\n<li>one</li>\n<li>two</li>\n<li>three</li>\n</ul>\n<p><a href="http://github.com">Click here</a></p>\n';

  it('should convert a markdown string', function(done) {
    context = markdown.convert(simple);
    done();
  });
  it('should read a markdown file', function(done) {
    var file = fixtures('simple.md');
    context = markdown.read(file);
    expect(context).to.equal(simpleExpected);
    done();
  });
  it('should convert a markdown file with code highlighting', function(done) {
    var file = fixtures('complex.md');
    context = markdown.read(file);
    done();
  });
});

