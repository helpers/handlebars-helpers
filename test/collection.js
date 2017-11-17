'use strict';

require('mocha');
var assert = require('assert');
var hbs = require('handlebars').create();
var helpers = require('..');
helpers.array({handlebars: hbs});
helpers.collection({handlebars: hbs});
helpers.string({handlebars: hbs});

var context = {array: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']};

describe('collection', function() {
  describe('isEmpty block helper', function() {
    it('should render the first block when an array is empty', function() {
      var fn = hbs.compile('{{#isEmpty array}}AAA{{else}}BBB{{/isEmpty}}');
      assert.equal(fn({array: []}), 'AAA');
    });

    it('should render the first block when the value is null', function() {
      var fn = hbs.compile('{{#isEmpty}}AAA{{else}}BBB{{/isEmpty}}');
      assert.equal(fn({array: []}), 'AAA');
    });

    it('should render the second block when an array is not empty', function() {
      var fn = hbs.compile('{{#isEmpty array}}AAA{{else}}BBB{{/isEmpty}}');
      assert.equal(fn(context), 'BBB');
    });

    it('should render the second block when an object is not empty', function() {
      var fn = hbs.compile('{{#isEmpty object}}AAA{{else}}BBB{{/isEmpty}}');
      assert.equal(fn({object: {foo: 'bar'}}), 'BBB');
    });

    it('should render the first block when an object is empty', function() {
      var fn = hbs.compile('{{#isEmpty object}}AAA{{else}}BBB{{/isEmpty}}');
      assert.equal(fn({object: {}}), 'AAA');
    });
  });

  describe('isEmpty inline helper', function() {
    it('should render the first block when an array is empty', function() {
      var fn = hbs.compile('{{isEmpty array}}');
      assert.equal(fn({array: []}), 'true');
    });

    it('should render the first block when the value is null', function() {
      var fn = hbs.compile('{{isEmpty}}');
      assert.equal(fn({array: []}), 'true');
    });

    it('should render the second block when an array is not empty', function() {
      var fn = hbs.compile('{{isEmpty array}}');
      assert.equal(fn(context), 'false');
    });

    it('should render the second block when an object is not empty', function() {
      var fn = hbs.compile('{{isEmpty object}}');
      assert.equal(fn({object: {foo: 'bar'}}), 'false');
    });

    it('should render the first block when an object is empty', function() {
      var fn = hbs.compile('{{isEmpty object}}');
      assert.equal(fn({object: {}}), 'true');
    });
  });

  describe('iterate', function() {
    describe('object', function() {
      it('should iterate over a plain object:', function() {
        var obj = {a: 'aaa', b: 'bbb', c: 'ccc'};

        var fn = hbs.compile('{{#iterate obj}}{{.}}{{/iterate}}');
        assert.equal(fn({obj: obj}), 'aaabbbccc');
      });

      it('should expose `@key`:', function() {
        var obj = {a: 'aaa', b: 'bbb', c: 'ccc'};

        var fn = hbs.compile('{{#iterate obj}}{{@key}}{{/iterate}}');
        assert.equal(fn({obj: obj}), 'abc');
      });

      it('should render the inverse block when falsey:', function() {
        var fn = hbs.compile('{{#iterate obj}}A{{else}}B{{/iterate}}');
        assert.equal(fn(), 'B');
      });
    });

    describe('array', function() {
      it('should iterate over an array:', function() {
        var arr = [{name: 'a'}, {name: 'b'}, {name: 'c'}];

        var fn = hbs.compile('{{#iterate arr}}{{name}}{{/iterate}}');
        assert.equal(fn({arr: arr}), 'abc');
      });

      it('should expose `@index`:', function() {
        var arr = [{name: 'a'}, {name: 'b'}, {name: 'c'}];

        var fn = hbs.compile('{{#iterate arr}}{{@index}}{{/iterate}}');
        assert.equal(fn({arr: arr}), '012');
      });
    });
  });

  describe('length', function() {
    it('should return the length of the array', function() {
      var fn = hbs.compile('{{length array}}');
      assert.equal(fn(context), '8');
    });

    it('should return zero when undefined', function() {
      assert.equal(hbs.compile('{{length}}')(), '0');
    });

    it('should return the length of a string', function() {
      var fn = hbs.compile('{{length "foo"}}');
      assert.equal(fn(context), '3');
    });

    it('should work with arrays passed via subexpression', function() {
      var fn = hbs.compile('{{length (split "b,c,a")}}');
      assert.equal(fn(context), '3');
    });

    it('should return 0 when the array is invalid:', function() {
      var fn = hbs.compile('{{length foo}}');
      assert.equal(fn(context), '0');
    });

    it('should return 0 when the value is not an array:', function() {
      var fn = hbs.compile('{{length foo}}');
      assert.equal(fn({foo: {}}), '0');
    });
  });
});
