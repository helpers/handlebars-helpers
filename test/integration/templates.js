'use strict';

var os = require('os');
var path = require('path');
var assert = require('assert');
var hbs = require('handlebars');
var gm = require('global-modules');
var templates = require('templates');
var helpers = require('../..');
var app, compile;

describe('templates integration tests', function() {
  beforeEach(function() {
    app = templates();
    app.helpers(helpers());
    app.engine('hbs', require('engine-handlebars'));
    app.option('engine', 'hbs');
    app.context = function(val) {
      return val;
    };

    compile = function(content) {
      var view = app.view({path: 'string', content: content});
      return app.compile(view);
    };
  });

  describe('absolute', function() {
    it('should create an absolute file path', function() {
      assert.equal(compile('{{absolute "a/b/c/package.json"}}').fn(), path.resolve('a/b/c/package.json'));
      assert.equal(compile('{{absolute "a/b/c/docs/toc.md"}}').fn(), path.resolve('a/b/c/docs/toc.md'));
    });

    it('should use the cwd on locals', function() {
      assert.equal(hbs.compile('{{absolute "a/b/c/package.json"}}')({cwd: os.homedir()}), path.resolve(os.homedir(), 'a/b/c/package.json'));
      assert.equal(compile('{{absolute "a/b/c/package.json"}}').fn({cwd: os.homedir()}), path.resolve(os.homedir(), 'a/b/c/package.json'));
      assert.equal(compile('{{absolute "a/b/c/docs/toc.md"}}').fn({cwd: os.homedir()}), path.resolve(os.homedir(), 'a/b/c/docs/toc.md'));
    });
  });

  describe('dirname', function() {
    it('should get the dirname of a file path', function() {
      assert.equal(compile('{{dirname "a/b/c/package.json"}}').fn(), 'a/b/c');
      assert.equal(compile('{{dirname "a/b/c/docs/toc.md"}}').fn(), 'a/b/c/docs');
    });
  });

  describe('relative', function() {
    it('should return the relative path from file A to file B', function() {
      var view = compile('{{relative "dist/docs.html" "index.html"}}');
      assert.equal(view.fn(), '../index.html');
    });
    it('should return the relative path from file A to file B', function() {
      var view = compile('{{relative "examples/result/md/path.md" "examples/assets"}}');
      assert.equal(view.fn(), '../../assets');
    });
    it('should use the cwd passed on options', function() {
      var view = compile('{{relative "examples/result/md/path.md" "examples/assets"}}');
      assert.equal(view.fn({cwd: gm}), '../../assets');
    });
  });

  describe('basename', function() {
    it('should get the basename of a file path', function() {
      assert.equal(compile('{{basename "a/b/c/package.json"}}').fn(), 'package.json');
      assert.equal(compile('{{basename "a/b/c/docs/toc.md"}}').fn(), 'toc.md');
    });
    it('should get the basename when a path has no extension', function() {
      var view = compile('{{basename "a/b/c/CHANGELOG"}}');
      assert.equal(view.fn(), 'CHANGELOG');
    });
  });

  describe('stem', function() {
    it('should get the stem of a file path', function() {
      assert.equal(compile('{{stem "a/b/c/package.json"}}').fn(), 'package');
      assert.equal(compile('{{stem "a/b/c/docs/toc.md"}}').fn(), 'toc');
    });
    it('should get the stem when a path has no extension', function() {
      var view = compile('{{stem "CHANGELOG"}}');
      assert.equal(view.fn(), 'CHANGELOG');
    });
  });

  describe('extname', function() {
    it('should get the extname of a file path', function() {
      assert.equal(compile('{{extname "a/b/c/package.json"}}').fn(), '.json');
      assert.equal(compile('{{extname "a/b/c/docs/toc.md"}}').fn(), '.md');
    });
    it('should not blow up when a path has no extension', function() {
      var view = compile('{{extname "a/b/c/CHANGELOG"}}');
      assert.equal(view.fn(), '');
    });
  });

  describe('segments', function() {
    it('should return specified path segments:', function() {
      assert.equal(compile('{{segments "a/b/c/e.js" 1 3}}').fn(), 'b/c');
      assert.equal(compile('{{segments "a/b/c/e.js" 1 2}}').fn(), 'b');
      assert.equal(compile('{{segments "a/b/c/e.js" 0 3}}').fn(), 'a/b/c');
      assert.equal(compile('{{segments "a/b/c/e.js" 2 3}}').fn(), 'c');
      assert.equal(compile('{{segments "a/b/c/e.js" 0 3}}').fn(), 'a/b/c');
    });
  });
});
