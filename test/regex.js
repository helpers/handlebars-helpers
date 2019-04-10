const assert = require('assert');
const hbs = require('handlebars').create();
const helpers = require('..');
helpers.regex({ handlebars: hbs });

describe('regex', function() {
  describe('test', function() {
    it('returns false when a regular test fails to match', function() {
      const fn = hbs.compile('{{test "bar" (toRegex "foo")}}');
      assert.equal(fn({}), 'false');
    });

    it('returns true when a test matches', function() {
      const fn = hbs.compile('{{test "foobar" (toRegex "foo")}}');
      assert.equal(fn({}), 'true');
    });

    it('returns false when a test doesn\'t match', function() {
      const fn = hbs.compile('{{test "foobar" (toRegex "^foo$")}}');
      assert.equal(fn({}), 'false');
    });

    it('returns false when testing a non-string', function() {
      const fn = hbs.compile('{{test input (toRegex "^foo$")}}');
      assert.equal(fn({ input: { foo: 1 } }), 'false');
    });

    it('throws an error when a regex isn\'t provided', function() {
      const fn = hbs.compile('{{test "input" "oh no"}}');
      assert.throws(() => fn({}));
    });
  });
});
