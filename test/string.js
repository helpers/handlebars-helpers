'use strict';

require('should');
var hbs = require('handlebars');
var helpers = require('..');
helpers.string({handlebars: hbs});

describe('string', function() {
  describe('capitalizeFirst', function() {
    it('should return the string with the first word capitalized.', function() {
      var fn = hbs.compile('{{capitalizeFirst "bender should not be allowed on tv"}}');
      fn().should.equal('Bender should not be allowed on tv');
    });
  });

  describe('capitalizeEach', function() {
    it('should return the string with the every word capitalized.', function() {
      var fn = hbs.compile('{{capitalizeEach "bender should not bE allowed on tV"}}');
      fn().should.equal('Bender Should Not BE Allowed On TV');
    });
  });

  describe('center', function() {
    it('should return the string centered by using non-breaking spaces.', function() {
      var fn = hbs.compile('{{center "Bender should not be allowed on tv." 2}}');
      fn().should.equal('&amp;nbsp;&amp;nbsp;Bender should not be allowed on tv.&amp;nbsp;&amp;nbsp;');
    });
  });

  describe('dashify', function() {
    it('should return the string with periods replaced with hyphens.', function() {
      var fn = hbs.compile('{{dashify "Bender.should.not.be.allowed.on.tv."}}');
      fn().should.equal('Bender-should-not-be-allowed-on-tv-');
    });
  });

  describe('ellipsis', function() {
    it('should return then string truncated by a specified length.', function() {
      var fn = hbs.compile('{{ellipsis "Bender should not be allowed on tv." 31}}');
      fn().should.equal('Bender should not be allowed on');
    });
    it('should return the string truncated by a specified length, providing a custom string to denote an omission.', function() {
      var fn = hbs.compile('{{ellipsis "Bender should not be allowed on tv." 31 "..."}}');
      fn().should.equal('Bender should not be allowed...');
    });
  });

  describe('hyphenate', function() {
    it('should return the string with spaces replaced with hyphens.', function() {
      var fn = hbs.compile('{{hyphenate "Bender should not be allowed on tv."}}');
      fn().should.equal('Bender-should-not-be-allowed-on-tv.');
    });
  });

  describe('lowercase', function() {
    it('should return the string in lowercase', function() {
      var fn = hbs.compile('{{lowercase "BENDER SHOULD NOT BE ALLOWED ON TV"}}');
      fn().should.equal('bender should not be allowed on tv');
    });
  });

  describe('occurrences', function() {
    it('should return the number of occurrences of a string, within a string.', function() {
      var fn = hbs.compile('{{occurrences "Death by Snu-Snu" "Snu"}}');
      fn().should.equal('2');
    });
  });
  
  describe('plusify', function() {
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
    it('should replace occurrences of string "A" with string "B"', function() {
      var fn = hbs.compile('{{replace "Bender Bending Rodriguez" "B" "M"}}');
      fn().should.equal('Mender Mending Rodriguez');
    });
  });

  describe('reverse', function() {
    it('should return the string in reverse.', function() {
      var fn = hbs.compile('{{reverse "bender should NOT be allowed on TV."}}');
      fn().should.equal('.VT no dewolla eb TON dluohs redneb');
    });
  });

  describe('sentence', function() {
    it('should capitalize the first word of each sentence in a string and convert the rest of the sentence to lowercase.', function() {
      var fn = hbs.compile('{{sentence "bender should NOT be allowed on TV. fry SHOULD be allowed on TV."}}');
      fn().should.equal('Bender should not be allowed on tv. Fry should be allowed on tv.');
    });
  });

  describe('titleize', function() {
    it('should return the string in title case.', function() {
      var fn = hbs.compile('{{titleize "Bender-should-Not-be-allowed_on_Tv"}}');
      fn().should.equal('Bender Should Not Be Allowed On Tv');
    });
  });

  describe('truncate', function() {
    it('should return the string truncated by a specified length.', function() {
      var fn = hbs.compile('{{truncate "Bender should not be allowed on tv." 31}}');
      fn().should.equal('Bender should not be allowed on');
    });
    it('should return then string truncated by a specified length, providing a custom string to denote an omission.', function() {
      var fn = hbs.compile('{{truncate "Bender should not be allowed on tv." 31 "..."}}');
      fn().should.equal('Bender should not be allowed...');
    });
  });

  describe('startsWith', function() {
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

