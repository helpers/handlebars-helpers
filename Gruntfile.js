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
      glob: {
        expand: true,
        cwd: 'src',
        src: ['*.coffee', '!helper-lib.coffee'],
        dest: 'lib/helpers/',
        ext: '.js'
      },
      utils: {
        expand: true,
        cwd: 'src/utils',
        src: ['*.coffee'],
        dest: 'lib/utils/',
        ext: '.js'
      },
      tests: {
        expand: true,
        cwd: 'src/tests',
        src: ['**/*.coffee'],
        dest: 'test/',
        ext: '.js'
      },
      concat: {
        options: { join: true },
        files: {
          'lib/helpers-lib.js': [
            'src/helpers.coffee',
            'src/helpers-dates.coffee',
            'src/helpers-collections.coffee',
            'src/helpers-comparisons.coffee',
            'src/helpers-config.coffee',
            'src/helpers-html.coffee',
            'src/helpers-inflections.coffee',
            'src/helpers-logging.coffee',
            'src/helpers-math.coffee',
            'src/helpers-numbers.coffee',
            'src/helpers-strings.coffee',
            'src/helpers-utils.coffee',
            'src/helpers-miscellaneous.coffee'
          ]
        }
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

    // Build templates to test helpers.
    assemble: {
      tests: {
        files: {
          'test/actual': ['test/fixtures/*.hbs']
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

  // Build templates using helpers and run all tests.
  grunt.registerTask('test', [
    // 'assemble',
    'coffee',
    'mochaTest'
  ]);
};
