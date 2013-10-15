/**
 * Handlebars Helpers Tests: String Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

// node_modules
require('should');
var Handlebars = require('handlebars');

// Local helpers
require('../../lib/helpers/helpers-strings').register(Handlebars, {});

var source, template;

describe('lowercase', function() {
  describe('{{lowercase string}}', function() {
    it('should return the string in lowercase', function() {
      source = '{{lowercase "BENDER SHOULD NOT BE ALLOWED ON TV"}}';
      template = Handlebars.compile(source);
      template().should.equal('bender should not be allowed on tv');
    });
  });
});

describe('uppercase', function() {
  describe('{{uppercase string}}', function() {
    it('should return the string in uppercase', function() {
      source = '{{uppercase "bender should not be allowed on tv"}}';
      template = Handlebars.compile(source);
      template().should.equal('BENDER SHOULD NOT BE ALLOWED ON TV');
    });
  });
});

describe('uppercase_block', function() {
  describe('{{#uppercase}}string{{/uppercase}}', function() {
    it('should return the string in uppercase', function() {
      source = '{{#uppercase}}bender should not be allowed on tv{{/uppercase}}';
      template = Handlebars.compile(source);
      template().should.equal('BENDER SHOULD NOT BE ALLOWED ON TV');
    });
  });
});

describe('capitalizeFirst', function() {
  describe('{{capitalizeFirst string}}', function() {
    it('should return the string with the first word capitalized.', function() {
      source = '{{capitalizeFirst "bender should not be allowed on tv"}}';
      template = Handlebars.compile(source);
      template().should.equal('Bender should not be allowed on tv');
    });
  });
});

describe('capitalizeEach', function() {
  describe('{{capitalizeEach string}}', function() {
    it('should return the string with the every word capitalized.', function() {
      source = '{{capitalizeEach "bender should not bE allowed on tV"}}';
      template = Handlebars.compile(source);
      template().should.equal('Bender Should Not BE Allowed On TV');
    });
  });
});

describe('titleize', function() {
  describe('{{titleize string}}', function() {
    it('should return the string in title case.', function() {
      source = '{{titleize "Bender-should-Not-be-allowed_on_Tv"}}';
      template = Handlebars.compile(source);
      template().should.equal('Bender Should Not Be Allowed On Tv');
    });
  });
});

describe('sentence', function() {
  describe('{{sentence string}}', function() {
    it('should capitalize the first word of each sentence in a string and convert the rest of the sentence to lowercase.', function() {
      source = '{{sentence "bender should NOT be allowed on TV. fry SHOULD be allowed on TV."}}';
      template = Handlebars.compile(source);
      template().should.equal('Bender should not be allowed on tv. Fry should be allowed on tv.');
    });
  });
});

describe('reverse', function() {
  describe('{{reverse string}}', function() {
    it('should return the string in reverse.', function() {
      source = '{{reverse "bender should NOT be allowed on TV."}}';
      template = Handlebars.compile(source);
      template().should.equal('.VT no dewolla eb TON dluohs redneb');
    });
  });
});

describe('ellipsis', function() {
  describe('{{ellipsis string 31}}', function() {
    it('should return then string truncated by a specified length.', function() {
      source = '{{ellipsis "Bender should not be allowed on tv." 31}}';
      template = Handlebars.compile(source);
      template().should.equal('Bender should not be allowed on');
    });
  });
  describe('{{ellipsis string limit "..."}}', function() {
    it('should return then string truncated by a specified length, providing a custom string to denote an omission.', function() {
      source = '{{ellipsis "Bender should not be allowed on tv." 31}}';
      template = Handlebars.compile(source);
      template().should.equal('Bender should not be allowed on');
    });
  });
});

describe('truncate', function() {
  describe('{{truncate string 31}}', function() {
    it('should return then string truncated by a specified length.', function() {
      source = '{{truncate "Bender should not be allowed on tv." 31}}';
      template = Handlebars.compile(source);
      template().should.equal('Bender should not be allowed on');
    });
  });
  describe('{{truncate string 31 "..."}}', function() {
    it('should return then string truncated by a specified length, providing a custom string to denote an omission.', function() {
      source = '{{truncate "Bender should not be allowed on tv." 31 "..."}}';
      template = Handlebars.compile(source);
      template().should.equal('Bender should not be allowed...');
    });
  });
});

describe('center', function() {
  describe('{{center string}}', function() {
    it('should return the string centered by using non-breaking spaces.', function() {
      source = '{{center "Bender should not be allowed on tv." 2}}';
      template = Handlebars.compile(source);
      template().should.equal('&amp;nbsp;&amp;nbsp;Bender should not be allowed on tv.&amp;nbsp;&amp;nbsp;');
    });
  });
});

describe('hyphenate', function() {
  describe('{{hyphenate string}}', function() {
    it('should return the string with spaces replaced with hyphens.', function() {
      source = '{{hyphenate "Bender should not be allowed on tv."}}';
      template = Handlebars.compile(source);
      template().should.equal('Bender-should-not-be-allowed-on-tv.');
    });
  });
});

describe('dashify', function() {
  describe('{{hyphenate string}}', function() {
    it('should return the string with periods replaced with hyphens.', function() {
      source = '{{dashify "Bender.should.not.be.allowed.on.tv."}}';
      template = Handlebars.compile(source);
      template().should.equal('Bender-should-not-be-allowed-on-tv-');
    });
  });
});

describe('startsWith', function() {
  describe('{{#startsWith "Bender" "Bender is great"}}Yes he is{{/startsWith}}', function() {
    it('should render "Yes he is", from inside the block.', function() {
      source = '{{#startsWith "Bender" "Bender is great"}}Yes he is{{/startsWith}}';
      template = Handlebars.compile(source);
      template().should.equal("Yes he is");
    });
  });
  describe('{{#startsWith somePrefix badString}}\nSuccess\n{{else}}\nInverse\n{{/startsWith}}', function() {
    it('should render the Inverse block.', function() {
      source = '{{#startsWith "Goodbye" "Hello, world!"}}Whoops{{else}}Bro, do you even hello world?{{/startsWith}}';
      template = Handlebars.compile(source);
      template().should.equal('Bro, do you even hello world?');
    });
  });
  describe('{{#startsWith somePrefix nullProperty}}\nSuccess\n{{else}}\nInverse\n{{/startsWith}}', function() {
    it("should render the Inverse block.", function() {
      source = '{{#startsWith "myPrefix" nullProperty}}fn block{{else}}inverse block{{/startsWith}}';
      template = Handlebars.compile(source);
      var context = {};
      template(context).should.equal('inverse block');
    });
  });
});
