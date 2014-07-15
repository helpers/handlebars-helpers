/**
 * Handlebars Helpers Tests: HTML
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013, 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */


require('should');
var HTML = require('../../lib/utils/html');
var Handlebars = require('handlebars');


var content, expected, data, actual;

describe('html', function() {
  describe('parseAttributes', function() {
      it('should return an string with the content of key1="value1" key2="value2"', function() {
        data = {
          a: 'b',
          c: 200
        };
        expected = 'a="b" c="200"';
        actual = HTML.parseAttributes(data);

        actual.should.eql(expected);
      });
  });
});

