'use strict';

require('should');
var fs = require('fs');
var hbs = require('handlebars');
var helpers = require('..');
helpers.markdown({handlebars: hbs});

describe('markdown', function() {
  describe('markdown', function() {
    it('should render markdown using the {{#markdown}} block helper', function() {
      var template = hbs.compile('{{#markdown}}## {{../title}}{{/markdown}}');
      template({title: 'Markdown Test'}).should.equal('<h2>Markdown Test</h2>\n');
    });
  });

  describe('md', function() {
    it('should render markdown from a file using the {{md}} inline helper', function() {
      var expected = fs.readFileSync('test/expected/simple.html', 'utf8');
      var template = hbs.compile('{{{md fp}}}');
      var actual = template({fp: 'test/fixtures/simple.md'});
      actual.should.equal(expected);
    });
  });
});
