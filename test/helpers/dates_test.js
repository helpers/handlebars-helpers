/**
 * Handlebars Helpers Tests: Dates Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

// node_modules
require('should');
var Handlebars = require('handlebars');

// Local helpers
require('../../lib/helpers/helpers-dates').register(Handlebars, {});

var source, template, context;

describe('formatDate', function() {
  describe('{{formatDate date format}}', function() {
    it('should return the date formated into a string given a specified format.', function() {
      source = '{{formatDate date "%F"}}';
      template = Handlebars.compile(source);
      context = {
        date: new Date('2/21/1992')
      };
      template(context).should.equal('1992-02-21');
    });
  });
});

describe('now', function() {
  describe('{{now}}', function() {
    it('should return the current date.', function() {
      var date = new Date().getTime();
      source = '{{now}}';
      template = Handlebars.compile(source);
      return new Date(template()).getTime().should.be.within(date - 1000, date + 1000);
    });
  });
});

describe('timeago', function() {
  describe('{{timeago date}}', function() {
    it('should return a human-readable time phrase from the given a date', function() {
      source = '{{timeago date}}';
      template = Handlebars.compile(source);
      context = {
        date: new Date()
      };
      template(context).should.equal('Just now');
    });
  });
});

