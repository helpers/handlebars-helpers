/**
 * Handlebars Helpers Tests: Comparison Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

// node_modules
require('should');
var Handlebars = require('handlebars');
var helpers = require('../../');

var config = {
  Handlebars: Handlebars
};

helpers(config);

describe('is', function() {
  describe('{{#is bender "great"}} \n Kiss my shiny metal ass! \n {{else}} \n Never mind :( \n {{/is}}', function() {
    it('should render a block if the condition is true.', function() {
      var source = '{{#is bender "great"}}Kiss my shiny metal ass!{{else}}Never mind :({{/is}}';
      var template = Handlebars.compile(source);
      var context = {
        bender: 'great'
      };
      return template(context).should.equal('Kiss my shiny metal ass!');
    });
  });
});

describe('isnt', function() {
  describe('{{#isnt number 2}} \n Kiss my great metal ass! \n {{else}} \n Never mind :( \n {{/isnt}}', function() {
    it('should render a block if the condition is not true.', function() {
      var source = '{{#isnt number 2}}Kiss my great metal ass!{{else}}Never mind :({{/isnt}}';
      var template = Handlebars.compile(source);
      var context = {
        number: 3
      };
      return template(context).should.equal('Kiss my great metal ass!');
    });
  });
});

describe('gt', function() {
  describe('{{#gt number 8}} \n Kiss my glorious metal ass! \n {{else}} \n Never mind :( \n {{/gt}}', function() {
    it('should render a block if the value is greater than a given number.', function() {
      var source = '{{#gt number 8}}Kiss my glorious metal ass!{{else}}Never mind :({{/gt}}';
      var template = Handlebars.compile(source);
      var context = {
        number: 9
      };
      return template(context).should.equal('Kiss my glorious metal ass!');
    });
  });
});

describe('gte', function() {
  describe('{{#gte number 8}} \n Kiss my perfect metal ass! \n {{else}} \n Never mind :( \n {{/gte}}', function() {
    it('should render a block if the value is greater or equal than a given number.', function() {
      var source = '{{#gte number 8}}Kiss my perfect metal ass!{{else}}Never mind :({{/gte}}';
      var template = Handlebars.compile(source);
      var context = {
        number: 8
      };
      return template(context).should.equal('Kiss my perfect metal ass!');
    });
  });
});

describe('lt', function() {
  describe('{{#lt number 8}} \n Kiss my golden metal ass! \n {{else}} \n Never mind :( \n {{/lt}}', function() {
    it('should render a block if the value is less than a given number.', function() {
      var source = '{{#lt number 8}}Kiss my golden metal ass!{{else}}Never mind :({{/lt}}';
      var template = Handlebars.compile(source);
      var context = {
        number: 2
      };
      return template(context).should.equal('Kiss my golden metal ass!');
    });
  });
});

describe('lte', function() {
  describe('{{#lte number 8}} \n Kiss my big metal ass! \n {{else}} \n Never mind :( \n {{/lte}}', function() {
    it('should render a block if the value is less or equal than a given number.', function() {
      var source = '{{#lte number 8}}Kiss my big metal ass!{{else}}Never mind :({{/lte}}';
      var template = Handlebars.compile(source);
      var context = {
        number: 8
      };
      return template(context).should.equal('Kiss my big metal ass!');
    });
  });
});

describe('or', function() {
  describe('{{#or great magnificent}} \n Kiss my perfect metal ass! \n {{else}} \n Never mind :( \n {{/or}}', function() {
    it('should render a block if one of the values is truthy.', function() {
      var source = '{{#or great magnificent}}Kiss my perfect metal ass!{{else}}Never mind :({{/or}}';
      var template = Handlebars.compile(source);
      var context = {
        great: false,
        magnificent: true
      };
      return template(context).should.equal('Kiss my perfect metal ass!');
    });
  });
});

describe('and', function() {
  describe('{{#and great magnificent}} \n Kiss my glorious metal ass! \n {{else}} \n Never mind :( \n {{/and}}', function() {
    it('should render a block if both values are truthy.', function() {
      var source = '{{#and great magnificent}}Kiss my glorious metal ass!{{else}}Never mind :({{/and}}';
      var template = Handlebars.compile(source);
      var context = {
        great: true,
        magnificent: true
      };
      return template(context).should.equal('Kiss my glorious metal ass!');
    });
  });
});
