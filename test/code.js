'use strict';

require('should');
var hbs = require('handlebars');
var helpers = require('..');
helpers.code({handlebars: hbs});

describe('code', function() {
  describe('embed', function() {
    it('should embed markdown:', function() {
      hbs.compile('{{{embed "test/fixtures/simple.md"}}}')().should.equal([
        '```markdown',
        '## Some Markdown\n',
        ' - one',
        ' - two',
        ' - three\n',
        '[Click here](http://github.com)\n',
        '```\n'
      ].join('\n'));
    });

    it('should determine the language from the file extension', function() {
      hbs.compile('{{{embed "test/fixtures/embedded.md"}}}')().should.equal([
        '```markdown',
        '## Markdown',
        '',
        'Code example',
        '',
        '&#x60&#x60&#x60js',
        'var urlresolve = function (base, href) {',
        '  return url.resolve(base, href);',
        '};',
        '&#x60&#x60&#x60',
        '',
        '[Click here](http://assemble.io) for more documentation.',
        '',
        '```\n',
      ].join('\n'));
    });

    it('should use the language defined in the last argument', function() {
      var template = hbs.compile('{{{embed "test/fixtures/index.html" "hbs"}}}');
      template().should.equal([
        '```hbs',
        '<!DOCTYPE html>',
        '  <html lang="en">',
        '  <head>',
        '    <meta charset="UTF-8">',
        '    <title>{{title}}</title>',
        '  </head>',
        '  <body>',
        '    {{> foo }}',
        '  </body>',
        '</html>',
        '',
        '```\n',
      ].join('\n'));
    });
  });

  describe('gist', function() {
    it('should return a gist script tag', function() {
      var fn = hbs.compile('{{{gist "abcdefg"}}}');
      fn().should.equal('<script src="https://gist.github.com/abcdefg.js"></script>');
    });
  });

  describe('jsfiddle', function() {
    it('should return a jsfiddle embed link, with default tabs assigned', function() {
      var source = '{{{jsfiddle id="UXbas"}}}';
      var fn = hbs.compile(source);
      fn().should.equal('<iframe width="100%" height="300" src="http://jsfiddle.net/UXbas/embedded/result,js,html,css/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>');
    });

    it('should throw an error if id is missing', function () {
      (function () {
        hbs.compile('{{jsfiddle}}')()
      }).should.throw('jsfiddle helper expects an `id`');
    });

    it('should return a jsfiddle embed link, with custom tabs assigned', function() {
      var source = '{{{jsfiddle id="UXbas" tabs="html,css"}}}';
      var fn = hbs.compile(source);
      fn().should.equal('<iframe width="100%" height="300" src="http://jsfiddle.net/UXbas/embedded/html,css/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>');
    });
  });
});
