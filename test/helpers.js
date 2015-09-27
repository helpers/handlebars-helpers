'use strict';

require('mocha');
require('should');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var hbs = require('handlebars');
var helpers = require('..');

describe('helpers()', function() {
  it('should should return all helpers:', function() {
    assert(Object.keys(helpers()).length > 100);
  });

  it('should return all helpers when options are passed:', function () {
    assert(Object.keys(helpers({})).length > 100);
  });

  it('should register helpers with handlebars:', function() {
    helpers();
    hbs.helpers.should.have.properties(['contains', 'default']);
  });

  it('should support passing an instance of handlebars:', function () {
    hbs.registerHelper('foo', function () {});
    var opts = {handlebars: hbs};
    assert(helpers(opts).hasOwnProperty('foo'));
  });

  it('should return a single collection:', function() {
    helpers.math().should.have.properties(['add', 'subtract', 'divide']);
  });

  it('should register collection helpers with handlebars:', function() {
    helpers.math();
    hbs.helpers.should.have.properties(['add', 'subtract', 'divide']);
  });
});
