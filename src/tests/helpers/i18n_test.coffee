require 'should'
Handlebars = require 'handlebars'
require('../../lib/helpers/helpers-i18n').register Handlebars, {}


context =
  language: "en"
  en:
    key: "value"
  fr:
    key: "valeur"


describe "i18n", ->
  describe "{{#i18n}}{{/i18n}}", ->
    it "should take a key and return for the default language", ->
      source = "{{#i18n 'key'}}{{/i18n}}"
      template = Handlebars.compile(source)
      template(context).should.equal "value"

    it "should take a key and return for the override language", ->
      source = "{{#i18n 'key' language='fr'}}{{/i18n}}"
      template = Handlebars.compile(source)
      template(context).should.equal "valeur"
