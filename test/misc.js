'use strict';

require('should');
var assert = require('assert');
var hbs = require('handlebars');
var helpers = require('..');

describe('misc', function () {
  beforeEach(function () {
    helpers.misc({handlebars: hbs});
  });

  describe('default', function () {
    it('should use the given value:', function () {
      hbs.compile('{{default title "A"}}')({title: 'B'}).should.equal('B');
    });
    it('should fallback to the default value when no value exists', function () {
      hbs.compile('{{default title "A"}}')({title: null}).should.equal('A');
      hbs.compile('{{default title "A"}}')().should.equal('A');
    });
  });

  describe('or', function () {
    it('should use the given value:', function () {
      hbs.compile('{{or title "A"}}')({title: 'B'}).should.equal('B');
    });
    it('should fallback to the fallback value when no value exists', function () {
      hbs.compile('{{or title "A"}}')({title: null}).should.equal('A');
      hbs.compile('{{or title "A"}}')().should.equal('A');
    });
  });

  describe('noop', function () {
    it('should be a noop', function () {
      var fn = hbs.compile('{{#noop}}{{message}}{{/noop}}');
      fn({message: 'This is a test'}).should.equal('This is a test');
    });
  });

  describe('option', function () {
    it('should get an option', function () {
      var fn = hbs.compile('{{option "a"}}');
      fn({options: {a: 'bbb'}}).should.equal('bbb');
    });
    it('should return an empty string when no options are found', function () {
      hbs.compile('{{option "a"}}')().should.equal('');
    });
    it('should get a nested option', function () {
      var fn = hbs.compile('{{option "a.b.c"}}');
      fn({options: {a: {b: {c: 'ddd'}}}}).should.equal('ddd');
    });
    it('should work as a subexpression', function () {
      var fn = hbs.compile('{{option "a.b.c"}}');
      fn({options: {a: {b: {c: 'ddd'}}}}).should.equal('ddd');
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
