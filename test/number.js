'use strict';

require('should');
var hbs = require('handlebars');
var helpers = require('..');
helpers.number({handlebars: hbs});

describe('number', function() {
  describe('phoneNumber', function() {
    it('Format a phone number.', function() {
      var fn = hbs.compile('{{phoneNumber value}}');
      fn({value: '8005551212'}).should.equal('(800) 555-1212');
    });
  });

  describe('toFixed', function() {
    it('should return the value rounded to the nearest integer.', function() {
      var fn = hbs.compile('{{toFixed value}}');
      fn({value: 5.53231 }).should.equal('6');
    });
    it('should return the value rounded exactly n digits after the decimal place.', function() {
      var fn = hbs.compile('{{toFixed value 3}}');
      fn({value: 5.53231 }).should.equal('5.532');
    });
  });

  describe('toPrecision', function() {
    it('Returns the number in fixed-point or exponential notation rounded to n significant digits.', function() {
      var fn = hbs.compile('{{toPrecision value}}');
      fn({value: 555.322 }).should.equal('6e+2');
    });
    it('should return the value rounded exactly n digits after the decimal place.', function() {
      var fn = hbs.compile('{{toPrecision value 4}}');
      fn({value: 555.322 }).should.equal('555.3');
    });
  });

  describe('toExponential', function() {
    it('should return the number in fixed-point or exponential notation rounded to n significant digits.', function() {
      var fn = hbs.compile('{{toExponential value}}');
      fn({value: 5 }).should.equal('5e+0');
    });
    it('should return the number in fixed-point or exponential notation rounded to exactly n significant digits.', function() {
      var fn = hbs.compile('{{toExponential value 5}}');
      fn({value: 5 }).should.equal('5.00000e+0');
    });
  });

  describe('toInt', function() {
    it('should return an integer.', function() {
      var fn = hbs.compile('{{toInt value}}');
      fn({value: '3cc'}).should.equal('3');
    });
  });

  describe('toFloat', function() {
    it('should return a floating point number.', function() {
      var fn = hbs.compile('{{toFloat value}}');
      fn({value: '3.1cc'}).should.equal('3.1');
    });
  });

  describe('addCommas', function() {
    it('should add commas to a number.', function() {
      var fn = hbs.compile('{{addCommas value}}');
      fn({value: 2222222 }).should.equal('2,222,222');
    });
  });

  describe('toAbbr', function() {
    it('should abbreviate the given number.', function() {
      var fn = hbs.compile('{{toAbbr number}}');
      fn({number: 123456789 }).should.equal('123.46m');
    });

    it('should abbreviate a number with to the given decimal.', function() {
      var fn = hbs.compile('{{toAbbr number 3}}');
      fn({number: 123456789 }).should.equal('123.457m');
    });

    it('should round up to the next increment', function() {
      var fn = hbs.compile('{{toAbbr number}}');
      fn({number: 999 }).should.equal('1k');
    });

    it('should abbreviate a number based on a number and include decimal.', function() {
      hbs.compile('{{toAbbr number 0}}')({number: 9999999 }).should.equal('10m');
      hbs.compile('{{toAbbr number}}')({number: 1000000000 }).should.equal('1b');
      hbs.compile('{{toAbbr number}}')({number: 1000000000000 }).should.equal('1t');
      hbs.compile('{{toAbbr number}}')({number: 1000000000000000 }).should.equal('1q');
      hbs.compile('{{toAbbr number}}')({number: 99393999393 }).should.equal('99.39b');
    });
  });

  describe('random', function() {
    it('should return a random number between two values.', function() {
      var fn = hbs.compile('{{random 5 10}}');
      fn().should.be.within(5,10);
    });
  });
});
