'use strict';

require('mocha');
const assert = require('assert');
const hbs = require('handlebars').create();
const stringHelpers = require('../lib/string');

hbs.registerHelper(stringHelpers);

describe('string', function() {
  describe('camelcase', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{camelcase}}');
      assert.equal(fn(), '');
    });
    it('should return the string in camelcase', function() {
      const fn = hbs.compile('{{camelcase "foo bar baz qux"}}');
      assert.equal(fn(), 'fooBarBazQux');
    });
    it('should lowercase a single character', function() {
      assert.equal(hbs.compile('{{camelcase "f"}}')(), 'f');
      assert.equal(hbs.compile('{{camelcase "A"}}')(), 'a');
    });
  });

  describe('capitalize', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{capitalize}}');
      assert.equal(fn(), '');
    });
    it('should capitalize a word.', function() {
      const fn = hbs.compile('{{capitalize "foo"}}');
      assert.equal(fn(), 'Foo');
    });
  });

  describe('capitalizeAll', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{capitalizeAll}}');
      assert.equal(fn(), '');
    });
    it('should return the string with the every word capitalized.', function() {
      const fn = hbs.compile('{{capitalizeAll "bender should not bE allowed on tV"}}');
      assert.equal(fn(), 'Bender Should Not BE Allowed On TV');
    });
  });

  describe('center', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{center}}');
      assert.equal(fn(), '');
    });
    it('should return the string centered by using non-breaking spaces.', function() {
      const fn = hbs.compile('{{center "Bender should not be allowed on tv." 2}}');
      assert.equal(fn(), '&amp;nbsp;&amp;nbsp;Bender should not be allowed on tv.&amp;nbsp;&amp;nbsp;');
    });
  });

  describe('chop', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{chop}}');
      assert.equal(fn(), '');
    });
    it('should remove non-word characters from start of string', function() {
      const fn = hbs.compile('{{chop "- foo bar baz"}}');
      assert.equal(fn(), 'foo bar baz');
    });
    it('should remove non-word characters from end of string', function() {
      const fn = hbs.compile('{{chop "foo bar baz _- "}}');
      assert.equal(fn(), 'foo bar baz');
    });
  });

  describe('dashcase', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{dashcase}}');
      assert.equal(fn(), '');
    });
    it('should return the string in dashcase', function() {
      const fn = hbs.compile('{{dashcase "foo bar baz qux"}}');
      assert.equal(fn(), 'foo-bar-baz-qux');
    });
    it('should lowercase a single character', function() {
      assert.equal(hbs.compile('{{dashcase "f"}}')(), 'f');
      assert.equal(hbs.compile('{{dashcase "A"}}')(), 'a');
    });
  });

  describe('dotcase', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{dotcase}}');
      assert.equal(fn(), '');
    });
    it('should return the string in dotcase', function() {
      const fn = hbs.compile('{{dotcase "foo bar baz qux"}}');
      assert.equal(fn(), 'foo.bar.baz.qux');
    });
    it('should lowercase a single character', function() {
      assert.equal(hbs.compile('{{dotcase "f"}}')(), 'f');
      assert.equal(hbs.compile('{{dotcase "A"}}')(), 'a');
    });
  });

  describe('ellipsis', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{ellipsis}}');
      assert.equal(fn(), '');
    });
    it('should return then string truncated by a specified length.', function() {
      const fn = hbs.compile('{{ellipsis "Bender should not be allowed on tv." 31}}');
      assert.equal(fn(), 'Bender should not be allowed on…');
    });
    it('should return the string if shorter than the specified length.', function() {
      const fn = hbs.compile('{{ellipsis "Bender should not be allowed on tv." 100}}');
      assert.equal(fn(), 'Bender should not be allowed on tv.');
    });
  });

  describe('hyphenate', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{hyphenate}}');
      assert.equal(fn(), '');
    });
    it('should return the string with spaces replaced with hyphens.', function() {
      const fn = hbs.compile('{{hyphenate "Bender should not be allowed on tv."}}');
      assert.equal(fn(), 'Bender-should-not-be-allowed-on-tv.');
    });
  });

  describe('isString', function() {
    it('should return true for string', function() {
      assert.equal(hbs.compile('{{isString "foo"}}')(), 'true');
    });

    it('should return true for empty string', function() {
      assert.equal(hbs.compile('{{isString ""}}')(), 'true');
    });

    it('should return false for number', function() {
      assert.equal(hbs.compile('{{isString 123}}')(), 'false');
    });

    it('should return false for null', function() {
      assert.equal(hbs.compile('{{isString null}}')(), 'false');
    });

    it('should return false when undefined', function() {
      assert.equal(hbs.compile('{{isString}}')(), 'false');
    });
  });

  describe('lowercase', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{lowercase}}');
      assert.equal(fn(), '');
    });
    it('should return the string in lowercase', function() {
      const fn = hbs.compile('{{lowercase "BENDER SHOULD NOT BE ALLOWED ON TV"}}');
      assert.equal(fn(), 'bender should not be allowed on tv');
    });
  });

  describe('occurrences', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{occurrences}}');
      assert.equal(fn(), '');
    });
    it('should return the number of occurrences of a string, within a string.', function() {
      const fn = hbs.compile('{{occurrences "Jar-Jar Binks" "Jar"}}');
      assert.equal(fn(), '2');
    });
  });

  describe('pascalcase', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{pascalcase}}');
      assert.equal(fn(), '');
    });
    it('should return the string in pascalcase', function() {
      const fn = hbs.compile('{{pascalcase "foo bar baz qux"}}');
      assert.equal(fn(), 'FooBarBazQux');
    });
    it('should uppercase a single character', function() {
      assert.equal(hbs.compile('{{pascalcase "f"}}')(), 'F');
      assert.equal(hbs.compile('{{pascalcase "A"}}')(), 'A');
    });
  });

  describe('pathcase', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{pathcase}}');
      assert.equal(fn(), '');
    });
    it('should return the string in pathcase', function() {
      const fn = hbs.compile('{{pathcase "foo bar baz qux"}}');
      assert.equal(fn(), 'foo/bar/baz/qux');
    });
    it('should lowercase a single character', function() {
      assert.equal(hbs.compile('{{pathcase "f"}}')(), 'f');
      assert.equal(hbs.compile('{{pathcase "A"}}')(), 'a');
    });
  });

  describe('plusify', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{plusify}}');
      assert.equal(fn(), '');
    });
    it('should return the empty string with no change.', function() {
      const fn = hbs.compile('{{plusify ""}}');
      assert.equal(fn(), '');
    });
    it('should return the string with no change.', function() {
      const fn = hbs.compile('{{plusify "BenderShouldNotBeAllowedOnTv."}}');
      assert.equal(fn(), 'BenderShouldNotBeAllowedOnTv.');
    });
    it('should return the string with spaces replaced with pluses.', function() {
      const fn = hbs.compile('{{plusify "Bender should not be allowed on tv."}}');
      assert.equal(fn(), 'Bender+should+not+be+allowed+on+tv.');
    });
  });

  describe('replace', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{replace}}');
      assert.equal(fn(), '');
    });
    it('should replace occurrences of string "A" with string "B"', function() {
      const fn = hbs.compile('{{replace "Bender Bending Rodriguez" "B" "M"}}');
      assert.equal(fn(), 'Mender Mending Rodriguez');
    });
    it('should return the string if `a` is undefined', function() {
      const fn = hbs.compile('{{replace "a b c"}}');
      assert.equal(fn(), 'a b c');
    });
    it('should replace the string with `""` if `b` is undefined', function() {
      const fn = hbs.compile('{{replace "a b c" "a"}}');
      assert.equal(fn(), ' b c');
    });
  });

  describe('sentence', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{sentence}}');
      assert.equal(fn(), '');
    });
    it('should capitalize the first word of each sentence in a string and convert the rest of the sentence to lowercase.', function() {
      const fn = hbs.compile('{{sentence "bender should NOT be allowed on TV. fry SHOULD be allowed on TV."}}');
      assert.equal(fn(), 'Bender should not be allowed on tv. Fry should be allowed on tv.');
    });
  });

  describe('snakecase', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{snakecase}}');
      assert.equal(fn(), '');
    });
    it('should lowercase a single character', function() {
      assert.equal(hbs.compile('{{snakecase "a"}}')(), 'a');
      assert.equal(hbs.compile('{{snakecase "A"}}')(), 'a');
    });
    it('should return the string in snakecase', function() {
      const fn = hbs.compile('{{snakecase "foo bar baz qux"}}');
      assert.equal(fn(), 'foo_bar_baz_qux');
    });
  });

  describe('split', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{split}}');
      assert.equal(fn(), '');
    });
    it('should split the string with the default character', function() {
      const fn = hbs.compile('{{#each (split "a,b,c")}}<{{.}}>{{/each}}');
      assert.equal(fn(), '<a><b><c>');
    });
    it('should split the string on the given character', function() {
      const fn = hbs.compile('{{#each (split "a|b|c" "|")}}<{{.}}>{{/each}}');
      assert.equal(fn(), '<a><b><c>');
    });
  });

  describe('startsWith', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{startsWith}}');
      assert.equal(fn(), '');
    });
    it('should render "Yes he is", from inside the block.', function() {
      const fn = hbs.compile('{{#startsWith "Bender" "Bender is great"}}Yes he is{{/startsWith}}');
      assert.equal(fn(), 'Yes he is');
    });
    it('should render the Inverse block.', function() {
      const fn = hbs.compile('{{#startsWith "Goodbye" "Hello, world!"}}Whoops{{else}}Bro, do you even hello world?{{/startsWith}}');
      assert.equal(fn(), 'Bro, do you even hello world?');
    });
    it('should render the Inverse block when an undefined value is passed in..', function() {
      const fn = hbs.compile('{{#startsWith "myPrefix" undefined}}fn block{{else}}inverse block{{/startsWith}}');
      assert.equal(fn(), 'inverse block');
    });
  });

  describe('titleize', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{titleize}}');
      assert.equal(fn(), '');
    });
    it('should return the string in title case.', function() {
      const fn = hbs.compile('{{titleize "Bender-should-Not-be-allowed_on_Tv"}}');
      assert.equal(fn(), 'Bender Should Not Be Allowed On Tv');
    });
  });

  describe('trim', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{trim}}');
      assert.equal(fn(), '');
    });
    it('should trim leading whitespace', function() {
      const fn = hbs.compile('{{trim "    foo"}}');
      assert.equal(fn(), 'foo');
    });
    it('should trim trailing whitespace', function() {
      const fn = hbs.compile('{{trim "foo   "}}');
      assert.equal(fn(), 'foo');
    });
  });

  describe('truncate', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{truncate}}');
      assert.equal(fn(), '');
    });
    it('should return the string truncated by a specified length.', function() {
      const fn = hbs.compile('{{truncate "Bender should not be allowed on tv." 31}}');
      assert.equal(fn(), 'Bender should not be allowed on');
    });
    it('should return the string if shorter than the specified length.', function() {
      const fn = hbs.compile('{{truncate "Bender should not be allowed on tv." 100}}');
      assert.equal(fn(), 'Bender should not be allowed on tv.');
    });
    it('should return then string truncated by a specified length', function() {
      const fn = hbs.compile('{{truncate "foo bar baz qux" 7}}...');
      assert.equal(fn(), 'foo bar...');
    });

    it('should return then string truncated by a specified length, providing a custom string to denote an omission.', function() {
      const fn = hbs.compile('{{truncate "foo bar baz qux" 7 "…"}}');
      assert.equal(fn(), 'foo ba…');
    });
  });

  describe('uppercase', function() {
    it('should return an empty string if undefined', function() {
      const fn = hbs.compile('{{uppercase}}');
      assert.equal(fn(), '');
    });

    it('should return the string in uppercase', function() {
      const fn = hbs.compile('{{uppercase "bender should not be allowed on tv"}}');
      assert.equal(fn(), 'BENDER SHOULD NOT BE ALLOWED ON TV');
    });

    it('should work as a block helper', function() {
      const fn = hbs.compile('{{#uppercase}}bender should not be allowed on tv{{/uppercase}}');
      assert.equal(fn(), 'BENDER SHOULD NOT BE ALLOWED ON TV');
    });
  });
});

