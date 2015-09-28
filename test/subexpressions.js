'use strict';

require('should');
var hbs = require('handlebars');
var helpers = require('..')({handlebars: hbs});

var context = {
  collection: ['Amy Wong', 'Bender', 'Dr. Zoidberg', 'Fry', 'Hermes Conrad', 'Leela', 'Professor Farnsworth', 'Scruffy']
};

describe('subexpressions', function() {
  describe('collections', function() {
    describe('strings', function() {
      it('Should return the first item in a collection, all lowercase.', function() {
        var fn = hbs.compile('{{lowercase (first collection)}}');
        fn(context).should.equal('amy wong');
      });
      it('Should return the last item in a collection, all uppercase.', function() {
        var fn = hbs.compile('{{uppercase (last collection)}}');
        fn(context).should.equal('SCRUFFY');
      });
    });
  });
});
