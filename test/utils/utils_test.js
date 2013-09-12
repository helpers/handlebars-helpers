/*jshint mocha:true */
(function() {


  var Utils = require('../../lib/utils/utils');

  require('should');
  describe('trim', function() {
    it('should trim off white space', function() {
      var actual, before, expected;
      before = "  test  ";
      expected = "test";
      actual = Utils.trim(before);
      actual.should.equal(expected);
    });
  });

  describe('lowercase', function() {
    it('should convert a string to lowercase', function() {
      var actual, before, expected;
      before = "This IS a TEST StRiNg";
      expected = "this is a test string";
      actual = Utils.lowerCase(before);
      actual.should.equal(expected);
    });
  });

  describe('object globbing', function() {
    describe('buildObjectPaths', function() {
      it('should an array of paths that look like file paths but with object keys', function() {
        var input = {
          foo: 'bar',
          baz: {
            foo2: 'bar2'
          }
        };
        var actual = Utils.buildObjectPaths(input);
        console.log(actual);
      });
    });
    describe('globObject', function() {
      it('should a new object only containing keys that match the given pattern', function() {
        var actual, expected, input;
        input = {
          foo: 'bar',
          baz: {
            foo2: 'bar2'
          }
        };
        expected = ['baz/foo2'];
        actual = Utils.globObject(input, '**');
        console.log(actual);
      });
    });
  });

}).call(this);
