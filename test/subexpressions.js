'use strict';

require('mocha');
const assert = require('assert');
const hbs = require('handlebars').create();
const arrayHelpers = require('../lib/array');
const stringHelpers = require('../lib/string');

hbs.registerHelper(arrayHelpers);
hbs.registerHelper(stringHelpers);

const context = {
  one: ['A', 'B', 'C', 'D', 'E', 'F'],
  two: ['a', 'b', 'c', 'd', 'e', 'f']
};

describe('subexpressions', function() {
  describe('collections', function() {
    describe('strings', function() {
      it('Should return the first item in a collection, all lowercase.', function() {
        const fn = hbs.compile('{{lowercase (first one)}}');
        assert.equal(fn(context), 'a');
      });
      it('Should return the last item in a collection, all uppercase', function() {
        const fn = hbs.compile('{{uppercase (last two)}}');
        assert.equal(fn(context), 'F');
      });
    });
  });
});
