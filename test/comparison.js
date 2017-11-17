'use strict';

require('mocha');
var assert = require('assert');
var hbs = require('handlebars').create();
var helpers = require('..');
helpers.comparison({handlebars: hbs});

describe('comparison', function() {
  describe('and', function() {
    describe('block', function() {
      it('should render a block if both values are truthy.', function() {
        var fn = hbs.compile('{{#and great magnificent}}A{{else}}B{{/and}}');
        assert.equal(fn({great: true, magnificent: true}), 'A');
      });

      it('should render the inverse block if both values are not truthy.', function() {
        var fn = hbs.compile('{{#and great magnificent}}A{{else}}B{{/and}}');
        assert.equal(fn({great: true, magnificent: false}), 'B');
      });
    });

    describe('inline or subexpression', function() {
      it('should render a block if both values are truthy.', function() {
        var fn = hbs.compile('{{and great magnificent}}');
        assert.equal(fn({great: true, magnificent: true}), 'true');
      });

      it('should render the inverse block if both values are not truthy.', function() {
        var fn = hbs.compile('{{and great magnificent}}');
        assert.equal(fn({great: true, magnificent: false}), 'false');
      });

      it('should work as subexpressions', function() {
        var fn = hbs.compile('{{and (and a b) (and great magnificent)}}');
        assert.equal(fn({great: true, magnificent: false}), 'false');
      });
    });
  });

  describe('compare', function() {
    describe('errors', function() {
      it('should throw an error when args are invalid', function() {
        assert.throws(function() {
          hbs.compile('{{#compare}}{{/compare}}')();
        }, /expects 4 arguments/);
        assert.throws(function() {
          hbs.compile('{{#compare a b}}{{/compare}}')();
        }, /expects 4 arguments/);
      });

      it('should throw an error when the operator is invalid', function() {
        assert.throws(function() {
          hbs.compile('{{#compare a "~" b}}{{/compare}}')();
        });
      });
    });

    describe('operators', function() {
      describe('==', function() {
        var fn = hbs.compile('{{#compare a "==" b}}A{{else}}B{{/compare}}');

        it('should render the first block if `a` equals `b`', function() {
          assert(fn({a: '0', b: 0}), 'A');
        });
        it('should render the second block if false', function() {
          assert(fn({a: 'foo', b: 0}), 'B');
        });
      });

      describe('===', function() {
        var fn = hbs.compile('{{#compare a "===" b}}A{{else}}B{{/compare}}');

        it('should render the first block if `a` strictly equals `b`', function() {
          assert(fn({a: '1', b: '1'}), 'A');
        });
        it('should render the second block if false', function() {
          assert(fn({a: '1', b: 1}), 'B');
        });
      });

      describe('!=', function() {
        var fn = hbs.compile('{{#compare a "!=" b}}A{{else}}B{{/compare}}');

        it('should render the first block if `a` does not equal `b`', function() {
          assert(fn({a: 10, b: '11'}), 'A');
        });
        it('should render the second block if false', function() {
          assert(fn({a: 10, b: '10'}), 'B');
        });
      });

      describe('!==', function() {
        var fn = hbs.compile('{{#compare a "!==" b}}A{{else}}B{{/compare}}');

        it('should render the first block if `a` does not strictly equal `b`', function() {
          assert(fn({a: 10, b: 11}), 'A');
        });
        it('should render the second block if false', function() {
          assert(fn({a: 10, b: 10}), 'B');
        });
      });

      describe('>', function() {
        var fn = hbs.compile('{{#compare a ">" b}}greater than or equal to 15{{else}}less than 15{{/compare}}');

        it('should render the first block if true.', function() {
          assert(fn({a: 20, b: 15}), 'greater than or equal to 15');
        });

        it('should render the second block if false.', function() {
          assert(fn({a: 14, b: 15}), 'less than 15');
        });
      });

      describe('<', function() {
        var fn = hbs.compile('I knew it, {{#compare unicorns "<" ponies}}unicorns are just low-quality ponies!{{else}}unicorns are special!{{/compare}}');

        it('should render the first block if true.', function() {
          var res = fn({unicorns: 5, ponies: 6});
          assert(res, 'I knew it, unicorns are just low-quality ponies!');
        });

        it('should render the second block if false.', function() {
          var res = fn({unicorns: 7, ponies: 6});
          assert(res, 'I knew it, unicorns are special!');
        });
      });

      describe('>=', function() {
        var fn = hbs.compile('{{#compare a ">=" b}}greater than or equal to 15{{else}}less than 15{{/compare}}');

        it('should render the first block if true.', function() {
          assert(fn({a: 20, b: 15}), 'greater than or equal to 15');
        });

        it('should render the first block if equal.', function() {
          assert(fn({a: 15, b: 15}), 'greater than or equal to 15');
        });

        it('should render the second block if false.', function() {
          assert(fn({a: 14, b: 15}), 'less than 15');
        });
      });

      describe('<=', function() {
        var fn = hbs.compile('{{#compare a "<=" b}}less than or equal to 10{{else}}greater than 10{{/compare}}');

        it('should render the first block if true.', function() {
          assert(fn({a: 10, b: 15}), 'less than or equal to 10');
        });

        it('should render the second block if false.', function() {
          assert(fn({a: 20, b: 15}), 'greater than 10');
        });
      });

      describe('typeof', function() {
        it('should render the first block if true', function() {
          var fn = hbs.compile('{{#compare obj "typeof" "object"}}A{{else}}B{{/compare}}');
          assert(fn({obj: {}}), 'A');
        });
      });
    });
  });

  describe('contains', function() {
    it('should render a block if the condition is true.', function() {
      var fn = hbs.compile('{{#contains context "C"}}A{{else}}B{{/contains}}');
      assert.equal(fn({context: 'CCC'}), 'A');
    });

    it('should render the inverse block if false.', function() {
      var fn = hbs.compile('{{#contains context "zzz"}}A{{else}}B{{/contains}}');
      assert.equal(fn({context: 'CCC'}), 'B');
    });

    it('should work with arrays', function() {
      var fn = hbs.compile('{{#contains array "a"}}A{{else}}B{{/contains}}');
      assert.equal(fn({array: ['a', 'b', 'c']}), 'A');
    });

    it('should render the block when an index is passed:', function() {
      var fn = hbs.compile('{{#contains array "a" 0}}A{{else}}B{{/contains}}');
      assert.equal(fn({array: ['a', 'b', 'c']}), 'A');
    });

    it('should render the inverse block when false with index:', function() {
      var fn = hbs.compile('{{#contains array "a" 1}}A{{else}}B{{/contains}}');
      assert.equal(fn({array: ['a', 'b', 'c']}), 'B');
    });

    it('should not render the block when an undefined argument is passed:', function() {
      var fn = hbs.compile('{{#contains array nothing}}A{{/contains}}');
      assert.equal(fn({array: ['a', 'b', 'c']}), '');
    });

    it('should render the inverse block when an undefined argument is passed:', function() {
      var fn = hbs.compile('{{#contains array nothing}}A{{else}}B{{/contains}}');
      assert.equal(fn({array: ['a', 'b', 'c']}), 'B');
    });
  });

  describe('default', function() {
    it('should use the given value:', function() {
      assert.equal(hbs.compile('{{default title "A"}}')({title: 'B'}), 'B');
    });
    it('should fallback to the default value when no value exists', function() {
      assert.equal(hbs.compile('{{default title "A"}}')({title: null}), 'A');
      assert.equal(hbs.compile('{{default title "A"}}')(), 'A');
    });
  });

  describe('gt', function() {
    var fn = hbs.compile('{{#gt a b}}A{{else}}B{{/gt}}');

    describe('second arg', function() {
      it('should render the first block if true.', function() {
        assert(fn({a: 20, b: 15}), 'A');
      });
      it('should render the second block if equal.', function() {
        assert(fn({a: 15, b: 15}), 'B');
      });
      it('should render the second block if false.', function() {
        assert(fn({a: 14, b: 15}), 'B');
      });
    });

    describe('compare hash', function() {
      it('should not render a block if the value is not equal to a given number.', function() {
        var fn = hbs.compile('{{#gt number compare=8}}A{{/gt}}');
        assert.equal(fn({number: 5}), '');
      });
      it('should render a block if the value is greater than a given number.', function() {
        var fn = hbs.compile('{{#gt number compare=8}}A{{/gt}}');
        assert.equal(fn({number: 10}), 'A');
      });
      it('should not render a block if the value is less than a given number.', function() {
        var fn = hbs.compile('{{#gt number compare=8}}A{{/gt}}');
        assert.equal(fn({number: 5}), '');
      });
    });
  });

  describe('gte', function() {
    describe('second argument', function() {
      var fn = hbs.compile('{{#gte a b}}A{{else}}B{{/gte}}');

      it('should render the first block if true.', function() {
        assert.equal(fn({a: 20, b: 15}), 'A');
      });
      it('should render the first block if equal.', function() {
        assert.equal(fn({a: 15, b: 15}), 'A');
      });
      it('should render the second block if false.', function() {
        assert.equal(fn({a: 14, b: 15}), 'B');
      });
    });

    describe('hash compare', function() {
      it('should render a block if the value is greater than a given number.', function() {
        var fn = hbs.compile('{{#gte number compare=8}}A{{/gte}}');
        assert.equal(fn({number: 12}), 'A');
      });
      it('should render a block if the value is equal to a given number.', function() {
        var fn = hbs.compile('{{#gte number compare=8}}A{{/gte}}');
        assert.equal(fn({number: 8}), 'A');
      });
      it('should not render a block if the value is less than a given number.', function() {
        var fn = hbs.compile('{{#gte number compare=8}}A{{/gte}}');
        assert.equal(fn({number: 5}), '');
      });
    });
  });

  describe('has', function() {
    describe('inline', function() {
      it('should return true when the property exists', function() {
        var fn = hbs.compile('{{has "foo"}}');
        assert.equal(fn({foo: 'bar'}), 'true');
      });
    });

    describe('block', function() {
      it('should render a block if the condition is true.', function() {
        var fn = hbs.compile('{{#has context "C"}}A{{else}}B{{/has}}');
        assert.equal(fn({context: 'CCC'}), 'A');
      });

      it('should render the inverse block if false.', function() {
        var fn = hbs.compile('{{#has context "zzz"}}A{{else}}B{{/has}}');
        assert.equal(fn({context: 'CCC'}), 'B');
      });

      it('should render the inverse block if value is undefined.', function() {
        var fn = hbs.compile('{{#has context}}A{{else}}B{{/has}}');
        assert.equal(fn({context: 'CCC'}), 'B');
      });

      it('should render the inverse block if context is undefined.', function() {
        var fn = hbs.compile('{{#has}}A{{else}}B{{/has}}');
        assert.equal(fn({context: 'CCC'}), 'B');
      });

      it('should work with arrays', function() {
        var fn = hbs.compile('{{#has array "a"}}A{{else}}B{{/has}}');
        assert.equal(fn({array: ['a', 'b', 'c']}), 'A');
      });

      it('should work with two strings', function() {
        var fn = hbs.compile('{{#has "abc" "a"}}A{{else}}B{{/has}}');
        assert.equal(fn(), 'A');
      });

      it('should return the inverse when the second string is not found', function() {
        var fn = hbs.compile('{{#has "abc" "z"}}A{{else}}B{{/has}}');
        assert.equal(fn(), 'B');
      });

      it('should work with object keys', function() {
        var fn = hbs.compile('{{#has object "a"}}A{{else}}B{{/has}}');
        assert.equal(fn({object: {a: 'b'}}), 'A');
      });
    });
  });

  describe('isFalsey', function() {
    it('should render block if given value is falsey.', function() {
      var fn = hbs.compile('{{#if (isFalsey value)}}A{{else}}B{{/if}}');
      assert.equal(fn({value: 'nope'}), 'A');
    });

    it('should render inverse if given value is truthy', function() {
      var fn = hbs.compile('{{#if (isFalsey value)}}A{{else}}B{{/if}}');
      assert.equal(fn({value: 'CCC'}), 'B');
    });
  });

  describe('isTruthy', function() {
    it('should render block if given value is truthy.', function() {
      var fn = hbs.compile('{{#if (isTruthy value)}}A{{else}}B{{/if}}');
      assert.equal(fn({value: 'CCC'}), 'A');
    });

    it('should render inverse if given value is not truthy', function() {
      var fn = hbs.compile('{{#if (isTruthy value)}}A{{else}}B{{/if}}');
      assert.equal(fn({value: 'nope'}), 'B');
    });
  });

  describe('eq', function() {
    it('should render a block if the value is equal to a given number.', function() {
      var fn = hbs.compile('{{#eq number compare=8}}A{{/eq}}');
      assert.equal(fn({number: 8}), 'A');
    });

    it('should render the inverse block if falsey.', function() {
      var fn = hbs.compile('{{#eq number compare=8}}A{{else}}B{{/eq}}');
      assert.equal(fn({number: 9}), 'B');
    });

    it('should compare first and second args', function() {
      var fn = hbs.compile('{{#eq number 8}}A{{else}}B{{/eq}}');
      assert.equal(fn({number: 9}), 'B');
    });
  });

  describe('ifEven', function() {
    it('should render the block if the given value is an even number', function() {
      var fn = hbs.compile('{{#ifEven number}}A{{else}}B{{/ifEven}}');
      assert(fn({number: 8}), 'A');
    });

    it('should render the inverse block if the number is odd', function() {
      var fn = hbs.compile('{{#ifEven number}}A{{else}}B{{/ifEven}}');
      assert.equal(fn({number: 9}), 'B');
    });
  });

  describe('ifNth', function() {
    it('should render a custom class on even rows', function() {
      var source = '{{#each items}}<div{{#ifNth 2 @index}}{{else}} class="row-alternate"{{/ifNth}}>{{name}}</div>{{/each}}';
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
      assert(fn(context), [
        '<div>Philip J. Fry</div>',
        '<div class="row-alternate">Turanga Leela</div>',
        '<div>Bender Bending Rodriguez</div>',
        '<div class="row-alternate">Amy Wong</div>',
        '<div>Hermes Conrad</div>'
      ].join(''));
    });
  });

  describe('ifOdd', function() {
    it('should render the block if the given value is an even number', function() {
      var fn = hbs.compile('{{#ifOdd number}}A{{else}}B{{/ifOdd}}');
      assert.equal(fn({number: 9}), 'A');
    });

    it('should render the inverse block if the number is odd', function() {
      var fn = hbs.compile('{{#ifOdd number}}A{{else}}B{{/ifOdd}}');
      assert.equal(fn({number: 8}), 'B');
    });
  });

  describe('is', function() {
    it('should render a block if the condition is true.', function() {
      var fn = hbs.compile('{{#is value "CCC"}}A{{else}}B{{/is}}');
      assert.equal(fn({value: 'CCC'}), 'A');
    });

    it('should use the `compare` arg on the options hash', function() {
      var fn = hbs.compile('{{#is value compare="CCC"}}A{{else}}B{{/is}}');
      assert.equal(fn({value: 'CCC'}), 'A');
    });

    it('should render the inverse if the condition is false', function() {
      var fn = hbs.compile('{{#is value "FOO"}}A{{else}}B{{/is}}');
      assert.equal(fn({value: 'CCC'}), 'B');
    });
  });

  describe('isnt', function() {
    it('should render a block if the condition is not true.', function() {
      var fn = hbs.compile('{{#isnt number 2}}A{{else}}B{{/isnt}}');
      assert.equal(fn({number: 3}), 'A');
    });

    it('should use the `compare` arg on the options hash', function() {
      var fn = hbs.compile('{{#isnt value compare="CCC"}}A{{else}}B{{/isnt}}');
      assert.equal(fn({value: 'CCC'}), 'B');
    });

    it('should render the inverse if the condition is false', function() {
      var fn = hbs.compile('{{#isnt value "FOO"}}A{{else}}B{{/isnt}}');
      assert.equal(fn({value: 'CCC'}), 'A');
    });
  });

  describe('lt', function() {
    describe('second arg', function() {
      var fn = hbs.compile('{{#lt a b}}A{{else}}B{{/lt}}');

      it('should render the first block if true.', function() {
        assert.equal(fn({a: 14, b: 15}), 'A');
      });
      it('should render the second block if equal.', function() {
        assert.equal(fn({a: 15, b: 15}), 'B');
      });
      it('should render the second block if false.', function() {
        assert.equal(fn({a: 20, b: 15}), 'B');
      });
    });

    describe('compare hash', function() {
      it('should render a block if the value is less than a given number.', function() {
        var fn = hbs.compile('{{#lt number compare=8}}A{{/lt}}');
        assert.equal(fn({number: 5}), 'A');
      });
      it('should not render a block if the value is greater than a given number.', function() {
        var fn = hbs.compile('{{#lt number compare=8}}A{{/lt}}');
        assert.equal(fn({number: 42}), '');
      });
    });
  });

  describe('lte', function() {
    var fn = hbs.compile('{{#lte a b}}A{{else}}B{{/lte}}');

    describe('second arg', function() {
      it('should render the first block if true.', function() {
        assert.equal(fn({a: 14, b: 15}), 'A');
      });

      it('should render the first block if equal.', function() {
        assert.equal(fn({a: 15, b: 15}), 'A');
      });

      it('should render the second block if false.', function() {
        assert.equal(fn({a: 20, b: 15}), 'B');
      });
    });

    describe('compare hash', function() {
      it('should render a block if the value is less than a given number.', function() {
        var fn = hbs.compile('{{#lte number compare=8}}A{{/lte}}');
        assert.equal(fn({number: 1}), 'A');
      });

      it('should render a block if the value is equal to a given number.', function() {
        var fn = hbs.compile('{{#lte number compare=8}}A{{/lte}}');
        assert.equal(fn({number: 8}), 'A');
      });

      it('should not render a block if the value is greater than a given number.', function() {
        var fn = hbs.compile('{{#lte number compare=8}}A{{/lte}}');
        assert.equal(fn({number: 27}), '');
      });
    });
  });

  describe('neither', function() {
    it('should render a block if one of the values is truthy.', function() {
      var fn = hbs.compile('{{#neither great magnificent}}A{{else}}B{{/neither}}');
      assert.equal(fn({great: false, magnificent: false}), 'A');
    });

    it('should render the inverse block if neither are true.', function() {
      var fn = hbs.compile('{{#neither great magnificent}}A{{else}}B{{/neither}}');
      assert.equal(fn({great: true, magnificent: false}), 'B');
    });
  });

  describe('or', function() {
    describe('block', function() {
      it('should render a block if one of the values is truthy.', function() {
        var fn = hbs.compile('{{#or great magnificent}}A{{else}}B{{/or}}');
        assert.equal(fn({great: false, magnificent: true}), 'A');
      });
      it('should render a block if any of the values are truthy.', function() {
        var fn = hbs.compile('{{#or great magnificent fantastic}}A{{else}}B{{/or}}');
        assert.equal(fn({great: false, magnificent: false, fantastic: true}), 'A');
      });
      it('should render the inverse block if neither are true.', function() {
        var fn = hbs.compile('{{#or great magnificent}}A{{else}}B{{/or}}');
        assert.equal(fn({great: false, magnificent: false}), 'B');
      });
      it('should render the inverse block if none are true.', function() {
        var fn = hbs.compile('{{#or great magnificent fantastic}}A{{else}}B{{/or}}');
        assert.equal(fn({great: false, magnificent: false, fantastic: false}), 'B');
      });
    });

    describe('inline', function() {
      it('should return false none of the values is truthy.', function() {
        var fn = hbs.compile('{{or great magnificent}}');
        assert.equal(fn({great: false, magnificent: false}), 'false');
      });

      it('should return true if one of the values is truthy.', function() {
        var fn = hbs.compile('{{or great magnificent}}');
        assert.equal(fn({great: false, magnificent: true}), 'true');
      });
    });
  });

  describe('unlessEq', function() {
    it('should render a block unless the value is equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessEq number compare=8}}A{{/unlessEq}}');
      assert.equal(fn({number: 10}), 'A');
    });
    it('should render a block unless the value is equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessEq number compare=8}}A{{/unlessEq}}');
      assert.equal(fn({number: 8}), '');
    });
  });

  describe('unlessGt', function() {
    it('should render a block unless the value is greater than a given number.', function() {
      var fn = hbs.compile('{{#unlessGt number compare=8}}A{{/unlessGt}}');
      assert.equal(fn({number: 5}), 'A');
    });
    it('should render a block unless the value is greater than a given number.', function() {
      var fn = hbs.compile('{{#unlessGt number compare=8}}A{{/unlessGt}}');
      assert.equal(fn({number: 10}), '');
    });
  });

  describe('unlessLt', function() {
    it('should render a block unless the value is less than a given number.', function() {
      var fn = hbs.compile('{{#unlessLt number compare=8}}A{{/unlessLt}}');
      assert.equal(fn({number: 10}), 'A');
    });
    it('should render a block unless the value is less than a given number.', function() {
      var fn = hbs.compile('{{#unlessLt number compare=8}}A{{/unlessLt}}');
      assert.equal(fn({number: 5}), '');
    });
  });

  describe('unlessGteq', function() {
    it('should render a block unless the value is greater than or equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessGteq number compare=8}}A{{/unlessGteq}}');
      assert.equal(fn({number: 4}), 'A');
    });
    it('should render a block unless the value is greater than or equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessGteq number compare=8}}A{{/unlessGteq}}');
      assert.equal(fn({number: 8}), '');
    });
    it('should not render a block unless the value is greater than or equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessGteq number compare=8}}A{{/unlessGteq}}');
      assert.equal(fn({number: 34}), '');
    });
  });

  describe('unlessLteq', function() {
    it('should render a block unless the value is less than or equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessLteq number compare=8}}A{{/unlessLteq}}');
      assert.equal(fn({number: 10}), 'A');
    });
    it('should render a block unless the value is less than or equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessLteq number compare=8}}A{{/unlessLteq}}');
      assert.equal(fn({number: 8}), '');
    });
    it('should not render a block unless the value is less than or equal to a given number.', function() {
      var fn = hbs.compile('{{#unlessLteq number compare=8}}A{{/unlessLteq}}');
      assert.equal(fn({number: 4}), '');
    });
  });
});
