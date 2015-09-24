'use strict';

require('should');
var hbs = require('handlebars');
var helpers = require('..')({handlebars: hbs});

describe('fileSize', function() {
  describe('{{fileSize bigValue}}', function() {
    it('should add MB and display a decimal point (matches file size strings in Mac OS X)', function() {
      var source = '{{fileSize bigValue}}';
      var fn = hbs.compile(source);
      fn({bigValue: 13661855}).should.equal('13.7 MB');
    });
  });

  describe('{{fileSize mValue}}', function() {
    it('should add KB and display only three digits (matches file size strings in Mac OS X)', function() {
      var source = '{{fileSize mValue}}';
      var fn = hbs.compile(source);
      fn({mValue: 825399}).should.equal('825 KB');
    });
  });

  describe('{{fileSize tinyValue}}', function() {
    it('should add KB and display only one digit (matches file size strings in Mac OS X)', function() {
      var source = '{{fileSize tinyValue}}';
      var fn = hbs.compile(source);
      var context = {
        tinyValue: 1396
      };
      fn(context).should.equal('1 KB');
    });
  });
});
