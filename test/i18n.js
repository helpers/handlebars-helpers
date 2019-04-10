const assert = require('assert');
const hbs = require('handlebars').create();
const helpers = require('..');
helpers.i18n({ handlebars: hbs });

const context = {language: 'en', en: {key: 'value', a: {b: 'c'}}, fr: {key: 'valeur'}};

describe('i18n', function() {
  it('should throw an error when key is not a string.', function() {
    assert.throws(function() {
      hbs.compile('{{#i18n}}{{/i18n}}')();
    });
  });

  it('should throw an error when language parameter is not a string.', function() {
    assert.throws(function() {
      hbs.compile('{{#i18n "key"}}{{/i18n}}')();
    });
  });

  it('should throw an error when the language is not found.', function() {
    assert.throws(function() {
      const ctx = {language: 'foo', en: {key: 'value'}, fr: {key: 'valeur'}};
      hbs.compile('{{#i18n "key"}}{{/i18n}}')(ctx);
    });
  });

  it('should throw an error when a key is not found.', function() {
    assert.throws(function() {
      const ctx = {language: 'en', en: {key: 'value'}, fr: {key: 'valeur'}};
      hbs.compile('{{#i18n "foo"}}{{/i18n}}')(ctx);
    });
  });

  it('should take a key and return for the default language', function() {
    const fn = hbs.compile('{{#i18n "key"}}{{/i18n}}');
    assert.equal(fn(context), 'value');
  });

  it('should use options passed on the context', function() {
    const fn = hbs.compile('{{#i18n "key"}}{{/i18n}}');
    const context = {en: {key: 'value'}, fr: {key: 'valeur'}};
    context.options = {language: 'en'};
    assert.equal(fn(context), 'value');
  });

  it('should take a key and return for the override language', function() {
    const fn = hbs.compile('{{#i18n "key" language="fr"}}{{/i18n}}');
    assert.equal(fn(context), 'valeur');
  });

  it('should support using dot notation for the key', function() {
    const fn = hbs.compile('{{#i18n "a.b"}}{{/i18n}}');
    assert.equal(fn(context), 'c');
  });
});
