'use strict';

require('should');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var hbs = require('handlebars');
var helpers = require('..');
helpers.match({handlebars: hbs});

var testFiles = fs.readdirSync(__dirname);
var rootFiles = fs.readdirSync(path.join(__dirname, '..'));

describe('match', function() {
  describe('mm', function() {
    it('should use the main micromatch function to filter an array', function() {
      var fn = hbs.compile('{{mm files "(a|u)*.js"}}');
      fn({files: testFiles}).should.eql('array.js,url.js');
    });

    it('should take an array of patterns', function() {
      var ctx = {files: testFiles, patterns: ['(a|u)*.js', 'f*.js']}
      var fn = hbs.compile('{{mm files patterns}}');
      fn(ctx).should.eql('array.js,url.js,fs.js');
    });

    it('should take options from the "options[helper name]" object', function() {
      var ctx = {files: testFiles, options: {mm: {dot: true}}};
      var fn = hbs.compile('{{mm files "*"}}');
      fn(ctx).should.match(/array\.js/);
    });

    it('should take options from the hash', function() {
      var ctx = {files: rootFiles};
      hbs.compile('{{mm files "*" dot=true}}')(ctx).should.match(/\.gitignore/);
      hbs.compile('{{mm files "*" dot=false}}')(ctx).should.not.match(/\.gitignore/);
    });
  });

  describe('match', function() {
    it('should use return matching items', function() {
      var fn = hbs.compile('{{match files "(a|u)*.js"}}');
      fn({files: testFiles}).should.eql('array.js,url.js');
    });

    it('should take options from the "options[helper name]" object', function() {
      var ctx = {files: rootFiles, options: {match: {dot: true}}};
      var fn = hbs.compile('{{match files "*"}}');
      fn(ctx).should.match(/\.gitignore/);
    });

    it('should take options from the hash', function() {
      var ctx = {files: rootFiles};
      hbs.compile('{{match files "*" dot=true}}')(ctx).should.match(/\.gitignore/);
      hbs.compile('{{match files "*" dot=false}}')(ctx).should.not.match(/\.gitignore/);
    });

    it('should take options passed as the last argument', function() {
      var ctx = {files: rootFiles, options: {dot: true}};
      hbs.compile('{{match files "*" options}}')(ctx).should.match(/\.gitignore/);
    });
  });

  describe('isMatch', function() {
    it('should return true if the given value matches the glob', function() {
      assert.equal(hbs.compile('{{isMatch "foo.js" "*.js"}}')(), 'true');
      assert.equal(hbs.compile('{{isMatch "foo.js" "*.json"}}')(), 'false');
    });
  });
});
