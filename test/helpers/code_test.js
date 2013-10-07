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
