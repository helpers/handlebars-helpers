const assert = require('assert');
const hbs = require('handlebars').create();
const helpers = require('..');
helpers.array({ handlebars: hbs });
helpers.string({ handlebars: hbs });

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
      it('Should return the last item in a collection, all uppercase.', function() {
        const fn = hbs.compile('{{uppercase (last two)}}');
        assert.equal(fn(context), 'F');
      });
    });
  });
});
