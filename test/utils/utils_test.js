/*jshint mocha:true */
/**
 * Handlebars Helpers Tests: Utils
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */


var Glob = require('../../lib/utils/glob');
var Utils = require('../../lib/utils/utils');

require('should');
describe('trim', function() {
  it('should trim off white space', function() {
    var before = "  test  ";
    var expected = "test";
    var actual = Utils.trim(before);
    actual.should.equal(expected);
  });
});

describe('lowercase', function() {
  it('should convert a string to lowercase', function() {
    var before = "This IS a TEST StRiNg";
    var expected = "this is a test string";
    var actual = Utils.lowerCase(before);
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
      var actual = Glob.buildObjectPaths(input);
    });
  });
  describe('globObject', function() {
    it('should a new object only containing keys that match the given pattern', function() {
      var input = {
        foo: 'bar',
        baz: {
          foo2: 'bar2'
        }
      };
      var expected = ['baz/foo2'];
      var actual = Glob.globObject(input, '**');
    });
  });
});

