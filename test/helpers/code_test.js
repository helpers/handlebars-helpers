/**
 * Handlebars Helpers Tests: Code Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */


// node_modules
require('should');
var Handlebars = require('handlebars');

// Local helpers
require('../../lib/helpers/helpers-code').register(Handlebars, {});

var source, template;

var embeddedMarkdown = [
  '```md',
  '## Some Markdown\n',
  ' - one',
  ' - two',
  ' - three\n',
  '[Click here](http://github.com)\n',
  '```\n'
].join('\n');

var embeddedHTML = [
  '```html',
  '<!DOCTYPE html>',
  '  <html lang="en">',
  '  <head>',
  '    <meta charset="UTF-8">',
  '    <title>{{title}}</title>',
  '  </head>',
  '  <body>',
  '    {{> foo }}',
  '  </body>',
  '</html>\n',
  '```\n'
].join('\n');

describe('embed', function() {
  describe('{{embed "md"}}', function() {
    it('should wrap code with triple ', function() {
      source = '{{embed "test/fixtures/simple.md"}}';
      template = Handlebars.compile(source);
      template().should.equal(embeddedMarkdown);
    });
  });
  describe('{{embed "html"}}', function() {
    it('should wrap code with triple ', function() {
      source = '{{embed "test/fixtures/index.html"}}';
      template = Handlebars.compile(source);
      template().should.equal(embeddedHTML);
    });
  });
});

describe('jsfiddle', function() {
  describe('{{jsfiddle id}}', function() {
    it('should return a jsfiddle embed link, with default tabs assigned', function() {
      source = '{{jsfiddle "UXbas"}}';
      template = Handlebars.compile(source);
      template().should.equal('<iframe width="100%" height="300" src="http://jsfiddle.net/UXbas/embedded/result,js,html,css/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>');
    });
  });
  describe('{{jsfiddle id tabs}}', function() {
    it('should return a jsfiddle embed link, with custom tabs assigned', function() {
      source = '{{jsfiddle "UXbas" "html,css"}}';
      template = Handlebars.compile(source);
      template().should.equal('<iframe width="100%" height="300" src="http://jsfiddle.net/UXbas/embedded/html,css/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>');
    });
  });
});

describe('gist', function() {
  describe('{{gist id}}', function() {
    it('should return a gist script tag', function() {
      source = '{{gist "abcdefg"}}';
      template = Handlebars.compile(source);
      template().should.equal('<script src="https://gist.github.com/abcdefg.js"></script>');
    });
  });
});
