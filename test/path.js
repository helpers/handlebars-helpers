'use strict';

require('should');
var hbs = require('handlebars');
var helpers = require('..');
helpers.path({handlebars: hbs});

describe('path', function() {
  describe('basename', function() {
    it('should get the basename of a file path', function() {
      hbs.compile('{{basename "a/b/c/package.json"}}')().should.equal('package.json');
      hbs.compile('{{basename "a/b/c/docs/toc.md"}}')().should.equal('toc.md');
    });
    it('should get the basename when a path has no extension', function() {
      var fn = hbs.compile('{{basename "a/b/c/CHANGELOG"}}');
      fn().should.equal('CHANGELOG');
    });
  });

  describe('extname', function() {
    it('should get the extname of a file path', function() {
      hbs.compile('{{extname "a/b/c/package.json"}}')().should.equal('.json');
      hbs.compile('{{extname "a/b/c/docs/toc.md"}}')().should.equal('.md');
    });
    it('should not blow up when a path has no extension', function() {
      var fn = hbs.compile('{{extname "a/b/c/CHANGELOG"}}');
      fn().should.equal('');
    });
  });

  describe('dirname', function() {
    it('should get the dirname of a file path', function() {
      hbs.compile('{{dirname "a/b/c/package.json"}}')().should.equal('a/b/c');
      hbs.compile('{{dirname "a/b/c/docs/toc.md"}}')().should.equal('a/b/c/docs');
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
