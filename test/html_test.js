(function() {
  var Assemble, Handlebars;

  require('should');

  Handlebars = require('handlebars');

  Assemble = require('../lib/helpers-lib');

  describe('ul', function() {
    return describe('{{#ul list class="list"}} \n\
        {{this}} \n\
    {{/ul}}', function() {
      return it('should create an unordered list.', function() {
        var context, source, template;

        source = '{{#ul list class="list"}}{{this}}{{/ul}}';
        template = Handlebars.compile(source);
        context = {
          list: ['one']
        };
        return template(context).should.equal('<ul class="list"><li>one</li></ul>');
      });
    });
  });

  describe('ol', function() {
    return describe('{{#ol list class="list"}} \n\
        {{this}} \n\
    {{/ol}}', function() {
      return it('should create an ordered list.', function() {
        var context, source, template;

        source = '{{#ol list class="list"}}{{this}}{{/ol}}';
        template = Handlebars.compile(source);
        context = {
          list: ['boom']
        };
        return template(context).should.equal('<ol class="list"><li>boom</li></ol>');
      });
    });
  });

  describe('br', function() {
    return describe('{{br 4}}', function() {
      return it('should return <br> tags based on a count.', function() {
        var source, template;

        source = '{{br 4}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<br><br><br><br>');
      });
    });
  });

}).call(this);
