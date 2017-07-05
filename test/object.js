'use strict';

require('mocha');
var assert = require('assert');
var support = require('./support');
var expected = support.expected('object');
var helpers = require('..');
var hbs = require('handlebars').create();
helpers.math({handlebars: hbs});
helpers.object({handlebars: hbs});

var context = {object: {a: 'b', c: 'd', e: 'f'}};

describe('object', function() {
  describe('extend', function() {
    it('should extend multiple objects into one:', function() {
      var fn = hbs.compile('{{{stringify (extend a d g)}}}');
      var actual = fn({a: {b: 'c'}, d: {e: 'f'}, g: {h: 'i'}});
      assert.equal(actual, expected('extend.txt'));
    });

    it('should work as a non-helper util:', function() {
      var actual = helpers().extend({a: {b: 'c'}}, {d: {e: 'f'}}, {g: {h: 'i'}});
      assert.deepEqual(actual, { a: { b: 'c' }, d: { e: 'f' }, g: { h: 'i' } });
    });

    it('should skip over sparse objects', function() {
      var actual = helpers().extend({a: {b: 'c'}}, null, {g: {h: 'i'}});
      assert.deepEqual(actual, { a: { b: 'c' }, g: { h: 'i' } });
    });
  });

  describe('forIn', function() {
    it('should iterate over each property in an object:', function() {
      var fn = hbs.compile('{{#forIn this}} {{@key}} {{.}} {{/forIn}}');
      assert.equal(fn(context.object), ' a b  c d  e f ');
    });

    it('should return the inverse block if no object is passed:', function() {
      var fn = hbs.compile('{{#forIn}} {{.}} {{else}} Nada. {{/forIn}}');
      assert.equal(fn(context.object), ' Nada. ');
    });

    it('should expose private variables:', function() {
      var fn = hbs.compile('{{#forIn this abc=object}} {{@abc.a}} {{/forIn}}');
      assert.equal(fn(context), ' b ');
    });
  });

  describe('forOwn', function() {
    it('should iterate over each property in an object:', function() {
      var fn = hbs.compile('{{#forOwn this}} {{@key}} {{.}} {{/forOwn}}');
      assert.equal(fn(context.object), ' a b  c d  e f ');
    });

    it('should return the inverse block if no object is passed:', function() {
      var fn = hbs.compile('{{#forOwn}} {{.}} {{else}} Nada. {{/forOwn}}');
      assert.equal(fn(context.object), ' Nada. ');
    });

    it('should only expose "own" keys:', function() {
      function Foo() {
        this.a = 'b';
        this.b = 'c';
      }
      Foo.prototype.c = 'd';
      var fn = hbs.compile('{{#forOwn this}} {{.}} {{/forOwn}}');
      assert.equal(fn(new Foo()), ' b  c ');
    });

    it('should expose private variables:', function() {
      var fn = hbs.compile('{{#forOwn this abc=object}} {{@abc.c}} {{/forOwn}}');
      assert.equal(fn(context), ' d ');
    });
  });

  describe('getObject', function() {
    it('should get an object from the context', function() {
      var one = hbs.compile('{{{stringify (getObject "a" this)}}}')({a: 'b'});
      assert.equal(one, '{"a":"b"}');

      var two = hbs.compile('{{{stringify (getObject "c" this)}}}')({c: 'd'});
      assert.equal(two, '{"c":"d"}');
    });
  });

  describe('toPath', function() {
    it('should return a path from provided arguments', function() {
      assert.equal(hbs.compile('{{toPath "a" "b" "c"}}')(), 'a.b.c');
    });
    it('should return a path from calculated arguments', function() {
      var t = hbs.compile('{{toPath "a" (add 1 1) "b"}}')();
      assert.equal(t, 'a.2.b');
    });
    it('should return a `get` compatible path', function() {
      var fn = hbs.compile('{{get (toPath "a" (add 1 1) "j") this}}');
      assert.equal(fn({a: [{b: 'c', d: 'e'}, {f: 'g', h: 'i'}, {j: 'k', l: 'm'}]}), 'k');
    });
  });

  describe('get', function() {
    it('should get a value from the context', function() {
      assert.equal(hbs.compile('{{get "a" this}}')({a: 'b'}), 'b');
      assert.equal(hbs.compile('{{get "c" this}}')({c: 'd'}), 'd');
    });

    it('should get a nested value from the context', function() {
      var fn = hbs.compile('{{get "a.b.c.d" this}}');
      assert.equal(fn({a: {b: {c: {d: 'e'}}}}), 'e');
    });

    it('should work as a block helper', function() {
      var fn1 = hbs.compile('{{#get "a" this}} {{.}} {{/get}}');
      assert.equal(fn1(context.object), ' b ');

      var fn2 = hbs.compile('{{#get "c" this}} {{.}} {{/get}}');
      assert.equal(fn2(context.object), ' d ');
    });

    it('should get the inverse block if not found', function() {
      var fn = hbs.compile('{{#get "foo" this}} {{.}} {{else}}Nope.{{/get}}');
      assert.equal(fn(context.object), 'Nope.');
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
      assert.equal(fn(new Foo()), 'true');
    });

    it('should return false if object does not have own property:', function() {
      var fn = hbs.compile('{{hasOwn this "c"}}');
      assert.equal(fn(new Foo()), 'false');
    });
  });

  describe('isObject', function() {
    it('should return true if value is an object:', function() {
      var fn = hbs.compile('{{isObject this}}');
      assert.equal(fn({a: 'b'}), 'true');
    });

    it('should return false if value is not an object:', function() {
      var fn = hbs.compile('{{isObject this}}');
      assert.equal(fn('foo'), 'false');
    });
  });

  describe('merge', function() {
    it('should deeply merge objects passed on the context:', function() {
      var fn = hbs.compile('{{{stringify (merge a b c)}}}');
      var actual = fn({a: {one: 'two'}, b: {one: 'three'}, c: {two: 'four'}});
      assert.equal(actual, '{"one":"three","two":"four"}');
    });
  });

  describe('JSONparse', function() {
    it('should parse a JSON string:', function() {
      var fn = hbs.compile('{{lookup (JSONparse string) "name"}}');
      assert.equal(fn({string: '{"name": "Fry"}'}), 'Fry');
    });
  });

  describe('pick', function() {
    it('should pick a value from the context', function() {
      var one = hbs.compile('{{{stringify (pick "a" this)}}}')({a: 'b'});
      assert.equal(one, '{"a":"b"}');

      var two = hbs.compile('{{{stringify (pick "c" this)}}}')({c: 'd'});
      assert.equal(two, '{"c":"d"}');
    });

    it('should pick a nested value from the context', function() {
      var fn = hbs.compile('{{{stringify (pick "a.b.c" this)}}}');
      assert.equal(fn({a: {b: {c: {d: 'e'}}}}), '{"c":{"d":"e"}}');
    });

    it('should work as a block helper', function() {
      var fn1 = hbs.compile('{{#pick "a" this}} {{{stringify .}}} {{/pick}}');
      assert.equal(fn1(context.object), ' {"a":"b"} ');

      var fn2 = hbs.compile('{{#pick "c" this}} {{{stringify .}}} {{/pick}}');
      assert.equal(fn2(context.object), ' {"c":"d"} ');
    });

    it('should pick the inverse block if not found', function() {
      var fn = hbs.compile('{{#pick "foo" this}} {{.}} {{else}}Nope.{{/pick}}');
      assert.equal(fn(context.object), 'Nope.');
    });
  });

  describe('stringify', function() {
    it('should stringify an object:', function() {
      var fn = hbs.compile('{{{stringify data}}}');
      var res = fn({data: {name: 'Halle', age: 4, userid: 'Nicole'}});
      assert.equal(res, '{"name":"Halle","age":4,"userid":"Nicole"}');
    });
  });
});
