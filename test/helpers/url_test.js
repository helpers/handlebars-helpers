/**
 * Handlebars Helpers Tests: URL Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

// node_modules
require('should');
var Handlebars = require('handlebars');

// Local helpers
require('../../lib/helpers/helpers-url').register(Handlebars, {});

var source, template;

describe('urlresolve', function() {
  describe('{{urlresolve base href}}', function() {
    it('should take a base URL, and a href URL,' + 'and resolve them as a browser would for an anchor tag', function() {
      source = '{{urlresolve "/one/two/three" "four"}}';
      template = Handlebars.compile(source);
      template().should.equal('/one/two/four');
    });
    it('should take a base URL, and a href URL, and resolve them as a browser would for an anchor tag', function() {
      source = '{{urlresolve "http://example.com/" "/one"}}';
      template = Handlebars.compile(source);
      template().should.equal('http://example.com/one');
    });
    it('should take a base URL, and a href URL, and resolve them as a browser would for an anchor tag', function() {
      source = '{{urlresolve "http://example.com/one" "/two"}}';
      template = Handlebars.compile(source);
      template().should.equal('http://example.com/two');
    });
  });
});

// describe('urlparse', function() {
//   describe('{{urlparse base href}}', function() {
//     it('should take a URL string, and return an object stringified to JSON.', function() {
//       var source = '{{urlparse "http://foo.com/bar/baz?key=value" "json"}}';
//       var template = Handlebars.compile(source);
//       template().should.equal("{\"protocol\":\"http:\",\"slashes\":true,\"auth\":null,\"host\":\"foo.com\",\"port\":null,\"hostname\":\"foo.com\",\"hash\":null,\"search\":\"?key=value\",\"query\":\"key=value\",\"pathname\":\"/bar/baz\",\"path\":\"/bar/baz?key=value\",\"href\":\"http://foo.com/bar/baz?key=value\"}");
//     });
//   });
// });

