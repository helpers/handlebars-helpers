const assert = require('assert');
const hbs = require('handlebars').create();
const helpers = require('..');
helpers.math({ handlebars: hbs });

describe('math', function() {
  describe('abs', function() {
    it('should return the absolute value of a positive number.', function() {
      const fn = hbs.compile('{{abs value}}');
      assert.equal(fn({value: 5}), '5');
    });
    it('should return the absolute value of a positive number.', function() {
      const fn = hbs.compile('{{abs value}}');
      assert.equal(fn({value: -5}), '5');
    });
    it('should throw if not a number.', function() {
      const fn = hbs.compile('{{abs value}}');
      assert.throws(() => fn({value: 'nope'}));
    });
  });

  describe('add', function() {
    it('should return the sum of two numbers.', function() {
      const fn = hbs.compile('{{add value 5}}');
      assert.equal(fn({value: 5}), '10');
    });

    it('should return the sum of two stringified numbers.', function() {
      const fn = hbs.compile('{{add "100" "200"}}');
      assert.equal(fn({}), '300');
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
    it('should return the string value rounded up to the nearest integer.', function() {
      const fn = hbs.compile('{{ceil value}}');
      assert.equal(fn({value: '5.6'}), '6');
    });
    it('should throw an error for non-numbers.', function() {
      const fn = hbs.compile('{{ceil value}}');
      assert.throws(() => fn({value: 'nope'}));
    });
  });

  describe('divide', function() {
    it('should return the division of two numbers.', function() {
      const fn = hbs.compile('{{divide value 5}}');
      assert.equal(fn({value: 5}), '1');
    });

    it('should return the division of two stringified numbers.', function() {
      const fn = hbs.compile('{{divide value "5"}}');
      assert.equal(fn({value: '5'}), '1');
    });

    it('should throw an error if the first number is invalid.', function() {
      const fn = hbs.compile('{{divide value 5}}');
      assert.throws(() => fn({value: 'abc'}));
    });

    it('should throw an error if the second number is invalid.', function() {
      const fn = hbs.compile('{{divide value "abcd"}}');
      assert.throws(() => fn({value: 5}));
    });
  });

  describe('floor', function() {
    it('should return the value rounded down to the nearest integer.', function() {
      const fn = hbs.compile('{{floor value}}');
      assert.equal(fn({value: 5.6}), '5');
    });

    it('should throw an error if the number is invalid', function() {
      const fn = hbs.compile('{{floor value}}');
      assert.throws(() => fn({value: 'abc'}));
    });
  });

  describe('minus', function() {
    it('should return the difference of two numbers.', function() {
      const fn = hbs.compile('{{minus value 5}}');
      assert.equal(fn({value: 5}), '0');
    });

    it('should return the difference of two stringified numbers.', function() {
      const fn = hbs.compile('{{minus value "5"}}');
      assert.equal(fn({value: '5'}), '0');
    });

    it('should throw an error if the first number is invalid.', function() {
      const fn = hbs.compile('{{minus value 5}}');
      assert.throws(() => fn({value: 'abc'}));
    });

    it('should throw an error if the second number is invalid.', function() {
      const fn = hbs.compile('{{minus value "abcd"}}');
      assert.throws(() => fn({value: 5}));
    });
  });

  describe('modulo', function() {
    it('should return the modulus of two numbers.', function() {
      const fn = hbs.compile('{{multiply value 5}}');
      assert.equal(fn({value: 5}), '25');
    });

    it('should return the multiplication of two stringified numbers.', function() {
      const fn = hbs.compile('{{multiply value "5"}}');
      assert.equal(fn({value: '5'}), '25');
    });
  });

  describe('multiply', function() {
    it('should return the modulus of two numbers.', function() {
      const fn = hbs.compile('{{modulo value 4}}');
      assert.equal(fn({value: 25}), '1');
    });

    it('should return the modulus of two stringified numbers.', function() {
      const fn = hbs.compile('{{modulo value "4"}}');
      assert.equal(fn({value: '25'}), '1');
    });
  });

  describe('plus', function() {
    it('should return the first number with the second number added.', function() {
      const fn = hbs.compile('{{plus value 5}}');
      assert.equal(fn({value: 25}), '30');
    });

    it('should return the modulus of two stringified numbers.', function() {
      const fn = hbs.compile('{{plus value "5"}}');
      assert.equal(fn({value: '25'}), '30');
    });
  });

  describe('random', function() {
    it('should return a random number between two values.', function() {
      const fn = hbs.compile('{{random 5 10}}');
      const result = +fn();
      assert(result >= 5);
      assert(result <= 10);
      assert(Number.isInteger(result));
    });

    it('should return a random number between two stringified values.', function() {
      const fn = hbs.compile('{{random "5" "10"}}');
      const result = +fn();
      assert(result >= 5);
      assert(result <= 10);
      assert(Number.isInteger(result));
    });
  });

  describe('remainder', function() {
    it('should return the remainder of two numbers.', function() {
      const fn = hbs.compile('{{remainder value 5}}');
      assert.equal(fn({value: 7}), '2');
    });

    it('should return the remainder of two stringified numbers.', function() {
      const fn = hbs.compile('{{remainder value "5"}}');
      assert.equal(fn({value: '7'}), '2');
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

    it('should return the stringified value rounded to the nearest integer.', function() {
      const fn = hbs.compile('{{round value}}');
      assert.equal(fn({value: '5.69'}), '6');
    });

    it('should throw an error for an invalid value', function() {
      const fn = hbs.compile('{{round value}}');
      assert.throws(() => fn({value: 'abc'}));
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

  describe('times', function() {
    it('should multiply a number by another number.', function() {
      const fn = hbs.compile('{{times value 10}}');
      assert.equal(fn({value: 20}), '200');
    });
  });
});
