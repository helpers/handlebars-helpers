'use strict';

require('should');
var assert = require('assert');
var hbs = require('handlebars');
var helpers = require('..');
helpers.comparison({handlebars: hbs});

describe('comparison', function() {
  describe('and', function() {
    it('should render a block if both values are truthy.', function() {
      var fn = hbs.compile('{{#and great magnificent}}A{{else}}B{{/and}}');
      assert.equal(fn({great: true, magnificent: true}), 'A');
    });

    it('should render the inverse block if both values are not truthy.', function() {
      var fn = hbs.compile('{{#and great magnificent}}A{{else}}B{{/and}}');
      assert.equal(fn({great: true, magnificent: false}), 'B');
    });
    
    describe('non-block helper', function() {
      it('should return true if both values are truthy.', function() {
        var fn = hbs.compile('{{and great magnificent}}');
        assert.equal(fn({great: true, magnificent: true}), 'true');
      });
      
      it('should return false if both values are not truthy.', function() {
        var fn = hbs.compile('{{and great magnificent}}');
        assert.equal(fn({great: true, magnificent: false}), 'false');
      });
    });
  });

  describe('compare', function() {
    describe('errors', function() {
      it('should throw an error when args are invalid', function() {
        (function() {
          hbs.compile('{{#compare}}{{/compare}}')();
        }).should.throw('handlebars Helper {{compare}} expects 4 arguments');
        (function() {
          hbs.compile('{{#compare a b}}{{/compare}}')();
        }).should.throw('handlebars Helper {{compare}} expects 4 arguments');
      });

      it('should throw an error when the operator is invalid', function() {
        (function() {
          hbs.compile('{{#compare a "~" b}}{{/compare}}')();
        }).should.throw('helper {{compare}}: invalid operator: `~`');
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
    
    describe('operators - non block helper', function() {
      describe('==', function() {
        var fn = hbs.compile('{{compare a "==" b}}');

        it('should return true  if `a` equals `b`', function() {
          assert(fn({a: '0', b: 0}), 'true');
        });
        it('should return false block if false', function() {
          assert(fn({a: 'foo', b: 0}), 'false');
        });
      });

      describe('===', function() {
        var fn = hbs.compile('{{compare a "===" b}}');

        it('should return true if `a` strictly equals `b`', function() {
          assert(fn({a: '1', b: '1'}), 'true');
        });
        it('should return false if false', function() {
          assert(fn({a: '1', b: 1}), 'false');
        });
      });

      describe('!=', function() {
        var fn = hbs.compile('{{compare a "!=" b}}');

        it('should return true if `a` does not equal `b`', function() {
          assert(fn({a: 10, b: '11'}), 'true');
        });
        it('should return false if false', function() {
          assert(fn({a: 10, b: '10'}), 'false');
        });
      });

      describe('!==', function() {
        var fn = hbs.compile('{{compare a "!==" b}}');

        it('should return true if `a` does not strictly equal `b`', function() {
          assert(fn({a: 10, b: 11}), 'true');
        });
        it('should return false if false', function() {
          assert(fn({a: 10, b: 10}), 'false');
        });
      });

      describe('>', function() {
        var fn = hbs.compile('{{compare a ">" b}}');

        it('should return true if true.', function() {
          assert(fn({a: 20, b: 15}), 'true');
        });

        it('should return false if false.', function() {
          assert(fn({a: 14, b: 15}), 'false');
        });
      });

      describe('<', function() {
        var fn = hbs.compile('{{compare unicorns "<" ponies}}');

        it('should return true if true.', function() {
          assert(fn({unicorns: 5, ponies: 6}), 'true');
        });

        it('should return false if false.', function() {
          assert(fn({unicorns: 7, ponies: 6}), 'false');
        });
      });

      describe('>=', function() {
        var fn = hbs.compile('{{compare a ">=" b}}');

        it('should return true if true.', function() {
          assert(fn({a: 20, b: 15}), 'true');
        });

        it('should return true if equal.', function() {
          assert(fn({a: 15, b: 15}), 'true');
        });

        it('should return false if false.', function() {
          assert(fn({a: 14, b: 15}), 'false');
        });
      });

      describe('<=', function() {
        var fn = hbs.compile('{{compare a "<=" b}}');

        it('should return true if true.', function() {
          assert(fn({a: 10, b: 15}), 'true');
        });

        it('should return false if false.', function() {
          assert(fn({a: 20, b: 15}), 'false');
        });
      });

      describe('typeof', function() {
        it('should return true if true', function() {
          var fn = hbs.compile('{{compare obj "typeof" "object"}}');
          assert(fn({obj: {}}), 'true');
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

    it('should render the block when an index is passed::', function() {
      var fn = hbs.compile('{{#contains array "a" 0}}A{{else}}B{{/contains}}');
      assert.equal(fn({array: ['a', 'b', 'c']}), 'A');
    });

    it('should render the inverse block when false with index:', function() {
      var fn = hbs.compile('{{#contains array "a" 1}}A{{else}}B{{/contains}}');
      assert.equal(fn({array: ['a', 'b', 'c']}), 'B');
    });
    
    describe('non-block helper', function() {
      it('should return true if the condition is true.', function() {
        var fn = hbs.compile('{{contains context "C"}}');
        assert.equal(fn({context: 'CCC'}), 'true');
      });

      it('should return false if false.', function() {
        var fn = hbs.compile('{{contains context "zzz"}}');
        assert.equal(fn({context: 'CCC'}), 'false');
      });

      it('should work with arrays', function() {
        var fn = hbs.compile('{{contains array "a"}}');
        assert.equal(fn({array: ['a', 'b', 'c']}), 'true');
      });

      it('should return true when an index is passed::', function() {
        var fn = hbs.compile('{{contains array "a" 0}}');
        assert.equal(fn({array: ['a', 'b', 'c']}), 'true');
      });

      it('should return false when false with index:', function() {
        var fn = hbs.compile('{{contains array "a" 1}}');
        assert.equal(fn({array: ['a', 'b', 'c']}), 'false');
      });
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
    
    describe('non-block helper', function() {
      var fn = hbs.compile('{{gt a b}}');
      describe('second arg', function() {
        it('should return true if true.', function() {
          assert(fn({a: 20, b: 15}), 'true');
        });
        it('should return false if equal.', function() {
          assert(fn({a: 15, b: 15}), 'false');
        });
        it('should return false if false.', function() {
          assert(fn({a: 14, b: 15}), 'false');
        });
      });

      describe('compare hash', function() {
        var fn = hbs.compile('{{gt number compare=8}}');
        it('should return false if the value is not equal to a given number.', function() {
          assert.equal(fn({number: 5}), 'false');
        });
        it('should return true if the value is greater than a given number.', function() {
          assert.equal(fn({number: 10}), 'true');
        });
        it('should return false a block if the value is less than a given number.', function() {
          assert.equal(fn({number: 5}), 'false');
        });
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
    
    describe('non-block helper', function() {
      describe('second argument', function() {
        var fn = hbs.compile('{{gte a b}}');

        it('should return true if true.', function() {
          assert.equal(fn({a: 20, b: 15}), 'true');
        });
        it('should return true if equal.', function() {
          assert.equal(fn({a: 15, b: 15}), 'true');
        });
        it('should return false if false.', function() {
          assert.equal(fn({a: 14, b: 15}), 'false');
        });
      });

      describe('hash compare', function() {
        var fn = hbs.compile('{{gte number compare=8}}');
        
        it('should return true if the value is greater than a given number.', function() {
          assert.equal(fn({number: 12}), 'true');
        });
        it('should return true if the value is equal to a given number.', function() {
          assert.equal(fn({number: 8}), 'true');
        });
        it('should return false if the value is less than a given number.', function() {
          assert.equal(fn({number: 5}), 'false');
        });
      });
    });
  });

  describe('has', function() {
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
    
    describe('non-block helper', function() {
      it('should return true if the condition is true.', function() {
        var fn = hbs.compile('{{has context "C"}}');
        assert.equal(fn({context: 'CCC'}), 'true');
      });

      it('should return false if false.', function() {
        var fn = hbs.compile('{{has context "zzz"}}');
        assert.equal(fn({context: 'CCC'}), 'false');
      });

      it('should return false if value is undefined.', function() {
        var fn = hbs.compile('{{has context}}');
        assert.equal(fn({context: 'CCC'}), 'false');
      });

      it('should return false if context is undefined.', function() {
        var fn = hbs.compile('{{has}}');
        assert.equal(fn({context: 'CCC'}), 'false');
      });

      it('should work with arrays', function() {
        var fn = hbs.compile('{{has array "a"}}');
        assert.equal(fn({array: ['a', 'b', 'c']}), 'true');
      });

      it('should work with two strings', function() {
        var fn = hbs.compile('{{has "abc" "a"}}');
        assert.equal(fn(), 'true');
      });

      it('should return false when the second string is not found', function() {
        var fn = hbs.compile('{{has "abc" "z"}}');
        assert.equal(fn(), 'false');
      });

      it('should work with object keys', function() {
        var fn = hbs.compile('{{has object "a"}}');
        assert.equal(fn({object: {a: 'b'}}), 'true');
      });
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
    
    describe('non-block helper', function() {
      it('should return true if the value is equal to a given number.', function() {
        var fn = hbs.compile('{{eq number compare=8}}');
        assert.equal(fn({number: 8}), 'true');
      });

      it('should return false if falsey.', function() {
        var fn = hbs.compile('{{eq number compare=8}}');
        assert.equal(fn({number: 9}), 'false');
      });

      it('should compare first and second args', function() {
        var fn = hbs.compile('{{eq number 8}}');
        assert.equal(fn({number: 9}), 'false');
      });
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
    
    describe('non-block helper', function() {
      it('should return true if the given value is an even number', function() {
        var fn = hbs.compile('{{ifEven number}}');
        assert(fn({number: 8}), 'true');
      });

      it('should return false if the number is odd', function() {
        var fn = hbs.compile('{{ifEven number}}');
        assert.equal(fn({number: 9}), 'false');
      });
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
      assert(fn(context), [
        '<div >Philip J. Fry</div>',
        '<div class="row-alternate">Turanga Leela</div>',
        '<div >Bender Bending Rodriguez</div>',
        '<div class="row-alternate">Amy Wong</div>',
        '<div >Hermes Conrad</div>'
      ].join(''));
    });
    
    
    describe('non-block helper', function() {
      // it('should have a test for non block helper', function() {
      //   assert(false);
      // });
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
    
    
    describe('non-block helper', function() {
      it('should return true if the given value is an even number', function() {
        var fn = hbs.compile('{{ifOdd number}}');
        assert.equal(fn({number: 9}), 'true');
      });

      it('should return false if the number is odd', function() {
        var fn = hbs.compile('{{ifOdd number}}');
        assert.equal(fn({number: 8}), 'false');
      });
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
    
    describe('non-block helper', function() {
      it('should return true if the condition is true.', function() {
        var fn = hbs.compile('{{is value "CCC"}}');
        assert.equal(fn({value: 'CCC'}), 'true');
      });

      it('should use the `compare` arg on the options hash', function() {
        var fn = hbs.compile('{{is value compare="CCC"}}');
        assert.equal(fn({value: 'CCC'}), 'true');
      });

      it('should return false if the condition is false', function() {
        var fn = hbs.compile('{{is value "FOO"}}');
        assert.equal(fn({value: 'CCC'}), 'false');
      });
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
    
    describe('non-block helper', function() {
      it('should return true if the condition is not true.', function() {
        var fn = hbs.compile('{{isnt number 2}}');
        assert.equal(fn({number: 3}), 'true');
      });

      it('should use the `compare` arg on the options hash', function() {
        var fn = hbs.compile('{{isnt value compare="CCC"}}');
        assert.equal(fn({value: 'CCC'}), 'false');
      });

      it('should return true if the condition is false', function() {
        var fn = hbs.compile('{{isnt value "FOO"}}');
        assert.equal(fn({value: 'CCC'}), 'true');
      });
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
    
    describe('non-block helper', function() {
      describe('second arg', function() {
        var fn = hbs.compile('{{lt a b}}');

        it('should return true if true.', function() {
          assert.equal(fn({a: 14, b: 15}), 'true');
        });
        it('should return false if equal.', function() {
          assert.equal(fn({a: 15, b: 15}), 'false');
        });
        it('should return false if false.', function() {
          assert.equal(fn({a: 20, b: 15}), 'false');
        });
      });

      describe('compare hash', function() {
        it('should return true if the value is less than a given number.', function() {
          var fn = hbs.compile('{{lt number compare=8}}');
          assert.equal(fn({number: 5}), 'true');
        });
        it('should return false if the value is greater than a given number.', function() {
          var fn = hbs.compile('{{lt number compare=8}}');
          assert.equal(fn({number: 42}), 'false');
        });
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
    
    describe('non-block helper', function() {
      var fn = hbs.compile('{{lte a b}}');

      describe('second arg', function() {
        it('should return true if true.', function() {
          assert.equal(fn({a: 14, b: 15}), 'true');
        });

        it('should return true if equal.', function() {
          assert.equal(fn({a: 15, b: 15}), 'true');
        });

        it('should return false if false.', function() {
          assert.equal(fn({a: 20, b: 15}), 'false');
        });
      });

      describe('compare hash', function() {
        it('should return false the value is less than a given number.', function() {
          var fn = hbs.compile('{{lte number compare=8}}');
          assert.equal(fn({number: 1}), 'true');
        });

        it('should return true if the value is equal to a given number.', function() {
          var fn = hbs.compile('{{lte number compare=8}}');
          assert.equal(fn({number: 8}), 'true');
        });
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
    
    describe('non-block helper', function() {
      it('should return true if one of the values is truthy.', function() {
        var fn = hbs.compile('{{neither great magnificent}}');
        assert.equal(fn({great: false, magnificent: false}), 'true');
      });

      it('should return false if neither are true.', function() {
        var fn = hbs.compile('{{neither great magnificent}}');
        assert.equal(fn({great: true, magnificent: false}), 'false');
      });
    });
  });

  describe('or', function() {
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
    
    describe('non-block helper', function() {
      it('should return true if one of the values is truthy.', function() {
        var fn = hbs.compile('{{or great magnificent}}');
        assert.equal(fn({great: false, magnificent: true}), 'true');
      });
      it('should return true if any of the values are truthy.', function() {
        var fn = hbs.compile('{{or great magnificent fantastic}}');
        assert.equal(fn({great: false, magnificent: false, fantastic: true}), 'true');
      });
      it('should return false if neither are true.', function() {
        var fn = hbs.compile('{{or great magnificent}}');
        assert.equal(fn({great: false, magnificent: false}), 'false');
      });
      it('should return false if none are true.', function() {
        var fn = hbs.compile('{{or great magnificent fantastic}}');
        assert.equal(fn({great: false, magnificent: false, fantastic: false}), 'false');
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
    
    describe('non-block helper', function() {
      it('should return true unless the value is equal to a given number.', function() {
        var fn = hbs.compile('{{unlessEq number compare=8}}');
        assert.equal(fn({number: 10}), 'true');
      });
      it('should return false if the value is equal to a given number.', function() {
        var fn = hbs.compile('{{unlessEq number compare=8}}');
        assert.equal(fn({number: 8}), 'false');
      });
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
    
    describe('non-block helper', function() {
      it('should return true unless the value is greater than a given number.', function() {
        var fn = hbs.compile('{{unlessGt number compare=8}}');
        assert.equal(fn({number: 5}), 'true');
      });
      it('should return false if the value is greater than a given number.', function() {
        var fn = hbs.compile('{{unlessGt number compare=8}}');
        assert.equal(fn({number: 10}), 'false');
      });
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
    
    describe('non-block helper', function() {
      it('should return true unless the value is less than a given number.', function() {
        var fn = hbs.compile('{{unlessLt number compare=8}}');
        assert.equal(fn({number: 10}), 'true');
      });
      it('should return false if the value is less than a given number.', function() {
        var fn = hbs.compile('{{unlessLt number compare=8}}');
        assert.equal(fn({number: 5}), 'false');
      });
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
    
    describe('non-block helper', function() {
      it('should return true unless the value is greater than or equal to a given number.', function() {
        var fn = hbs.compile('{{unlessGteq number compare=8}}');
        assert.equal(fn({number: 4}), 'true');
      });
      it('should return false if the value is greater than or equal to a given number.', function() {
        var fn = hbs.compile('{{unlessGteq number compare=8}}');
        assert.equal(fn({number: 8}), 'false');
      });
      it('should return false if the value is greater than or equal to a given number.', function() {
        var fn = hbs.compile('{{unlessGteq number compare=8}}');
        assert.equal(fn({number: 34}), 'false');
      });
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
    
    describe('non-block helper', function() {
      it('should return true unless the value is less than or equal to a given number.', function() {
        var fn = hbs.compile('{{unlessLteq number compare=8}}');
        assert.equal(fn({number: 10}), 'true');
      });
      it('should return false if the value is less than or equal to a given number.', function() {
        var fn = hbs.compile('{{unlessLteq number compare=8}}');
        assert.equal(fn({number: 8}), 'false');
      });
      it('should return false if the value is less than or equal to a given number.', function() {
        var fn = hbs.compile('{{unlessLteq number compare=8}}');
        assert.equal(fn({number: 4}), 'false');
      });
    });
  });
});
