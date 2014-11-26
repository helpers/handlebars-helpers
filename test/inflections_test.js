'use strict';

var should = require('should');
var Handlebars = require('handlebars');
var _ = require('lodash');

var helpers = require('..')('inflections');
_.forOwn(helpers, function (value, key) {
  Handlebars.registerHelper(key, value);
});

describe('inflect', function() {
  describe('{{inflect enemies "enemy" "enemies"}}', function() {
    it('should return the plural or singular form of a word based on a value.', function() {
      var source = '{{inflect enemies "enemy" "enemies"}}';
      var template = Handlebars.compile(source);
      var context = {
        enemies: 3
      };
      template(context).should.equal('enemies');
    });
  });
  describe('{{inflect friends "friend" "friends" true}}', function() {
    it('should return the plural or singular form of a word based on a value and include the count.', function() {
      var source = '{{inflect friends "friend" "friends" true}}';
      var template = Handlebars.compile(source);
      var context = {
        friends: 1
      };
      template(context).should.equal('1 friend');
    });
  });
});

describe('ordinalize', function() {
  describe('{{ordinalize 22}}', function() {
    it('should return the number converted into an ordinal string.', function() {
      var source = '{{ordinalize 22}}';
      var template = Handlebars.compile(source);
      template().should.equal('22nd');
    });
  });
});
