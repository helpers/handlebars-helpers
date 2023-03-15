'use strict';

require('mocha');
var assert = require('assert');
var hbs = require('handlebars').create();
var helpers = require('..');
helpers.date({handlebars: hbs});

describe('date', function() {
  describe('datediff', function() {
    describe('inline or subexpression', function() {
      it('should return the difference of two numbers.', function() {
        var fn = hbs.compile('{{datediff dateFrom dateTo unit}}');
        var r = fn({dateFrom: "2022-01-01", dateTo: "2023-01-01", unit: "year"});
        console.log("Result: " + r);
        assert.equal(r, '1');
      });
    });
  });

  describe('datedroll', function() {
    describe('inline', function() {
      it('should return the computed date.', function() {
        var fn = hbs.compile('{{dateroll dateFrom nUnit unit}}');
        assert.equal(fn({dateFrom: "2022-01-01", nUnit: 365, unit: "day", format: "yyyy-MM-dd"}), '2023-01-01');
      });
    });
  });
});
