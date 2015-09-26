'use strict';

require('should');
var hbs = require('handlebars');
var helpers = require('..');
helpers.object({handlebars: hbs});

var context = {object: {a: 'b', c: 'd', e: 'f'}};

describe('object', function() {
  describe('forIn', function() {
    it('should iterate over each property in an object:', function() {
      var fn = hbs.compile('{{#forIn this}} {{@key}} {{.}} {{/forIn}}');
      fn(context.object).should.equal(' a b  c d  e f ');
    });

    it('should expose private variables:', function() {
      var fn = hbs.compile('{{#forIn this abc=object}} {{@abc.a}} {{/forIn}}');
      fn(context).should.equal(' b ');
    });
  });

  describe('forOwn', function() {
    it('should iterate over each property in an object:', function() {
      var fn = hbs.compile('{{#forOwn this}} {{@key}} {{.}} {{/forOwn}}');
      fn(context.object).should.equal(' a b  c d  e f ');
    });

    it('should expose private variables:', function() {
      var fn = hbs.compile('{{#forOwn this abc=object}} {{@abc.c}} {{/forOwn}}');
      fn(context).should.equal(' d ');
    });
  });
});