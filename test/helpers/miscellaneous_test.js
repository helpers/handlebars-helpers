/**
 * Handlebars Helpers Tests: Misc. Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

// node_modules
require('should');
var Handlebars = require('handlebars');

// Local helpers
require('../../lib/helpers/helpers-miscellaneous').register(Handlebars, {});

describe('default', function() {
  describe('{{default title "Not title available."}}', function() {
    it('should provide a default or fallback value if a value doesn\'t exist.', function() {
      var source = '{{default title "No title available."}}';
      var template = Handlebars.compile(source);
      var context = {
        title: null
      };
      template(context).should.equal('No title available.');
    });
  });
});

describe('noop', function() {
  describe('{{#noop}}{{message}}{{/noop}}', function() {
    it('should be a noop', function() {
      var source = '{{#noop}}{{message}}{{/noop}}';
      var template = Handlebars.compile(source);
      var context = {
        message: 'This is a test'
      };
      template(context).should.equal('This is a test');
    });
  });
});

describe('withHash', function () {
  describe('{{#withHash}}{{message}}{{/withHash}}', function () {
    it('should return an empty sting', function () {
      var source = '{{#withHash}}{{message}}{{/withHash}}';
      var template = Handlebars.compile(source);
      var context = {
        message: 'This is a test'
      };
      template(context).should.be.String.and.equal('');
    });
  });
  describe('{{#withHash message="test"}}{{message}}{{/withHash}}', function () {
    it('should return string from the newly created context', function () {
      var source = '{{#withHash message="test"}}{{message}}{{/withHash}}';
      var template = Handlebars.compile(source);
      var context = {
        message: 'This is a test'
      };
      template(context).should.be.equal('test');
    });
  });
  describe('{{#withHash message=this.message}}{{message}}{{/withHash}}', function () {
    it('should return string from the parent context', function () {
      var source = '{{#withHash message=this.message}}{{message}}{{/withHash}}';
      var template = Handlebars.compile(source);
      var context = {
        message: 'This is a test'
      };
      template(context).should.be.equal('This is a test');
    });
  });
  describe('{{#withHash subject="Feedback" message="Hello!"}}{{subject}} - {{message}}{{/withHash}}', function () {
    it('should add two attributes to the new context', function () {
      var source = '{{#withHash subject="Feedback" message="Hello!"}}{{subject}} - {{message}}{{/withHash}}';
      var template = Handlebars.compile(source);
      template({}).should.be.equal('Feedback - Hello!');
    });
  });
});
