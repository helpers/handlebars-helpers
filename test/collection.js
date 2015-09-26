'use strict';

require('should');
var hbs = require('handlebars');
var helpers = require('..');
helpers.collection({handlebars: hbs});

describe('collection', function() {
  describe('iterate', function() {
    describe('object', function() {
      it('should iterate over a plain object:', function() {
        var obj = {a: 'aaa', b: 'bbb', c: 'ccc'};

        var fn = hbs.compile('{{#iterate obj}}{{.}}{{/iterate}}');
        fn({obj: obj}).should.equal('aaabbbccc');
      });

      it('should expose `@key`:', function() {
        var obj = {a: 'aaa', b: 'bbb', c: 'ccc'};

        var fn = hbs.compile('{{#iterate obj}}{{@key}}{{/iterate}}');
        fn({obj: obj}).should.equal('abc');
      });

      it('should render the inverse block when falsey:', function() {
        var obj = {};

        var fn = hbs.compile('{{#iterate obj}}A{{else}}B{{/iterate}}');
        fn().should.equal('B');
      });
    });

    describe('array', function() {
      it('should iterate over an array:', function() {
        var arr = [{name: 'a'}, {name: 'b'}, {name: 'c'}];

        var fn = hbs.compile('{{#iterate arr}}{{name}}{{/iterate}}');
        fn({arr: arr}).should.equal('abc');
      });

      it('should expose `@index`:', function() {
        var arr = [{name: 'a'}, {name: 'b'}, {name: 'c'}];

        var fn = hbs.compile('{{#iterate arr}}{{@index}}{{/iterate}}');
        fn({arr: arr}).should.equal('012');
      });
    });
  });
});