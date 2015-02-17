'use strict';

var should = require('should');
var helpers = require('..');
var path = require('path');
var _ = require('lodash');
var fs = require('fs');

describe('helpers()', function() {
  it('should should return all helpers:', function() {
    (Object.keys(helpers()).length > 100).should.be.true;
  });

  it('should return a single collection:', function() {
    helpers('path').should.have.properties(['relative', 'extname']);
    helpers('math').should.have.properties(['add', 'subtract', 'divide']);
    helpers('code').should.have.properties(['embed', 'gist']);
  });

  it('should return an array of collections:', function() {
    helpers(['math', 'code']).should.have.properties(['add', 'subtract', 'divide', 'embed', 'gist']);
  });
});
