/**
 * Handlebars Helpers Tests: Utils
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */


require('should');
var Glob = require('../../lib/utils/glob');
var Utils = require('../../lib/utils/utils');

var content, expected, data, actual;

describe('trim', function() {
  it('should trim off white space', function() {
    content = "  test  ";
    expected = "test";
    actual = Utils.trim(content);
    actual.should.equal(expected);
  });
});

describe('lowercase', function() {
  it('should convert a string to lowercase', function() {
    content = "This IS a TEST StRiNg";
    expected = "this is a test string";
    actual = Utils.lowerCase(content);
    actual.should.equal(expected);
  });
});

describe('object globbing', function() {
  describe('buildObjectPaths', function() {
    it('should an array of paths that look like file paths but with object keys', function() {
      data = {
        foo: 'bar',
        baz: {
          foo2: 'bar2'
        }
      };
      actual = Glob.buildObjectPaths(data);
    });
  });
  describe('globObject', function() {
    it('should a new object only containing keys that match the given pattern', function() {
      data = {
        foo: 'bar',
        baz: {
          foo2: 'bar2'
        }
      };
      expected = ['baz/foo2'];
      actual = Glob.globObject(data, '**');
    });
  });
});

