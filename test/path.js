'use strict';

require('should');
var hbs = require('handlebars');
var helpers = require('..');
helpers.path({handlebars: hbs});

describe('path', function() {
  describe('extname', function() {
    it('should return the extname of a given file path', function() {
      var fn = hbs.compile('{{extname "package.json"}}');
      fn().should.equal('.json');
    });
    it('should return the extname of a given file path', function() {
      var fn = hbs.compile('{{extname "docs/toc.md"}}');
      fn().should.equal('.md');
    });
    it('should return the extname of a given file path', function() {
      var fn = hbs.compile('{{extname "CHANGELOG"}}');
      fn().should.equal('');
    });
  });

  describe('relative', function() {
    it('should return the relative path from file A to file B', function() {
      var fn = hbs.compile('{{relative "dist/docs.html" "index.html"}}');
      fn().should.equal('../index.html');
    });
    it('should return the relative path from file A to file B', function() {
      var fn = hbs.compile('{{relative "examples/result/md/path.md" "examples/assets"}}');
      fn().should.equal('../../assets');
    });
  });
});
