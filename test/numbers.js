'use strict';

var should = require('should');
var Handlebars = require('handlebars');
var helpers = require('..');

Handlebars.registerHelper(helpers('numbers'));

describe('{{phoneNumber}}', function() {
  it('Format a phone number.', function() {
    var template = Handlebars.compile('{{phoneNumber value}}');
    template({value: '8005551212'}).should.equal('(800) 555-1212');
  });
});

describe('{{toFixed}}', function() {
  it('should return the value rounded to the nearest integer.', function() {
    var template = Handlebars.compile('{{toFixed value}}');
    template({value: 5.53231 }).should.equal('6');
  });
  it('should return the value rounded exactly n digits after the decimal place.', function() {
    var template = Handlebars.compile('{{toFixed value 3}}');
    template({value: 5.53231 }).should.equal('5.532');
  });
});

describe('{{toPrecision}}', function() {
  it('Returns the number in fixed-point or exponential notation rounded to n significant digits.', function() {
    var template = Handlebars.compile('{{toPrecision value}}');
    template({value: 555.322 }).should.equal('6e+2');
  });
  it('should return the value rounded exactly n digits after the decimal place.', function() {
    var template = Handlebars.compile('{{toPrecision value 4}}');
    template({value: 555.322 }).should.equal('555.3');
  });
});

describe('{{toExponential}}', function() {
  it('should return the number in fixed-point or exponential notation rounded to n significant digits.', function() {
    var template = Handlebars.compile('{{toExponential value}}');
    template({value: 5 }).should.equal('5e+0');
  });
  it('should return the number in fixed-point or exponential notation rounded to exactly n significant digits.', function() {
    var template = Handlebars.compile('{{toExponential value 5}}');
    template({value: 5 }).should.equal('5.00000e+0');
  });
});

describe('{{toInt}}', function() {
  it('should return an integer.', function() {
    var template = Handlebars.compile('{{toInt value}}');
    template({value: '3cc'}).should.equal('3');
  });
});

describe('{{toFloat}}', function() {
  it('should return a floating point number.', function() {
    var template = Handlebars.compile('{{toFloat value}}');
    template({value: '3.1cc'}).should.equal('3.1');
  });
});

describe('{{addCommas}}', function() {
  it('should add commas to a number.', function() {
    var template = Handlebars.compile('{{addCommas value}}');
    template({value: 2222222 }).should.equal('2,222,222');
  });
});

describe('{{toAbbr}}', function() {
  it('should formats (and approximates) a number into abbreviation based on a value.', function() {
    var template = Handlebars.compile('{{toAbbr value}}');
    template({value: 123456789 }).should.equal('123.46m');
  });
  it('should formats (and approximates) a number into abbreviation based on a value and include decimal.', function() {
    var template = Handlebars.compile('{{toAbbr value 3}}');
    template({value: 123456789 }).should.equal('123.457m');
  });
});

describe('{{random}}', function() {
  it('should return a random number between two values.', function() {
    var template = Handlebars.compile('{{random 5 10}}');
    template().should.be.within(5,10);
  });
});
