/**
 * Handlebars Helpers Tests: Markdown Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

require("should");
var Handlebars = require("handlebars");
require("../../lib/helpers/helpers-markdown").register(Handlebars, {
  marked: {
    gfm: true
  }
});

var path = require("path");
var grunt = require("grunt");
var pkg = grunt.file.readJSON('package.json');


var simple = "{{#markdown}}\n## Some Markdown\n\n - one\n - two\n - three\n\n[Click here](http://github.com)\n{{/markdown}}";
var simpleExpected = "<h2>Some Markdown</h2>\n<ul>\n<li>one</li>\n<li>two</li>\n<li>three</li>\n</ul>\n<p><a href=\"http://github.com\">Click here</a></p>\n";

describe("markdown", function() {
  describe("should convert a block of markdown to HTML", function() {
    it("{{#markdown}}", function(done) {
      var template = Handlebars.compile(simple);
      template().should.equal(simpleExpected);
      return done();
    });
  });
  describe("md", function() {
    describe("should convert an imported markdown file to HTML", function() {
      it("{{md simple1.md}}", function(done) {
        var filename = path.join(__dirname, "../fixtures/simple1.md");
        var source = "{{md filename}}";
        var template = Handlebars.compile(source);
        template({
          filename: filename
        }).should.equal(simpleExpected);
        return done();
      });
    });
  });
});

describe("markdown options", function() {
  it("langPrefix", function(done) {
    require("../../lib/helpers/helpers-markdown").register(Handlebars, {
      marked: {
        gfm: true,
        langPrefix: 'language-'
      }
    });
    var codeExample = "{{#markdown}}\n## Some Markdown\n\n```js\nvar foo='bar';\n```{{/markdown}}";
    var codeExampleExpected = "<h2>Some Markdown</h2>\n<pre><code class=\"language-js\"><span class=\"keyword\">var</span> foo=<span class=\"string\">'bar'</span>;</code></pre>\n";
    var template = Handlebars.compile(codeExample);
    template().should.equal(codeExampleExpected);
    return done();
  });
});
