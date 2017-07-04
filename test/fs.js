'use strict';

require('mocha');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var hbs = require('handlebars').create();
require('..')({handlebars: hbs});

var orig;
var libFiles = fs.readdirSync(path.join(__dirname, '../lib'))
  .map(function(fp) {
    return path.join('lib', fp);
  });

describe('fs', function() {
  describe('read', function() {
    it('should read a file from the file system', function() {
      var fn = hbs.compile('{{read filepath}}');
      assert.equal(fn({filepath: 'test/fixtures/read/a.txt'}), 'abc');
    });
  });

  describe('readdir', function() {
    it('should return an array of files', function() {
      var fn = hbs.compile('{{readdir dir}}');
      assert.deepEqual(fn({dir: 'lib'}).split(','), libFiles);
    });

    it('should work as a subexpression', function() {
      var fn = hbs.compile('{{match (readdir dir) "**/[a-c]*.js"}}');
      assert.deepEqual(fn({dir: 'lib'}).split(','), [
        'lib/array.js',
        'lib/code.js',
        'lib/collection.js',
        'lib/comparison.js'
      ]);
    });

    it('should filter using a custom filter function', function() {
      var fn = hbs.compile('{{readdir dir filter}}');
      function filter(arr) {
        return arr.filter(function(fp) {
          return /\.js$/.test(fp);
        });
      }

      assert.deepEqual(fn({dir: 'lib', filter: filter}).split(','), [
        'lib/array.js',
        'lib/code.js',
        'lib/collection.js',
        'lib/comparison.js',
        'lib/date.js',
        'lib/fs.js',
        'lib/html.js',
        'lib/i18n.js',
        'lib/index.js',
        'lib/inflection.js',
        'lib/logging.js',
        'lib/markdown.js',
        'lib/match.js',
        'lib/math.js',
        'lib/misc.js',
        'lib/number.js',
        'lib/object.js',
        'lib/path.js',
        'lib/regex.js',
        'lib/string.js',
        'lib/url.js'
      ]);
    });

    it('should filter using a regex', function() {
      var fn = hbs.compile('{{readdir dir (toRegex "\\.js$")}}');
      assert.deepEqual(fn({dir: 'lib'}).split(','), [
        'lib/array.js',
        'lib/code.js',
        'lib/collection.js',
        'lib/comparison.js',
        'lib/date.js',
        'lib/fs.js',
        'lib/html.js',
        'lib/i18n.js',
        'lib/index.js',
        'lib/inflection.js',
        'lib/logging.js',
        'lib/markdown.js',
        'lib/match.js',
        'lib/math.js',
        'lib/misc.js',
        'lib/number.js',
        'lib/object.js',
        'lib/path.js',
        'lib/regex.js',
        'lib/string.js',
        'lib/url.js'
      ]);
    });

    it('should filter using a glob pattern', function() {
      var fn = hbs.compile('{{readdir dir "lib/[a-d]*.js"}}');
      assert.deepEqual(fn({dir: 'lib'}).split(','), [
        'lib/array.js',
        'lib/code.js',
        'lib/collection.js',
        'lib/comparison.js',
        'lib/date.js'
      ]);
    });

    it('should filter by fs.stat (files)', function() {
      var fn = hbs.compile('{{readdir dir "isFile"}}');
      assert.deepEqual(fn({dir: 'lib'}).split(','), libFiles.filter(function(fp) {
        return fp.indexOf('lib/util') !== 0;
      }));
    });

    it('should filter by fs.stat (dirs)', function() {
      var fn = hbs.compile('{{readdir dir "isDirectory"}}');
      assert.deepEqual(fn({dir: 'lib'}).split(','), [
        'lib/utils'
      ]);
    });

    it('should return the whole array when the filter is invalid', function() {
      var fn = hbs.compile('{{readdir dir "foo"}}');
      assert.deepEqual(fn({dir: 'lib'}).split(','), libFiles);
    });
  });
});
