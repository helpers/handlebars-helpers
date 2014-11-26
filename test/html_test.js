'use strict';

var rimraf = require('rimraf');
var path = require('path');
var should = require('should');
var Handlebars = require('handlebars');
var _ = require('lodash');

var options = {
  assets: 'assets/'
};
var helpers = require('..')('html', options);
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
