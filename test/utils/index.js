const assert = require('assert');
const utils = require('../../lib/utils');

describe('utils', function() {
  describe('get', function() {
    it('returns an object path', function() {
      assert.equal(utils.get({ foo: { bar: 5 } }, 'foo.bar'), 5);
    });
    it('returns a default value if the path didn\'t exist', function() {
      assert.equal(utils.get({ foo: { bar: 5 } }, 'foo.bar.baz.qux', 10), 10);
    });
  });

  describe('has', function() {
    it('returns true if the path exists on an object', function() {
      assert.equal(utils.has({ foo: { bar: 5 } }, 'foo.bar'), true);
    });
    it('returns false if the path didn\'t exist', function() {
      assert.equal(utils.has({ foo: { bar: 5 } }, 'foo.bar.baz.qux'), false);
    });
  });
});
