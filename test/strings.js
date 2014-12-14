'use strict';

var should = require('should');
var Handlebars = require('handlebars');
var helpers = require('..');

Handlebars.registerHelper(helpers('string'));

describe('{{lowercase}}', function() {
  it('should return the string in lowercase', function() {
    var template = Handlebars.compile('{{lowercase "BENDER SHOULD NOT BE ALLOWED ON TV"}}');
    template().should.equal('bender should not be allowed on tv');
  });
});

describe('{{uppercase}}', function() {
  it('should return the string in uppercase', function() {
    var template = Handlebars.compile('{{uppercase "bender should not be allowed on tv"}}');
    template().should.equal('BENDER SHOULD NOT BE ALLOWED ON TV');
  });
});

describe('{{uppercase_block}}', function() {
  it('should return the string in uppercase', function() {
    var template = Handlebars.compile('{{#uppercase}}bender should not be allowed on tv{{/uppercase}}');
    template().should.equal('BENDER SHOULD NOT BE ALLOWED ON TV');
  });
});

describe('{{capitalizeFirst}}', function() {
  it('should return the string with the first word capitalized.', function() {
    var template = Handlebars.compile('{{capitalizeFirst "bender should not be allowed on tv"}}');
    template().should.equal('Bender should not be allowed on tv');
  });
});

describe('{{capitalizeEach}}', function() {
  it('should return the string with the every word capitalized.', function() {
    var template = Handlebars.compile('{{capitalizeEach "bender should not bE allowed on tV"}}');
    template().should.equal('Bender Should Not BE Allowed On TV');
  });
});

describe('{{titleize}}', function() {
  it('should return the string in title case.', function() {
    var template = Handlebars.compile('{{titleize "Bender-should-Not-be-allowed_on_Tv"}}');
    template().should.equal('Bender Should Not Be Allowed On Tv');
  });
});

describe('{{sentence}}', function() {
  it('should capitalize the first word of each sentence in a string and convert the rest of the sentence to lowercase.', function() {
    var template = Handlebars.compile('{{sentence "bender should NOT be allowed on TV. fry SHOULD be allowed on TV."}}');
    template().should.equal('Bender should not be allowed on tv. Fry should be allowed on tv.');
  });
});

describe('{{reverse}}', function() {
  it('should return the string in reverse.', function() {
    var template = Handlebars.compile('{{reverse "bender should NOT be allowed on TV."}}');
    template().should.equal('.VT no dewolla eb TON dluohs redneb');
  });
});

describe('{{ellipsis}}', function() {
  it('should return then string truncated by a specified length.', function() {
    var template = Handlebars.compile('{{ellipsis "Bender should not be allowed on tv." 31}}');
    template().should.equal('Bender should not be allowed on');
  });
  it('should return the string truncated by a specified length, providing a custom string to denote an omission.', function() {
    var template = Handlebars.compile('{{ellipsis "Bender should not be allowed on tv." 31 "..."}}');
    template().should.equal('Bender should not be allowed...');
  });
});

describe('{{truncate}}', function() {
  it('should return the string truncated by a specified length.', function() {
    var template = Handlebars.compile('{{truncate "Bender should not be allowed on tv." 31}}');
    template().should.equal('Bender should not be allowed on');
  });
  it('should return then string truncated by a specified length, providing a custom string to denote an omission.', function() {
    var template = Handlebars.compile('{{truncate "Bender should not be allowed on tv." 31 "..."}}');
    template().should.equal('Bender should not be allowed...');
  });
});

describe('{{center}}', function() {
  it('should return the string centered by using non-breaking spaces.', function() {
    var template = Handlebars.compile('{{center "Bender should not be allowed on tv." 2}}');
    template().should.equal('&amp;nbsp;&amp;nbsp;Bender should not be allowed on tv.&amp;nbsp;&amp;nbsp;');
  });
});

describe('{{hyphenate}}', function() {
  it('should return the string with spaces replaced with hyphens.', function() {
    var template = Handlebars.compile('{{hyphenate "Bender should not be allowed on tv."}}');
    template().should.equal('Bender-should-not-be-allowed-on-tv.');
  });
});

describe('{{dashify}}', function() {
  it('should return the string with periods replaced with hyphens.', function() {
    var template = Handlebars.compile('{{dashify "Bender.should.not.be.allowed.on.tv."}}');
    template().should.equal('Bender-should-not-be-allowed-on-tv-');
  });
});

describe('{{plusify}}', function() {
  it('should return the empty string with no change.', function() {
    var template = Handlebars.compile('{{plusify ""}}');
    template().should.equal('');
  });
  it('should return the string with no change.', function() {
    var template = Handlebars.compile('{{plusify "BenderShouldNotBeAllowedOnTv."}}');
    template().should.equal('BenderShouldNotBeAllowedOnTv.');
  });
  it('should return the string with spaces replaced with pluses.', function() {
    var template = Handlebars.compile('{{plusify "Bender should not be allowed on tv."}}');
    template().should.equal('Bender+should+not+be+allowed+on+tv.');
  });
});

describe('{{startsWith}}', function() {
  it('should render "Yes he is", from inside the block.', function() {
    var template = Handlebars.compile('{{#startsWith "Bender" "Bender is great"}}Yes he is{{/startsWith}}');
    template().should.equal("Yes he is");
  });
  it('should render the Inverse block.', function() {
    var template = Handlebars.compile('{{#startsWith "Goodbye" "Hello, world!"}}Whoops{{else}}Bro, do you even hello world?{{/startsWith}}');
    template().should.equal('Bro, do you even hello world?');
  });
  it("should render the Inverse block.", function() {
    var template = Handlebars.compile('{{#startsWith "myPrefix" nullProperty}}fn block{{else}}inverse block{{/startsWith}}');
    template().should.equal('inverse block');
  });
});

describe('{{count}}', function() {
  it('should return the number of occurrances of a string, within a string.', function() {
    var template = Handlebars.compile('{{count "Death by Snu-Snu" "Snu"}}');
    template().should.equal('2');
  });
});

describe('{{replace}}', function() {
  it('should replace occurrences of string "A" with string "B"', function() {
    var template = Handlebars.compile('{{replace "Bender Bending Rodriguez" "B" "M"}}');
    template().should.equal('Mender Mending Rodriguez');
  });
});

describe('{{safeString}}', function() {
  it('should return a Handlebars safeString', function() {
    var template = Handlebars.compile('{{safeString "<li>Bender Bending Rodriguez</li>"}}');
    template().should.equal('<li>Bender Bending Rodriguez</li>');
  });
});
