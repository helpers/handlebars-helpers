/**
 * Handlebars Helpers Tests: Misc. Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

// node_modules
require('should');
var Handlebars = require('handlebars');

// Local helpers
require('../../lib/helpers/helpers-miscellaneous').register(Handlebars, {});

describe('default', function() {
  describe('{{default title "Not title available."}}', function() {
    it('should provide a default or fallback value if a value doesn\'t exist.', function() {
      var source = '{{default title "No title available."}}';
      var template = Handlebars.compile(source);
      var context = {
        title: null
      };
      template(context).should.equal('No title available.');
    });
  });
});

