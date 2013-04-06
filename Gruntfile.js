/*
 * helper-lib
 * http://github.com/assemble/helper-lib
 *
 * Copyright (c) 2013 Assemble
 * MIT License
 */


module.exports = function(grunt) {

'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),

    // Configuration to be run (and then tested).
    coffee: {
      build: {
        expand: true,
        cwd: 'src',
        src: ['**/*.coffee', '!tests/**/*.coffee'],
        dest: 'lib/',
        ext: '.js'
      },
      test: {
        expand: true,
        cwd: 'src/tests',
        src: ['**/*.coffee'],
        dest: 'test/',
        ext: '.js'
      },
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

    // Build templates to test helpers.
    assemble: {
      tests: {
        files: {
          'test/actual': ['test/fixtures/*.hbs']
        }
      },
      experimental: {
        files: {
          'test/actual': [
            // 'test/fixtures/templates/fiddle.hbs',
            'test/fixtures/templates/relative.hbs',
            'test/fixtures/templates/basename.hbs'
          ]
        }
      },
      markdown: {
        options: {
          ext: '.md',
          content: './test/fixtures/content'
        },
        files: {
          'test/actual': [
            'test/fixtures/templates/authors.hbs',
            'test/fixtures/templates/embed.hbs'
          ]
        }
      }
    },

    // Clean test files before building or re-testing.
    clean: {
      tests: ['temp', 'test/actual'],
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-mocha-test');

  // By default, build templates using helpers and run all tests.
  grunt.registerTask('default', [
    'clean',
    // Compile JavaScript
    'coffee'
  ]);

  // Test helpers in actual templates.
  // grunt.registerTask('default', [
  //   'assemble:experimental',
  //   'assemble:markdown'
  // ]);

  // Build templates using helpers and run all tests.
  grunt.registerTask('test', [
    // 'assemble',
    'coffee',
    'mochaTest'
  ]);
};
