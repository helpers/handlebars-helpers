/**
 * Tests: Inflections Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */


require('should');
var Handlebars = require('handlebars');
require('../../lib/helpers/helpers-inflections').register(Handlebars, {});

describe('inflect', function() {
  describe('{{inflect enemies "enemy" "enemies"}}', function() {
    it('should return the plural or singular form of a word based on a value.', function() {
      var context, source, template;
      source = '{{inflect enemies "enemy" "enemies"}}';
      template = Handlebars.compile(source);
      context = {
        enemies: 3
      };
      template(context).should.equal('enemies');
    });
  });
  describe('{{inflect friends "friend" "friends" true}}', function() {
    it('should return the plural or singular form of a word based on a value and include the count.', function() {
      var context, source, template;
      source = '{{inflect friends "friend" "friends" true}}';
      template = Handlebars.compile(source);
      context = {
        friends: 1
      };
      template(context).should.equal('1 friend');
    });
  });
});

describe('ordinalize', function() {
  describe('{{ordinalize 22}}', function() {
    it('should return the number converted into an ordinal string.', function() {
      var source, template;
      source = '{{ordinalize 22}}';
      template = Handlebars.compile(source);
      template().should.equal('22nd');
    });
  });
});
