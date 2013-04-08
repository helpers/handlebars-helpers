(function() {
  var expect, markdown, path;

  require('should');

  path = require('path');

  expect = require('chai').expect;

  markdown = require('../../lib/utils/markdown').Markdown({
    gfm: true,
    highlight: "auto"
  });

  describe("Converting Markdown Files", function() {
    var simple, simpleExpected;

    simple = "## Some Markdown\n\n - one\n - two\n - three\n\n[Click here](http://github.com)";
    simpleExpected = "<h2>Some Markdown</h2>\n<ul>\n<li>one</li>\n<li>two</li>\n<li>three</li>\n</ul>\n<p><a href=\"http://github.com\">Click here</a></p>\n";
    it("convert markdown string", function(done) {
      var data;

      data = markdown.convert(simple);
      return done();
    });
    it("read markdown file", function(done) {
      var data, filename;

      filename = path.join(__dirname, '../files/simple1.md');
      data = markdown.read(filename);
      expect(data).to.equal(simpleExpected);
      return done();
    });
    return it("convert markdown file with code highlighting", function(done) {
      var data, filename;

      filename = path.join(__dirname, '../files/complex1.md');
      data = markdown.read(filename);
      return done();
    });
  });

}).call(this);
