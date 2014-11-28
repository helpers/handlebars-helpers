'use strict';

var should = require('should');
var Handlebars = require('handlebars');
var _ = require('lodash');

var helpers = require('..')('path');
_.forOwn(helpers, function (value, key) {
  Handlebars.registerHelper(key, value);
});

var context, source, template;

describe('extname', function() {
  describe('{{extname src}}', function() {
    it('should return the extname of a given file path', function() {
      source = '{{extname "package.json"}}';
      template = Handlebars.compile(source);
      template().should.equal('json');
    });
    it('should return the extname of a given file path', function() {
      source = '{{extname "docs/toc.md"}}';
      template = Handlebars.compile(source);
      template().should.equal('md');
    });
    it('should return the extname of a given file path', function() {
      source = '{{extname "AUTHORS"}}';
      template = Handlebars.compile(source);
      template().should.equal('AUTHORS');
    });
  });
});

describe('relative', function() {
  describe('{{relative a b}}', function() {
    it('should return the relative path from file A to file B', function() {
      source = '{{relative "dist/docs.html" "index.html"}}';
      template = Handlebars.compile(source);
      template().should.equal('../index.html');
    });
    it('should return the relative path from file A to file B', function() {
      source = '{{relative "examples/result/md/path.md" "examples/assets"}}';
      template = Handlebars.compile(source);
      template().should.equal('../../assets');
    });
  });
});
