/*global require:true */

/**
 * Handlebars Helpers Tests: Helper Lib
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

var expect = require('chai').expect;

var Handlebars = require('handlebars');
var helpers = require('../');

var config = {
  Handlebars: Handlebars
};

helpers(config);

describe('loaded helpers', function() {

  xit('should have loaded helpers into Library', function() {
    expect(helpers.Library.helpers.length).to.be.gt(0);
  });

  xit('should have loaded helpers into Handlebars', function() {
    console.log(Handlebars);
    expect(Handlebars.helpers.length).to.be.gt(0);
  });
});
