'use strict';

require('mocha');
var assert = require('assert');
var HTML = require('../lib/utils/html');

describe('html', function() {
  describe('parseAttributes', function() {
    it('should parse attributes', function() {
      assert.equal(HTML.parseAttributes({a: 'b', c: 200 }), 'a="b" c="200"');
    });
  });
});

