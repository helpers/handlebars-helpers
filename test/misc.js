'use strict';

var should = require('should');
var hbs = require('handlebars');
var helpers = require('..');
helpers.misc({handlebars: hbs});

describe('default', function () {
  it('should provide a default or fallback value if a value doesn\'t exist.', function () {
    var fn = hbs.compile('{{default title "No title available."}}');
    fn({title: null}).should.equal('No title available.');
  });
});

describe('noop', function () {
  it('should be a noop', function () {
    var fn = hbs.compile('{{#noop}}{{message}}{{/noop}}');
    fn({message: 'This is a test'}).should.equal('This is a test');
  });
});

describe('withHash', function () {
  it('should return an empty sting', function () {
    var fn = hbs.compile('{{#withHash}}{{message}}{{/withHash}}');
    fn({message: 'This is a test'}).should.be.String.and.equal('');
  });
  it('should return string from the newly created context', function () {
    var fn = hbs.compile('{{#withHash message="test"}}{{message}}{{/withHash}}');
    fn({message: 'This is a test'}).should.be.equal('test');
  });
  it('should return string from the parent context', function () {
    var fn = hbs.compile('{{#withHash message=this.message}}{{message}}{{/withHash}}');
    fn({message: 'This is a test'}).should.be.equal('This is a test');
  });
  it('should add two attributes to the new context', function () {
    var fn = hbs.compile('{{#withHash subject="Feedback" message="Hello!"}}{{subject}} - {{message}}{{/withHash}}');
    fn({}).should.be.equal('Feedback - Hello!');
  });
});
