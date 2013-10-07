/**
 * Handlebars Helpers Tests: Comparison Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

// node_modules
require('should');
var Handlebars = require('handlebars');

// Local helpers
require('../../lib/helpers/helpers-comparisons').register(Handlebars, {});

var source, template, context;

describe('compare', function() {
  describe('{{#compare left "<=" right}}The value is greater than or equal to 10{{else}}The value is lower than 10{{/compare}}', function() {
    it('should render the first block if the left value is equal or greater.', function() {
      context = {
        left: 10,
        right: 15
      };
      source = '{{#compare left "<=" right}}The value is greater than or equal to 10{{else}}The value is lower than 10{{/compare}}';
      template = Handlebars.compile(source);
      template(context).should.equal('The value is greater than or equal to 10');
    });
  });
  describe('{{#compare unicorns "<" ponies}}I knew it, unicorns are just low-quality ponies!{{/compare}}', function() {
    it('should render the first block if the left value is less than the right.', function() {
      context = {
        unicorns: 5,
        ponies: 6
      };
      source = '{{#compare unicorns "<" ponies}}I knew it, unicorns are just low-quality ponies!{{/compare}}';
      template = Handlebars.compile(source);
      template(context).should.equal('I knew it, unicorns are just low-quality ponies!');
    });
  });
  describe('{{#compare obj "typeof" "object"}}It\'s an object.{{else}}It\'s not an object.{{/compare}}', function() {
    it('should render the first block if the right value is an object.', function() {
      context = {
        obj: {}
      };
      source = '{{#compare obj "typeof" "object"}}It\'s an object.{{else}}It\'s not an object.{{/compare}}';
      template = Handlebars.compile(source);
      template(context).should.equal('It\'s an object.');
    });
  });
});

describe('contains', function() {
  describe('{{#contains bender "z"}} Kiss my shiny metal ass! {{else}} Never mind :( {{/contains}}', function() {
    it('should render a block if the condition is true.', function() {
      source = '{{#contains bender "great"}}Kiss my shiny metal ass!{{else}}Never mind :({{/contains}}';
      template = Handlebars.compile(source);
      context = {
        bender: 'Bender is great!'
      };
      template(context).should.equal('Kiss my shiny metal ass!');
    });
  });
  describe('{{#contains bender "z"}} Kiss my shiny metal ass! {{else}} Never mind :( {{/contains}}', function() {
    it('should render a block if the condition is true.', function() {
      source = '{{#contains bender "zzz"}}Kiss my shiny metal ass!{{else}}Never mind :({{/contains}}';
      template = Handlebars.compile(source);
      context = {
        bender: 'Bender is great!'
      };
      template(context).should.equal('Never mind :(');
    });
  });
});

describe('is', function() {
  describe('{{#is bender "great"}} Kiss my shiny metal ass! {{else}} Never mind :( {{/is}}', function() {
    it('should render a block if the condition is true.', function() {
      source = '{{#is bender "great"}}Kiss my shiny metal ass!{{else}}Never mind :({{/is}}';
      template = Handlebars.compile(source);
      context = {
        bender: 'great'
      };
      template(context).should.equal('Kiss my shiny metal ass!');
    });
  });
});

describe('isnt', function() {
  describe('{{#isnt number 2}} Kiss my great metal ass! {{else}} Never mind :( {{/isnt}}', function() {
    it('should render a block if the condition is not true.', function() {
      source = '{{#isnt number 2}}Kiss my great metal ass!{{else}}Never mind :({{/isnt}}';
      template = Handlebars.compile(source);
      context = {
        number: 3
      };
      template(context).should.equal('Kiss my great metal ass!');
    });
  });
});

describe('gt', function() {
  describe('{{#gt number 8}} Kiss my glorious metal ass! {{else}} Never mind :( {{/gt}}', function() {
    it('should render a block if the value is greater than a given number.', function() {
      source = '{{#gt number 8}}Kiss my glorious metal ass!{{else}}Never mind :({{/gt}}';
      template = Handlebars.compile(source);
      context = {
        number: 9
      };
      template(context).should.equal('Kiss my glorious metal ass!');
    });
  });
});

describe('gte', function() {
  describe('{{#gte number 8}} Kiss my perfect metal ass! {{else}} Never mind :( {{/gte}}', function() {
    it('should render a block if the value is greater or equal than a given number.', function() {
      source = '{{#gte number 8}}Kiss my perfect metal ass!{{else}}Never mind :({{/gte}}';
      template = Handlebars.compile(source);
      context = {
        number: 8
      };
      template(context).should.equal('Kiss my perfect metal ass!');
    });
  });
});

describe('lt', function() {
  describe('{{#lt number 8}} Kiss my golden metal ass! {{else}} Never mind :( {{/lt}}', function() {
    it('should render a block if the value is less than a given number.', function() {
      source = '{{#lt number 8}}Kiss my golden metal ass!{{else}}Never mind :({{/lt}}';
      template = Handlebars.compile(source);
      context = {
        number: 2
      };
      template(context).should.equal('Kiss my golden metal ass!');
    });
  });
});

describe('lte', function() {
  describe('{{#lte number 8}} Kiss my big metal ass! {{else}} Never mind :( {{/lte}}', function() {
    it('should render a block if the value is less or equal than a given number.', function() {
      source = '{{#lte number 8}}Kiss my big metal ass!{{else}}Never mind :({{/lte}}';
      template = Handlebars.compile(source);
      context = {
        number: 8
      };
      template(context).should.equal('Kiss my big metal ass!');
    });
  });
});

describe('or', function() {
  describe('{{#or great magnificent}} Kiss my perfect metal ass! {{else}} Never mind :( {{/or}}', function() {
    it('should render a block if one of the values is truthy.', function() {
      source = '{{#or great magnificent}}Kiss my perfect metal ass!{{else}}Never mind :({{/or}}';
      template = Handlebars.compile(source);
      context = {
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
      source = '{{#and great magnificent}}Kiss my glorious metal ass!{{else}}Never mind :({{/and}}';
      template = Handlebars.compile(source);
      context = {
        great: true,
        magnificent: true
      };
      template(context).should.equal('Kiss my glorious metal ass!');
    });
  });
});
