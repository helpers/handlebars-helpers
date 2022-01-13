'use strict';

require('mocha');
const assert = require('assert');
const hbs = require('handlebars').create();
const codeHelpers = require('../lib/code');

hbs.registerHelper(codeHelpers);

describe('code', function() {
  describe('gist', function() {
    it('should return a gist script tag', function() {
      const fn = hbs.compile('{{{gist "abcdefg"}}}');
      assert.equal(fn(), '<script src="https://gist.github.com/abcdefg.js"></script>');
    });
  });

  describe('jsfiddle', function() {
    it('should return a jsfiddle embed link, with default tabs assigned', function() {
      const source = '{{{jsfiddle id="UXbas"}}}';
      const fn = hbs.compile(source);
      assert.equal(fn(), '<iframe width="100%" height="300" src="http://jsfiddle.net/UXbas/embedded/result,js,html,css/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>');
    });

    it('should throw an error if id is missing', function() {
      assert.throws(function() {
        hbs.compile('{{jsfiddle}}')();
      });
    });

    it('should return a jsfiddle embed link, with custom tabs assigned', function() {
      const source = '{{{jsfiddle id="UXbas" tabs="html,css"}}}';
      const fn = hbs.compile(source);
      assert.equal(fn(), '<iframe width="100%" height="300" src="http://jsfiddle.net/UXbas/embedded/html,css/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>');
    });
  });
});
