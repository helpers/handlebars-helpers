'use strict';

require('should');
var hbs = require('handlebars');
var helpers = require('..');
helpers.data({handlebars: hbs});

describe('stringify', function() {
  it('should stringify an object:', function() {
    var fn = hbs.compile('{{{stringify data}}}');
    var res = fn({data: {name: "Halle", age: 4, userid: "Nicole"}});
    res.should.equal('{\n  "name": "Halle",\n  "age": 4,\n  "userid": "Nicole"\n}');
  });
});

describe('parseJSON', function() {
  it('should parse a JSON string:', function() {
    var fn = hbs.compile('{{#parseJSON jsonString}}{{name}}{{/parseJSON}}');
    fn({jsonString: "{\"name\": \"Fry\"}"}).should.equal('Fry');
  });
});
