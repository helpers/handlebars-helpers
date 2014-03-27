/**
 * Handlebars Helpers Tests: Data Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

// node_modules
require('should');
var Handlebars = require('handlebars');
var helpers = require('../../');

var config = {
  Handlebars: Handlebars
};

helpers(config);


// Local utils
var Utils = require('../../src/utils/utils');

var context = {
  foo: {
    bar: 'boo'
  }
};

describe('value', function() {
  describe('{{value filepath prop}}', function() {
    it('should return the value for a given JSON property', function() {
      var source = '{{value "test/fixtures/payload.json" "age"}}';
      var template = Handlebars.compile(source);
      template().should.equal('30');
    });
  });
});

describe('prop', function() {
  describe('{{prop filepath}}', function() {
    it('should return a string representation of a JSON property', function() {
      var source = '{{prop "test/fixtures/payload.json" "name"}}';
      var template = Handlebars.compile(source);
      template().should.equal('{"name":"Philip J. Fry"}');
    });
  });
});

describe('parseJSON', function() {
  describe('{{#parseJSON string}}', function() {
    it('should render JSON data given a JSON string', function() {
      var source = '{{#parseJSON jsonString}}{{name}}{{/parseJSON}}';
      var template = Handlebars.compile(source);
      var context = {
        jsonString: "{\"name\": \"Fry\"}"
      };
      template(context).should.equal('Fry');
    });
  });
});
