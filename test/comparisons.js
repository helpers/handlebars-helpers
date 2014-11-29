'use strict';

var should = require('should');
var Handlebars = require('handlebars');
var _ = require('lodash');

var helpers = require('..')('comparisons');
_.forOwn(helpers, function (value, key) {
  Handlebars.registerHelper(key, value);
});

describe('{{compare}}', function() {
  describe('{{#compare left "<=" right}}', function() {
    it('should render the first block if the left value is equal or greater.', function() {
      var source = '{{#compare left "<=" right}}greater than or equal to 10{{else}}lower than 10{{/compare}}';
      var template = Handlebars.compile(source);
      template({left: 10, right: 15}).should.equal('greater than or equal to 10');
    });
  });
  describe('{{#compare unicorns "<" ponies}}', function() {
    it('should render the first block if the left value is less than the right.', function() {
      var source = '{{#compare unicorns "<" ponies}}I knew it, unicorns are just low-quality ponies!{{/compare}}';
      var template = Handlebars.compile(source);
      var res = template({unicorns: 5, ponies: 6});
      res.should.equal('I knew it, unicorns are just low-quality ponies!');
    });
  });
  describe('{{#compare obj "typeof" "object"}}', function() {
    it('should render the first block if the right value is an object.', function() {
      var template = Handlebars.compile('{{#compare obj "typeof" "object"}}an object{{else}}not an object{{/compare}}');
      template({obj: {}}).should.equal('an object');
    });
  });
});

describe('{{contains}}', function() {
  describe('{{#contains bender "z"}}', function() {
    it('should render a block if the condition is true.', function() {
      var template = Handlebars.compile('{{#contains bender "C"}}AAA{{else}}BBB{{/contains}}');
      template({bender: 'CCC'}).should.equal('AAA');
    });
  });
  describe('{{#contains bender "z"}}', function() {
    it('should render a block if the condition is true.', function() {
      var template = Handlebars.compile('{{#contains bender "zzz"}}AAA{{else}}BBB{{/contains}}');
      template({bender: 'CCC'}).should.equal('BBB');
    });
  });
});

describe('{{is}}', function() {
  describe('{{#is bender "CCC"}}', function() {
    it('should render a block if the condition is true.', function() {
      var template = Handlebars.compile('{{#is bender "CCC"}}AAA{{else}}BBB{{/is}}');
      template({bender: 'CCC'}).should.equal('AAA');
    });
  });
});

describe('isnt', function() {
  describe('{{#isnt number 2}}', function() {
    it('should render a block if the condition is not true.', function() {
      var template = Handlebars.compile('{{#isnt number 2}}AAA{{else}}BBB{{/isnt}}');
      template({number: 3}).should.equal('AAA');
    });
  });
});

describe('gt', function() {
  describe('{{#gt number 8}}', function() {
    it('should render a block if the value is greater than a given number.', function() {
      var template = Handlebars.compile('{{#gt number 8}}AAA{{else}}BBB{{/gt}}');
      template({number: 9}).should.equal('AAA');
    });
  });
});

describe('gte', function() {
  describe('{{#gte number 8}}', function() {
    it('should render a block if the value is greater or equal than a given number.', function() {
      var template = Handlebars.compile('{{#gte number 8}}AAA{{else}}BBB{{/gte}}');
      template({number: 8}).should.equal('AAA');
    });
  });
});

describe('lt', function() {
  describe('{{#lt number 8}}', function() {
    it('should render a block if the value is less than a given number.', function() {
      var template = Handlebars.compile('{{#lt number 8}}AAA{{else}}BBB{{/lt}}');
      template({number: 2}).should.equal('AAA');
    });
  });
});

describe('{{lte}}', function() {
  describe('{{#lte number 8}}', function() {
    it('should render a block if the value is less or equal than a given number.', function() {
      var template = Handlebars.compile('{{#lte number 8}}AAA{{else}}BBB{{/lte}}');
      template({number: 8}).should.equal('AAA');
    });
  });
});

describe('{{or}}', function() {
  describe('{{#or great magnificent}}', function() {
    it('should render a block if one of the values is truthy.', function() {
      var template = Handlebars.compile('{{#or great magnificent}}AAA{{else}}BBB{{/or}}');
      template({great: false, magnificent: true}).should.equal('AAA');
    });
  });
});

describe('{{and}}', function() {
  describe('{{#and great magnificent}}', function() {
    it('should render a block if both values are truthy.', function() {
      var template = Handlebars.compile('{{#and great magnificent}}AAA{{else}}BBB{{/and}}');
      template({great: true, magnificent: true}).should.equal('AAA');
    });
  });
});

describe('{{if_eq}}', function() {
  describe('{{#if_eq number compare=8}}', function() {
    it('should render a block if the value is equal to a given number.', function() {
      var template = Handlebars.compile('{{#if_eq number compare=8}}AAA{{/if_eq}}');
      template({number: 8}).should.equal('AAA');
    });
    it('should not render a block if the value is not equal to a given number.', function() {
      var template = Handlebars.compile('{{#if_gt number compare=8}}AAA{{/if_gt}}');
      template({number: 5}).should.equal('');
    });
  });
});

describe('{{if_gt}}', function() {
  describe('{{#if_gt number compare=8}}', function() {
    it('should render a block if the value is greater than a given number.', function() {
      var template = Handlebars.compile('{{#if_gt number compare=8}}AAA{{/if_gt}}');
      template({number: 10}).should.equal('AAA');
    });
    it('should not render a block if the value is less than a given number.', function() {
      var template = Handlebars.compile('{{#if_gt number compare=8}}AAA{{/if_gt}}');
      template({number: 5}).should.equal('');
    });
  });
});

describe('{{if_gteq}}', function() {
  describe('{{#if_gteq number compare=8}}', function() {
    it('should render a block if the value is greater than a given number.', function() {
      var template = Handlebars.compile('{{#if_gteq number compare=8}}AAA{{/if_gteq}}');
      template({number: 12}).should.equal('AAA');
    });
    it('should render a block if the value is equal to a given number.', function() {
      var template = Handlebars.compile('{{#if_gteq number compare=8}}AAA{{/if_gteq}}');
      template({number: 8}).should.equal('AAA');
    });
    it('should not render a block if the value is less than a given number.', function() {
      var template = Handlebars.compile('{{#if_gteq number compare=8}}AAA{{/if_gteq}}');
      template({number: 5}).should.equal('');
    });
  });
});

describe('{{if_lt}}', function() {
  describe('{{#if_lt number compare=8}}', function() {
    it('should render a block if the value is less than a given number.', function() {
      var template = Handlebars.compile('{{#if_lt number compare=8}}AAA{{/if_lt}}');
      template({number: 5}).should.equal('AAA');
    });
    it('should not render a block if the value is greater than a given number.', function() {
      var template = Handlebars.compile('{{#if_lt number compare=8}}AAA{{/if_lt}}');
      template({number: 42}).should.equal('');
    });
  });
});

describe('{{if_lteq}}', function() {
  describe('{{#if_lteq number compare=8}}', function() {
    it('should render a block if the value is less than a given number.', function() {
      var template = Handlebars.compile('{{#if_lteq number compare=8}}AAA{{/if_lteq}}');
      template({number: 1}).should.equal('AAA');
    });
    it('should render a block if the value is equal to a given number.', function() {
      var template = Handlebars.compile('{{#if_lteq number compare=8}}AAA{{/if_lteq}}');
      template({number: 8}).should.equal('AAA');
    });
    it('should not render a block if the value is greater than a given number.', function() {
      var template = Handlebars.compile('{{#if_lteq number compare=8}}AAA{{/if_lteq}}');
      template({number: 27}).should.equal('');
    });
  });
});

describe('{{ifNth}}', function() {
  describe('{{#ifNth "2" @index}}', function() {
    it('should render a custom class on even rows', function() {
      var source = '{{#each items}}<div {{#ifNth "2" @index}}class="row-alternate"{{/ifNth}}>{{name}}</div>{{/each}}';
      var template = Handlebars.compile(source);
      var context = {
        items: [
          { name: 'Philip J. Fry' },
          { name: 'Turanga Leela' },
          { name: 'Bender Bending Rodriguez' },
          { name: 'Amy Wong' },
          { name: 'Hermes Conrad' }
        ]
      };
      template(context).should.equal([
        '<div >Philip J. Fry</div>',
        '<div class="row-alternate">Turanga Leela</div>',
        '<div >Bender Bending Rodriguez</div>',
        '<div class="row-alternate">Amy Wong</div>',
        '<div >Hermes Conrad</div>'
      ].join(''));
    });
  });
});

describe('{{unless_eq}}', function() {
  describe('{{#unless_eq number compare=8}}', function() {
    it('should render a block unless the value is equal to a given number.', function() {
      var template = Handlebars.compile('{{#unless_eq number compare=8}}AAA{{/unless_eq}}');
      template({number: 10}).should.equal('AAA');
    });
    it('should render a block unless the value is equal to a given number.', function() {
      var template = Handlebars.compile('{{#unless_eq number compare=8}}AAA{{/unless_eq}}');
      template({number: 8}).should.equal('');
    });
  });
});

describe('{{unless_gt}}', function() {
  describe('{{#unless_gt number compare=8}}', function() {
    it('should render a block unless the value is greater than a given number.', function() {
      var template = Handlebars.compile('{{#unless_gt number compare=8}}AAA{{/unless_gt}}');
      template({number: 5}).should.equal('AAA');
    });
    it('should render a block unless the value is greater than a given number.', function() {
      var template = Handlebars.compile('{{#unless_gt number compare=8}}AAA{{/unless_gt}}');
      template({number: 10}).should.equal('');
    });
  });
});

describe('{{unless_lt}}', function() {
  describe('{{#unless_lt number compare=8}}', function() {
    it('should render a block unless the value is less than a given number.', function() {
      var template = Handlebars.compile('{{#unless_lt number compare=8}}AAA{{/unless_lt}}');
      template({number: 10}).should.equal('AAA');
    });
    it('should render a block unless the value is less than a given number.', function() {
      var template = Handlebars.compile('{{#unless_lt number compare=8}}AAA{{/unless_lt}}');
      template({number: 5}).should.equal('');
    });
  });
});

describe('{{unless_gteq}}', function() {
  describe('{{#unless_gteq number compare=8}}', function() {
    it('should render a block unless the value is greater than or equal to a given number.', function() {
      var template = Handlebars.compile('{{#unless_gteq number compare=8}}AAA{{/unless_gteq}}');
      template({number: 4}).should.equal('AAA');
    });
    it('should render a block unless the value is greater than or equal to a given number.', function() {
      var template = Handlebars.compile('{{#unless_gteq number compare=8}}AAA{{/unless_gteq}}');
      template({number: 8}).should.equal('');
    });
    it('should not render a block unless the value is greater than or equal to a given number.', function() {
      var template = Handlebars.compile('{{#unless_gteq number compare=8}}AAA{{/unless_gteq}}');
      template({number: 34}).should.equal('');
    });
  });
});

describe('{{unless_lteq}}', function() {
  describe('{{#unless_lteq number compare=8}}', function() {
    it('should render a block unless the value is less than or equal to a given number.', function() {
      var template = Handlebars.compile('{{#unless_lteq number compare=8}}AAA{{/unless_lteq}}');
      template({number: 10}).should.equal('AAA');
    });
    it('should render a block unless the value is less than or equal to a given number.', function() {
      var template = Handlebars.compile('{{#unless_lteq number compare=8}}AAA{{/unless_lteq}}');
      template({number: 8}).should.equal('');
    });
    it('should not render a block unless the value is less than or equal to a given number.', function() {
      var template = Handlebars.compile('{{#unless_lteq number compare=8}}AAA{{/unless_lteq}}');
      template({number: 4}).should.equal('');
    });
  });
});
