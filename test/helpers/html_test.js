// /**
//  * Handlebars Helpers Tests: HTML Helpers
//  * http://github.com/assemble/handlebars-helpers
//  * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
//  * Licensed under the MIT License (MIT).
//  */


// require('should');
// var Handlebars = require('handlebars');
// require('../../lib/helpers/helper-prettify').register(Handlebars, {
//   prettify: {
//     condense: true,
//     padcomments: true,
//     indent_size: 2,
//     indent_inner_html: true,
//     unformatted: ['code', 'pre', 'em', 'strong']
//   }
// });

// var expected = '<div>' +
//                '  <p>' +
//                '    <ul>' +
//                '      <li><a href="#">Link</a></li>' +
//                '    </ul>' +
//                '  </p>' +
//                '</div>' +

// describe('prettify', function() {
//   describe('{{#prettify}}{{/prettify}}', function() {
//     it('Should prettify the output HTML.', function() {
//       var source = '{{#prettify}}<div><p><ul><li><a href="#">Link</a></li></ul></p></div>{{/prettify}}';
//       var template = Handlebars.compile(source);
//       template().should.equal(expected);
//     });
//   });
// });

