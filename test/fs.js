'use strict';

require('should');
var hbs = require('handlebars');
var helpers = require('..')({handlebars: hbs});
var orig;

describe('fs', function() {
  describe('fileSize', function() {
    before(function () {
      orig = console.error;
    });
    after(function () {
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

  describe('read', function () {
    it('should read a file from the file system', function () {
      var fn = hbs.compile('{{read filepath}}');
      fn({filepath: 'test/fixtures/read/a.txt'}).should.equal('abc');
    });
  });
});
