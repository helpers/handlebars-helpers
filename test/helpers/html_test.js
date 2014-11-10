/**
 * Handlebars Helpers Tests: HTML Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

var rimraf = require('rimraf');
var path = require('path');

require('should');
var expect = require('chai').expect;
var nap = require('nap');

var Handlebars = require('handlebars');
var _ = require('lodash');

var options = {
  assets: 'assets/'
};
var helpers = require('../..')('html', options);
_.forOwn(helpers, function (value, key) { 
  Handlebars.registerHelper(key, value);
});


describe('ul', function() {
  describe('{{#ul context options}}', function() {
    it('should should return an unordered list', function() {
      var source = '{{#ul data class="names"}}{{firstName}} {{lastName}}{{/ul}}';
      var context = {
        data: [
          {firstName: 'Kif', lastName: 'Kroker'},
          {firstName: 'Zapp', lastName: 'Brannigan'}
        ]
      };
      var template = Handlebars.compile(source);
      template(context).should.equal('<ul class="names"><li>Kif Kroker</li>\n<li>Zapp Brannigan</li></ul>');
    });
  });
});

describe('ol', function() {
  describe('{{#ol context options}}', function() {
    it('should should return an ordered list', function() {
      var source = '{{#ol data class="names"}}{{firstName}} {{lastName}}{{/ol}}';
      var context = {
        data: [
          {firstName: 'Kif', lastName: 'Kroker'},
          {firstName: 'Zapp', lastName: 'Brannigan'}
        ]
      };
      var template = Handlebars.compile(source);
      template(context).should.equal('<ol class="names"><li>Kif Kroker</li>\n<li>Zapp Brannigan</li></ol>');
    });
  });
});

describe('html', function() {
  describe('nap', function() {

    before(function() {
      var helpers = require('../..')('html', options);
      _.forOwn(helpers, function (value, key) { 
        Handlebars.registerHelper(key, value);
      });
      nap({
        publicDir: path.resolve(__dirname, '../actual/'),
        mode: 'production',
        assets: {
          js: {
            test: [
              '/test/fixtures/assets/js/**/*.js'
            ]
          },
          css: {
            test: [
              '/test/fixtures/assets/styles/**/*.css'
            ]
          }
        }
      });
      nap.package();
    });

    after(function(done) {
      var filename = path.join(__dirname, '../actual/assets');
      rimraf(filename, done);
    });

    it('should generate js file', function(){
      var template = '{{{napJs "test"}}}';
      template = Handlebars.compile(template)();
      var script = nap.js('test').replace('/assets/', options.assets);
      template.should.equal(script);
    });

    it('should generate css file', function(){
      var template = '{{{napCss "test"}}}';
      template = Handlebars.compile(template)();
      var script = nap.css('test').replace('/assets/', options.assets);
      template.should.equal(script);
    });

  });
});

// var expected = '<div>\n' + '  <p>\n' + '    <ul>\n' + '      <li><a href="#">Link</a></li>\n' + '    </ul>\n' + '  </p>\n' + '</div>';

// describe('prettify', function() {
//   describe('{{#prettify}}{{/prettify}}', function() {
//     it('Should prettify the output HTML.', function() {
//       var source = '{{#prettify}}<div><p><ul><li><a href="#">Link</a></li></ul></p></div>{{/prettify}}';
//       var template = Handlebars.compile(source);
//       template().should.equal(expected);
//     });
//   });
// });
