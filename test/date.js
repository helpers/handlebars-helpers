'use strict';

require('mocha');
const assert = require('assert');
const hbs = require('handlebars').create();
const dateHelpers = require('../lib/date');

hbs.registerHelper(dateHelpers);

describe('date', function() {
  describe('year', function() {
    it('should return the current year', function() {
      const currentYear = (new Date()).getFullYear().toString();
      // Sanity check
      assert(currentYear.match(/^2\d{3}$/));

      const fn = hbs.compile('{{year}}');
      assert.equal(fn({}), currentYear);
    });
  });
});
