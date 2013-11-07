/**
 * Handlebars Helpers Tests: Markdown Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

// Node.js
var path = require('path');

// node_modules
require('should');
var Handlebars = require('handlebars');
var grunt      = require('grunt');


var fixtures = path.join.bind(process.cwd(), './test/fixtures');
var helpers  = path.join.bind(__dirname, '../../lib/helpers');

// Local helpers
require(helpers('helpers-markdown')).register(Handlebars, {
  marked: {
    gfm: true
  }
});


// Fixtures
var fixtureSimple     = '{{#markdown}}\n## Some Markdown\n\n - one\n - two\n - three\n\n[Click here](http://github.com)\n{{/markdown}}';
var fixtureCodeBlock  = '{{#markdown}}\n## Some Markdown\n\n```js\nvar foo="bar";\n```{{/markdown}}';

// Expected
var expectedSimple    = '<h2 id="some-markdown">Some Markdown</h2>\n<ul>\n<li>one</li>\n<li>two</li>\n<li>three</li>\n</ul>\n<p><a href="http://github.com">Click here</a></p>\n';
var expectedCodeBlock = '<h2 id="some-markdown">Some Markdown</h2>\n<pre><code class="language-js"><span class="keyword">var</span> foo=<span class="string">"bar"</span>;</code></pre>\n';

var template;

describe('Should convert:', function() {

  // Blocks of inline markdown
  describe('an inline block of markdown to HTML', function() {
    it('{{#markdown}}', function(done) {
      template = Handlebars.compile(fixtureSimple);
      template().should.equal(expectedSimple);
      done();
    });
  });

  // Included markdown
  describe('imported markdown files to HTML', function() {
    it('{{md "simple.md"}}', function(done) {
      var fixture  = fixtures('simple.md');
      template = Handlebars.compile('{{md fixture}}');
      template({fixture: fixture}).should.equal(expectedSimple);
      done();
    });
  });

  // With user-defined options
  describe('markdown to HTML, with user-defined', function() {
    it('langPrefix', function(done) {
      require('../../lib/helpers/helpers-markdown').register(Handlebars, {
        marked: {langPrefix: 'language-'}
      });
      template = Handlebars.compile(fixtureCodeBlock);
      template().should.equal(expectedCodeBlock);
      done();
    });
  });
});

