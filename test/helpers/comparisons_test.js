/**
 * Handlebars Helpers Tests: Comparison Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */


require('should');
var Handlebars = require('handlebars');
require('../../lib/helpers/helpers-comparisons').register(Handlebars, {});


describe('contains', function() {
  describe('{{#contains bender "z"}} Kiss my shiny metal ass! {{else}} Never mind :( {{/contains}}', function() {
    it('should render a block if the condition is true.', function() {
      var source = '{{#contains bender "great"}}Kiss my shiny metal ass!{{else}}Never mind :({{/contains}}';
      var template = Handlebars.compile(source);
      var context = {
        bender: 'Bender is great!'
      };
      template(context).should.equal('Kiss my shiny metal ass!');
    });
  });
  describe('{{#contains bender "z"}} Kiss my shiny metal ass! {{else}} Never mind :( {{/contains}}', function() {
    it('should render a block if the condition is true.', function() {
      var source = '{{#contains bender "zzz"}}Kiss my shiny metal ass!{{else}}Never mind :({{/contains}}';
      var template = Handlebars.compile(source);
      var context = {
        bender: 'Bender is great!'
      };
      template(context).should.equal('Never mind :(');
    });
  });
});

describe('is', function() {
  describe('{{#is bender "great"}} Kiss my shiny metal ass! {{else}} Never mind :( {{/is}}', function() {
    it('should render a block if the condition is true.', function() {
      var source = '{{#is bender "great"}}Kiss my shiny metal ass!{{else}}Never mind :({{/is}}';
      var template = Handlebars.compile(source);
      var context = {
        bender: 'great'
      };
      template(context).should.equal('Kiss my shiny metal ass!');
    });
  });
});

describe('isnt', function() {
  describe('{{#isnt number 2}} Kiss my great metal ass! {{else}} Never mind :( {{/isnt}}', function() {
    it('should render a block if the condition is not true.', function() {
      var source = '{{#isnt number 2}}Kiss my great metal ass!{{else}}Never mind :({{/isnt}}';
      var template = Handlebars.compile(source);
      var context = {
        number: 3
      };
      template(context).should.equal('Kiss my great metal ass!');
    });
  });
});

describe('gt', function() {
  describe('{{#gt number 8}} Kiss my glorious metal ass! {{else}} Never mind :( {{/gt}}', function() {
    it('should render a block if the value is greater than a given number.', function() {
      var source = '{{#gt number 8}}Kiss my glorious metal ass!{{else}}Never mind :({{/gt}}';
      var template = Handlebars.compile(source);
      var context = {
        number: 9
      };
      template(context).should.equal('Kiss my glorious metal ass!');
    });
  });
});

describe('gte', function() {
  describe('{{#gte number 8}} Kiss my perfect metal ass! {{else}} Never mind :( {{/gte}}', function() {
    it('should render a block if the value is greater or equal than a given number.', function() {
      var source = '{{#gte number 8}}Kiss my perfect metal ass!{{else}}Never mind :({{/gte}}';
      var template = Handlebars.compile(source);
      var context = {
        number: 8
      };
      template(context).should.equal('Kiss my perfect metal ass!');
    });
  });
});

describe('lt', function() {
  describe('{{#lt number 8}} Kiss my golden metal ass! {{else}} Never mind :( {{/lt}}', function() {
    it('should render a block if the value is less than a given number.', function() {
      var source = '{{#lt number 8}}Kiss my golden metal ass!{{else}}Never mind :({{/lt}}';
      var template = Handlebars.compile(source);
      var context = {
        number: 2
      };
      template(context).should.equal('Kiss my golden metal ass!');
    });
  });
});

describe('lte', function() {
  describe('{{#lte number 8}} Kiss my big metal ass! {{else}} Never mind :( {{/lte}}', function() {
    it('should render a block if the value is less or equal than a given number.', function() {
      var source = '{{#lte number 8}}Kiss my big metal ass!{{else}}Never mind :({{/lte}}';
      var template = Handlebars.compile(source);
      var context = {
        number: 8
      };
      template(context).should.equal('Kiss my big metal ass!');
    });
  });
});

describe('or', function() {
  describe('{{#or great magnificent}} Kiss my perfect metal ass! {{else}} Never mind :( {{/or}}', function() {
    it('should render a block if one of the values is truthy.', function() {
      var source = '{{#or great magnificent}}Kiss my perfect metal ass!{{else}}Never mind :({{/or}}';
      var template = Handlebars.compile(source);
      var context = {
        great: false,
        magnificent: true
      };
      template(context).should.equal('Kiss my perfect metal ass!');
    });
  });
});

describe('and', function() {
  describe('{{#and great magnificent}} Kiss my glorious metal ass! {{else}} Never mind :( {{/and}}', function() {
    it('should render a block if both values are truthy.', function() {
      var source = '{{#and great magnificent}}Kiss my glorious metal ass!{{else}}Never mind :({{/and}}';
      var template = Handlebars.compile(source);
      var context = {
        great: true,
        magnificent: true
      };
      template(context).should.equal('Kiss my glorious metal ass!');
    });
  });
});
