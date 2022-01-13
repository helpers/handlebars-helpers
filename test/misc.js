'use strict';

require('mocha');
const assert = require('assert');
const hbs = require('handlebars').create();
const miscHelpers = require('../lib/misc');

hbs.registerHelper(miscHelpers);

describe('misc', function() {
  describe('noop', function() {
    it('should be a noop', function() {
      const fn = hbs.compile('{{#noop}}{{message}}{{/noop}}');
      assert.equal(fn({message: 'This is a test'}), 'This is a test');
    });
  });

  describe('option', function() {
    it('should get an option', function() {
      const fn = hbs.compile('{{option "a"}}');
      assert.equal(fn({options: {a: 'bbb'}}), 'bbb');
    });
    it('should return an empty string when no options are found', function() {
      assert.equal(hbs.compile('{{option "a"}}')(), '');
    });
    it('should get a nested option', function() {
      const fn = hbs.compile('{{option "a.b.c"}}');
      assert.equal(fn({options: {a: {b: {c: 'ddd'}}}}), 'ddd');
    });
    it('should work as a subexpression', function() {
      const fn = hbs.compile('{{option "a.b.c"}}');
      assert.equal(fn({options: {a: {b: {c: 'ddd'}}}}), 'ddd');
    });
  });

  describe('withHash', function() {
    it('should return an empty sting', function() {
      const fn = hbs.compile('{{#withHash}}{{message}}{{/withHash}}');
      const actual = fn({message: 'This is a test'});
      assert.equal(typeof actual, 'string');
      assert.equal(actual, '');
    });
    it('should not blow up when no hash is defined.', function() {
      const fn = hbs.compile('{{#withHash}}{{/withHash}}');
      assert.equal(fn(), '');
    });
    it('should return the inverse hash when defined and the value is falsy.', function() {
      const fn = hbs.compile('{{#withHash}}foo{{else}}bar{{/withHash}}');
      assert.equal(fn(), 'bar');
    });
    it('should return string from the newly created context', function() {
      const fn = hbs.compile('{{#withHash message="test"}}{{message}}{{/withHash}}');
      assert.equal(fn({message: 'This is a test'}), 'test');
    });
    it('should return string from the parent context', function() {
      const fn = hbs.compile('{{#withHash message=this.message}}{{message}}{{/withHash}}');
      assert.equal(fn({message: 'This is a test'}), 'This is a test');
    });
    it('should add two attributes to the new context', function() {
      const fn = hbs.compile('{{#withHash subject="Feedback" message="Hello!"}}{{subject}} - {{message}}{{/withHash}}');
      assert.equal(fn({}), 'Feedback - Hello!');
    });
  });
});
