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

    metadata: {
      year: '<%= grunt.template.today("yyyy") %>',
      authors: 'Jon Schlinkert, Brian Woodward, contributors',
      // credit: grunt.file.read('./tmp/v0.6.0/src/credit.txt'),
      banner: [
        '/*!',
        ' * <%= pkg.name %> v<%= pkg.version %> <<%= pkg.homepage %>>',
        ' * Copyright (c) 2013-<%= metadata.year %>, <%= metadata.authors %>.',
        ' * Source code licensed under the MIT license.',
        '',
        '<%= metadata.credit %>',
        ' */\n\n'
      ].join('\n')
    },

    // Lint JavaScripts
    jshint: {
      options: {jshintrc: '.jshintrc'},
      all: [
        'Gruntfile.js',
        'test/**/*.js',
        'src/**/*.js'
      ]
    },

    // Run mocha tests.
    mochaTest: {
      tests: {
        options: {
          reporter: 'spec',
        },
        src: ['test/**/*_test.js']
      }
    },

    // Generate lists of helpers that need docs and tests.
    coverage: {
      options: {
        srcPattern: /\s+([\S]+): function/g,
        // srcPattern: /helpers\.([\S]+)/g,
        srcSanitize: ['_readme', '.md', '.hbs', 'helper-']
      },
      documented: {
        options: {
          namespace: 'docsDifference',
          compareAgainst: 'docs/helpers/**/*.md',
          compareSanitize: []
        },
        src: ['src/helpers/*.js'],
        dest: 'docs/undocumented.json',
      },
      tests: {
        options: {
          namespace: 'testsDifference',
          compare: 'content',
          compareAgainst: 'test/helpers/*.js',
          comparePattern: /^(?!  )describe\((?:'|")(.+)(?:'|").+/gm,
          compareSanitize: []
        },
        src: ['src/helpers/*.js'],
        dest: 'docs/notest.json',
      }
    },

    // Build README
    readme: {
      options: {
        metadata: ['docs/*.json']
      }
    },

    concat: {
      options: {
        banner: '<%= metadata.banner %>',
        stripBanners: true
      },
      helpers: {
        src: [
          'tmp/v0.6.0/src/helpers.js',
          'tmp/v0.6.0/src/utils.js',
          'tmp/v0.6.0/src/helpers/*.js'
        ],
        dest: 'tmp/v0.6.0/lib/helpers.js'
      }
    },

    // Create zip file from markdown docs. This is pulled
    // down by Assemble and decompressed, then built into a
    // single page: http://assemble.io/helpers/
    compress: {
      zip: {
        options: {
          archive: 'docs/helpers.zip'
        },
        files: [
          {expand: true, cwd: 'docs/helpers/', src: ['**/*']}
        ]
      }
    },

    // Clean test files before building or re-testing.
    clean: {
      helpers: ['src/**/*']
    },

    // use browserify to build the web version
    browserify: {
      web: {
        files: [
          { src: 'src/**/*.js', dest: 'dist/handlebars-helpers.web.js' }
        ]
      }
    }

  });

  // Load plugins to provide the necessary tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Tests to be run
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('docs', ['coverage', 'compress', 'readme', 'sync']);

  // By default, build templates using helpers and run all tests.
  grunt.registerTask('default', ['jshint', 'test', 'docs']);
};
