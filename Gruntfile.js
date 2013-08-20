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


    // Configuration to be run (and then tested).
    coffee: {
      tests: {
        files: [{
          expand: true,
          cwd: 'src',
          src: ['helper-lib.coffee', 'helpers/*.coffee', 'utils/*.coffee'],
          dest: 'lib/',
          ext: '.js'
        }, {
          expand: true,
          cwd: 'src/tests',
          src: ['**/*.coffee'],
          dest: 'test/',
          ext: '.js'
        }]
      }
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

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      helpers: [
          'lib/helpers/*.js',
          'lib/utils/*.js',
          'lib/**/*.js'
      ]
    },

    coffeelint: {
      options: grunt.file.readJSON('.coffeerc'),
      helpers: {
        files: {
          src: ['src/helpers/**/*.coffee']
        }
      },
      tests: {
        files: {
          src: ['src/tests/**/*.coffee']
        }
      }
    },


    // Clean test files before building or re-testing.
    clean: {
      helpers: ['lib/**/*']
    }
  });

  // Load plugins to provide the necessary tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.loadNpmTasks('assemble-internal');

  // By default, build templates using helpers and run all tests.
  grunt.registerTask('default', ['clean', 'coffee']);
  grunt.registerTask('test',    ['default', 'mochaTest']);
  grunt.registerTask('docs',    ['assemble-internal']);
};