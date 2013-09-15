/**
 * Handlebars Helpers Tests: Markdown Utils
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

require('should');
var path = require('path');
expect = require('chai').expect;

var markdown = require('../../lib/utils/markdown').Markdown({
  gfm: true,
  highlight: "auto"
});

describe("Converting Markdown Files", function() {
  var simple = "## Some Markdown\n\n - one\n - two\n - three\n\n[Click here](http://github.com)";
  var simpleExpected = "<h2>Some Markdown</h2>\n<ul>\n<li>one</li>\n<li>two</li>\n<li>three</li>\n</ul>\n<p><a href=\"http://github.com\">Click here</a></p>\n";

  it("should convert a markdown string", function(done) {
    var data;
    data = markdown.convert(simple);
    done();
  });
  it("should read a markdown file", function(done) {
    var filename = path.join(__dirname, '../fixtures/simple1.md');
    var data = markdown.read(filename);
    expect(data).to.equal(simpleExpected);
    done();
  });
  it("should convert a markdown file with code highlighting", function(done) {
    var filename = path.join(__dirname, '../fixtures/complex1.md');
    var data = markdown.read(filename);
    done();
  });
});

