'use strict';

var os = require('os');
var path = require('path');
var assert = require('assert');
var gm = require('global-modules');
var engine = require('engine-handlebars');
var templates = require('templates');
var helpers = require('../..');
var compile;
var render;
var app;

describe('templates integration tests', function() {
  beforeEach(function() {
    app = templates();
    app.helpers(helpers());
    app.engine('hbs', engine);
    app.option('engine', 'hbs');
    app.context = function(val) {
      return val;
    };

    compile = function(content) {
      return app.compile(app.view({path: 'string', content: content}));
    };

    render = function(content, context) {
      return compile(content).fn(context);
    };
  });

  describe('absolute', function() {
    it('should create an absolute file path', function() {
      assert.equal(render('{{absolute "a/b/c/package.json"}}'), path.resolve('a/b/c/package.json'));
      assert.equal(render('{{absolute "a/b/c/docs/toc.md"}}'), path.resolve('a/b/c/docs/toc.md'));
    });

    it('should use the cwd on locals', function() {
      assert.equal(render('{{absolute "a/b/c/package.json"}}', {cwd: os.homedir()}), path.resolve(os.homedir(), 'a/b/c/package.json'));
      assert.equal(render('{{absolute "a/b/c/package.json"}}', {cwd: os.homedir()}), path.resolve(os.homedir(), 'a/b/c/package.json'));
      assert.equal(render('{{absolute "a/b/c/docs/toc.md"}}', {cwd: os.homedir()}), path.resolve(os.homedir(), 'a/b/c/docs/toc.md'));
    });
  });

  describe('dirname', function() {
    it('should get the dirname of a file path', function() {
      assert.equal(render('{{dirname "a/b/c/package.json"}}'), 'a/b/c');
      assert.equal(render('{{dirname "a/b/c/docs/toc.md"}}'), 'a/b/c/docs');
    });
  });

  describe('relative', function() {
    it('should return the relative path from file A to file B', function() {
      var view = compile('{{relative "dist/docs.html" "index.html"}}');
      assert.equal(view.fn(), path.join('..', 'index.html'));
    });
    it('should return the relative path from file A to file B in', function() {
      var view = compile('{{relative "examples/result/md/path.md" "examples/assets"}}');
      assert.equal(view.fn(), path.join('..', '..', 'assets'));
    });
    it('should use the cwd passed on options', function() {
      var view = compile('{{relative "examples/result/md/path.md" "examples/assets"}}');
      assert.equal(view.fn({cwd: gm}), path.join('..', '..', 'assets'));
    });
  });

  describe('basename', function() {
    it('should get the basename of a file path', function() {
      assert.equal(render('{{basename "a/b/c/package.json"}}'), 'package.json');
      assert.equal(render('{{basename "a/b/c/docs/toc.md"}}'), 'toc.md');
    });
    it('should get the basename when a path has no extension', function() {
      var view = compile('{{basename "a/b/c/CHANGELOG"}}');
      assert.equal(view.fn(), 'CHANGELOG');
    });
  });

  describe('stem', function() {
    it('should get the stem of a file path', function() {
      assert.equal(render('{{stem "a/b/c/package.json"}}'), 'package');
      assert.equal(render('{{stem "a/b/c/docs/toc.md"}}'), 'toc');
    });
    it('should get the stem when a path has no extension', function() {
      var view = compile('{{stem "CHANGELOG"}}');
      assert.equal(view.fn(), 'CHANGELOG');
    });
  });

  describe('extname', function() {
    it('should get the extname of a file path', function() {
      assert.equal(render('{{extname "a/b/c/package.json"}}'), '.json');
      assert.equal(render('{{extname "a/b/c/docs/toc.md"}}'), '.md');
    });
    it('should not blow up when a path has no extension', function() {
      var view = compile('{{extname "a/b/c/CHANGELOG"}}');
      assert.equal(view.fn(), '');
    });
  });

  describe('segments', function() {
    it('should return specified path segments:', function() {
      assert.equal(render('{{segments "a/b/c/e.js" 1 3}}'), 'b/c');
      assert.equal(render('{{segments "a/b/c/e.js" 1 2}}'), 'b');
      assert.equal(render('{{segments "a/b/c/e.js" 0 3}}'), 'a/b/c');
      assert.equal(render('{{segments "a/b/c/e.js" 2 3}}'), 'c');
      assert.equal(render('{{segments "a/b/c/e.js" 0 3}}'), 'a/b/c');
    });
  });
});
