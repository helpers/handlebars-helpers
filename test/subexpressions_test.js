'use strict';

var should = require('should');
var Handlebars = require('handlebars');
var _ = require('lodash');

var helpers = require('..')(['collections', 'miscellaneous', 'strings']);
_.forOwn(helpers, function (value, key) {
  Handlebars.registerHelper(key, value);
});

var source, template, context;

context = {
  collection: ['Amy Wong', 'Bender', 'Dr. Zoidberg', 'Fry', 'Hermes Conrad', 'Leela', 'Professor Farnsworth', 'Scruffy']
};

describe('subexpressions (strings with collections):', function() {
  describe('{{lowercase (first collection)}}', function() {
    it('Should return the first item in a collection, all lowercase.', function() {
      source = '{{lowercase (first collection)}}';
      template = Handlebars.compile(source);
      template(context).should.equal('amy wong');
    });
  });

  describe('{{uppercase (last collection)}}', function() {
    it('Should return the last item in a collection, all uppercase.', function() {
      source = '{{uppercase (last collection)}}';
      template = Handlebars.compile(source);
      template(context).should.equal('SCRUFFY');
    });
  });
});
