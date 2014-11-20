/**
 * Handlebars Helpers Tests: Data Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

// node_modules
require('should');
var Handlebars = require('handlebars');

// Local helpers
require('../../lib/helpers/helpers-data').register(Handlebars, {});

// Local utils
var Utils = require('../../lib/utils/utils');


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
      template().should.equal('{\n  "name": "Philip J. Fry"\n}');
    });
  });
});

describe('stringify', function() {
  describe('{{stringify filepath}}', function() {
    it('should return a string representation of the content of a JSON file', function() {
      var source = '{{stringify "test/fixtures/payload.json"}}';
      var template = Handlebars.compile(source);
      template().should.equal('{\n  "name": "Philip J. Fry",\n  "age": 30,\n  "userid": "Fryster"\n}');
    });
  });

  describe('{{stringify object}}', function() {
    it('should return a string representation of an object', function() {
      var source = '{{stringify data}}';
      var template = Handlebars.compile(source);
      var context = {
        data: {
          name: "Philip J. Fry",
          age: 30,
          userid: "Fryster"
        }
      };
      template(context).should.equal('{\n  "name": "Philip J. Fry",\n  "age": 30,\n  "userid": "Fryster"\n}');
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
