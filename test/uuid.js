'use strict';

require('mocha');
const assert = require('assert');
const uuid = require('../lib/uuid');

describe('uuid', function() {
  describe('generate', function() {
    it('should return an empty string if undefined', function() {
      assert.match(uuid.UUID(), /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);
    });
  });
});
