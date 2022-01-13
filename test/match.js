'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const hbs = require('handlebars').create();
const matchHelpers = require('../lib/match');

hbs.registerHelper(matchHelpers);

const testFiles = fs.readdirSync(__dirname);
const rootFiles = fs.readdirSync(path.join(__dirname, '..'));

describe('matching', function() {
  describe('match', function() {
    it('should use the main micromatch function to filter an array', function() {
      const fn = hbs.compile('{{match files "(a|u)*.js"}}');
      assert.equal(fn({files: testFiles}), 'array.js,url.js,utils.js');
    });

    it('should take an array of patterns', function() {
      const ctx = {files: testFiles, patterns: ['(a|u)*.js', 'st*.js']};
      const fn = hbs.compile('{{match files patterns}}');
      assert.equal(fn(ctx), 'array.js,url.js,utils.js,string.js');
    });

    it('should take options from the "options[helper name]" object', function() {
      const ctx = {files: testFiles, options: {match: {dot: true}}};
      const fn = hbs.compile('{{match files "*"}}');
      assert(/array\.js/.test(fn(ctx)));
    });

    it('should take options from the hash', function() {
      const ctx = {files: rootFiles};
      assert(/\.gitignore/.test(hbs.compile('{{match files "*" dot=true}}')(ctx)));
      assert(!/\.gitignore/.test(hbs.compile('{{match files "*" dot=false}}')(ctx)));
    });

    it('should use return matching items', function() {
      const fn = hbs.compile('{{match files "(a|u)*.js"}}');
      assert.equal(fn({files: testFiles}), 'array.js,url.js,utils.js');
    });

    it('should take options from the "options[helper name]" object', function() {
      const ctx = {files: rootFiles, options: {match: {dot: true}}};
      const fn = hbs.compile('{{match files "*"}}');
      assert(/\.gitignore/.test(fn(ctx)));
    });

    it('should take options from the hash', function() {
      const ctx = {files: rootFiles};
      assert(/\.gitignore/.test(hbs.compile('{{match files "*" dot=true}}')(ctx)));
      assert(!/\.gitignore/.test(hbs.compile('{{match files "*" dot=false}}')(ctx)));
    });

    it('should take options passed as the last argument', function() {
      const ctx = {files: rootFiles, options: {dot: true}};
      assert(/\.gitignore/.test(hbs.compile('{{match files "*" options}}')(ctx)));
    });
  });

  describe('isMatch', function() {
    it('should return true if the given value matches the glob', function() {
      assert.equal(hbs.compile('{{isMatch "foo.js" "*.js"}}')(), 'true');
      assert.equal(hbs.compile('{{isMatch "foo.js" "*.json"}}')(), 'false');
    });
  });
});
