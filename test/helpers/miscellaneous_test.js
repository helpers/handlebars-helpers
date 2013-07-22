(function() {
  var Handlebars;

  require('should');

  Handlebars = require('handlebars');

  require('../../lib/helpers/helpers-miscellaneous').register(Handlebars, {});

  describe('default', function() {
    return describe('{{default title "Not title available."}}', function() {
      return it('should provide a default or fallback value if a value doesn\'t exist.', function() {
        var context, source, template;
        source = '{{default title "No title available."}}';
        template = Handlebars.compile(source);
        context = {
          title: null
        };
        return template(context).should.equal('No title available.');
      });
    });
  });

}).call(this);
