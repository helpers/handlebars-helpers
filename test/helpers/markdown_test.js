(function() {
  var Handlebars, authorsExpected, changelogExpected, grunt, path, pkg, readmeTitleExpected, simple, simpleExpected, travisBadgeExpected;

  require("should");

  path = require("path");

  grunt = require("grunt");

  Handlebars = require("handlebars");

  require("../../lib/helpers/helpers-markdown").register(Handlebars, {
    gfm: true
  });

  pkg = grunt.file.readJSON('package.json');

  simple = "{{#markdown}}\n## Some Markdown\n\n - one\n - two\n - three\n\n[Click here](http://github.com)\n{{/markdown}}";

  simpleExpected = "<h2>Some Markdown</h2>\n<ul>\n<li>one</li>\n<li>two</li>\n<li>three</li>\n</ul>\n<p><a href=\"http://github.com\">Click here</a></p>\n";

  describe("markdown", function() {
    describe("should convert a block of markdown to HTML", function() {
      return it("{{#markdown}}", function(done) {
        var template;

        template = Handlebars.compile(simple);
        template().should.equal(simpleExpected);
        return done();
      });
    });
    return describe("md", function() {
      return describe("should convert an imported markdown file to HTML", function() {
        return it("{{md simple1.md}}", function(done) {
          var filename, source, template;

          filename = path.join(__dirname, "../files/simple1.md");
          source = "{{md filename}}";
          template = Handlebars.compile(source);
          template({
            filename: filename
          }).should.equal(simpleExpected);
          return done();
        });
      });
    });
  });

  authorsExpected = "* [Brian Woodward](http://github.com/doowb)  \n* [Jon Schlinkert](http://github.com/jonschlinkert)  ";

  describe("authors", function() {
    describe("{{authors [string]}}", function() {
      return it("should return a list of authors in markdown format, from a user-defined data source", function() {
        var source, template;

        source = "{{authors 'test/files/AUTHORS'}}";
        template = Handlebars.compile(source);
        return template(context).should.equal(authorsExpected);
      });
    });
    return describe("{{authors}}", function() {
      return it("should return a list of authors in markdown format, from the default data source", function() {
        var source, template;

        source = "{{authors}}";
        template = Handlebars.compile(source);
        return template(context).should.equal(authorsExpected);
      });
    });
  });

  changelogExpected = "* 2013-04-07\t\t\tv0.1.21\t\t\tAdd markdown helpers back, add more tests.\n* 2013-04-06\t\t\tv0.1.20\t\t\tGeneralized helpers structure, externalized utilities.\n* 2013-04-05\t\t\tv0.1.11\t\t\tNew authors and gist helpers, general cleanup and new tests.\n* 2013-04-04\t\t\tv0.1.10\t\t\tExternalized utility javascript from helpers.js\n* 2013-03-28\t\t\tv0.1.8\t\t\tGruntfile updated with mocha tests for 71 helpers, bug fixes.\n* 2013-03-18\t\t\tv0.1.7\t\t\tNew path helper \"relative\", for resolving relative path from one absolute path to another.\n* 2013-03-16\t\t\tv0.1.3\t\t\tNew helpers, \"formatPhoneNumber\" and \"eachProperty\"\n* 2013-03-15\t\t\tv0.1.2\t\t\tUpdate README.md with documentation, examples.\n* 2013-03-06\t\t\tv0.1.0\t\t\tFirst commit.\n";

  describe("changelog", function() {
    return describe("{{changelog [string]}}", function() {
      return it("should return a list of authors in markdown format, from a user-defined data source", function() {
        var source, template;

        source = "{{changelog 'test/files/CHANGELOG'}}";
        template = Handlebars.compile(source);
        return template(context).should.equal(changelogExpected);
      });
    });
  });

  readmeTitleExpected = "[helper-lib v" + pkg.version + "](https://github.com/assemble/helper-lib)";

  describe("readme-title", function() {
    return describe("should generate a README title in markdown format, including version from package.json.", function() {
      return it("{{readme-title}}", function(done) {
        var source, template;

        source = "{{readme-title}}";
        template = Handlebars.compile(source);
        template().should.equal(readmeTitleExpected);
        return done();
      });
    });
  });

  travisBadgeExpected = "[![Build Status](https://travis-ci.org/assemble/helper-lib.png)](https://travis-ci.org/assemble/helper-lib)";

  describe("travis-badge", function() {
    return describe("should create a Travis CI link and badge in markdown format.", function() {
      return it("{{travis-badge}}", function(done) {
        var source, template;

        source = "{{travis-badge}}";
        template = Handlebars.compile(source);
        template().should.equal(travisBadgeExpected);
        return done();
      });
    });
  });

  describe("travis", function() {
    return describe("should create a Travis CI link in markdown format.", function() {
      return it("{{travis}}", function(done) {
        var source, template;

        source = "{{travis}}";
        template = Handlebars.compile(source);
        template().should.equal("# [helper-lib v" + pkg.version + "](https://github.com/assemble/helper-lib) [![Build Status](https://travis-ci.org/assemble/helper-lib.png)](https://travis-ci.org/assemble/helper-lib)");
        return done();
      });
    });
  });

  describe("travis with branch", function() {
    return describe("should create a Travis CI link with branch in markdown format.", function() {
      return it("{{travis 'master'}}", function(done) {
        var source, template;

        source = "{{travis 'wip-1.0.0'}}";
        template = Handlebars.compile(source);
        template().should.equal("# [helper-lib v" + pkg.version + "](https://github.com/assemble/helper-lib) [![Build Status](https://travis-ci.org/assemble/helper-lib.png?branch=wip-1.0.0)](https://travis-ci.org/assemble/helper-lib)");
        return done();
      });
    });
  });

}).call(this);
