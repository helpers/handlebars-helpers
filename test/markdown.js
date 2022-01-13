'use strict';

require('mocha');
const assert = require('assert');
const fs = require('fs');
const hbs = require('handlebars').create();
const markdownHelpers = require('../lib/markdown');

hbs.registerHelper(markdownHelpers);

describe('markdown', function() {
  describe('markdown', function() {
    it('should render markdown using the block helper (very simple)', function() {
      const template = hbs.compile('{{#markdownToHTML}}## {{../title}}{{/markdownToHTML}}');
      assert.equal(template({title: 'Markdown Test'}), '<h2>Markdown Test</h2>\n');
    });

    it('should render markdown using the block helper (simple)', function() {
      const templateMd = fs.readFileSync('test/fixtures/simple.md', 'utf8');
      const expected = fs.readFileSync('test/expected/simple.html', 'utf8');
      const template = hbs.compile(`{{#markdownToHTML}}${templateMd}{{/markdownToHTML}}`);
      assert.equal(template({word: 'Awesome'}), expected);
    });

    it('should render markdown using an inline call', function() {
      const templateMd = `## Some Markdown

 - one
 - two
 - three

[Click here](http://github.com)

### Awesome!
`;
      const expected = fs.readFileSync('test/expected/simple.html', 'utf8');
      const template = hbs.compile('{{markdownToHTML md}}', {noEscape: true});
      assert.equal(template({md: templateMd}), expected);
    });
  });
});
