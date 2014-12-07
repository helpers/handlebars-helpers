'use strict';

var should = require('should');
var Handlebars = require('handlebars');
var _ = require('lodash');
var helpers = require('..');

Handlebars.registerHelper(helpers('i18n'));

var context = {language: 'en', en: {key: 'value'}, fr: {key: 'valeur'}};

describe('{{i18n}}', function () {
  it('should take a key and return for the default language', function () {
    var source = '{{#i18n "key"}}{{/i18n}}';
    var template = Handlebars.compile(source);
    template(context).should.equal('value');
  });
  it('should take a key and return for the override language', function () {
    var source = '{{#i18n "key" language="fr"}}{{/i18n}}';
    var template = Handlebars.compile(source);
    template(context).should.equal('valeur');
  });
});
