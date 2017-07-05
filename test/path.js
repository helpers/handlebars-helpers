'use strict';

require('mocha');
var os = require('os');
var assert = require('assert');
var path = require('path');
var hbs = require('handlebars').create();
var gm = require('global-modules');
var helpers = require('..');
helpers.path({handlebars: hbs});

describe('assemble', function() {
  describe('absolute', function() {
    it('should create an absolute file path', function() {
      assert.equal(hbs.compile('{{absolute "a/b/c/package.json"}}')(), path.resolve('a/b/c/package.json'));
      assert.equal(hbs.compile('{{absolute "a/b/c/docs/toc.md"}}')(), path.resolve('a/b/c/docs/toc.md'));
    });

    it('should use the cwd on locals', function() {
      assert.equal(hbs.compile('{{absolute "a/b/c/package.json"}}')({cwd: os.homedir()}), path.resolve(os.homedir(), 'a/b/c/package.json'));
      assert.equal(hbs.compile('{{absolute "a/b/c/docs/toc.md"}}')({cwd: gm}), path.resolve(gm, 'a/b/c/docs/toc.md'));
    });
  });

  describe('dirname', function() {
    it('should get the dirname of a file path', function() {
      assert.equal(hbs.compile('{{dirname "a/b/c/package.json"}}')(), 'a/b/c');
      assert.equal(hbs.compile('{{dirname "a/b/c/docs/toc.md"}}')(), 'a/b/c/docs');
    });
  });

  describe('relative', function() {
    it('should return the relative path from file A to file B', function() {
      var fn = hbs.compile('{{relative "dist/docs.html" "index.html"}}');
      assert.equal(fn(), path.join('..', 'index.html'));
    });
    it('should return the relative path from file A to file B', function() {
      var fn = hbs.compile('{{relative "examples/result/md/path.md" "examples/assets"}}');
      assert.equal(fn(), path.join('..', '..', 'assets'));
    });
    it('should use the cwd passed on options', function() {
      var fn = hbs.compile('{{relative "examples/result/md/path.md" "examples/assets"}}');
      assert.equal(fn({cwd: gm}), path.join('..', '..', 'assets'));
    });
  });

  describe('basename', function() {
    it('should get the basename of a file path', function() {
      assert.equal(hbs.compile('{{basename "a/b/c/package.json"}}')(), 'package.json');
      assert.equal(hbs.compile('{{basename "a/b/c/docs/toc.md"}}')(), 'toc.md');
    });
    it('should get the basename when a path has no extension', function() {
      var fn = hbs.compile('{{basename "a/b/c/CHANGELOG"}}');
      assert.equal(fn(), 'CHANGELOG');
    });
  });

  describe('stem', function() {
    it('should get the stem of a file path', function() {
      assert.equal(hbs.compile('{{stem "a/b/c/package.json"}}')(), 'package');
      assert.equal(hbs.compile('{{stem "a/b/c/docs/toc.md"}}')(), 'toc');
    });
    it('should get the stem when a path has no extension', function() {
      var fn = hbs.compile('{{stem "CHANGELOG"}}');
      assert.equal(fn(), 'CHANGELOG');
    });
  });

  describe('extname', function() {
    it('should get the extname of a file path', function() {
      assert.equal(hbs.compile('{{extname "a/b/c/package.json"}}')(), '.json');
      assert.equal(hbs.compile('{{extname "a/b/c/docs/toc.md"}}')(), '.md');
    });
    it('should not blow up when a path has no extension', function() {
      var fn = hbs.compile('{{extname "a/b/c/CHANGELOG"}}');
      assert.equal(fn(), '');
    });
  });

  describe('segments', function() {
    it('should return specified path segments:', function() {
      assert.equal(hbs.compile('{{segments "a/b/c/e.js" 1 3}}')(), 'b/c');
      assert.equal(hbs.compile('{{segments "a/b/c/e.js" 1 2}}')(), 'b');
      assert.equal(hbs.compile('{{segments "a/b/c/e.js" 0 3}}')(), 'a/b/c');
      assert.equal(hbs.compile('{{segments "a/b/c/e.js" 2 3}}')(), 'c');
      assert.equal(hbs.compile('{{segments "a/b/c/e.js" 0 3}}')(), 'a/b/c');
    });
  });
});
