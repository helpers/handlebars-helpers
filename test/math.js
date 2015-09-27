'use strict';

require('should');
var hbs = require('handlebars');
var helpers = require('..');
helpers.math({handlebars: hbs});

describe('math', function () {
  describe('add', function () {
    it('should return the sum of two numbers.', function () {
      var fn = hbs.compile('{{add value 5}}');
      fn({value: 5}).should.equal('10');
    });
  });

  describe('subtract', function () {
    it('should return the difference of two numbers.', function () {
      var fn = hbs.compile('{{subtract value 5}}');
      fn({value: 5}).should.equal('0');
    });
  });

  describe('divide', function () {
    it('should return the division of two numbers.', function () {
      var fn = hbs.compile('{{divide value 5}}');
      fn({value: 5}).should.equal('1');
    });
  });

  describe('multiply', function () {
    it('should return the multiplication of two numbers.', function () {
      var fn = hbs.compile('{{multiply value 5}}');
      fn({value: 5}).should.equal('25');
    });
  });

  describe('floor', function () {
    it('should return the value rounded down to the nearest integer.', function () {
      var fn = hbs.compile('{{floor value}}');
      fn({value: 5.6}).should.equal('5');
    });
  });

  describe('ceil', function () {
    it('should return the value rounded up to the nearest integer.', function () {
      var fn = hbs.compile('{{ceil value}}');
      fn({value: 5.6}).should.equal('6');
    });
  });

  describe('round', function () {
    it('should return the value rounded to the nearest integer.', function () {
      var fn = hbs.compile('{{round value}}');
      fn({value: 5.69}).should.equal('6');
    });
  });

  describe('sum', function () {
    it('should return the sum of multiple numbers.', function () {
      var fn = hbs.compile('{{sum value 67 80}}');
      fn({value: 20}).should.equal('167');
    });
    it('should return the sum of multiple numbers.', function () {
      var fn = hbs.compile('{{sum 1 2 3}}');
      fn().should.equal('6');
    });
    it('should return the total sum of array.', function () {
      var fn = hbs.compile('{{sum value}}');
      fn({value: [1, 2, 3]}).should.equal('6');
    });
    it('should return the total sum of array and numbers.', function () {
      var fn = hbs.compile('{{sum value 5}}');
      fn({value: [1, 2, 3]}).should.equal('11');
    });
  });
});
