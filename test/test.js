'use strict';

var should = require('should');
var Handlebars = require('handlebars');
var _ = require('lodash');

var helpers = require('..')();
_.forOwn(helpers, function (value, key) {
  Handlebars.registerHelper(key, value);
});

describe('loaded helpers', function() {
  it('should have prettify helper', function() {
    var source = '{{#prettify}}<div>Some HTML</div>{{/prettify}}';
    var template = Handlebars.compile(source);
    var content = template();
  });

  xit('should have repeat helper', function() {
    var source = "{{#repeat '10'}}<div>Some HTML</div>{{/repeat}}";
    var template = Handlebars.compile(source);
    var content = template();
  });
});
