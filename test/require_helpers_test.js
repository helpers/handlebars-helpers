/*global require:true */

/**
 * Handlebars Helpers Tests: Helper Lib
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */


require('should');
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
