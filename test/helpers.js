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
    assert(hbs.helpers.hasOwnProperty('contains'));
    assert(hbs.helpers.hasOwnProperty('default'));
  });

  it('should get the specified collections', function() {
    var res = helpers(['string', 'array'], {handlebars: hbs.create()});
    assert(res.hasOwnProperty('replace'));
    assert(res.hasOwnProperty('reverse'));
    assert(res.hasOwnProperty('some'));
    assert(res.hasOwnProperty('last'));
    assert(!res.hasOwnProperty('dirname'));
    assert(!res.hasOwnProperty('embed'));
  });

  it('should get only the specified collection', function() {
    var res = helpers('string', {handlebars: hbs.create()});

    assert(res.hasOwnProperty('replace'));
    assert(res.hasOwnProperty('reverse'));
    assert(res.hasOwnProperty('prepend'));
    assert(!res.hasOwnProperty('some'));
    assert(!res.hasOwnProperty('last'));
    assert(!res.hasOwnProperty('dirname'));
  });

  it('should support passing an instance of handlebars:', function() {
    helpers({handlebars: hbs});
    hbs.registerHelper('foo', function() {});
    assert(hbs.helpers.hasOwnProperty('foo'));
  });

  it('should return a single collection:', function() {
    var res = helpers.math();
    assert(res.hasOwnProperty('add'));
    assert(res.hasOwnProperty('subtract'));
    assert(res.hasOwnProperty('divide'));
  });

  it('should register collection helpers with handlebars:', function() {
    helpers.math();
    assert(hbs.helpers.hasOwnProperty('add'));
    assert(hbs.helpers.hasOwnProperty('subtract'));
    assert(hbs.helpers.hasOwnProperty('divide'));
  });
});
