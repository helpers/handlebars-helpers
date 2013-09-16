/**
 * Tests: Dates Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

require('should');
var Handlebars = require('handlebars');
require('../../lib/helpers/helpers-dates').register(Handlebars, {});


describe('formatDate', function() {
  describe('{{formatDate date format}}', function() {
    it('should return the date formated into a string given a specified format.', function() {
      var source = '{{formatDate date "%F"}}';
      var template = Handlebars.compile(source);
      var context = {
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
      var source = '{{now}}';
      var template = Handlebars.compile(source);
      return new Date(template()).getTime().should.be.within(date - 1000, date + 1000);
    });
  });
});

describe('timeago', function() {
  describe('{{timeago date}}', function() {
    it('should return a human-readable time phrase from the given a date', function() {
      var source = '{{timeago date}}';
      var template = Handlebars.compile(source);
      var context = {
        date: new Date()
      };
      template(context).should.equal('Just now');
    });
  });
});

