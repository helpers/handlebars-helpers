'use strict';

require('mocha');
var assert = require('assert');
var hbs = require('handlebars').create();
var helpers = require('..');
helpers.number({handlebars: hbs});

describe('number', function() {
  describe('bytes', function() {
    it('should format a number', function() {
      assert.equal(hbs.compile('{{bytes num}}')({num: 13661855}), '13.66 MB');
      assert.equal(hbs.compile('{{bytes num}}')({num: 825399}), '825.4 kB');
      assert.equal(hbs.compile('{{bytes num}}')({num: 1396}), '1.4 kB');
      assert.equal(hbs.compile('{{bytes num}}')({num: 0}), '0 B');
      assert.equal(hbs.compile('{{bytes num}}')({num: 1}), '1 B');
      assert.equal(hbs.compile('{{bytes num}}')({num: 2}), '2 B');
    });

    it('should return "0 B" when an invalid value is passed', function() {
      assert.equal(hbs.compile('{{bytes num}}')({num: {}}), '0 B');
    });

    it('should return string length when a string is passed', function() {
      assert.equal(hbs.compile('{{bytes num}}')({num: 'foo'}), '3 B');
      assert.equal(hbs.compile('{{bytes num}}')({num: 'foobar'}), '6 B');
    });
  });

  describe('phoneNumber', function() {
    it('Format a phone number.', function() {
      var fn = hbs.compile('{{phoneNumber value}}');
      assert.equal(fn({value: '8005551212'}), '(800) 555-1212');
    });
  });

  describe('toFixed', function() {
    it('should return the value rounded to the nearest integer.', function() {
      var fn = hbs.compile('{{toFixed value}}');
      assert.equal(fn({value: 5.53231 }), '6');
    });
    it('should return the value rounded exactly n digits after the decimal place.', function() {
      var fn = hbs.compile('{{toFixed value 3}}');
      assert.equal(fn({value: 5.53231 }), '5.532');
    });
  });

  describe('toPrecision', function() {
    it('Returns the number in fixed-point or exponential notation rounded to n significant digits.', function() {
      var fn = hbs.compile('{{toPrecision value}}');
      assert.equal(fn({value: 555.322 }), '6e+2');
    });
    it('should return the value rounded exactly n digits after the decimal place.', function() {
      var fn = hbs.compile('{{toPrecision value 4}}');
      assert.equal(fn({value: 555.322 }), '555.3');
    });
  });

  describe('toExponential', function() {
    it('should return the number in fixed-point or exponential notation rounded to n significant digits.', function() {
      var fn = hbs.compile('{{toExponential value}}');
      assert.equal(fn({value: 5 }), '5e+0');
    });
    it('should return the number in fixed-point or exponential notation rounded to exactly n significant digits.', function() {
      var fn = hbs.compile('{{toExponential value 5}}');
      assert.equal(fn({value: 5 }), '5.00000e+0');
    });
  });

  describe('toInt', function() {
    it('should return an integer.', function() {
      var fn = hbs.compile('{{toInt value}}');
      assert.equal(fn({value: '3cc'}), '3');
    });
  });

  describe('toFloat', function() {
    it('should return a floating point number.', function() {
      var fn = hbs.compile('{{toFloat value}}');
      assert.equal(fn({value: '3.1cc'}), '3.1');
    });
  });

  describe('addCommas', function() {
    it('should add commas to a number.', function() {
      var fn = hbs.compile('{{addCommas value}}');
      assert.equal(fn({value: 2222222 }), '2,222,222');
    });
  });

  describe('toAbbr', function() {
    it('should abbreviate the given number.', function() {
      var fn = hbs.compile('{{toAbbr number}}');
      assert.equal(fn({number: 123456789 }), '123.46m');
    });

    it('should abbreviate a number with to the given decimal.', function() {
      var fn = hbs.compile('{{toAbbr number 3}}');
      assert.equal(fn({number: 123456789 }), '123.457m');
    });

    it('should round up to the next increment', function() {
      var fn = hbs.compile('{{toAbbr number}}');
      assert.equal(fn({number: 999 }), '1k');
    });

    it('should abbreviate a number based on a number and include decimal.', function() {
      assert.equal(hbs.compile('{{toAbbr number 0}}')({number: 9999999 }), '10m');
      assert.equal(hbs.compile('{{toAbbr number}}')({number: 1000000000 }), '1b');
      assert.equal(hbs.compile('{{toAbbr number}}')({number: 1000000000000 }), '1t');
      assert.equal(hbs.compile('{{toAbbr number}}')({number: 1000000000000000 }), '1q');
      assert.equal(hbs.compile('{{toAbbr number}}')({number: 99393999393 }), '99.39b');
    });
  });
});
