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
      options: {
        flatten: true,
        assets: 'examples/assets',
        content: './examples/src/content'
      },
      markdown: {
        options: {
          ext: ''
        },
        files: {
          'examples/result/md/': [
            './examples/src/templates/*.md.hbs'
          ]
        }
      },
      handlebars: {
        files: {
          'examples/result/html/': [
            "examples/src/templates/*.hbs",
            "!examples/src/templates/*.md.hbs",
          ]
        }
      }
    },

    // Clean test files before building or re-testing.
    clean: {
      tests: ['examples/result/**/*.{html,md}'],
    },

    // Copy helpers to assemble in node_modules for dev.
    copy: {
      main: {
        files: [
          {expand: true, src: ['lib/**'], dest: './node_modules/assemble/node_modules/helper-lib/'}
        ]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-mocha-test');

  // By default, build templates using helpers and run all tests.
  grunt.registerTask('default', [
    'coffee',
    'copy',
    'clean',
    'assemble'
  ]);

  // Build templates using helpers and run all tests.
  grunt.registerTask('test', [
    'coffee',
    'mochaTest'
  ]);
};
