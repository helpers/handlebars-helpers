'use strict';

require('should');
var hbs = require('handlebars');
var helpers = require('..');
helpers.comparison({handlebars: hbs});

var context = {array: ['a', 'b', 'c']};

describe('comparison', function() {
  describe('and', function() {
    it('should render a block if both values are truthy.', function() {
      var fn = hbs.compile('{{#and great magnificent}}A{{else}}B{{/and}}');
      fn({great: true, magnificent: true}).should.equal('A');
    });

    it('should render the inverse block if both values are not truthy.', function() {
      var fn = hbs.compile('{{#and great magnificent}}A{{else}}B{{/and}}');
      fn({great: true, magnificent: false}).should.equal('B');
    });
  });

  describe('compare', function() {
    describe('errors', function() {
      it('should throw an error when args are invalid', function() {
        (function () {
          hbs.compile('{{#compare}}{{/compare}}')();
        }).should.throw('handlebars Helper {{compare}} expects 2 arguments.');
        (function () {
          hbs.compile('{{#compare a b}}{{/compare}}')();
        }).should.throw('handlebars Helper {{compare}} expects 2 arguments.');
      });

      it('should throw an error when the operator is invalid', function() {
        (function () {
          hbs.compile('{{#compare a "~" b}}{{/compare}}')();
        }).should.throw('helper {{compare}}: invalid operator: `~`');
      });
    });

    describe('operators', function() {
      describe('==', function() {
        var fn = hbs.compile('{{#compare a "==" b}}A{{else}}B{{/compare}}');

        it('should render the first block if `a` equals `b`', function() {
          fn({a: '0', b: 0}).should.equal('A');
        });
        it('should render the second block if false', function() {
          fn({a: 'foo', b: 0}).should.equal('B');
        });
      });

      describe('===', function() {
        var fn = hbs.compile('{{#compare a "===" b}}A{{else}}B{{/compare}}');

        it('should render the first block if `a` strictly equals `b`', function() {
          fn({a: '1', b: '1'}).should.equal('A');
        });
        it('should render the second block if false', function() {
          fn({a: '1', b: 1}).should.equal('B');
        });
      });

      describe('!=', function() {
        var fn = hbs.compile('{{#compare a "!=" b}}A{{else}}B{{/compare}}');

        it('should render the first block if `a` does not equal `b`', function() {
          fn({a: 10, b: '11'}).should.equal('A');
        });
        it('should render the second block if false', function() {
          fn({a: 10, b: '10'}).should.equal('B');
        });
      });

      describe('!==', function() {
        var fn = hbs.compile('{{#compare a "!==" b}}A{{else}}B{{/compare}}');

        it('should render the first block if `a` does not strictly equal `b`', function() {
          fn({a: 10, b: 11}).should.equal('A');
        });
        it('should render the second block if false', function() {
          fn({a: 10, b: 10}).should.equal('B');
        });
      });

      describe('>', function() {
        var fn = hbs.compile('{{#compare a ">" b}}greater than or equal to 15{{else}}less than 15{{/compare}}');

        it('should render the first block if true.', function() {
          fn({a: 20, b: 15}).should.equal('greater than or equal to 15');
        });

        it('should render the second block if false.', function() {
          fn({a: 14, b: 15}).should.equal('less than 15');
        });
      });

      describe('<', function() {
        var fn = hbs.compile('I knew it, {{#compare unicorns "<" ponies}}unicorns are just low-quality ponies!{{else}}unicorns are special!{{/compare}}');

        it('should render the first block if true.', function() {
          var res = fn({unicorns: 5, ponies: 6});
          res.should.equal('I knew it, unicorns are just low-quality ponies!');
        });

        it('should render the second block if false.', function() {
          var res = fn({unicorns: 7, ponies: 6});
          res.should.equal('I knew it, unicorns are special!');
        });
      });

      describe('>=', function() {
        var fn = hbs.compile('{{#compare a ">=" b}}greater than or equal to 15{{else}}less than 15{{/compare}}');

        it('should render the first block if true.', function() {
          fn({a: 20, b: 15}).should.equal('greater than or equal to 15');
        });

        it('should render the first block if equal.', function() {
          fn({a: 15, b: 15}).should.equal('greater than or equal to 15');
        });

        it('should render the second block if false.', function() {
          fn({a: 14, b: 15}).should.equal('less than 15');
        });
      });

      describe('<=', function() {
        var fn = hbs.compile('{{#compare a "<=" b}}less than or equal to 10{{else}}greater than 10{{/compare}}');

        it('should render the first block if true.', function() {
          fn({a: 10, b: 15}).should.equal('less than or equal to 10');
        });

        it('should render the second block if false.', function() {
          fn({a: 20, b: 15}).should.equal('greater than 10');
        });
      });

      describe('typeof', function() {
        it('should render the first block if true', function() {
          var fn = hbs.compile('{{#compare obj "typeof" "object"}}A{{else}}B{{/compare}}');
          fn({obj: {}}).should.equal('A');
        });
      });
    });
  });

  describe('contains', function() {
    it('should render a block if the condition is true.', function() {
      var fn = hbs.compile('{{#contains context "C"}}A{{else}}B{{/contains}}');
      fn({context: 'CCC'}).should.equal('A');
    });

    it('should render the inverse block if false.', function() {
      var fn = hbs.compile('{{#contains context "zzz"}}A{{else}}B{{/contains}}');
      fn({context: 'CCC'}).should.equal('B');
    });

    it('should work with arrays', function() {
      var fn = hbs.compile('{{#contains array "a"}}A{{else}}B{{/contains}}');
      fn({array: ['a', 'b', 'c']}).should.equal('A');
    });

    it('should render the block when an index is passed::', function() {
      var fn = hbs.compile('{{#contains array "a" 0}}A{{else}}B{{/contains}}');
      fn({array: ['a', 'b', 'c']}).should.equal('A');
    });

    it('should render the inverse block when false with index:', function() {
      var fn = hbs.compile('{{#contains array "a" 1}}A{{else}}B{{/contains}}');
      fn({array: ['a', 'b', 'c']}).should.equal('B');
    });
  });

  describe('gt', function() {
    var fn = hbs.compile('{{#gt a b}}A{{else}}B{{/gt}}');

    describe('second arg', function() {
      it('should render the first block if true.', function() {
        fn({a: 20, b: 15}).should.equal('A');
      });
      it('should render the second block if equal.', function() {
        fn({a: 15, b: 15}).should.equal('B');
      });
      it('should render the second block if false.', function() {
        fn({a: 14, b: 15}).should.equal('B');
      });
    });

    describe('compare hash', function() {
      it('should not render a block if the value is not equal to a given number.', function() {
        var fn = hbs.compile('{{#gt number compare=8}}A{{/gt}}');
        fn({number: 5}).should.equal('');
      });
      it('should render a block if the value is greater than a given number.', function() {
        var fn = hbs.compile('{{#gt number compare=8}}A{{/gt}}');
        fn({number: 10}).should.equal('A');
      });
      it('should not render a block if the value is less than a given number.', function() {
        var fn = hbs.compile('{{#gt number compare=8}}A{{/gt}}');
        fn({number: 5}).should.equal('');
      });
    });
  });

  describe('gte', function() {
    describe('second argument', function() {
      var fn = hbs.compile('{{#gte a b}}A{{else}}B{{/gte}}');

      it('should render the first block if true.', function() {
        fn({a: 20, b: 15}).should.equal('A');
      });
      it('should render the first block if equal.', function() {
        fn({a: 15, b: 15}).should.equal('A');
      });
      it('should render the second block if false.', function() {
        fn({a: 14, b: 15}).should.equal('B');
      });
    });

    describe('hash compare', function() {
      it('should render a block if the value is greater than a given number.', function() {
        var fn = hbs.compile('{{#gte number compare=8}}A{{/gte}}');
        fn({number: 12}).should.equal('A');
      });
      it('should render a block if the value is equal to a given number.', function() {
        var fn = hbs.compile('{{#gte number compare=8}}A{{/gte}}');
        fn({number: 8}).should.equal('A');
      });
      it('should not render a block if the value is less than a given number.', function() {
        var fn = hbs.compile('{{#gte number compare=8}}A{{/gte}}');
        fn({number: 5}).should.equal('');
      });
    });
  });

  describe('has', function() {
    it('should render a block if the condition is true.', function() {
      var fn = hbs.compile('{{#has context "C"}}A{{else}}B{{/has}}');
      fn({context: 'CCC'}).should.equal('A');
    });

    it('should render the inverse block if false.', function() {
      var fn = hbs.compile('{{#has context "zzz"}}A{{else}}B{{/has}}');
      fn({context: 'CCC'}).should.equal('B');
    });

    it('should render the inverse block if value is undefined.', function() {
      var fn = hbs.compile('{{#has context}}A{{else}}B{{/has}}');
      fn({context: 'CCC'}).should.equal('B');
    });

    it('should render the inverse block if context is undefined.', function() {
      var fn = hbs.compile('{{#has}}A{{else}}B{{/has}}');
      fn({context: 'CCC'}).should.equal('B');
    });

    it('should work with arrays', function() {
      var fn = hbs.compile('{{#has array "a"}}A{{else}}B{{/has}}');
      fn({array: ['a', 'b', 'c']}).should.equal('A');
    });

    it('should work with two strings', function() {
      var fn = hbs.compile('{{#has "abc" "a"}}A{{else}}B{{/has}}');
      fn().should.equal('A');
    });

    it('should return the inverse when the second string is not found', function() {
      var fn = hbs.compile('{{#has "abc" "z"}}A{{else}}B{{/has}}');
      fn().should.equal('B');
    });

    it('should work with object keys', function() {
      var fn = hbs.compile('{{#has object "a"}}A{{else}}B{{/has}}');
      fn({object: {a: 'b'}}).should.equal('A');
    });
  });

  describe('eq', function() {
    it('should render a block if the value is equal to a given number.', function() {
      var fn = hbs.compile('{{#eq number compare=8}}A{{/eq}}');
      fn({number: 8}).should.equal('A');
    });

    it('should render the inverse block if falsey.', function() {
      var fn = hbs.compile('{{#eq number compare=8}}A{{else}}B{{/eq}}');
      fn({number: 9}).should.equal('B');
    });

    it('should compare first and second args', function() {
      var fn = hbs.compile('{{#eq number 8}}A{{else}}B{{/eq}}');
      fn({number: 9}).should.equal('B');
    });
  });

  describe('ifEven', function() {
    it('should render the block if the given value is an even number', function() {
      var fn = hbs.compile('{{#ifEven number}}A{{else}}B{{/ifEven}}');
      fn({number: 8}).should.equal('A');
    });

    it('should render the inverse block if the number is odd', function() {
      var fn = hbs.compile('{{#ifEven number}}A{{else}}B{{/ifEven}}');
      fn({number: 9}).should.equal('B');
    });
  });

  describe('ifNth', function() {
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

  describe('ifOdd', function() {
    it('should render the block if the given value is an even number', function() {
      var fn = hbs.compile('{{#ifOdd number}}A{{else}}B{{/ifOdd}}');
      fn({number: 9}).should.equal('A');
    });

    it('should render the inverse block if the number is odd', function() {
      var fn = hbs.compile('{{#ifOdd number}}A{{else}}B{{/ifOdd}}');
      fn({number: 8}).should.equal('B');
    });
  });

  describe('is', function() {
    it('should render a block if the condition is true.', function() {
      var fn = hbs.compile('{{#is value "CCC"}}A{{else}}B{{/is}}');
      fn({value: 'CCC'}).should.equal('A');
    });

    it('should use the `compare` arg on the options hash', function() {
      var fn = hbs.compile('{{#is value compare="CCC"}}A{{else}}B{{/is}}');
      fn({value: 'CCC'}).should.equal('A');
    });

    it('should render the inverse if the condition is false', function() {
      var fn = hbs.compile('{{#is value "FOO"}}A{{else}}B{{/is}}');
      fn({value: 'CCC'}).should.equal('B');
    });
  });

  describe('isnt', function() {
    it('should render a block if the condition is not true.', function() {
      var fn = hbs.compile('{{#isnt number 2}}A{{else}}B{{/isnt}}');
      fn({number: 3}).should.equal('A');
    });

    it('should use the `compare` arg on the options hash', function() {
      var fn = hbs.compile('{{#isnt value compare="CCC"}}A{{else}}B{{/isnt}}');
      fn({value: 'CCC'}).should.equal('B');
    });

    it('should render the inverse if the condition is false', function() {
      var fn = hbs.compile('{{#isnt value "FOO"}}A{{else}}B{{/isnt}}');
      fn({value: 'CCC'}).should.equal('A');
    });
  });

  describe('lt', function() {
    describe('second arg', function() {
      var fn = hbs.compile('{{#lt a b}}A{{else}}B{{/lt}}');

      it('should render the first block if true.', function() {
        fn({a: 14, b: 15}).should.equal('A');
      });
      it('should render the second block if equal.', function() {
        fn({a: 15, b: 15}).should.equal('B');
      });
      it('should render the second block if false.', function() {
        fn({a: 20, b: 15}).should.equal('B');
      });
    });

    describe('compare hash', function() {
      it('should render a block if the value is less than a given number.', function() {
        var fn = hbs.compile('{{#lt number compare=8}}A{{/lt}}');
        fn({number: 5}).should.equal('A');
      });
      it('should not render a block if the value is greater than a given number.', function() {
        var fn = hbs.compile('{{#lt number compare=8}}A{{/lt}}');
        fn({number: 42}).should.equal('');
      });
    });
  });

  describe('lte', function() {
    var fn = hbs.compile('{{#lte a b}}A{{else}}B{{/lte}}');

    describe('second arg', function() {
      it('should render the first block if true.', function() {
        fn({a: 14, b: 15}).should.equal('A');
      });

      it('should render the first block if equal.', function() {
        fn({a: 15, b: 15}).should.equal('A');
      });

      it('should render the second block if false.', function() {
        fn({a: 20, b: 15}).should.equal('B');
      });
    });

    describe('compare hash', function() {
      it('should render a block if the value is less than a given number.', function() {
        var fn = hbs.compile('{{#lte number compare=8}}A{{/lte}}');
        fn({number: 1}).should.equal('A');
      });

      it('should render a block if the value is equal to a given number.', function() {
        var fn = hbs.compile('{{#lte number compare=8}}A{{/lte}}');
        fn({number: 8}).should.equal('A');
      });

      it('should not render a block if the value is greater than a given number.', function() {
        var fn = hbs.compile('{{#lte number compare=8}}A{{/lte}}');
        fn({number: 27}).should.equal('');
      });
    });
  });

  describe('neither', function() {
    it('should render a block if one of the values is truthy.', function() {
      var fn = hbs.compile('{{#neither great magnificent}}A{{else}}B{{/neither}}');
      fn({great: false, magnificent: false}).should.equal('A');
    });

    it('should render the inverse block if neither are true.', function() {
      var fn = hbs.compile('{{#neither great magnificent}}A{{else}}B{{/neither}}');
      fn({great: true, magnificent: false}).should.equal('B');
    });
  });

  describe('or', function() {
    it('should render a block if one of the values is truthy.', function() {
      var fn = hbs.compile('{{#or great magnificent}}A{{else}}B{{/or}}');
      fn({great: false, magnificent: true}).should.equal('A');
    });

    it('should render the inverse block if neither are true.', function() {
      var fn = hbs.compile('{{#or great magnificent}}A{{else}}B{{/or}}');
      fn({great: false, magnificent: false}).should.equal('B');
    });
  });

  describe('unlessEq', function() {
    it('should render a block unless the value is equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessEq number compare=8}}A{{/unlessEq}}');
      fn({number: 10}).should.equal('A');
    });
    it('should render a block unless the value is equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessEq number compare=8}}A{{/unlessEq}}');
      fn({number: 8}).should.equal('');
    });
  });

  describe('unlessGt', function() {
    it('should render a block unless the value is greater than a given number.', function() {
      var fn = hbs.compile('{{#unlessGt number compare=8}}A{{/unlessGt}}');
      fn({number: 5}).should.equal('A');
    });
    it('should render a block unless the value is greater than a given number.', function() {
      var fn = hbs.compile('{{#unlessGt number compare=8}}A{{/unlessGt}}');
      fn({number: 10}).should.equal('');
    });
  });

  describe('unlessLt', function() {
    it('should render a block unless the value is less than a given number.', function() {
      var fn = hbs.compile('{{#unlessLt number compare=8}}A{{/unlessLt}}');
      fn({number: 10}).should.equal('A');
    });
    it('should render a block unless the value is less than a given number.', function() {
      var fn = hbs.compile('{{#unlessLt number compare=8}}A{{/unlessLt}}');
      fn({number: 5}).should.equal('');
    });
  });

  describe('unlessGteq', function() {
    it('should render a block unless the value is greater than or equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessGteq number compare=8}}A{{/unlessGteq}}');
      fn({number: 4}).should.equal('A');
    });
    it('should render a block unless the value is greater than or equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessGteq number compare=8}}A{{/unlessGteq}}');
      fn({number: 8}).should.equal('');
    });
    it('should not render a block unless the value is greater than or equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessGteq number compare=8}}A{{/unlessGteq}}');
      fn({number: 34}).should.equal('');
    });
  });

  describe('unlessLteq', function() {
    it('should render a block unless the value is less than or equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessLteq number compare=8}}A{{/unlessLteq}}');
      fn({number: 10}).should.equal('A');
    });
    it('should render a block unless the value is less than or equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessLteq number compare=8}}A{{/unlessLteq}}');
      fn({number: 8}).should.equal('');
    });
    it('should not render a block unless the value is less than or equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessLteq number compare=8}}A{{/unlessLteq}}');
      fn({number: 4}).should.equal('');
    });
  });
});
