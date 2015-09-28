'use strict';

require('should');
var assert = require('assert');
var hbs = require('handlebars');
var helpers = require('..');
helpers.misc({handlebars: hbs});

describe('misc', function () {
  describe('default', function () {
    it('should use the given value:', function () {
      var fn = hbs.compile('{{default title "No title available."}}');
      fn({title: 'foo'}).should.equal('foo');
    });

    it('should fallback to the default value when no value exists', function () {
      var fn = hbs.compile('{{default title "No title available."}}');
      fn({title: null}).should.equal('No title available.');
    });
  });

  describe('noop', function () {
    it('should be a noop', function () {
      var fn = hbs.compile('{{#noop}}{{message}}{{/noop}}');
      fn({message: 'This is a test'}).should.equal('This is a test');
    });
  });

  describe('withHash', function () {
    it('should return an empty sting', function () {
      var fn = hbs.compile('{{#withHash}}{{message}}{{/withHash}}');
      var actual = fn({message: 'This is a test'});
      assert.equal(typeof actual, 'string');
      assert.equal(actual, '');
    });

    it('should not blow up when no hash is defined.', function () {
      var fn = hbs.compile('{{#withHash}}{{/withHash}}');
      fn().should.equal('');
    });

    it('should return the inverse hash when defined and the value is falsy.', function () {
      var fn = hbs.compile('{{#withHash}}foo{{else}}bar{{/withHash}}');
      fn().should.equal('bar');
    });

    it('should return string from the newly created context', function () {
      var fn = hbs.compile('{{#withHash message="test"}}{{message}}{{/withHash}}');
      fn({message: 'This is a test'}).should.equal('test');
    });

    it('should return string from the parent context', function () {
      var fn = hbs.compile('{{#withHash message=this.message}}{{message}}{{/withHash}}');
      fn({message: 'This is a test'}).should.equal('This is a test');
    });

    it('should add two attributes to the new context', function () {
      var fn = hbs.compile('{{#withHash subject="Feedback" message="Hello!"}}{{subject}} - {{message}}{{/withHash}}');
      fn({}).should.equal('Feedback - Hello!');
    });
  });
});
