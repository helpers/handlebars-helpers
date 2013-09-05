(function() {
  var Handlebars, context;

  require('should');

  Handlebars = require('handlebars');

  require('../../lib/helpers/helpers-i18n').register(Handlebars, {});

  context = {
    language: "en",
    en: {
      key: "value"
    },
    fr: {
      key: "valeur"
    }
  };

  describe("i18n", function() {
    return describe("{{#i18n}}{{/i18n}}", function() {
      it("should take a key and return for the default language", function() {
        var source, template;
        source = "{{#i18n 'key'}}{{/i18n}}";
        template = Handlebars.compile(source);
        return template(context).should.equal("value");
      });
      return it("should take a key and return for the override language", function() {
        var source, template;
        source = "{{#i18n 'key' language='fr'}}{{/i18n}}";
        template = Handlebars.compile(source);
        return template(context).should.equal("valeur");
      });
    });
  });

}).call(this);
