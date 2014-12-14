'use strict';

var should = require('should');
var Handlebars = require('handlebars');
var helpers = require('..');

Handlebars.registerHelper(helpers('math'));

describe('{{add}}', function () {
  it('should return the sum of two numbers.', function () {
    var template = Handlebars.compile('{{add value 5}}');
    template({value: 5}).should.equal('10');
  });
});

describe('{{subtract}}', function () {
  it('should return the difference of two numbers.', function () {
    var template = Handlebars.compile('{{subtract value 5}}');
    template({value: 5}).should.equal('0');
  });
});

describe('{{divide}}', function () {
  it('should return the division of two numbers.', function () {
    var template = Handlebars.compile('{{divide value 5}}');
    template({value: 5}).should.equal('1');
  });
});

describe('{{multiply}}', function () {
  it('should return the multiplication of two numbers.', function () {
    var template = Handlebars.compile('{{multiply value 5}}');
    template({value: 5}).should.equal('25');
  });
});

describe('{{floor}}', function () {
  it('should return the value rounded down to the nearest integer.', function () {
    var template = Handlebars.compile('{{floor value}}');
    template({value: 5.6}).should.equal('5');
  });
});

describe('{{ceil}}', function () {
  it('should return the value rounded up to the nearest integer.', function () {
    var template = Handlebars.compile('{{ceil value}}');
    template({value: 5.6}).should.equal('6');
  });
});

describe('{{round}}', function () {
  it('should return the value rounded to the nearest integer.', function () {
    var template = Handlebars.compile('{{round value}}');
    template({value: 5.69}).should.equal('6');
  });
});

describe('{{sum}}', function () {
  it('should return the sum of multiple numbers.', function () {
    var template = Handlebars.compile('{{sum value 67 80}}');
    template({value: 20}).should.equal('167');
  });
  it('should return the sum of multiple numbers.', function () {
    var template = Handlebars.compile('{{sum 1 2 3}}');
    template().should.equal('6');
  });
  it('should return the total sum of array.', function () {
    var template = Handlebars.compile('{{sum value}}');
    template({value: [1, 2, 3]}).should.equal('6');
  });
  it('should return the total sum of array and numbers.', function () {
    var template = Handlebars.compile('{{sum value 5}}');
    template({value: [1, 2, 3]}).should.equal('11');
  });
});
