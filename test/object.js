'use strict';

var should = require('should');
var hbs = require('handlebars');
var helpers = require('..');
helpers.object({handlebars: hbs});

var context = {object: {a: 'b', c: 'd', e: 'f'}};

describe('object', function() {
  describe('forIn', function() {
    it('Should iterate over each property in an object:', function() {
      var fn = hbs.compile('{{#forIn object}} {{key}} {{value}} {{/forIn}}');
      fn(context).should.equal(' a b  c d  e f ');
    });
  });

  describe('forOwn', function() {
    it('Should iterate over each property in an object:', function() {
      var fn = hbs.compile('{{#forOwn object}} {{key}} {{value}} {{/forOwn}}');
      fn(context).should.equal(' a b  c d  e f ');
    });
  });
});