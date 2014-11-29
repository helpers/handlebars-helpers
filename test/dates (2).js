'use strict';

var should = require('should');
var Dates = require('../lib/utils/dates');

describe('pad number', function() {
  describe('default padCharacter', function() {
    it('should return a number with 0s', function() {
      var num = 123;
      var expected = '000123';
      var actual = Dates.padNumber(num, 6);
      actual.should.equal(expected);
    });
  });
});

