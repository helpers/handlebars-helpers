'use strict';

var should = require('should');
var Handlebars = require('handlebars');
var helpers = require('..');

Handlebars.registerHelper(helpers('code'));

describe('{{embed}}', function() {
  it('should embed markdown:', function() {
    Handlebars.compile('{{{embed "test/fixtures/simple.md"}}}')().should.equal([
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
    Handlebars.compile('{{{embed "test/fixtures/embedded.md"}}}')().should.equal([
      '```markdown',
      '## Markdown\n',
      'Code example\n',
      '&#x60;&#x60;&#x60;js',
      'var urlresolve = function (base, href) {',
      '  return url.resolve(base, href);',
      '};',
      '&#x60;&#x60;&#x60;\n',
      '[Click here](http://assemble.io) for more documentation.\n',
      '```\n'
    ].join('\n'));
  });

  it('should use the language defined in the last argument', function() {
    var template = Handlebars.compile('{{{embed "test/fixtures/index.html" "hbs"}}}');
    template().should.equal([
      '```handlebars',
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
    ].join('\n'));
  });
});

describe('{{jsfiddle}}', function() {
  it('should return a jsfiddle embed link, with default tabs assigned', function() {
    var source = '{{{jsfiddle id="UXbas"}}}';
    var template = Handlebars.compile(source);
    template().should.equal('<iframe width="100%" height="300" src="http://jsfiddle.net/UXbas/embedded/result,js,html,css/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>');
  });

  it('should return a jsfiddle embed link, with custom tabs assigned', function() {
    var source = '{{{jsfiddle id="UXbas" tabs="html,css"}}}';
    var template = Handlebars.compile(source);
    template().should.equal('<iframe width="100%" height="300" src="http://jsfiddle.net/UXbas/embedded/html,css/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>');
  });
});

describe('{{gist}}', function() {
  it('should create a script tag for a gist', function() {
    var source = '{{{gist "abcdefg"}}}';
    var template = Handlebars.compile(source);
    template().should.equal('<script src="https://gist.github.com/abcdefg.js"></script>');
  });
});
