/**
 * Tests: File Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

require('should');
var Handlebars = require('handlebars');
require('../../lib/helpers/helpers-files').register(Handlebars, {});


describe('fileSize', function() {
  describe('{{fileSize bigValue}}', function() {
    it('should add MB and display a decimal point (matches file size strings in Mac OS X)', function() {
      var context, source, template;
      source = '{{fileSize bigValue}}';
      template = Handlebars.compile(source);
      context = {
        bigValue: 13661855
      };
      template(context).should.equal('13.7 MB');
    });
  });
  describe('{{fileSize mValue}}', function() {
    it('should add KB and display only three digits (matches file size strings in Mac OS X)', function() {
      var context, source, template;
      source = '{{fileSize mValue}}';
      template = Handlebars.compile(source);
      context = {
        mValue: 825399
      };
      template(context).should.equal('825 KB');
    });
  });
  describe('{{fileSize tinyValue}}', function() {
    it('should add KB and display only one digit (matches file size strings in Mac OS X)', function() {
      var context, source, template;
      source = '{{fileSize tinyValue}}';
      template = Handlebars.compile(source);
      context = {
        tinyValue: 1396
      };
      template(context).should.equal('1 KB');
    });
  });
});
