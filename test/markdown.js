'use strict';

require('mocha');
const assert = require('assert');
const fs = require('fs');
const hbs = require('handlebars').create();
const markdownHelpers = require('../lib/markdown');

hbs.registerHelper(markdownHelpers);

describe('markdown', function() {
  describe('markdown', function() {
    it('should render markdown using the {{#markdown}} block helper', function() {
      const template = hbs.compile('{{#markdown}}## {{../title}}{{/markdown}}');
      assert.equal(template({title: 'Markdown Test'}), '<h2>Markdown Test</h2>\n');
    });
  });

  describe('md', function() {
    it('should render markdown from a file using the {{md}} inline helper', function() {
      const expected = fs.readFileSync('test/expected/simple.html', 'utf8');
      const template = hbs.compile('{{{md fp}}}');
      const actual = template({fp: 'test/fixtures/simple.md'});
      assert.equal(actual, expected);
    });
  });
});
