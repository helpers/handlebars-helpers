// node_modules
require('should');
var Handlebars = require('handlebars');
var helpers = require('../../');

var config = {
  Handlebars: Handlebars
};

helpers(config);


var context = {
  foo: {
    bar: 'boo'
  }
};

describe('_keys', function() {
  describe('{{_keys foo}}', function() {
    it('should return the keys of the specified object.', function() {
      var source = '{{_keys foo}}';
      var template = Handlebars.compile(source);
      template(context).should.equal('bar');
    });
  });
});

describe('_isObject', function() {
  describe('{{_isObject foo}}', function() {
    it('should return true if an object is defined.', function() {
      var source = '{{_isObject foo}}';
      var template = Handlebars.compile(source);
      template(context).should.equal('true');
    });
  });
});

describe('_isString', function() {
  describe('{{_isString foo}}', function() {
    it('should return true if a string is defined.', function() {
      var source = '{{_isString foo.bar}}';
      var template = Handlebars.compile(source);
      template(context).should.equal('true');
    });
  });
});
