(function() {
  var Utils;

  require('should');

  Utils = require('../../lib/utils/utils');

  describe('trim', function() {
    return it('should trim off white space', function() {
      var actual, before, expected;
      before = "  test  ";
      expected = "test";
      actual = Utils.trim(before);
      return actual.should.equal(expected);
    });
  });

  describe('lowercase', function() {
    return it('should convert a string to lowercase', function() {
      var actual, before, expected;
      before = "This IS a TEST StRiNg";
      expected = "this is a test string";
      actual = Utils.lowerCase(before);
      return actual.should.equal(expected);
    });
  });

  describe('object globbing', function() {
    describe('buildObjectPaths', function() {
      return it('should return an array of paths that look like file paths but with object keys', function() {
        var actual, expected, input;
        input = {
          foo: 'bar',
          baz: {
            foo2: 'bar2'
          }
        };
        expected = ['foo', 'baz/foo2'];
        actual = Utils.buildObjectPaths(input);
        return console.log(actual);
      });
    });
    return describe('globObject', function() {
      return it('should return a new object only containing keys that match the given pattern', function() {
        var actual, expected, input;
        input = {
          foo: 'bar',
          baz: {
            foo2: 'bar2'
          }
        };
        expected = ['baz/foo2'];
        actual = Utils.globObject(input, '**');
        return console.log(actual);
      });
    });
  });

}).call(this);
