'use strict';

var should = require('should');
var Handlebars = require('handlebars');
var _ = require('lodash');
var helpers = require('..');

console.log(helpers)
Handlebars.registerHelper(helpers('fs'));



describe('fileSize', function() {
  describe('{{fileSize bigValue}}', function() {
    it('should add MB and display a decimal point (matches file size strings in Mac OS X)', function() {
      var source = '{{fileSize bigValue}}';
      var template = Handlebars.compile(source);
      var context = {
        bigValue: 13661855
      };
      template(context).should.equal('13.7 MB');
    });
  });
  describe('{{fileSize mValue}}', function() {
    it('should add KB and display only three digits (matches file size strings in Mac OS X)', function() {
      var source = '{{fileSize mValue}}';
      var template = Handlebars.compile(source);
      var context = {
        mValue: 825399
      };
      template(context).should.equal('825 KB');
    });
  });
  describe('{{fileSize tinyValue}}', function() {
    it('should add KB and display only one digit (matches file size strings in Mac OS X)', function() {
      var source = '{{fileSize tinyValue}}';
      var template = Handlebars.compile(source);
      var context = {
        tinyValue: 1396
      };
      template(context).should.equal('1 KB');
    });
  });
});


describe('{{glob}}', function() {
  it('should return glob string', function() {
    // var res = Handlebars.compile('{{glob "test/fixtures/simple.md"}}')({});
    // console.log(res)
  });

  // describe('{{globRaw filepath}}', function() {
  //   it('should return globRaw string', function() {
  //     var source = '{{globRaw "test/fixtures/simple.md"}}';
  //     var template = Handlebars.compile(source);
  //     var context = {};
  //     var out = template(context);
  //     (out.length > 10).should.equal(true);
  //   });
  // });
  // describe('{{globWithContext filepath}}', function() {
  //   it('should return globWithContext string', function() {
  //     var source = '{{globWithContext "test/fixtures/simple.md"}}';
  //     var template = Handlebars.compile(source);
  //     var context = {};
  //     var out = template(context);
  //     (out.length > 10).should.equal(true);
  //   });
  // });
  // describe('{{globRawWithContext filepath}}', function() {
  //   it('should return globRawWithContext string', function() {
  //     var source = '{{globRawWithContext "test/fixtures/simple.md"}}';
  //     var template = Handlebars.compile(source);
  //     var context = {};
  //     var out = template(context);
  //     (out.length > 10).should.equal(true);
  //   });
  // });
});
