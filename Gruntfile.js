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
        globals: {
          it: true,
          describe: true,
          expect: true,
          module: true,
          exports: true,
          require: true
        }
      },
      all: [
        'Gruntfile.js',
        'test/**/*.js',
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
    },

    // Generate lists of helpers that need docs and tests.
    coverage: {
      options: {
        srcPattern: /\s*(.+((?!(')).)):\s*function/g,
        srcSanitize: ['_readme', '.md', '.hbs', 'helper-']
      },
      documented: {
        src: ['lib/helpers/*.js'],
        dest: 'docs/undocumented.json',
        options: {
          keyname: 'docsDifference',
          compare: '_docs/**/*.md.hbs',
          compareSanitize: []
        }
      },
      tests: {
        src: ['lib/helpers/*.js'],
        dest: 'docs/notest.json',
        options: {
          read: true,
          keyname: 'testsDifference',
          compare: 'test/helpers/*.js',
          comparePattern: /^(?!  )describe\((?:'|")(.+)(?:'|").+/gm,
          compareSanitize: [],
        },
      }
    },

    readme: {
      options: {
        metadata: ['<%= coverage.documented.dest %>', '<%= coverage.tests.dest %>']
      }
    }
  });

  // Load plugins to provide the necessary tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Tests to be run
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('docs', ['coverage', 'readme']);

  // By default, build templates using helpers and run all tests.
  grunt.registerTask('default', ['jshint', 'test', 'coverage', 'readme']);
};
