'use strict';

module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    docs: grunt.file.readJSON('docs/templates/data/docs.json'),

    nodeunit: {
      files: ['test/**/*_test.js']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'nodeunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'nodeunit']
      }
    },
    assemble: {
      // Run basic tests on templates and data.
      tests: {
        options: {
          partials: ['test/spec/helpers/*.hbs']
        },
        files: {
          'test/actual': ['test/spec/tests.hbs']
        }
      },
      // Internal task to build README, docs.
      readme: {
        options: {
          today: '<%= grunt.template.today() %>',
          partials: ['docs/*.md','docs/helpers/*.md','docs/templates/sections/*.{md,hbs}'],
          changelog: grunt.file.readYAML('CHANGELOG'),
          roadmap: grunt.file.readYAML('ROADMAP'),
          data: ['docs/templates/data/docs.json', '<%= docs.urls %>','<%= docs.repos %>'],
          ext: '.md'
        },
        files: {
          '.': ['docs/templates/README.hbs']
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task.
  grunt.registerTask('default', [
    'jshint', 
    'nodeunit'
  ]);

  // Internal task to build docs.
  grunt.registerTask('readme', [
    'assemble:readme'
  ]);
};
