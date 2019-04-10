const assert = require('assert');
const helpers = require('..');
const hbs = require('handlebars').create();
helpers.math({handlebars: hbs});
helpers.object({handlebars: hbs});

const context = {object: {a: 'b', c: 'd', e: 'f'}};

describe('object', function() {
  describe('extend', function() {
    it('should extend multiple objects into one', function() {
      const fn = hbs.compile('{{{stringify (extend a d g)}}}');
      const actual = fn({a: {b: 'c'}, d: {e: 'f'}, g: {h: 'i'}});
      assert.equal(actual, '{"b":"c","e":"f","h":"i"}');
    });

    it('should skip over sparse objects', function() {
      const fn = hbs.compile('{{{stringify (extend a d g)}}}');
      const actual = fn({a: {b: 'c'}, d: undefined, g: {h: 'i'}});
      assert.equal(actual, '{"b":"c","h":"i"}');
    });
  });

  describe('getObject', function() {
    it('should get an object from the context', function() {
      const one = hbs.compile('{{{stringify (getObject "a" this)}}}')({a: 'b'});
      assert.equal(one, '{"a":"b"}');

      const two = hbs.compile('{{{stringify (getObject "c" this)}}}')({c: 'd'});
      assert.equal(two, '{"c":"d"}');

      const three = hbs.compile('{{{stringify (getObject "c.d" this)}}}')({ c: { d: { e: 'f' }, g: 'h' } });
      assert.equal(three, '{"d":{"e":"f"}}');
    });
  });

  describe('toPath', function() {
    it('should return a path from provided arguments', function() {
      assert.equal(hbs.compile('{{toPath "a" "b" "c"}}')(), 'a.b.c');
    });
    it('should return a path from calculated arguments', function() {
      const t = hbs.compile('{{toPath "a" (add 1 1) "b"}}')();
      assert.equal(t, 'a.2.b');
    });
    it('should return a `get` compatible path', function() {
      const fn = hbs.compile('{{get (toPath "a" (add 1 1) "j") this}}');
      assert.equal(fn({a: [{b: 'c', d: 'e'}, {f: 'g', h: 'i'}, {j: 'k', l: 'm'}]}), 'k');
    });
  });

  describe('get', function() {
    it('should get a value from the context', function() {
      assert.equal(hbs.compile('{{get "a" this}}')({a: 'b'}), 'b');
      assert.equal(hbs.compile('{{get "c" this}}')({c: 'd'}), 'd');
    });

    it('should get a nested value from the context', function() {
      const fn = hbs.compile('{{get "a.b.c.d" this}}');
      assert.equal(fn({a: {b: {c: {d: 'e'}}}}), 'e');
    });

    it('should work as a block helper', function() {
      const fn1 = hbs.compile('{{#get "a" this}} {{.}} {{/get}}');
      assert.equal(fn1(context.object), ' b ');

      const fn2 = hbs.compile('{{#get "c" this}} {{.}} {{/get}}');
      assert.equal(fn2(context.object), ' d ');
    });

    it('should get the inverse block if not found', function() {
      const fn = hbs.compile('{{#get "foo" this}} {{.}} {{else}}Nope.{{/get}}');
      assert.equal(fn(context.object), 'Nope.');
    });
  });

  describe('getProperty', function() {
    it('returns the correct property', function() {
      const fn = hbs.compile('{{getProperty "name"}}');
      assert.equal(fn({ name: 'john' }), 'john');
    });
  });

  describe('hasOwn', function() {
    function Foo() {
      this.a = 'b';
      this.b = 'c';
    }
    Foo.prototype.c = 'd';

    it('should return true if object has own property:', function() {
      const fn = hbs.compile('{{hasOwn this "a"}}');
      assert.equal(fn(new Foo()), 'true');
    });

    it('should return false if object does not have own property:', function() {
      const fn = hbs.compile('{{hasOwn this "c"}}');
      assert.equal(fn(new Foo()), 'false');
    });
  });

  describe('isObject', function() {
    it('should return true if value is an object:', function() {
      const fn = hbs.compile('{{isObject this}}');
      assert.equal(fn({a: 'b'}), 'true');
    });

    it('should return false if value is not an object:', function() {
      const fn = hbs.compile('{{isObject this}}');
      assert.equal(fn('foo'), 'false');
    });
  });

  describe('merge', function() {
    it('should deeply merge objects passed on the context:', function() {
      const fn = hbs.compile('{{{stringify (merge a b c)}}}');
      const actual = fn({a: {one: 'two'}, b: {one: 'three'}, c: {two: 'four'}});
      assert.equal(actual, '{"one":"three","two":"four"}');
    });
  });

  describe('JSONparse', function() {
    it('should parse a JSON string:', function() {
      const fn = hbs.compile('{{lookup (JSONparse string) "name"}}');
      assert.equal(fn({string: '{"name": "Fry"}'}), 'Fry');
    });
  });

  describe('JSONstringify', function() {
    it('should stringify an object', function() {
      const fn = hbs.compile('{{{JSONstringify value}}}');
      assert.equal(fn({value: { foo: 'bar' }}), '{"foo":"bar"}');
    });
  });

  describe('prettyJson', function() {
    it('should stringify an object', function() {
      const fn = hbs.compile('{{{prettyJson value}}}');
      assert.equal(fn({value: { foo: 'bar' }}), '{\n  "foo": "bar"\n}');
    });
  });

  describe('pick', function() {
    it('should pick a value from the context', function() {
      const one = hbs.compile('{{{stringify (pick "a" this)}}}')({a: 'b'});
      assert.equal(one, '{"a":"b"}');

      const two = hbs.compile('{{{stringify (pick "c" this)}}}')({c: 'd'});
      assert.equal(two, '{"c":"d"}');
    });

    it('should pick a nested value from the context', function() {
      const fn = hbs.compile('{{{stringify (pick "a.b.c" this)}}}');
      assert.equal(fn({a: {b: {c: {d: 'e'}}}}), '{"c":{"d":"e"}}');
    });

    it('should work as a block helper', function() {
      const fn1 = hbs.compile('{{#pick "a" this}} {{{stringify .}}} {{/pick}}');
      assert.equal(fn1(context.object), ' {"a":"b"} ');

      const fn2 = hbs.compile('{{#pick "c" this}} {{{stringify .}}} {{/pick}}');
      assert.equal(fn2(context.object), ' {"c":"d"} ');
    });

    it('should pick the inverse block if not found', function() {
      const fn = hbs.compile('{{#pick "foo" this}} {{.}} {{else}}Nope.{{/pick}}');
      assert.equal(fn(context.object), 'Nope.');
    });
  });

  describe('stringify', function() {
    it('should stringify an object:', function() {
      const fn = hbs.compile('{{{stringify data}}}');
      const res = fn({data: {name: 'Halle', age: 4, userid: 'Nicole'}});
      assert.equal(res, '{"name":"Halle","age":4,"userid":"Nicole"}');
    });
  });
});
