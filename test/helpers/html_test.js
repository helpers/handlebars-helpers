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
var Handlebars = require('handlebars');
var helpers = require('../../');

var config = {
  Handlebars: Handlebars
};

helpers(config);

var options = {
  assets: 'assets/'
};

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
