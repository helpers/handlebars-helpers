'use strict';

require('should');
var support = require('./support');
var fixture = support.fixture('object');
var expected = support.expected('object');
var helpers = require('..');
var hbs = require('handlebars');
helpers.object({handlebars: hbs});

var context = {object: {a: 'b', c: 'd', e: 'f'}};

describe('object', function() {
  describe('extend', function() {
    it('should extend multiple objects into one:', function() {
      var fn = hbs.compile('{{{stringify (extend a d g)}}}');
      var actual = fn({a: {b: 'c'}, d: {e: 'f'}, g: {h: 'i'}});
      actual.should.equal(expected('extend.txt'));
    });

    it('should work as a non-helper util:', function() {
      var actual = helpers().extend({a: {b: 'c'}}, {d: {e: 'f'}}, {g: {h: 'i'}});
      actual.should.eql({ a: { b: 'c' }, d: { e: 'f' }, g: { h: 'i' } });
    });

    it('should skip over sparse objects', function() {
      var actual = helpers().extend({a: {b: 'c'}}, null, {g: {h: 'i'}});
      actual.should.eql({ a: { b: 'c' }, g: { h: 'i' } });
    });
  });

  describe('forIn', function() {
    it('should iterate over each property in an object:', function() {
      var fn = hbs.compile('{{#forIn this}} {{@key}} {{.}} {{/forIn}}');
      fn(context.object).should.equal(' a b  c d  e f ');
    });

    it('should return the inverse block if no object is passed:', function() {
      var fn = hbs.compile('{{#forIn}} {{.}} {{else}} Nada. {{/forIn}}');
      fn(context.object).should.equal(' Nada. ');
    });

    it('should expose private variables:', function() {
      var fn = hbs.compile('{{#forIn this abc=object}} {{@abc.a}} {{/forIn}}');
      fn(context).should.equal(' b ');
    });
  });

  describe('forOwn', function() {
    it('should iterate over each property in an object:', function() {
      var fn = hbs.compile('{{#forOwn this}} {{@key}} {{.}} {{/forOwn}}');
      fn(context.object).should.equal(' a b  c d  e f ');
    });

    it('should return the inverse block if no object is passed:', function() {
      var fn = hbs.compile('{{#forOwn}} {{.}} {{else}} Nada. {{/forOwn}}');
      fn(context.object).should.equal(' Nada. ');
    });

    it('should only expose "own" keys:', function() {
      function Foo() {
        this.a = 'b';
        this.b = 'c';
      }
      Foo.prototype.c = 'd';
      var fn = hbs.compile('{{#forOwn this}} {{.}} {{/forOwn}}');
      fn(new Foo()).should.equal(' b  c ');
    });

    it('should expose private variables:', function() {
      var fn = hbs.compile('{{#forOwn this abc=object}} {{@abc.c}} {{/forOwn}}');
      fn(context).should.equal(' d ');
    });
  });

  describe('getObject', function() {
    it('should get an object from the context', function() {
      var one = hbs.compile('{{{stringify (getObject "a" this)}}}')({a: 'b'})
      one.should.equal('{"a":"b"}');

      var two = hbs.compile('{{{stringify (getObject "c" this)}}}')({c: 'd'})
      two.should.equal('{"c":"d"}');
    });
  });

  describe('get', function() {
    it('should get a value from the context', function() {
      hbs.compile('{{get "a" this}}')({a: 'b'}).should.equal('b');
      hbs.compile('{{get "c" this}}')({c: 'd'}).should.equal('d');
    });

    it('should get a nested value from the context', function() {
      var fn = hbs.compile('{{get "a.b.c.d" this}}');
      fn({a: {b: {c: {d: 'e'}}}}).should.equal('e');
    });

    it('should work as a block helper', function() {
      var fn1 = hbs.compile('{{#get "a" this}} {{.}} {{/get}}');
      fn1(context.object).should.equal(' b ');

      var fn2 = hbs.compile('{{#get "c" this}} {{.}} {{/get}}');
      fn2(context.object).should.equal(' d ');
    });

    it('should get the inverse block if not found', function() {
      var fn = hbs.compile('{{#get "foo" this}} {{.}} {{else}}Nope.{{/get}}');
      fn(context.object).should.equal('Nope.');
    });
  });

  describe('hasOwn', function() {
    function Foo() {
      this.a = 'b';
      this.b = 'c';
    }
    Foo.prototype.c = 'd';

    it('should return true if object has own property:', function() {
      var fn = hbs.compile('{{hasOwn this "a"}}');
      fn(new Foo()).should.equal('true');
    });

    it('should return false if object does not have own property:', function() {
      var fn = hbs.compile('{{hasOwn this "c"}}');
      fn(new Foo()).should.equal('false');
    });
  });

  describe('isObject', function() {
    it('should return true if value is an object:', function() {
      var fn = hbs.compile('{{isObject this}}');
      fn({a: 'b'}).should.equal('true');
    });

    it('should return false if value is not an object:', function() {
      var fn = hbs.compile('{{isObject this}}');
      fn('foo').should.equal('false');
    });
  });

  describe('merge', function() {
    it('should deeply merge objects passed on the context:', function() {
      var fn = hbs.compile('{{{stringify (merge a b c)}}}');
      var actual = fn({a: {one: 'two'}, b: {one: 'three'}, c: {two: 'four'}});
      actual.should.equal('{"one":"three","two":"four"}');
    });
  });

  describe('parseJSON', function() {
    it('should parse a JSON string:', function() {
      var fn = hbs.compile('{{#parseJSON jsonString}}{{name}}{{/parseJSON}}');
      fn({jsonString: "{\"name\": \"Fry\"}"}).should.equal('Fry');
    });
  });

  describe('pick', function() {
    it('should pick a value from the context', function() {
      var one = hbs.compile('{{{stringify (pick "a" this)}}}')({a: 'b'});
      one.should.equal('{"a":"b"}');

      var two = hbs.compile('{{{stringify (pick "c" this)}}}')({c: 'd'});
      two.should.equal('{"c":"d"}');
    });

    it('should pick a nested value from the context', function() {
      var fn = hbs.compile('{{{stringify (pick "a.b.c" this)}}}');
      fn({a: {b: {c: {d: 'e'}}}}).should.equal('{"c":{"d":"e"}}');
    });

    it('should work as a block helper', function() {
      var fn1 = hbs.compile('{{#pick "a" this}} {{{stringify .}}} {{/pick}}');
      fn1(context.object).should.equal(' {"a":"b"} ');

      var fn2 = hbs.compile('{{#pick "c" this}} {{{stringify .}}} {{/pick}}');
      fn2(context.object).should.equal(' {"c":"d"} ');
    });

    it('should pick the inverse block if not found', function() {
      var fn = hbs.compile('{{#pick "foo" this}} {{.}} {{else}}Nope.{{/pick}}');
      fn(context.object).should.equal('Nope.');
    });
  });

  describe('stringify', function() {
    it('should stringify an object:', function() {
      var fn = hbs.compile('{{{stringify data}}}');
      var res = fn({data: {name: "Halle", age: 4, userid: "Nicole"}});
      res.should.equal('{"name":"Halle","age":4,"userid":"Nicole"}');
    });
  });
});