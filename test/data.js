'use strict';

var should = require('should');
var Handlebars = require('handlebars');

Handlebars.registerHelper(require('..')('data'));

describe('{{stringify}}', function() {
  it('should stringify an object:', function() {
    var template = Handlebars.compile('{{{stringify data}}}');
    var res = template({data: {name: "Halle", age: 4, userid: "Nicole"}});
    res.should.equal('{\n  "name": "Halle",\n  "age": 4,\n  "userid": "Nicole"\n}');
  });
});

describe('{{parseJSON}}', function() {
  it('should parse a JSON string:', function() {
    var template = Handlebars.compile('{{#parseJSON jsonString}}{{name}}{{/parseJSON}}');
    template({jsonString: "{\"name\": \"Fry\"}"}).should.equal('Fry');
  });
});
