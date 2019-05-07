const assert = require('assert');
const hbs = require('handlebars').create();
const helpers = require('..');

describe('misc', function() {
  beforeEach(function() {
    helpers.misc({ handlebars: hbs });
  });

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

  describe('typeOf', function() {
    it('should return the type of a string', function() {
      const fn = hbs.compile('{{typeOf value}}');
      assert.equal(fn({ value: 'foo' }), 'string');
    });
    it('should return the type of a number', function() {
      const fn = hbs.compile('{{typeOf value}}');
      assert.equal(fn({ value: 1 }), 'number');
    });
  });

  describe('md5', () => {
    it('returns the md5 hash of the parameter', function() {
      const fn = hbs.compile('{{md5 name}}');
      assert.equal(fn({ name: 'john' }), '527bd5b5d689e2c32ae974c6229ff785');
    });

    it('returns md5 only of the first parameter', function() {
      const fn = hbs.compile('{{md5 name age}}');
      assert.equal(fn({ name: 'john', age: '25' }), '527bd5b5d689e2c32ae974c6229ff785');
    });

    it('returns md5 as empty string if null is passed to it. ', function() {
      const fn = hbs.compile('{{md5 name}}');
      assert.equal(fn({ name: null }), '');
    });

    it('returns md5 as empty string if undefined is passed to it. ', function() {
      const fn = hbs.compile('{{md5 name}}');
      assert.equal(fn({ name: undefined }), '');
    });
  });
});
