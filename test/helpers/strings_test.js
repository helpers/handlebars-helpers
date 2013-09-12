/**
 * Tests: String Helpers
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
      var source, template;
      source = '{{lowercase "BENDER SHOULD NOT BE ALLOWED ON TV"}}';
      template = Handlebars.compile(source);
      template().should.equal('bender should not be allowed on tv');
    });
  });
});

describe('uppercase', function() {
  describe('{{uppercase string}}', function() {
    it('should return the string in uppercase', function() {
      var source, template;
      source = '{{uppercase "bender should not be allowed on tv"}}';
      template = Handlebars.compile(source);
      template().should.equal('BENDER SHOULD NOT BE ALLOWED ON TV');
    });
  });
});

describe('capitalizeFirst', function() {
  describe('{{capitalizeFirst string}}', function() {
    it('should return the string with the first word capitalized.', function() {
      var source, template;
      source = '{{capitalizeFirst "bender should not be allowed on tv"}}';
      template = Handlebars.compile(source);
      template().should.equal('Bender should not be allowed on tv');
    });
  });
});

describe('capitalizeEach', function() {
  describe('{{capitalizeEach string}}', function() {
    it('should return the string with the every word capitalized.', function() {
      var source, template;
      source = '{{capitalizeEach "bender should not bE allowed on tV"}}';
      template = Handlebars.compile(source);
      template().should.equal('Bender Should Not BE Allowed On TV');
    });
  });
});

describe('titleize', function() {
  describe('{{titleize string}}', function() {
    it('should return the string in title case.', function() {
      var source, template;
      source = '{{titleize "Bender-should-Not-be-allowed_on_Tv"}}';
      template = Handlebars.compile(source);
      template().should.equal('Bender Should Not Be Allowed On Tv');
    });
  });
});

describe('sentence', function() {
  describe('{{sentence string}}', function() {
    it('should capitalize the first word of each sentence in a string and convert the rest of the sentence to lowercase.', function() {
      var source, template;
      source = '{{sentence "bender should NOT be allowed on TV. fry SHOULD be allowed on TV."}}';
      template = Handlebars.compile(source);
      template().should.equal('Bender should not be allowed on tv. Fry should be allowed on tv.');
    });
  });
});

describe('reverse', function() {
  describe('{{reverse string}}', function() {
    it('should return the string in reverse.', function() {
      var source, template;
      source = '{{reverse "bender should NOT be allowed on TV."}}';
      template = Handlebars.compile(source);
      template().should.equal('.VT no dewolla eb TON dluohs redneb');
    });
  });
});

describe('truncate', function() {
  describe('{{truncate string 31}}', function() {
    it('should return then string truncated by a specified length.', function() {
      var source, template;
      source = '{{truncate "Bender should not be allowed on tv." 31}}';
      template = Handlebars.compile(source);
      template().should.equal('Bender should not be allowed on');
    });
  });
  describe('{{truncate string 31 "..."}}', function() {
    it('should return then string truncated by a specified length, providing a custom string to denote an omission.', function() {
      var source, template;
      source = '{{truncate "Bender should not be allowed on tv." 31 "..."}}';
      template = Handlebars.compile(source);
      template().should.equal('Bender should not be allowed...');
    });
  });
});

describe('center', function() {
  describe('{{center string}}', function() {
    it('should return the string centered by using non-breaking spaces.', function() {
      var source, template;
      source = '{{center "Bender should not be allowed on tv." 2}}';
      template = Handlebars.compile(source);
      template().should.equal('&amp;nbsp;&amp;nbsp;Bender should not be allowed on tv.&amp;nbsp;&amp;nbsp;');
    });
  });
});

describe("hyphenate", function() {
  describe("{{hyphenate string}}", function() {
    it("should return the string with spaces replaced with hyphens.", function() {
      var source, template;
      source = '{{hyphenate "Bender should not be allowed on tv."}}';
      template = Handlebars.compile(source);
      template().should.equal("Bender-should-not-be-allowed-on-tv.");
    });
  });
});

describe("dashify", function() {
  describe("{{hyphenate string}}", function() {
    it("should return the string with periods replaced with hyphens.", function() {
      var source, template;
      source = '{{dashify "Bender.should.not.be.allowed.on.tv."}}';
      template = Handlebars.compile(source);
      template().should.equal("Bender-should-not-be-allowed-on-tv-");
    });
  });
});

describe("startsWith", function() {
  describe('{{#startsWith "Bender" "Bender is great"}}Yes he is{{/startsWith}}', function() {
    it("should render 'Yes he is', from inside the block.", function() {
      var source, template;
      source = '{{#startsWith "Bender" "Bender is great"}}Yes he is{{/startsWith}}';
      template = Handlebars.compile(source);
      template().should.equal("Yes he is");
    });
  });
  describe("{{#startsWith somePrefix badString}}\nSuccess\n{{else}}\nInverse\n{{/startsWith}}", function() {
    it("should render the Inverse block.", function() {
      var source, template;
      source = '{{#startsWith "Goodbye" "Hello, world!"}}Whoops{{else}}Bro, do you even hello world?{{/startsWith}}';
      template = Handlebars.compile(source);
      template().should.equal("Bro, do you even hello world?");
    });
  });
  describe("{{#startsWith somePrefix nullProperty}}\nSuccess\n{{else}}\nInverse\n{{/startsWith}}", function() {
    it("should render the Inverse block.", function() {
      var context, source, template;
      source = '{{#startsWith "myPrefix" nullProperty}}fn block{{else}}inverse block{{/startsWith}}';
      template = Handlebars.compile(source);
      context = {};
      template(context).should.equal("inverse block");
    });
  });
});
