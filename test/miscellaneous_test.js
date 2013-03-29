(function() {
  var Assemble, Handlebars;

  require('should');

  Handlebars = require('handlebars');

  Assemble = require('../lib/helpers-lib');

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

  /*
  Assemble.Config.partialsPath = '../test/templates/'
  
  describe 'partial', ->
      describe '{{partial "some_template"}}', ->
          it 'should register and render a partial.', ->
              source   = '{{partial "some_template"}}'
              template = Handlebars.compile(source)
  
              template().should.equal 'A partial.'
  */


}).call(this);
