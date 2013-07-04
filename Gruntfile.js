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

    // Clean test files before building or re-testing.
    clean: {
      helpers: ['<%= coffee.helpers.dest %>/**/*.js'],
      tests:  ['examples/result/**/*.{html,md}']
    },

    // Copy helpers to assemble in node_modules and
    // helper-lib-examples for testing
    copy: {
      main: {
        files: [
          { expand: true, cwd: './lib', src: ['**'], dest: 'node_modules/assemble/node_modules/helper-lib/'}
        ]
      }
    },

    subgrunt: {
      copy: 'Gruntfile.js',
      examples: '../helper-lib-examples/Gruntfile.js'
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-mocha-test');

  // By default, build templates using helpers and run all tests.
  grunt.registerTask('default', [
    'clean',
    'coffee',
    'copy'
  ]);
  grunt.registerTask('helpers', [
    'clean',
    'coffee',
    'copy',
    'subgrunt'
  ]);

  // Build templates using helpers and run all tests.
  grunt.registerTask('test', [
    'coffee',
    'mochaTest'
  ]);


  // Run Gruntfiles in given directories.
  grunt.registerMultiTask('subgrunt', 'Run a sub-gruntfile.', function() {
    var path = require('path');
    grunt.util.async.forEachSeries(this.filesSrc, function(gruntfile, next) {
      grunt.util.spawn({
        grunt: true,
        args: ['--gruntfile', path.resolve(gruntfile)]
      }, function(error, result) {
        if (error) {
          grunt.log.error(result.stdout).writeln();
          next(new Error('Error running sub-gruntfile "' + gruntfile + '".'));
        } else {
          grunt.verbose.ok(result.stdout);
          next();
        }
      });
    }, this.async());
  });
};

