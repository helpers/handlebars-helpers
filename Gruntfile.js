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
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-mocha-test');

  // By default, build templates using helpers and run all tests.
  grunt.registerTask('default', ['clean', 'coffee']);

  // Build templates using helpers and run all tests.
  grunt.registerTask('test',    ['default', 'mochaTest']);

};

