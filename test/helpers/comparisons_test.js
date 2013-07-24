(function() {
  var Handlebars;

  require('should');

  Handlebars = require('handlebars');

  require('../../lib/helpers/helpers-comparisons').register(Handlebars, {});

  describe('is', function() {
    return describe('{{#is bender "great"}} \n\
    Kiss my shiny metal ass! \n\
  {{else}} \n\
    Never mind :( \n\
  {{/is}}', function() {
      return it('should render a block if the condition is true.', function() {
        var context, source, template;
        source = '{{#is bender "great"}}Kiss my shiny metal ass!{{else}}Never mind :({{/is}}';
        template = Handlebars.compile(source);
        context = {
          bender: 'great'
        };
        return template(context).should.equal('Kiss my shiny metal ass!');
      });
    });
  });

  describe('isnt', function() {
    return describe('{{#isnt number 2}} \n\
    Kiss my great metal ass! \n\
  {{else}} \n\
    Never mind :( \n\
  {{/isnt}}', function() {
      return it('should render a block if the condition is not true.', function() {
        var context, source, template;
        source = '{{#isnt number 2}}Kiss my great metal ass!{{else}}Never mind :({{/isnt}}';
        template = Handlebars.compile(source);
        context = {
          number: 3
        };
        return template(context).should.equal('Kiss my great metal ass!');
      });
    });
  });

  describe('gt', function() {
    return describe('{{#gt number 8}} \n\
    Kiss my glorious metal ass! \n\
  {{else}} \n\
    Never mind :( \n\
  {{/gt}}', function() {
      return it('should render a block if the value is greater than a given number.', function() {
        var context, source, template;
        source = '{{#gt number 8}}Kiss my glorious metal ass!{{else}}Never mind :({{/gt}}';
        template = Handlebars.compile(source);
        context = {
          number: 9
        };
        return template(context).should.equal('Kiss my glorious metal ass!');
      });
    });
  });

  describe('gte', function() {
    return describe('{{#gte number 8}} \n\
    Kiss my perfect metal ass! \n\
  {{else}} \n\
    Never mind :( \n\
  {{/gte}}', function() {
      return it('should render a block if the value is greater or equal than a given number.', function() {
        var context, source, template;
        source = '{{#gte number 8}}Kiss my perfect metal ass!{{else}}Never mind :({{/gte}}';
        template = Handlebars.compile(source);
        context = {
          number: 8
        };
        return template(context).should.equal('Kiss my perfect metal ass!');
      });
    });
  });

  describe('lt', function() {
    return describe('{{#lt number 8}} \n\
    Kiss my golden metal ass! \n\
  {{else}} \n\
    Never mind :( \n\
  {{/lt}}', function() {
      return it('should render a block if the value is less than a given number.', function() {
        var context, source, template;
        source = '{{#lt number 8}}Kiss my golden metal ass!{{else}}Never mind :({{/lt}}';
        template = Handlebars.compile(source);
        context = {
          number: 2
        };
        return template(context).should.equal('Kiss my golden metal ass!');
      });
    });
  });

  describe('lte', function() {
    return describe('{{#lte number 8}} \n\
    Kiss my big metal ass! \n\
  {{else}} \n\
    Never mind :( \n\
  {{/lte}}', function() {
      return it('should render a block if the value is less or equal than a given number.', function() {
        var context, source, template;
        source = '{{#lte number 8}}Kiss my big metal ass!{{else}}Never mind :({{/lte}}';
        template = Handlebars.compile(source);
        context = {
          number: 8
        };
        return template(context).should.equal('Kiss my big metal ass!');
      });
    });
  });

  describe('or', function() {
    return describe('{{#or great magnificent}} \n\
    Kiss my perfect metal ass! \n\
  {{else}} \n\
    Never mind :( \n\
  {{/or}}', function() {
      return it('should render a block if one of the values is truthy.', function() {
        var context, source, template;
        source = '{{#or great magnificent}}Kiss my perfect metal ass!{{else}}Never mind :({{/or}}';
        template = Handlebars.compile(source);
        context = {
          great: false,
          magnificent: true
        };
        return template(context).should.equal('Kiss my perfect metal ass!');
      });
    });
  });

  describe('and', function() {
    return describe('{{#and great magnificent}} \n\
    Kiss my glorious metal ass! \n\
  {{else}} \n\
    Never mind :( \n\
  {{/and}}', function() {
      return it('should render a block if both values are truthy.', function() {
        var context, source, template;
        source = '{{#and great magnificent}}Kiss my glorious metal ass!{{else}}Never mind :({{/and}}';
        template = Handlebars.compile(source);
        context = {
          great: true,
          magnificent: true
        };
        return template(context).should.equal('Kiss my glorious metal ass!');
      });
    });
  });

}).call(this);
