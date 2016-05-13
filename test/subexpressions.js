'use strict';

var assert = require('assert');
var hbs = require('handlebars');

var context = {
  one: ['A', 'B', 'C', 'D', 'E', 'F'],
  two: ['a', 'b', 'c', 'd', 'e', 'f']
};

describe('subexpressions', function() {
  describe('collections', function() {
    describe('strings', function() {
      it('Should return the first item in a collection, all lowercase.', function() {
        var fn = hbs.compile('{{lowercase (first one)}}');
        assert.equal(fn(context), 'a');
      });
      it('Should return the last item in a collection, all uppercase.', function() {
        var fn = hbs.compile('{{uppercase (last two)}}');
        assert.equal(fn(context), 'F');
      });
    });
  });
});
