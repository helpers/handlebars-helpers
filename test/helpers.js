'use strict';

require('mocha');
var assert = require('assert');
var hbs = require('handlebars');
var helpers = require('..');

describe('helpers', function() {
  it('should should return all helpers:', function() {
    assert(Object.keys(helpers()).length > 100);
  });

  it('should return all helpers when options are passed:', function() {
    assert(Object.keys(helpers({})).length > 100);
  });

  it('should register helpers with handlebars:', function() {
    helpers({handlebars: hbs});
    hbs.helpers.should.have.properties(['contains', 'default']);
  });

  it('should get the specified collections', function() {
    var res = helpers(['string', 'array'], {handlebars: hbs.create()});
    hbs.helpers.should.have.properties(['replace', 'reverse', 'some', 'last']);
    res.should.not.have.properties(['dirname', 'embed']);
  });

  it('should get only the specified collection', function() {
    var res = helpers('string', {handlebars: hbs.create()});
    res.should.have.properties(['replace', 'reverse']);
    res.should.not.have.properties(['some', 'last', 'dirname']);
  });

  it('should support passing an instance of handlebars:', function() {
    helpers({handlebars: hbs});
    hbs.registerHelper('foo', function() {});
    assert(hbs.helpers.hasOwnProperty('foo'));
  });

  it('should return a single collection:', function() {
    helpers.math().should.have.properties(['add', 'subtract', 'divide']);
  });

  it('should register collection helpers with handlebars:', function() {
    helpers.math();
    hbs.helpers.should.have.properties(['add', 'subtract', 'divide']);
  });
});
