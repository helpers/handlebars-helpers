'use strict';

require('should');
var hbs = require('handlebars');
var helpers = require('..');
helpers.inflection({handlebars: hbs});

describe('inflection', function() {
  describe('inflect', function() {
    it('should return the plural or singular form of a word based on a value.', function() {
      var template = hbs.compile('{{inflect mail "junk" "mail"}}');
      template({mail: 3}).should.equal('mail');
    });

    it('should return the plural or singular form of a word based on a value and include the count.', function() {
      var template = hbs.compile('{{inflect messages "message" "messages" true}}');
      template({messages: 1}).should.equal('1 message');
    });
  });

  describe('ordinalize', function() {
    it('should return an ordinalized string.', function() {
      hbs.compile('{{ordinalize 1}}')().should.equal('1st');
      hbs.compile('{{ordinalize 21}}')().should.equal('21st');
      hbs.compile('{{ordinalize 29}}')().should.equal('29th');
      hbs.compile('{{ordinalize 22}}')().should.equal('22nd');
    });
  });
});
