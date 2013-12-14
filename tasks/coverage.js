/*
 * 'coverage' plugin for Grunt.js
 * http://github.com/assemble/handlebars-helpers
 *
 * Copyright (c) 2013 Jon Schlinkert
 * MIT License
 */


// Node.js
var fs = require('fs');
var path = require('path');

// node_modules
var _ = require('grunt').util._;

module.exports = function(grunt) {
  grunt.registerMultiTask('coverage', 'Render a list of the differences between arrays. We use this to find helpers that have not been undocumented.', function() {

    var options = this.options({
      compare: 'paths'
    });
    options.compareAgainst = options.compareAgainst || '';

    var sanitizePath = function (name, patterns) {
      var unwanted = [];
      unwanted = _.unique(_.flatten(_.union([], unwanted, options.srcSanitize || [])));
      var re = new RegExp('(?:' + unwanted.join('|') + ')[-_]?', 'g');
      return name.replace(re, '');
    };

    var patternArray = function(regex, src) {
      src = grunt.file.read(src);
      var match;
      var matches = [];
      while (match = regex.exec(src)) {
        matches.push(match[1]);
      }
      return matches;
    };

    this.files.forEach(function(f) {

      var srcMatches = {
        total: []
      };
      grunt.file.expand(f.src).map(function(file) {
        var content = options.srcPattern ? patternArray(options.srcPattern, file) : null;
        content.forEach(function(match) {
          srcMatches.total.push(match);
        });
      });
      grunt.verbose.writeln(_.flatten(srcMatches));
      grunt.verbose.writeln(_.flatten(srcMatches).length);


      var comparison = [];
      grunt.file.expand(options.compareAgainst).map(function(file) {
        var name = path.basename(sanitizePath(file));
        var content = options.comparePattern ? patternArray(options.comparePattern, file) : null;

        if(options.compare === 'content') {
           content.forEach(function(match) {
            comparison.push(match);
          });
        } else {
          comparison.push(name);
        }
      });

      grunt.verbose.writeln(_.flatten(comparison));
      grunt.verbose.writeln(_.flatten(comparison).length);


      var discrepancy = {};
      var difference = options.namespace || 'difference';
      discrepancy[difference] = _.difference(_.flatten(srcMatches.total), _.flatten(comparison)).sort();

      grunt.verbose.writeln(discrepancy[difference].length);

      grunt.file.write(f.dest, JSON.stringify(discrepancy, null, 2));
      grunt.file.write(path.join(path.dirname(f.dest), 'total.json'), JSON.stringify(srcMatches, null, 2));
    });
  });
};
