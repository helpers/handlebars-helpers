'use strict';

var path = require('path');
var should = require('should');
var Handlebars = require('handlebars');
var helpers = require('..');

var upPath = '..' + path.sep;

Handlebars.registerHelper(helpers('path'));

describe('{{extname}}', function() {
  it('should return the extname of a given file path', function() {
    var template = Handlebars.compile('{{extname "package.json"}}');
    template().should.equal('.json');
  });
  it('should return the extname of a given file path', function() {
    var template = Handlebars.compile('{{extname "docs/toc.md"}}');
    template().should.equal('.md');
  });
  it('should return the extname of a given file path', function() {
    var template = Handlebars.compile('{{extname "CHANGELOG"}}');
    template().should.equal('');
  });
});

describe('{{relative}}', function() {
  it('should return the relative path from file A to file B', function() {
    var template = Handlebars.compile('{{relative "dist/docs.html" "index.html"}}');
    template().should.equal(upPath + 'index.html');
  });
  it('should return the relative path from file A to file B', function() {
    var template = Handlebars.compile('{{relative "examples/result/md/path.md" "examples/assets"}}');
    template().should.equal(upPath + upPath + 'assets');
  });
});
