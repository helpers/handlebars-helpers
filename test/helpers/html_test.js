/**
 * Tests: HTML Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

// (function() {
//   var Handlebars, grunt, path, simple, simpleExpected;

//   require("should");

//   path = require("path");

//   grunt = require("grunt");

//   Handlebars = require("handlebars");

//   require("../../lib/helpers/helpers-html").register(Handlebars, simple = "{{#prettify}}<h2>Some Markup</h2><ul><li>one</li><li>two</li><li>three</li></ul><p><a href=\"http://github.com\">Click here</a></p>{{/prettify}}");

//   simpleExpected = "<h2>Some Markup</h2>\n<ul>\n<li>one</li>\n<li>two</li>\n<li>three</li>\n</ul>\n<p>\n<a href=\"http://github.com\">Click here</a>\n</p>";

//   describe("prettify options", function() {
//     it("indents", function(done) {
//       var template;
//       require("../../lib/helpers/helpers-html").register(Handlebars, {
//         prettify: {
//           indent: 2
//         }
//       });
//       template = Handlebars.compile(simple);
//       template().should.equal(simpleExpected);
//       return done();
//     });
//   });

// }).call(this);
