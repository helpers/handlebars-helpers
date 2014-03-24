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

// Local helpers
var markdown = require('../../src/utils/markdown').Markdown({
  gfm: true,
  highlight: 'auto'
});

var fixtures = path.join.bind(process.cwd(), 'test/fixtures');
var context;

describe('Should convert Markdown to HTML: ', function() {
  var simple         = '## Some Markdown\n\n - one\n - two\n - three\n\n[Click here](http://github.com)';
  var simpleExpected = '<h2 id="some-markdown">Some Markdown</h2>\n<ul>\n<li>one</li>\n<li>two</li>\n<li>three</li>\n</ul>\n<p><a href="http://github.com">Click here</a></p>\n';

  xit('should convert a markdown string', function(done) {
    context = markdown.convert(simple);
    done();
  });
  xit('should read a markdown file', function(done) {
    var file = fixtures('simple.md');
    context = markdown.read(file);
    expect(context).to.equal(simpleExpected);
    done();
  });
  xit('should convert a markdown file with code highlighting', function(done) {
    var file = fixtures('complex.md');
    context = markdown.read(file);
    done();
  });
});


// describe('Converting Markdown files', function() {

//   var opts = {
//     gfm: true,
//     highlight: 'auto'
//   };

//   var simple = "## Some Markdown\n\n" +
//                 " - one\n" +
//                 " - two\n" +
//                 " - three\n\n" +
//                 "[Click here](http://github.com)";


//   var simpleExpected = "<h2 id=\"some-markdown\">Some Markdown</h2>\n" +
//                        "<ul>\n" +
//                        "<li>one</li>\n" +
//                        "<li>two</li>\n" +
//                        "<li>three</li>\n" +
//                        "</ul>\n" +
//                        "<p><a href=\"http://github.com\">Click here</a></p>\n";

//   describe('Using new style', function() {

//     xit("convert markdown string", function(done) {
//       var data = markdown.convert(simple, opts);
//       //expect(data).to.equal(simpleExpected);
//       done();
//     });

//     xit("read markdown file", function(done) {
//       var data = markdown.read('./test/fixtures/pages/simple1.md', opts);
//       expect(data).to.equal(simpleExpected);
//       done();
//     });

//     xit("convert markdown file with code highlighting", function(done) {
//       var data = markdown.read('./test/fixtures/pages/complex1.md', opts);
//       //expect(complexExpected).to.deep.equal(data);
//       done();
//     });
//   });
// });
