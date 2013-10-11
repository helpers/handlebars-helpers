/**
 * Handlebars Helpers Tests: Layout Helpers
 * http://github.com/assemble/handlebars-helpers
 * Copyright (c) 2013 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */

// Node.js
var path = require('path');

// node_modules
require('should');
var Handlebars = require('handlebars');
var grunt      = require('grunt');
var chalk      = require('chalk');

var fixtures = path.join.bind(process.cwd(), './test/fixtures/helpers-layouts');
var helpers  = path.join.bind(__dirname, '../../lib/helpers');

require(helpers('helpers-layouts')).register(Handlebars, {});

var template;

describe(chalk.bold('Should work:'), function() {

  it('layouts', function(done) {
    Handlebars.registerPartial('layout', grunt.file.read(fixtures('layout.hbs')));
    template = Handlebars.compile(grunt.file.read(fixtures('body.hbs')));

    var output = template({
      title: 'Layout Test',
      items: [
        'apple',
        'orange',
        'banana'
      ]
    });

    done();
  });

});

