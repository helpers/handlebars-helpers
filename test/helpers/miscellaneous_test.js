/**
 * Handlebars Helpers Tests: Misc. Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
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

describe('default', function() {
  describe('{{default title "Not title available."}}', function() {
    it('should provide a default or fallback value if a value doesn\'t exist.', function() {
      var source = '{{default title "No title available."}}';
      var template = Handlebars.compile(source);
      var context = {
        title: null
      };
      return template(context).should.equal('No title available.');
    });
  });
});

//Library.Config.partialsPath = '../test/templates/';

xdescribe('partial', function() {
  beforeEach(function() {
    return delete Library.Handlebars.partials["some_template"];
  });
  describe('{{partial name data template}}', function() {
    it('should register and render a partial.', function() {
      var context = {
        data: {
          text: 'yay'
        },
        template: 'A partial {{text}}.'
      };
      var source = '{{partial "some_template" data template}}';
      var template = Handlebars.compile(source);
      return template(context).should.equal('A partial yay.');
    });
  });
  describe('{{partial name}}', function() {
    it('should register and render a partial.', function() {
      var source = '{{partial "some_template"}}';
      var template = Handlebars.compile(source);
      return template().should.equal('A partial.');
    });
  });
});
