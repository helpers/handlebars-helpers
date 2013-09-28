/**
 * Handlebars Helpers Tests: String Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

require('should');
var Handlebars = require('handlebars');
require('../../lib/helpers/helpers-strings').register(Handlebars, {});


describe('lowercase', function() {
  describe('{{lowercase string}}', function() {
    it('should return the string in lowercase', function() {
      var source = '{{lowercase "BENDER SHOULD NOT BE ALLOWED ON TV"}}';
      var template = Handlebars.compile(source);
      template().should.equal('bender should not be allowed on tv');
    });
  });
});

describe('uppercase', function() {
  describe('{{uppercase string}}', function() {
    it('should return the string in uppercase', function() {
      var source = '{{uppercase "bender should not be allowed on tv"}}';
      var template = Handlebars.compile(source);
      template().should.equal('BENDER SHOULD NOT BE ALLOWED ON TV');
    });
  });
});

describe('capitalizeFirst', function() {
  describe('{{capitalizeFirst string}}', function() {
    it('should return the string with the first word capitalized.', function() {
      var source = '{{capitalizeFirst "bender should not be allowed on tv"}}';
      var template = Handlebars.compile(source);
      template().should.equal('Bender should not be allowed on tv');
    });
  });
});

describe('capitalizeEach', function() {
  describe('{{capitalizeEach string}}', function() {
    it('should return the string with the every word capitalized.', function() {
      var source = '{{capitalizeEach "bender should not bE allowed on tV"}}';
      var template = Handlebars.compile(source);
      template().should.equal('Bender Should Not BE Allowed On TV');
    });
  });
});

describe('titleize', function() {
  describe('{{titleize string}}', function() {
    it('should return the string in title case.', function() {
      var source = '{{titleize "Bender-should-Not-be-allowed_on_Tv"}}';
      var template = Handlebars.compile(source);
      template().should.equal('Bender Should Not Be Allowed On Tv');
    });
  });
});

describe('sentence', function() {
  describe('{{sentence string}}', function() {
    it('should capitalize the first word of each sentence in a string and convert the rest of the sentence to lowercase.', function() {
      var source = '{{sentence "bender should NOT be allowed on TV. fry SHOULD be allowed on TV."}}';
      var template = Handlebars.compile(source);
      template().should.equal('Bender should not be allowed on tv. Fry should be allowed on tv.');
    });
  });
});

describe('reverse', function() {
  describe('{{reverse string}}', function() {
    it('should return the string in reverse.', function() {
      var source = '{{reverse "bender should NOT be allowed on TV."}}';
      var template = Handlebars.compile(source);
      template().should.equal('.VT no dewolla eb TON dluohs redneb');
    });
  });
});

describe('truncate', function() {
  describe('{{truncate string 31}}', function() {
    it('should return then string truncated by a specified length.', function() {
      var source = '{{truncate "Bender should not be allowed on tv." 31}}';
      var template = Handlebars.compile(source);
      template().should.equal('Bender should not be allowed on');
    });
  });
  describe('{{truncate string 31 "..."}}', function() {
    it('should return then string truncated by a specified length, providing a custom string to denote an omission.', function() {
      var source = '{{truncate "Bender should not be allowed on tv." 31 "..."}}';
      var template = Handlebars.compile(source);
      template().should.equal('Bender should not be allowed...');
    });
  });
});

describe('center', function() {
  describe('{{center string}}', function() {
    it('should return the string centered by using non-breaking spaces.', function() {
      var source = '{{center "Bender should not be allowed on tv." 2}}';
      var template = Handlebars.compile(source);
      template().should.equal('&amp;nbsp;&amp;nbsp;Bender should not be allowed on tv.&amp;nbsp;&amp;nbsp;');
    });
  });
});

describe("hyphenate", function() {
  describe("{{hyphenate string}}", function() {
    it("should return the string with spaces replaced with hyphens.", function() {
      var source = '{{hyphenate "Bender should not be allowed on tv."}}';
      var template = Handlebars.compile(source);
      template().should.equal("Bender-should-not-be-allowed-on-tv.");
    });
  });
});

describe("dashify", function() {
  describe("{{hyphenate string}}", function() {
    it("should return the string with periods replaced with hyphens.", function() {
      var source = '{{dashify "Bender.should.not.be.allowed.on.tv."}}';
      var template = Handlebars.compile(source);
      template().should.equal("Bender-should-not-be-allowed-on-tv-");
    });
  });
});

describe("startsWith", function() {
  describe('{{#startsWith "Bender" "Bender is great"}}Yes he is{{/startsWith}}', function() {
    it("should render 'Yes he is', from inside the block.", function() {
      var source = '{{#startsWith "Bender" "Bender is great"}}Yes he is{{/startsWith}}';
      var template = Handlebars.compile(source);
      template().should.equal("Yes he is");
    });
  });
  describe("{{#startsWith somePrefix badString}}\nSuccess\n{{else}}\nInverse\n{{/startsWith}}", function() {
    it("should render the Inverse block.", function() {
      var source = '{{#startsWith "Goodbye" "Hello, world!"}}Whoops{{else}}Bro, do you even hello world?{{/startsWith}}';
      var template = Handlebars.compile(source);
      template().should.equal("Bro, do you even hello world?");
    });
  });
  describe("{{#startsWith somePrefix nullProperty}}\nSuccess\n{{else}}\nInverse\n{{/startsWith}}", function() {
    it("should render the Inverse block.", function() {
      var source = '{{#startsWith "myPrefix" nullProperty}}fn block{{else}}inverse block{{/startsWith}}';
      var template = Handlebars.compile(source);
      var context = {};
      template(context).should.equal("inverse block");
    });
  });
});
