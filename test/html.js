'use strict';

var should = require('should');
var Handlebars = require('handlebars');
var helpers = require('..');

Handlebars.registerHelper(helpers('html'));

var locals = {data: [{aaa: 'AAA', bbb: 'BBB'}, {aaa: 'CCC', bbb: 'DDD'}]};

describe('ul', function() {
  it('should should return an unordered list', function() {
    var template = Handlebars.compile('{{#ul data class="names"}}{{aaa}} {{bbb}}{{/ul}}');
    template(locals).should.equal('<ul class="names"><li>AAA BBB</li>\n<li>CCC DDD</li></ul>');
  });
});

describe('ol', function() {
  it('should should return an ordered list', function() {
    var template = Handlebars.compile('{{#ol data class="names"}}{{aaa}} {{bbb}}{{/ol}}');
    template(locals).should.equal('<ol class="names"><li>AAA BBB</li>\n<li>CCC DDD</li></ol>');
  });
});

describe('should return a string with html tags removed', function() {
  it('should should return an ordered list', function() {
    var local = {title: 'Revisions to the <em class="test">Agriculture Act</em>'};
    var template = Handlebars.compile('<title>{{#striptags}}{{{title}}}{{/striptags}}</title>');
    template(local).should.equal('<title>Revisions to the Agriculture Act</title>');
  });
});
