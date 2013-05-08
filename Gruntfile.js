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
    pkg: grunt.file.readJSON('package.json'),

    // Configuration to be run (and then tested).
    coffee: {
      helpers: {
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
      tests: {
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
      travis1: {
        options: {
          travis: {
            name: 'Assemble',
            branch: 'wip'
          },
          ext: ''
        },
        files: {'examples/result/md/travis1/': ['./examples/src/templates/travis.md.hbs']}
      },
      travis2: {
        options: {
          travis: {
            name: 'Upstage',
            branch: 'master'
          },
          ext: ''
        },
        files: {'examples/result/md/travis2/': ['./examples/src/templates/travis.md.hbs']}
      },
      relative: {
        options: {
          flatten: false,
          assets: 'examples/assets'
        },
        files: {
          'examples/result/html/relative/': [
            './examples/src/templates/path.hbs',
            './examples/src/templates/nested/**/*.hbs'
          ]
        }
      },
      less: {
        files: {
          'examples/result/html/less.html': [
            './examples/src/templates/less.hbs'
          ]
        }
      },
      handlebars: {
        options: {
          layout: 'examples/src/templates/layouts/layout.hbs',
          partials: 'examples/src/content/test.hbs'
        },
        files: {
          'examples/result/html/': [
            'examples/src/templates/*.hbs',
            '!examples/src/templates/*.md.hbs',
            '!examples/src/templates/sections.hbs'
          ]
        }
      },
      sections: {
        options: {
          layout: 'examples/src/templates/layouts/layout.hbs'
        },
        files: {
          'examples/result/sections/': [
            'examples/src/templates/sections.hbs'
          ]
        }
      }
    },

    // Clean test files before building or re-testing.
    clean: {
      helpers: '<%= coffee.helpers.dest %>/**/*.js',
      tests:  ['examples/result/**/*.{html,md}']
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
    'clean',
    'coffee',
    'copy',
    'templates'
  ]);

  // Test helpers in actual templates.
  grunt.registerTask('templates', [
    'assemble:markdown',
    'assemble:travis1',
    'assemble:travis2',
    'assemble:handlebars',
    'assemble:sections',
    'assemble:less'
  ]);

  // Build templates using helpers and run all tests.
  grunt.registerTask('test', [
    'coffee',
    'mochaTest'
  ]);
};
