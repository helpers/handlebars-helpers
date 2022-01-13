'use strict';

require('mocha');
const assert = require('assert');
const hbs = require('handlebars').create();
const inflectionHelpers = require('../lib/inflection');

hbs.registerHelper(inflectionHelpers);

describe('inflection', function() {
  describe('inflect', function() {
    it('should return the plural or singular form of a word based on a value.', function() {
      const template = hbs.compile('{{inflect mail "junk" "mail"}}');
      assert.equal(template({mail: 3}), 'mail');
    });

    it('should return the plural or singular form of a word based on a value and include the count.', function() {
      const template = hbs.compile('{{inflect messages "message" "messages" true}}');
      assert.equal(template({messages: 1}), '1 message');
    });
  });

  describe('ordinalize', function() {
    it('should return an ordinalized string.', function() {
      assert.equal(hbs.compile('{{ordinalize 1}}')(), '1st');
      assert.equal(hbs.compile('{{ordinalize 3}}')(), '3rd');
      assert.equal(hbs.compile('{{ordinalize 11}}')(), '11th');
      assert.equal(hbs.compile('{{ordinalize 21}}')(), '21st');
      assert.equal(hbs.compile('{{ordinalize 29}}')(), '29th');
      assert.equal(hbs.compile('{{ordinalize 22}}')(), '22nd');
    });
  });
});
