'use strict';

var should = require('should');
var Handlebars = require('handlebars');
var helpers = require('..');

Handlebars.registerHelper(helpers('collections'));
Handlebars.registerHelper(helpers('misc'));
Handlebars.registerHelper(helpers('string'));

var context = {
  collection: ['Amy Wong', 'Bender', 'Dr. Zoidberg', 'Fry', 'Hermes Conrad', 'Leela', 'Professor Farnsworth', 'Scruffy']
};

describe('subexpressions (strings with collections):', function() {
  it('Should return the first item in a collection, all lowercase.', function() {
    var template = Handlebars.compile('{{lowercase (first collection)}}');
    template(context).should.equal('amy wong');
  });
  it('Should return the last item in a collection, all uppercase.', function() {
    var template = Handlebars.compile('{{uppercase (last collection)}}');
    template(context).should.equal('SCRUFFY');
  });
});
