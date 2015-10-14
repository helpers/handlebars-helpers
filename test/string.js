'use strict';

require('should');
var hbs = require('handlebars');
var helpers = require('..');
helpers.string({handlebars: hbs});

describe('string', function() {
  describe('camelcase', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{camelcase}}');
      fn().should.equal('');
    });
    it('should return the string in camelcase', function() {
      var fn = hbs.compile('{{camelcase "foo bar baz qux"}}');
      fn().should.equal('fooBarBazQux');
    });
    it('should lowercase a single character', function() {
      hbs.compile('{{camelcase "f"}}')().should.equal('f');
      hbs.compile('{{camelcase "A"}}')().should.equal('a');
    });
  });

  describe('capitalize', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{capitalize}}');
      fn().should.equal('');
    });
    it('should capitalize a word.', function() {
      var fn = hbs.compile('{{capitalize "foo"}}');
      fn().should.equal('Foo');
    });
  });

  describe('capitalizeAll', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{capitalizeAll}}');
      fn().should.equal('');
    });
    it('should return the string with the every word capitalized.', function() {
      var fn = hbs.compile('{{capitalizeAll "bender should not bE allowed on tV"}}');
      fn().should.equal('Bender Should Not BE Allowed On TV');
    });
  });

  describe('center', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{center}}');
      fn().should.equal('');
    });
    it('should return the string centered by using non-breaking spaces.', function() {
      var fn = hbs.compile('{{center "Bender should not be allowed on tv." 2}}');
      fn().should.equal('&amp;nbsp;&amp;nbsp;Bender should not be allowed on tv.&amp;nbsp;&amp;nbsp;');
    });
  });

  describe('chop', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{chop}}');
      fn().should.equal('');
    });
    it('should remove non-word characters from start of string', function() {
      var fn = hbs.compile('{{chop "- foo bar baz"}}');
      fn().should.equal('foo bar baz');
    });
    it('should remove non-word characters from end of string', function() {
      var fn = hbs.compile('{{chop "foo bar baz _- "}}');
      fn().should.equal('foo bar baz');
    });
  });

  describe('dashcase', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{dashcase}}');
      fn().should.equal('');
    });
    it('should return the string in dashcase', function() {
      var fn = hbs.compile('{{dashcase "foo bar baz qux"}}');
      fn().should.equal('foo-bar-baz-qux');
    });
    it('should lowercase a single character', function() {
      hbs.compile('{{dashcase "f"}}')().should.equal('f');
      hbs.compile('{{dashcase "A"}}')().should.equal('a');
    });
  });

  describe('dotcase', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{dotcase}}');
      fn().should.equal('');
    });
    it('should return the string in dotcase', function() {
      var fn = hbs.compile('{{dotcase "foo bar baz qux"}}');
      fn().should.equal('foo.bar.baz.qux');
    });
    it('should lowercase a single character', function() {
      hbs.compile('{{dotcase "f"}}')().should.equal('f');
      hbs.compile('{{dotcase "A"}}')().should.equal('a');
    });
  });

  describe('hyphenate', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{hyphenate}}');
      fn().should.equal('');
    });
    it('should return the string with spaces replaced with hyphens.', function() {
      var fn = hbs.compile('{{hyphenate "Bender should not be allowed on tv."}}');
      fn().should.equal('Bender-should-not-be-allowed-on-tv.');
    });
  });

  describe('lowercase', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{lowercase}}');
      fn().should.equal('');
    });
    it('should return the string in lowercase', function() {
      var fn = hbs.compile('{{lowercase "BENDER SHOULD NOT BE ALLOWED ON TV"}}');
      fn().should.equal('bender should not be allowed on tv');
    });
  });

  describe('occurrences', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{occurrences}}');
      fn().should.equal('');
    });
    it('should return the number of occurrences of a string, within a string.', function() {
      var fn = hbs.compile('{{occurrences "Death by Snu-Snu" "Snu"}}');
      fn().should.equal('2');
    });
  });
  
  describe('pascalcase', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{pascalcase}}');
      fn().should.equal('');
    });
    it('should return the string in pascalcase', function() {
      var fn = hbs.compile('{{pascalcase "foo bar baz qux"}}');
      fn().should.equal('FooBarBazQux');
    });
    it('should uppercase a single character', function() {
      hbs.compile('{{pascalcase "f"}}')().should.equal('F');
      hbs.compile('{{pascalcase "A"}}')().should.equal('A');
    });
  });

  describe('pathcase', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{pathcase}}');
      fn().should.equal('');
    });
    it('should return the string in pathcase', function() {
      var fn = hbs.compile('{{pathcase "foo bar baz qux"}}');
      fn().should.equal('foo/bar/baz/qux');
    });
    it('should lowercase a single character', function() {
      hbs.compile('{{pathcase "f"}}')().should.equal('f');
      hbs.compile('{{pathcase "A"}}')().should.equal('a');
    });
  });

  describe('plusify', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{plusify}}');
      fn().should.equal('');
    });
    it('should return the empty string with no change.', function() {
      var fn = hbs.compile('{{plusify ""}}');
      fn().should.equal('');
    });
    it('should return the string with no change.', function() {
      var fn = hbs.compile('{{plusify "BenderShouldNotBeAllowedOnTv."}}');
      fn().should.equal('BenderShouldNotBeAllowedOnTv.');
    });
    it('should return the string with spaces replaced with pluses.', function() {
      var fn = hbs.compile('{{plusify "Bender should not be allowed on tv."}}');
      fn().should.equal('Bender+should+not+be+allowed+on+tv.');
    });
  });

  describe('replace', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{replace}}');
      fn().should.equal('');
    });
    it('should replace occurrences of string "A" with string "B"', function() {
      var fn = hbs.compile('{{replace "Bender Bending Rodriguez" "B" "M"}}');
      fn().should.equal('Mender Mending Rodriguez');
    });
    it('should return the string if `a` is undefined', function() {
      var fn = hbs.compile('{{replace "a b c"}}');
      fn().should.equal('a b c');
    });
    it('should replace the string with `""` if `b` is undefined', function() {
      var fn = hbs.compile('{{replace "a b c" "a"}}');
      fn().should.equal(' b c');
    });
  });

  describe('reverse', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{reverse}}');
      fn().should.equal('');
    });
    it('should return the string in reverse.', function() {
      var fn = hbs.compile('{{reverse "bender should NOT be allowed on TV."}}');
      fn().should.equal('.VT no dewolla eb TON dluohs redneb');
    });
  });

  describe('sentence', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{sentence}}');
      fn().should.equal('');
    });
    it('should capitalize the first word of each sentence in a string and convert the rest of the sentence to lowercase.', function() {
      var fn = hbs.compile('{{sentence "bender should NOT be allowed on TV. fry SHOULD be allowed on TV."}}');
      fn().should.equal('Bender should not be allowed on tv. Fry should be allowed on tv.');
    });
  });

  describe('snakecase', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{snakecase}}');
      fn().should.equal('');
    });
    it('should lowercase a single character', function() {
      hbs.compile('{{snakecase "a"}}')().should.equal('a');
      hbs.compile('{{snakecase "A"}}')().should.equal('a');
    });
    it('should return the string in snakecase', function() {
      var fn = hbs.compile('{{snakecase "foo bar baz qux"}}');
      fn().should.equal('foo_bar_baz_qux');
    });
  });

  describe('split', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{split}}');
      fn().should.equal('');
    });
    it('should split the string with the default character', function() {
      var fn = hbs.compile('{{#each (split "a,b,c")}}<{{.}}>{{/each}}');
      fn().should.equal('<a><b><c>');
    });
    it('should split the string on the given character', function() {
      var fn = hbs.compile('{{#each (split "a|b|c" "|")}}<{{.}}>{{/each}}');
      fn().should.equal('<a><b><c>');
    });
  });

  describe('titleize', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{titleize}}');
      fn().should.equal('');
    });
    it('should return the string in title case.', function() {
      var fn = hbs.compile('{{titleize "Bender-should-Not-be-allowed_on_Tv"}}');
      fn().should.equal('Bender Should Not Be Allowed On Tv');
    });
  });

  describe('trim', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{trim}}');
      fn().should.equal('');
    });
    it('should trim leading whitespace', function() {
      var fn = hbs.compile('{{trim "    foo"}}');
      fn().should.equal('foo');
    });
    it('should trim trailing whitespace', function() {
      var fn = hbs.compile('{{trim "foo   "}}');
      fn().should.equal('foo');
    });
  });

  describe('startsWith', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{startsWith}}');
      fn().should.equal('');
    });
    it('should render "Yes he is", from inside the block.', function() {
      var fn = hbs.compile('{{#startsWith "Bender" "Bender is great"}}Yes he is{{/startsWith}}');
      fn().should.equal("Yes he is");
    });
    it('should render the Inverse block.', function() {
      var fn = hbs.compile('{{#startsWith "Goodbye" "Hello, world!"}}Whoops{{else}}Bro, do you even hello world?{{/startsWith}}');
      fn().should.equal('Bro, do you even hello world?');
    });
    it("should render the Inverse block.", function() {
      var fn = hbs.compile('{{#startsWith "myPrefix" nullProperty}}fn block{{else}}inverse block{{/startsWith}}');
      fn().should.equal('inverse block');
    });
  });

  describe('uppercase', function() {
    it('should return an empty string if undefined', function() {
      var fn = hbs.compile('{{uppercase}}');
      fn().should.equal('');
    });

    it('should return the string in uppercase', function() {
      var fn = hbs.compile('{{uppercase "bender should not be allowed on tv"}}');
      fn().should.equal('BENDER SHOULD NOT BE ALLOWED ON TV');
    });
    
    it('should work as a block helper', function() {
      var fn = hbs.compile('{{#uppercase}}bender should not be allowed on tv{{/uppercase}}');
      fn().should.equal('BENDER SHOULD NOT BE ALLOWED ON TV');
    });
  });
});

