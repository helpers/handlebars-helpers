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
        src: [
          'helper-lib.coffee',
          'helpers/*.coffee',
          'utils/*.coffee'
        ],
        dest: 'lib/',
        ext: '.js'
      },
      test: {
        expand: true,
        cwd: 'src/tests',
        src: ['**/*.coffee'],
        dest: 'test/',
        ext: '.js'
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
      options: {flatten: true},
      handlebars: {
        files: {
          'examples/dist/': [
            'examples/src/templates/gist.hbs',
            'examples/src/templates/jsfiddle.hbs',
            'examples/src/templates/basename.hbs'
          ]
        }
      },
      markdown: {
        options: {
          ext: '.md',
          content: './examples/src/content'
        },
        files: {
          'examples/dist/': [
            'examples/src/templates/authors.hbs',
            'examples/src/templates/inspect.hbs',
            'examples/src/templates/embed.hbs'
          ]
        }
      },
      templates: {
        files: {
          'examples/dist/': [
            'examples/templates/html/index.hbs',
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
    'coffee'
  ]);

  // Test helpers in actual templates.
  grunt.registerTask('templates', [
    'assemble:markdown',
    'assemble:templates'
  ]);

  // Build templates using helpers and run all tests.
  grunt.registerTask('test', [
    'coffee',
    'mochaTest'
  ]);
};
