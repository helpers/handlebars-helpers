'use strict';

require('should');
var hbs = require('handlebars');
var helpers = require('..');
helpers.comparison({handlebars: hbs});

var context = {array: ['a', 'b', 'c']};

describe('{{compare}}', function() {
  describe('{{#compare left "<=" right}}', function() {
    it('should render the first block if the left value is equal or greater.', function() {
      var source = '{{#compare left "<=" right}}greater than or equal to 10{{else}}lower than 10{{/compare}}';
      var fn = hbs.compile(source);
      fn({left: 10, right: 15}).should.equal('greater than or equal to 10');
    });
  });

  describe('{{#compare unicorns "<" ponies}}', function() {
    it('should render the first block if the left value is less than the right.', function() {
      var source = '{{#compare unicorns "<" ponies}}I knew it, unicorns are just low-quality ponies!{{/compare}}';
      var fn = hbs.compile(source);
      var res = fn({unicorns: 5, ponies: 6});
      res.should.equal('I knew it, unicorns are just low-quality ponies!');
    });
  });

  describe('{{#compare obj "typeof" "object"}}', function() {
    it('should render the first block if the right value is an object.', function() {
      var fn = hbs.compile('{{#compare obj "typeof" "object"}}an object{{else}}not an object{{/compare}}');
      fn({obj: {}}).should.equal('an object');
    });
  });
});

describe('{{contains}}', function() {
  describe('{{#contains bender "z"}}', function() {
    it('should render a block if the condition is true.', function() {
      var fn = hbs.compile('{{#contains bender "C"}}AAA{{else}}BBB{{/contains}}');
      fn({bender: 'CCC'}).should.equal('AAA');
    });
  });
  describe('{{#contains bender "z"}}', function() {
    it('should render a block if the condition is true.', function() {
      var fn = hbs.compile('{{#contains bender "zzz"}}AAA{{else}}BBB{{/contains}}');
      fn({bender: 'CCC'}).should.equal('BBB');
    });
  });
});

describe('{{is}}', function() {
  describe('{{#is bender "CCC"}}', function() {
    it('should render a block if the condition is true.', function() {
      var fn = hbs.compile('{{#is bender "CCC"}}AAA{{else}}BBB{{/is}}');
      fn({bender: 'CCC'}).should.equal('AAA');
    });
  });
});

describe('isnt', function() {
  describe('{{#isnt number 2}}', function() {
    it('should render a block if the condition is not true.', function() {
      var fn = hbs.compile('{{#isnt number 2}}AAA{{else}}BBB{{/isnt}}');
      fn({number: 3}).should.equal('AAA');
    });
  });
});

describe('gt', function() {
  describe('{{#gt number 8}}', function() {
    it('should render a block if the value is greater than a given number.', function() {
      var fn = hbs.compile('{{#gt number 8}}AAA{{else}}BBB{{/gt}}');
      fn({number: 9}).should.equal('AAA');
    });
  });
});

describe('gte', function() {
  describe('{{#gte number 8}}', function() {
    it('should render a block if the value is greater or equal than a given number.', function() {
      var fn = hbs.compile('{{#gte number 8}}AAA{{else}}BBB{{/gte}}');
      fn({number: 8}).should.equal('AAA');
    });
  });
});

describe('lt', function() {
  describe('{{#lt number 8}}', function() {
    it('should render a block if the value is less than a given number.', function() {
      var fn = hbs.compile('{{#lt number 8}}AAA{{else}}BBB{{/lt}}');
      fn({number: 2}).should.equal('AAA');
    });
  });
});

describe('{{lte}}', function() {
  describe('{{#lte number 8}}', function() {
    it('should render a block if the value is less or equal than a given number.', function() {
      var fn = hbs.compile('{{#lte number 8}}AAA{{else}}BBB{{/lte}}');
      fn({number: 8}).should.equal('AAA');
    });
  });
});

describe('{{or}}', function() {
  describe('{{#or great magnificent}}', function() {
    it('should render a block if one of the values is truthy.', function() {
      var fn = hbs.compile('{{#or great magnificent}}AAA{{else}}BBB{{/or}}');
      fn({great: false, magnificent: true}).should.equal('AAA');
    });
  });
});

describe('{{and}}', function() {
  describe('{{#and great magnificent}}', function() {
    it('should render a block if both values are truthy.', function() {
      var fn = hbs.compile('{{#and great magnificent}}AAA{{else}}BBB{{/and}}');
      fn({great: true, magnificent: true}).should.equal('AAA');
    });
  });
});

describe('{{ifEq}}', function() {
  describe('{{#ifEq number compare=8}}', function() {
    it('should render a block if the value is equal to a given number.', function() {
      var fn = hbs.compile('{{#ifEq number compare=8}}AAA{{/ifEq}}');
      fn({number: 8}).should.equal('AAA');
    });
    it('should not render a block if the value is not equal to a given number.', function() {
      var fn = hbs.compile('{{#ifGt number compare=8}}AAA{{/ifGt}}');
      fn({number: 5}).should.equal('');
    });
  });
});

describe('{{ifGt}}', function() {
  describe('{{#ifGt number compare=8}}', function() {
    it('should render a block if the value is greater than a given number.', function() {
      var fn = hbs.compile('{{#ifGt number compare=8}}AAA{{/ifGt}}');
      fn({number: 10}).should.equal('AAA');
    });
    it('should not render a block if the value is less than a given number.', function() {
      var fn = hbs.compile('{{#ifGt number compare=8}}AAA{{/ifGt}}');
      fn({number: 5}).should.equal('');
    });
  });
});

describe('{{ifGteq}}', function() {
  describe('{{#ifGteq number compare=8}}', function() {
    it('should render a block if the value is greater than a given number.', function() {
      var fn = hbs.compile('{{#ifGteq number compare=8}}AAA{{/ifGteq}}');
      fn({number: 12}).should.equal('AAA');
    });
    it('should render a block if the value is equal to a given number.', function() {
      var fn = hbs.compile('{{#ifGteq number compare=8}}AAA{{/ifGteq}}');
      fn({number: 8}).should.equal('AAA');
    });
    it('should not render a block if the value is less than a given number.', function() {
      var fn = hbs.compile('{{#ifGteq number compare=8}}AAA{{/ifGteq}}');
      fn({number: 5}).should.equal('');
    });
  });
});

describe('{{ifLt}}', function() {
  describe('{{#ifLt number compare=8}}', function() {
    it('should render a block if the value is less than a given number.', function() {
      var fn = hbs.compile('{{#ifLt number compare=8}}AAA{{/ifLt}}');
      fn({number: 5}).should.equal('AAA');
    });
    it('should not render a block if the value is greater than a given number.', function() {
      var fn = hbs.compile('{{#ifLt number compare=8}}AAA{{/ifLt}}');
      fn({number: 42}).should.equal('');
    });
  });
});

describe('{{ifLteq}}', function() {
  describe('{{#ifLteq number compare=8}}', function() {
    it('should render a block if the value is less than a given number.', function() {
      var fn = hbs.compile('{{#ifLteq number compare=8}}AAA{{/ifLteq}}');
      fn({number: 1}).should.equal('AAA');
    });
    it('should render a block if the value is equal to a given number.', function() {
      var fn = hbs.compile('{{#ifLteq number compare=8}}AAA{{/ifLteq}}');
      fn({number: 8}).should.equal('AAA');
    });
    it('should not render a block if the value is greater than a given number.', function() {
      var fn = hbs.compile('{{#ifLteq number compare=8}}AAA{{/ifLteq}}');
      fn({number: 27}).should.equal('');
    });
  });
});

describe('{{ifNth}}', function() {
  describe('{{#ifNth "2" @index}}', function() {
    it('should render a custom class on even rows', function() {
      var source = '{{#each items}}<div {{#ifNth "2" @index}}class="row-alternate"{{/ifNth}}>{{name}}</div>{{/each}}';
      var fn = hbs.compile(source);
      var context = {
        items: [
          { name: 'Philip J. Fry' },
          { name: 'Turanga Leela' },
          { name: 'Bender Bending Rodriguez' },
          { name: 'Amy Wong' },
          { name: 'Hermes Conrad' }
        ]
      };
      fn(context).should.equal([
        '<div >Philip J. Fry</div>',
        '<div class="row-alternate">Turanga Leela</div>',
        '<div >Bender Bending Rodriguez</div>',
        '<div class="row-alternate">Amy Wong</div>',
        '<div >Hermes Conrad</div>'
      ].join(''));
    });
  });
});

describe('{{unlessEq}}', function() {
  describe('{{#unlessEq number compare=8}}', function() {
    it('should render a block unless the value is equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessEq number compare=8}}AAA{{/unlessEq}}');
      fn({number: 10}).should.equal('AAA');
    });
    it('should render a block unless the value is equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessEq number compare=8}}AAA{{/unlessEq}}');
      fn({number: 8}).should.equal('');
    });
  });
});

describe('{{unlessGt}}', function() {
  describe('{{#unlessGt number compare=8}}', function() {
    it('should render a block unless the value is greater than a given number.', function() {
      var fn = hbs.compile('{{#unlessGt number compare=8}}AAA{{/unlessGt}}');
      fn({number: 5}).should.equal('AAA');
    });
    it('should render a block unless the value is greater than a given number.', function() {
      var fn = hbs.compile('{{#unlessGt number compare=8}}AAA{{/unlessGt}}');
      fn({number: 10}).should.equal('');
    });
  });
});

describe('{{unlessLt}}', function() {
  describe('{{#unlessLt number compare=8}}', function() {
    it('should render a block unless the value is less than a given number.', function() {
      var fn = hbs.compile('{{#unlessLt number compare=8}}AAA{{/unlessLt}}');
      fn({number: 10}).should.equal('AAA');
    });
    it('should render a block unless the value is less than a given number.', function() {
      var fn = hbs.compile('{{#unlessLt number compare=8}}AAA{{/unlessLt}}');
      fn({number: 5}).should.equal('');
    });
  });
});

describe('{{unlessGteq}}', function() {
  describe('{{#unlessGteq number compare=8}}', function() {
    it('should render a block unless the value is greater than or equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessGteq number compare=8}}AAA{{/unlessGteq}}');
      fn({number: 4}).should.equal('AAA');
    });
    it('should render a block unless the value is greater than or equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessGteq number compare=8}}AAA{{/unlessGteq}}');
      fn({number: 8}).should.equal('');
    });
    it('should not render a block unless the value is greater than or equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessGteq number compare=8}}AAA{{/unlessGteq}}');
      fn({number: 34}).should.equal('');
    });
  });
});

describe('{{unlessLteq}}', function() {
  describe('{{#unlessLteq number compare=8}}', function() {
    it('should render a block unless the value is less than or equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessLteq number compare=8}}AAA{{/unlessLteq}}');
      fn({number: 10}).should.equal('AAA');
    });
    it('should render a block unless the value is less than or equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessLteq number compare=8}}AAA{{/unlessLteq}}');
      fn({number: 8}).should.equal('');
    });
    it('should not render a block unless the value is less than or equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessLteq number compare=8}}AAA{{/unlessLteq}}');
      fn({number: 4}).should.equal('');
    });
  });
});
