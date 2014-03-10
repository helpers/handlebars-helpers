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
  describe('{{#compare left "<=" right}}', function() {
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
  describe('{{#compare unicorns "<" ponies}}', function() {
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
  describe('{{#compare obj "typeof" "object"}}', function() {
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
  describe('{{#contains bender "z"}}', function() {
    it('should render a block if the condition is true.', function() {
      source = '{{#contains bender "great"}}Kiss my shiny metal ass!{{else}}Never mind :({{/contains}}';
      template = Handlebars.compile(source);
      context = {
        bender: 'Bender is great!'
      };
      template(context).should.equal('Kiss my shiny metal ass!');
    });
  });
  describe('{{#contains bender "z"}}', function() {
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
  describe('{{#is bender "great"}}', function() {
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
  describe('{{#isnt number 2}}', function() {
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
  describe('{{#gt number 8}}', function() {
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
  describe('{{#gte number 8}}', function() {
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
  describe('{{#lt number 8}}', function() {
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
  describe('{{#lte number 8}}', function() {
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
  describe('{{#or great magnificent}}', function() {
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
  describe('{{#and great magnificent}}', function() {
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

describe('if_eq', function() {
  describe('{{#if_eq number compare=8}}', function() {
    it('should render a block if the value is equal to a given number.', function() {
      source = '{{#if_eq number compare=8}}Kiss my perfect metal ass!{{/if_eq}}';
      template = Handlebars.compile(source);
      context = {
        number: 8,
      };
      template(context).should.equal('Kiss my perfect metal ass!');
    });
    it('should not render a block if the value is not equal to a given number.', function() {
      source = '{{#if_gt number compare=8}}Kiss my perfect metal ass!{{/if_gt}}';
      template = Handlebars.compile(source);
      context = {
        number: 5,
      };
      template(context).should.equal('');
    });
  });
});

describe('if_gt', function() {
  describe('{{#if_gt number compare=8}}', function() {
    it('should render a block if the value is greater than a given number.', function() {
      source = '{{#if_gt number compare=8}}Kiss my perfect metal ass!{{/if_gt}}';
      template = Handlebars.compile(source);
      context = {
        number: 10,
      };
      template(context).should.equal('Kiss my perfect metal ass!');
    });
    it('should not render a block if the value is less than a given number.', function() {
      source = '{{#if_gt number compare=8}}Kiss my perfect metal ass!{{/if_gt}}';
      template = Handlebars.compile(source);
      context = {
        number: 5,
      };
      template(context).should.equal('');
    });
  });
});

describe('if_gteq', function() {
  describe('{{#if_gteq number compare=8}}', function() {
    it('should render a block if the value is greater than a given number.', function() {
      source = '{{#if_gteq number compare=8}}Kiss my perfect metal ass!{{/if_gteq}}';
      template = Handlebars.compile(source);
      context = {
        number: 12,
      };
      template(context).should.equal('Kiss my perfect metal ass!');
    });
    it('should render a block if the value is equal to a given number.', function() {
      source = '{{#if_gteq number compare=8}}Kiss my perfect metal ass!{{/if_gteq}}';
      template = Handlebars.compile(source);
      context = {
        number: 8,
      };
      template(context).should.equal('Kiss my perfect metal ass!');
    });
    it('should not render a block if the value is less than a given number.', function() {
      source = '{{#if_gteq number compare=8}}Kiss my perfect metal ass!{{/if_gteq}}';
      template = Handlebars.compile(source);
      context = {
        number: 5,
      };
      template(context).should.equal('');
    });
  });
});

describe('if_lt', function() {
  describe('{{#if_lt number compare=8}}', function() {
    it('should render a block if the value is less than a given number.', function() {
      source = '{{#if_lt number compare=8}}Kiss my perfect metal ass!{{/if_lt}}';
      template = Handlebars.compile(source);
      context = {
        number: 5,
      };
      template(context).should.equal('Kiss my perfect metal ass!');
    });
    it('should not render a block if the value is greater than a given number.', function() {
      source = '{{#if_lt number compare=8}}Kiss my perfect metal ass!{{/if_lt}}';
      template = Handlebars.compile(source);
      context = {
        number: 42,
      };
      template(context).should.equal('');
    });
  });
});

describe('if_lteq', function() {
  describe('{{#if_lteq number compare=8}}', function() {
    it('should render a block if the value is less than a given number.', function() {
      source = '{{#if_lteq number compare=8}}Kiss my perfect metal ass!{{/if_lteq}}';
      template = Handlebars.compile(source);
      context = {
        number: 1,
      };
      template(context).should.equal('Kiss my perfect metal ass!');
    });
    it('should render a block if the value is equal to a given number.', function() {
      source = '{{#if_lteq number compare=8}}Kiss my perfect metal ass!{{/if_lteq}}';
      template = Handlebars.compile(source);
      context = {
        number: 8,
      };
      template(context).should.equal('Kiss my perfect metal ass!');
    });
    it('should not render a block if the value is greater than a given number.', function() {
      source = '{{#if_lteq number compare=8}}Kiss my perfect metal ass!{{/if_lteq}}';
      template = Handlebars.compile(source);
      context = {
        number: 27,
      };
      template(context).should.equal('');
    });
  });
});

describe('ifNth', function() {

  describe('{{#ifNth "2" @index}}', function() {
  
    it('should render a custom class on even rows', function() {

      source = '{{#each items}}<div {{#ifNth "2" @index}}class="row-alternate"{{/ifNth}}>{{name}}</div>{{/each}}';
      template = Handlebars.compile(source);
      context = {
        items: [
          { name: 'Philip J. Fry' },
          { name: 'Turanga Leela' },
          { name: 'Bender Bending Rodriguez' },
          { name: 'Amy Wong' },
          { name: 'Hermes Conrad' }
        ]
      };
      var output = template(context);
      console.log(output);
      output.should.equal([
          '<div >Philip J. Fry</div>',
          '<div class="row-alternate">Turanga Leela</div>',
          '<div >Bender Bending Rodriguez</div>',
          '<div class="row-alternate">Amy Wong</div>',
          '<div >Hermes Conrad</div>'
        ].join(''));

    });
  
  });

});

describe('unless_eq', function() {
  describe('{{#unless_eq number compare=8}}', function() {
    it('should render a block unless the value is equal to a given number.', function() {
      source = '{{#unless_eq number compare=8}}Kiss my perfect metal ass!{{/unless_eq}}';
      template = Handlebars.compile(source);
      context = {
        number: 10,
      };
      template(context).should.equal('Kiss my perfect metal ass!');
    });
    it('should render a block unless the value is equal to a given number.', function() {
      source = '{{#unless_eq number compare=8}}Kiss my perfect metal ass!{{/unless_eq}}';
      template = Handlebars.compile(source);
      context = {
        number: 8,
      };
      template(context).should.equal('');
    });
  });
});

describe('unless_gt', function() {
  describe('{{#unless_gt number compare=8}}', function() {
    it('should render a block unless the value is greater than a given number.', function() {
      source = '{{#unless_gt number compare=8}}Kiss my perfect metal ass!{{/unless_gt}}';
      template = Handlebars.compile(source);
      context = {
        number: 5,
      };
      template(context).should.equal('Kiss my perfect metal ass!');
    });
    it('should render a block unless the value is greater than a given number.', function() {
      source = '{{#unless_gt number compare=8}}Kiss my perfect metal ass!{{/unless_gt}}';
      template = Handlebars.compile(source);
      context = {
        number: 10,
      };
      template(context).should.equal('');
    });
  });
});

describe('unless_lt', function() {
  describe('{{#unless_lt number compare=8}}', function() {
    it('should render a block unless the value is less than a given number.', function() {
      source = '{{#unless_lt number compare=8}}Kiss my perfect metal ass!{{/unless_lt}}';
      template = Handlebars.compile(source);
      context = {
        number: 10,
      };
      template(context).should.equal('Kiss my perfect metal ass!');
    });
    it('should render a block unless the value is less than a given number.', function() {
      source = '{{#unless_lt number compare=8}}Kiss my perfect metal ass!{{/unless_lt}}';
      template = Handlebars.compile(source);
      context = {
        number: 5,
      };
      template(context).should.equal('');
    });
  });
});

describe('unless_gteq', function() {
  describe('{{#unless_gteq number compare=8}}', function() {
    it('should render a block unless the value is greater than or equal to a given number.', function() {
      source = '{{#unless_gteq number compare=8}}Kiss my perfect metal ass!{{/unless_gteq}}';
      template = Handlebars.compile(source);
      context = {
        number: 4,
      };
      template(context).should.equal('Kiss my perfect metal ass!');
    });
    it('should render a block unless the value is greater than or equal to a given number.', function() {
      source = '{{#unless_gteq number compare=8}}Kiss my perfect metal ass!{{/unless_gteq}}';
      template = Handlebars.compile(source);
      context = {
        number: 8,
      };
      template(context).should.equal('');
    });
    it('should not render a block unless the value is greater than or equal to a given number.', function() {
      source = '{{#unless_gteq number compare=8}}Kiss my perfect metal ass!{{/unless_gteq}}';
      template = Handlebars.compile(source);
      context = {
        number: 34,
      };
      template(context).should.equal('');
    });
  });
});

describe('unless_lteq', function() {
  describe('{{#unless_lteq number compare=8}}', function() {
    it('should render a block unless the value is less than or equal to a given number.', function() {
      source = '{{#unless_lteq number compare=8}}Kiss my perfect metal ass!{{/unless_lteq}}';
      template = Handlebars.compile(source);
      context = {
        number: 10,
      };
      template(context).should.equal('Kiss my perfect metal ass!');
    });
    it('should render a block unless the value is less than or equal to a given number.', function() {
      source = '{{#unless_lteq number compare=8}}Kiss my perfect metal ass!{{/unless_lteq}}';
      template = Handlebars.compile(source);
      context = {
        number: 8,
      };
      template(context).should.equal('');
    });
    it('should not render a block unless the value is less than or equal to a given number.', function() {
      source = '{{#unless_lteq number compare=8}}Kiss my perfect metal ass!{{/unless_lteq}}';
      template = Handlebars.compile(source);
      context = {
        number: 4,
      };
      template(context).should.equal('');
    });
  });
});