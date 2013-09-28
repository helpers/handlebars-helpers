/*
 * handlebars-helpers
 * http://github.com/assemble/handlebars-helpers
 *
 * Copyright (c) 2013 Assemble
 * MIT License
 */


module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        strict: false
      },
      all: [
        'Gruntfile.js',
        // 'test/**/*.js',
        'lib/**/*.js'
      ]
    },

    // Run mocha tests.
    mochaTest: {
      files: ['test/**/*_test.js']
    },
    mochaTestConfig: {
      options: {
        reporter: 'nyan'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    },

    // Clean test files before building or re-testing.
    clean: {
      helpers: ['lib/**/*']
    }
  });

  // Load plugins to provide the necessary tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Tests to be run
  grunt.registerTask('test', ['mochaTest']);

  // By default, build templates using helpers and run all tests.
  grunt.registerTask('default', ['jshint', 'test', 'sync', 'readme']);
};