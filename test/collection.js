'use strict';

require('should');
var hbs = require('handlebars');
var helpers = require('..');
helpers.collection({handlebars: hbs});

var context = {array: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']};

describe('collection', function() {
  describe('length', function() {
    it('should return the length of the array', function() {
      var fn = hbs.compile('{{length array}}');
      fn(context).should.equal('8');
    });

    it('should return an empty string when undefined.', function() {
      hbs.compile('{{length}}')().should.equal('');
    });

    it('should return the length of a string.', function() {
      var fn = hbs.compile('{{length "foo"}}');
      fn(context).should.equal('3');
    });

    it('should parse an array passed as a string', function() {
      var fn = hbs.compile('{{length \'["b", "c", "a"]\'}}');
      fn(context).should.equal('3');
    });

    it('should return 0 when the array is invalid:', function() {
      var fn = hbs.compile('{{length \'["b", "c", "a"\'}}');
      fn(context).should.equal('0');
    });
  });
  
  describe('isEmpty', function() {
    it('should render the first block when an array is empty.', function() {
      var fn = hbs.compile('{{#isEmpty array}}AAA{{else}}BBB{{/isEmpty}}');
      fn({array: []}).should.equal('AAA');
    });

    it('should render the first block when the value is null.', function() {
      var fn = hbs.compile('{{#isEmpty}}AAA{{else}}BBB{{/isEmpty}}');
      fn({array: []}).should.equal('AAA');
    });

    it('should render the second block when an array is not empty.', function() {
      var fn = hbs.compile('{{#isEmpty array}}AAA{{else}}BBB{{/isEmpty}}');
      fn(context).should.equal('BBB');
    });

    it('should render the second block when an object is not empty.', function() {
      var fn = hbs.compile('{{#isEmpty object}}AAA{{else}}BBB{{/isEmpty}}');
      fn({object: {foo: 'bar'}}).should.equal('BBB');
    });

    it('should render the first block when an object is empty.', function() {
      var fn = hbs.compile('{{#isEmpty object}}AAA{{else}}BBB{{/isEmpty}}');
      fn({object: {}}).should.equal('AAA');
    });
  });

  describe('iterate', function() {
    describe('object', function() {
      it('should iterate over a plain object:', function() {
        var obj = {a: 'aaa', b: 'bbb', c: 'ccc'};

        var fn = hbs.compile('{{#iterate obj}}{{.}}{{/iterate}}');
        fn({obj: obj}).should.equal('aaabbbccc');
      });

      it('should expose `@key`:', function() {
        var obj = {a: 'aaa', b: 'bbb', c: 'ccc'};

        var fn = hbs.compile('{{#iterate obj}}{{@key}}{{/iterate}}');
        fn({obj: obj}).should.equal('abc');
      });

      it('should render the inverse block when falsey:', function() {
        var obj = {};

        var fn = hbs.compile('{{#iterate obj}}A{{else}}B{{/iterate}}');
        fn().should.equal('B');
      });
    });

    describe('array', function() {
      it('should iterate over an array:', function() {
        var arr = [{name: 'a'}, {name: 'b'}, {name: 'c'}];

        var fn = hbs.compile('{{#iterate arr}}{{name}}{{/iterate}}');
        fn({arr: arr}).should.equal('abc');
      });

      it('should expose `@index`:', function() {
        var arr = [{name: 'a'}, {name: 'b'}, {name: 'c'}];

        var fn = hbs.compile('{{#iterate arr}}{{@index}}{{/iterate}}');
        fn({arr: arr}).should.equal('012');
      });
    });
  });
});