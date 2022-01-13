'use strict';

require('mocha');
const assert = require('assert');
const hbs = require('handlebars').create();
const mathHelpers = require('../lib/math');

hbs.registerHelper(mathHelpers);

describe('math', function() {
  describe('add', function() {
    it('should return the sum of two numbers.', function() {
      const fn = hbs.compile('{{add value 5}}');
      assert.equal(fn({value: 5}), '10');
    });
  });

  describe('average', function() {
    it('should return the average of a list of numbers:', function() {
      const fn = hbs.compile('{{avg 1 2 3 4}}');
      assert.equal(fn(), '2.5');
    });

    it('should return the average of an array of numbers:', function() {
      const fn = hbs.compile('{{avg array}}');
      assert.equal(fn({array: [1, 3, 6, 9]}), '4.75');
    });
  });

  describe('ceil', function() {
    it('should return the value rounded up to the nearest integer.', function() {
      const fn = hbs.compile('{{ceil value}}');
      assert.equal(fn({value: 5.6}), '6');
    });
  });

  describe('divide', function() {
    it('should return the division of two numbers.', function() {
      const fn = hbs.compile('{{divide value 5}}');
      assert.equal(fn({value: 5}), '1');
    });
  });

  describe('floor', function() {
    it('should return the value rounded down to the nearest integer.', function() {
      const fn = hbs.compile('{{floor value}}');
      assert.equal(fn({value: 5.6}), '5');
    });
  });

  describe('multiply', function() {
    it('should return the multiplication of two numbers.', function() {
      const fn = hbs.compile('{{multiply value 5}}');
      assert.equal(fn({value: 5}), '25');
    });
  });

  describe('remainder', function() {
    it('should return the remainder of two numbers.', function() {
      const fn = hbs.compile('{{remainder value 5}}');
      assert.equal(fn({value: 7}), '2');
    });

    it('should take the sign of the dividend.', function() {
      const fn = hbs.compile('{{remainder 5 -3}}');
      assert.equal(fn(), '2');
    });
  });

  describe('round', function() {
    it('should return the value rounded to the nearest integer.', function() {
      const fn = hbs.compile('{{round value}}');
      assert.equal(fn({value: 5.69}), '6');
    });
  });

  describe('subtract', function() {
    it('should return the difference of two numbers.', function() {
      const fn = hbs.compile('{{subtract value 5}}');
      assert.equal(fn({value: 5}), '0');
    });
  });

  describe('sum', function() {
    it('should return the sum of multiple numbers.', function() {
      const fn = hbs.compile('{{sum value 67 80}}');
      assert.equal(fn({value: 20}), '167');
    });
    it('should return the sum of multiple numbers.', function() {
      const fn = hbs.compile('{{sum 1 2 3}}');
      assert.equal(fn(), '6');
    });
    it('should return the total sum of array.', function() {
      const fn = hbs.compile('{{sum value}}');
      assert.equal(fn({value: [1, 2, 3]}), '6');
    });
    it('should return the total sum of array and numbers.', function() {
      const fn = hbs.compile('{{sum value 5}}');
      assert.equal(fn({value: [1, 2, 3]}), '11');
    });
  });

  describe('random', function() {
    it('should return a random number between two values.', function() {
      const fn = hbs.compile('{{random 5 10}}');
      assert(fn() >= 5);
      assert(fn() <= 10);
    });
  });
});
