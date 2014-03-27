/**
 * Handlebars Helpers Tests: File Helpers
 * http:// github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

// node_modules
require('should');
var Handlebars = require('handlebars');
var helpers = require('../../');

var config = {
  Handlebars: Handlebars
};

helpers(config);

describe('glob', function() {
  // minimal testing to confirm files load
  describe('{{glob filepath}}', function() {
    it('should return glob string', function() {
      var source = '{{glob "test/fixtures/simple.md"}}';
      var template = Handlebars.compile(source);
      var context = {};
      var out = template(context);
      (out.length > 10).should.equal(true);
    });
  });
  // minimal testing to confirm files load
  describe('{{globRaw filepath}}', function() {
    it('should return globRaw string', function() {
      var source = '{{globRaw "test/fixtures/simple.md"}}';
      var template = Handlebars.compile(source);
      var context = {};
      var out = template(context);
      (out.length > 10).should.equal(true);
    });
  });
  // minimal testing to confirm files load
  describe('{{globWithContext filepath}}', function() {
    it('should return globWithContext string', function() {
      var source = '{{globWithContext "test/fixtures/simple.md"}}';
      var template = Handlebars.compile(source);
      var context = {};
      var out = template(context);
      (out.length > 10).should.equal(true);
    });
  });
  // minimal testing to confirm files load
  describe('{{globRawWithContext filepath}}', function() {
    it('should return globRawWithContext string', function() {
      var source = '{{globRawWithContext "test/fixtures/simple.md"}}';
      var template = Handlebars.compile(source);
      var context = {};
      var out = template(context);
      (out.length > 10).should.equal(true);
    });
  });
});
