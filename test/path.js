const assert = require('assert');
const hbs = require('handlebars').create();
const helpers = require('..');
helpers.path({ handlebars: hbs });

describe('assemble', function() {

  describe('dirname', function() {
    it('should get the dirname of a file path', function() {
      assert.equal(hbs.compile('{{dirname "a/b/c/package.json"}}')(), 'a/b/c');
      assert.equal(hbs.compile('{{dirname "a/b/c/docs/toc.md"}}')(), 'a/b/c/docs');
    });
    it('should return an empty string for a non-string', function() {
      const fn = hbs.compile('{{dirname value}}');
      assert.equal(fn({ value: {} }), '');
    });
  });

  describe('basename', function() {
    it('should get the basename of a file path', function() {
      assert.equal(hbs.compile('{{basename "a/b/c/package.json"}}')(), 'package.json');
      assert.equal(hbs.compile('{{basename "a/b/c/docs/toc.md"}}')(), 'toc.md');
    });
    it('should get the basename when a path has no extension', function() {
      const fn = hbs.compile('{{basename "a/b/c/CHANGELOG"}}');
      assert.equal(fn(), 'CHANGELOG');
    });
    it('should return an empty string for a non-string', function() {
      const fn = hbs.compile('{{basename value}}');
      assert.equal(fn({ value: {} }), '');
    });
  });

  describe('stem', function() {
    it('should get the stem of a file path', function() {
      assert.equal(hbs.compile('{{stem "a/b/c/package.json"}}')(), 'package');
      assert.equal(hbs.compile('{{stem "a/b/c/docs/toc.md"}}')(), 'toc');
    });
    it('should get the stem when a path has no extension', function() {
      const fn = hbs.compile('{{stem "CHANGELOG"}}');
      assert.equal(fn(), 'CHANGELOG');
    });
    it('should return an empty string for a non-string', function() {
      const fn = hbs.compile('{{stem value}}');
      assert.equal(fn({ value: {} }), '');
    });
  });

  describe('extname', function() {
    it('should get the extname of a file path', function() {
      assert.equal(hbs.compile('{{extname "a/b/c/package.json"}}')(), '.json');
      assert.equal(hbs.compile('{{extname "a/b/c/docs/toc.md"}}')(), '.md');
    });
    it('should not blow up when a path has no extension', function() {
      const fn = hbs.compile('{{extname "a/b/c/CHANGELOG"}}');
      assert.equal(fn(), '');
    });
    it('should return an empty string for a non-string', function() {
      const fn = hbs.compile('{{extname value}}');
      assert.equal(fn({ value: {} }), '');
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
    it('should return an empty string for a non-string', function() {
      const fn = hbs.compile('{{segments value}}');
      assert.equal(fn({ value: {} }), '');
    });
  });
});
