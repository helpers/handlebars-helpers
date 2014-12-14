'use strict';

var should = require('should');
var Handlebars = require('handlebars');
var helpers = require('..');

Handlebars.registerHelper(helpers('misc'));

describe('{{default}}', function () {
  it('should provide a default or fallback value if a value doesn\'t exist.', function () {
    var template = Handlebars.compile('{{default title "No title available."}}');
    template({title: null}).should.equal('No title available.');
  });
});

describe('{{noop}}', function () {
  it('should be a noop', function () {
    var template = Handlebars.compile('{{#noop}}{{message}}{{/noop}}');
    template({message: 'This is a test'}).should.equal('This is a test');
  });
});

describe('{{withHash}}', function () {
  it('should return an empty sting', function () {
    var template = Handlebars.compile('{{#withHash}}{{message}}{{/withHash}}');
    template({message: 'This is a test'}).should.be.String.and.equal('');
  });
  it('should return string from the newly created context', function () {
    var template = Handlebars.compile('{{#withHash message="test"}}{{message}}{{/withHash}}');
    template({message: 'This is a test'}).should.be.equal('test');
  });
  it('should return string from the parent context', function () {
    var template = Handlebars.compile('{{#withHash message=this.message}}{{message}}{{/withHash}}');
    template({message: 'This is a test'}).should.be.equal('This is a test');
  });
  it('should add two attributes to the new context', function () {
    var template = Handlebars.compile('{{#withHash subject="Feedback" message="Hello!"}}{{subject}} - {{message}}{{/withHash}}');
    template({}).should.be.equal('Feedback - Hello!');
  });
});
