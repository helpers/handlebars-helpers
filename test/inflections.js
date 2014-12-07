'use strict';

var should = require('should');
var Handlebars = require('handlebars');
var helpers = require('..');

Handlebars.registerHelper(helpers('inflections'));

describe('inflect', function() {
  it('should return the plural or singular form of a word based on a value.', function() {
    var template = Handlebars.compile('{{inflect mail "junk" "mail"}}');
    template({mail: 3}).should.equal('mail');
  });

  it('should return the plural or singular form of a word based on a value and include the count.', function() {
    var template = Handlebars.compile('{{inflect messages "message" "messages" true}}');
    template({messages: 1}).should.equal('1 message');
  });
});

describe('ordinalize', function() {
  it('should return an ordinalized string.', function() {
    Handlebars.compile('{{ordinalize 1}}')().should.equal('1st');
    Handlebars.compile('{{ordinalize 21}}')().should.equal('21st');
    Handlebars.compile('{{ordinalize 29}}')().should.equal('29th');
    Handlebars.compile('{{ordinalize 22}}')().should.equal('22nd');
  });
});
