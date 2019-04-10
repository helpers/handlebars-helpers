const assert = require('assert');
const hbs = require('handlebars').create();
const helpers = require('..');
helpers.object({ handlebars: hbs });
helpers.url({ handlebars: hbs });

describe('url', function() {
  describe('urlResolve', function() {
    it('should resolve a URL', function() {
      const fn1 = hbs.compile('{{urlResolve "/one/two/three" "four"}}');
      assert.equal(fn1(), '/one/two/four');

      const fn2 = hbs.compile('{{urlResolve "http://example.com/" "/one"}}');
      assert.equal(fn2(), 'http://example.com/one');

      const fn3 = hbs.compile('{{urlResolve "http://example.com/one" "/two"}}');
      assert.equal(fn3(), 'http://example.com/two');
    });

    it('should return an empty string for a non-string parameter', function() {
      const fn = hbs.compile('{{urlResolve value}}');
      assert.equal(fn({ value: {} }), '');
    });
  });

  describe('stripQuerystring', function() {
    it('should return a url without its query string.', function() {
      const fn = hbs.compile('{{stripQuerystring "http://example.com?tests=true"}}');
      assert.equal(fn(), 'http://example.com');
    });

    it('should return an empty string for a non-string parameter', function() {
      const fn = hbs.compile('{{stripQuerystring value}}');
      assert.equal(fn({ value: {} }), '');
    });
  });

  describe('encodeURI', function() {
    it('should return an encoded uri string.', function() {
      const fn = hbs.compile('{{encodeURI "http://example.com?comment=Thyme &time=again"}}');
      assert.equal(fn(), 'http%3A%2F%2Fexample.com%3Fcomment%3DThyme%20%26time%3Dagain');
    });

    it('should return an empty string for a non-string parameter', function() {
      const fn = hbs.compile('{{encodeURI value}}');
      assert.equal(fn({ value: {} }), '');
    });
  });

  describe('escape', function() {
    it('should return an escaped uri string.', function() {
      const fn = hbs.compile('{{escape "Thyme & time = again"}}');
      assert.equal(fn(), 'Thyme%20%26%20time%20%3D%20again');
    });

    it('should return an empty string for a non-string parameter', function() {
      const fn = hbs.compile('{{escape value}}');
      assert.equal(fn({ value: {} }), '');
    });
  });

  describe('decodeURI', function() {
    it('should return an decoded uri string.', function() {
      const fn = hbs.compile('{{{decodeURI "http%3A%2F%2Fexample.com%3Fcomment%3DThyme%20%26time%3Dagain"}}}');
      assert.equal(fn(), 'http://example.com?comment=Thyme &time=again');
    });

    it('should return an empty string for a non-string parameter', function() {
      const fn = hbs.compile('{{decodeURI value}}');
      assert.equal(fn({ value: {} }), '');
    });
  });

  describe('urlParse', function() {
    it('should take a string, and return an object stringified to JSON.', function() {
      const fn = hbs.compile('{{{JSONstringify (urlParse "http://foo.com/bar/baz?key=value" "json")}}}');

      assert.deepEqual(fn(), '{"protocol":"http:","slashes":true,"auth":null,"host":"foo.com","port":null,"hostname":"foo.com","hash":null,"search":"?key=value","query":"key=value","pathname":"/bar/baz","path":"/bar/baz?key=value","href":"http://foo.com/bar/baz?key=value"}');
    });

    it('should return an empty string for a non-string parameter', function() {
      const fn = hbs.compile('{{urlParse value}}');
      assert.equal(fn({ value: {} }), '');
    });
  });

  describe('strip protocol', function() {
    it('should take an http url and return without the protocol', function() {
      const data = { testUrl: 'http://foo.bar' };
      const fn = hbs.compile('{{stripProtocol testUrl}}');
      assert.equal(fn(data), '//foo.bar/');
    });

    it('strip https protocol', function() {
      const data = { testUrl: 'https://foo.bar' };
      const fn = hbs.compile('{{stripProtocol testUrl}}');
      assert.equal(fn(data), '//foo.bar/');
    });

    it('should leave a relative url unchanged', function() {
      const expected = 'path/to/file';
      const data = { testUrl: expected };
      const fn = hbs.compile('{{stripProtocol testUrl}}');
      assert.equal(fn(data), expected);
    });

    it('should leave an absolute url unchanged', function() {
      const expected = '/path/to/file';
      const data = { testUrl: expected };
      const fn = hbs.compile('{{stripProtocol testUrl}}');
      assert.equal(fn(data), expected);
    });

    it('should return an empty string for a non-string parameter', function() {
      const fn = hbs.compile('{{stripProtocol value}}');
      assert.equal(fn({ value: {} }), '');
    });
  });
});
