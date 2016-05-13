'use strict';

require('should');
var fs = require('fs');
var path = require('path');
var hbs = require('handlebars');
require('..')({handlebars: hbs});

var libFiles = fs.readdirSync(path.join(__dirname, '../lib'))
  .map(function(fp) {
    return path.join('lib', fp);
  });
var orig;

describe('fs', function() {
  describe('fileSize', function() {
    before(function() {
      orig = console.error;
    });
    after(function() {
      console.error = orig;
    });

    it('should add MB and display a decimal point (matches file size strings in Mac OS X)', function() {
      var fn = hbs.compile('{{fileSize num}}');
      fn({num: 13661855}).should.equal('13.7 MB');
    });

    it('should throw an error when an invalid value is passed:', function(done) {
      var fn = hbs.compile('{{fileSize num}}');
      console.error = function(msg) {
        msg.should.equal('helper {{fileSize}} cannot parse: "foo"');
        done();
      };
      fn({num: 'foo'});
    });

    it('should add KB and display only three digits (matches file size strings in Mac OS X)', function() {
      var fn = hbs.compile('{{fileSize num}}');
      fn({num: 825399}).should.equal('825 KB');
    });

    it('should add KB and display only one digit (matches file size strings in Mac OS X)', function() {
      var fn = hbs.compile('{{fileSize num}}');
      fn({num: 1396}).should.equal('1 KB');
    });

    it('should work with bytes', function() {
      hbs.compile('{{fileSize num}}')({num: 0}).should.equal('0 bytes');
      hbs.compile('{{fileSize num}}')({num: 1}).should.equal('1 byte');
      hbs.compile('{{fileSize num}}')({num: 2}).should.equal('2 bytes');
    });
  });

  describe('read', function() {
    it('should read a file from the file system', function() {
      var fn = hbs.compile('{{read filepath}}');
      fn({filepath: 'test/fixtures/read/a.txt'}).should.equal('abc');
    });
  });

  describe('readdir', function() {
    it('should return an array of files', function() {
      var fn = hbs.compile('{{readdir dir}}');
      fn({dir: 'lib'}).split(',').should.eql(libFiles);
    });

    it('should work as a subexpression', function() {
      var fn = hbs.compile('{{mm (readdir dir) "**/[a-c]*.js"}}');
      fn({dir: 'lib'}).split(',').should.eql([
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

      fn({dir: 'lib', filter: filter}).split(',').should.eql([
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
        'lib/string.js',
        'lib/url.js'
      ]);
    });

    it('should filter using a regex', function() {
      var fn = hbs.compile('{{readdir dir "/\\.js$/"}}');
      fn({dir: 'lib'}).split(',').should.eql([
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
        'lib/string.js',
        'lib/url.js'
      ]);
    });

    it('should filter using a glob pattern', function() {
      var fn = hbs.compile('{{readdir dir "lib/[a-d]*.js"}}');
      fn({dir: 'lib'}).split(',').should.eql([
        'lib/array.js',
        'lib/code.js',
        'lib/collection.js',
        'lib/comparison.js',
        'lib/date.js'
      ]);
    });

    it('should filter by fs.stat (files)', function() {
      var fn = hbs.compile('{{readdir dir "isFile"}}');
      fn({dir: 'lib'}).split(',').should.eql(libFiles.filter(function(fp) {
        return fp.indexOf('lib/util') !== 0;
      }));
    });

    it('should filter by fs.stat (dirs)', function() {
      var fn = hbs.compile('{{readdir dir "isDirectory"}}');
      fn({dir: 'lib'}).split(',').should.eql([
        'lib/utils'
      ]);
    });

    it('should return the whole array when the filter is invalid', function() {
      var fn = hbs.compile('{{readdir dir "foo"}}');
      fn({dir: 'lib'}).split(',').should.eql(libFiles);
    });
  });
});
