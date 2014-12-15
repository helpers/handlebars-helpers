'use strict';

var should = require('should');
var helpers = require('..');
var path = require('path');
var _ = require('lodash');
var fs = require('fs');

describe('helpers()', function() {
  it('should should return all helpers:', function() {
    var files = fs.readdirSync('lib/helpers').map(function(fp) {
      if (/\.js$/.test(fp) && fp !== 'index.js') {
        return path.basename(fp, path.extname(fp));
      }
    }).filter(Boolean);

    var all = helpers();
    var combined = files.reduce(function (acc, name) {
      return _.extend(acc, helpers(name));
    }, {});

    Object.keys(all).should.eql(Object.keys(combined));
  });
});
