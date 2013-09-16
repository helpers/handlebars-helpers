// /**
//  * Handlebars Helpers Tests: Logging Helpers
//  * http://github.com/assemble/handlebars-helpers
//  * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
//  * Licensed under the MIT License (MIT).
//  */


// require('should');
// var Handlebars = require('handlebars');
// require('../../lib/helpers/helpers-logging').register(Handlebars, {});

// var log = console ? console.log : function() {};
// log.history = [];

// console.log = function() {
//   log.history.push.apply(log.history, arguments);
//   log.apply(console, arguments);
// };

// describe('log', function() {
//   describe('{{log "Log helper worked!"}}', function() {
//     it('should log a message to the console.', function() {
//       var source = '{{log "Log helper worked!"}}';
//       var template = Handlebars.compile(source);
//       template();
//       log.history.should.include('Log helper worked!');
//     });
//   });
// });

// log.history = [];
// describe('debug', function() {
//   describe('{{debug value}}', function() {
//     it('should log current context.', function() {
//       var source = '{{debug this}}';
//       var template = Handlebars.compile(source);
//       var context = 'assemble';
//       template(context);
//       log.history.should.include('assemble');
//     });
//   });
// });
