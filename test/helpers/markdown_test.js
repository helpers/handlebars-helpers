(function() {
  var Handlebars, path, simple, simpleExpected;

  require('should');

  path = require('path');

  Handlebars = require('handlebars');

  require('../../lib/helpers/helpers-markdown').register(Handlebars, {
    gfm: true
  });

  simple = "{{#markdown}}\n## Some Markdown\n\n - one\n - two\n - three\n\n[Click here](http://github.com)\n{{/markdown}}";

  simpleExpected = "<h2>Some Markdown</h2>\n<ul>\n<li>one</li>\n<li>two</li>\n<li>three</li>\n</ul>\n<p><a href=\"http://github.com\">Click here</a></p>\n";

  describe("Converting Markdown Files in Handlebars", function() {
    it("{{#markdown}}", function(done) {
      var template;

      template = Handlebars.compile(simple);
      template().should.equal(simpleExpected);
      return done();
    });
    return it("{{#md simple1.md}}", function(done) {
      var filename, source, template;

      filename = path.join(__dirname, '../files/simple1.md');
      source = "{{{md filename}}}";
      template = Handlebars.compile(source);
      template({
        filename: filename
      }).should.equal(simpleExpected);
      return done();
    });
  });

}).call(this);
