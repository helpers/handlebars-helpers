/**
 * Tests: Misc. Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

(function() {
  var Handlebars;

  require('should');

  Handlebars = require('handlebars');

  require('../../lib/helpers/helpers-miscellaneous').register(Handlebars, {});

  describe('default', function() {
    describe('{{default title "Not title available."}}', function() {
      it('should provide a default or fallback value if a value doesn\'t exist.', function() {
        var context, source, template;
        source = '{{default title "No title available."}}';
        template = Handlebars.compile(source);
        context = {
          title: null
        };
        template(context).should.equal('No title available.');
      });
    });
  });

}).call(this);
