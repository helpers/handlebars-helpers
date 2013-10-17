
// Node.js
var fs = require('fs');
var path = require('path');

// node_modules
var _ = require('grunt').util._;

module.exports = function(grunt) {
  grunt.registerMultiTask('coverage', 'Render a list of the differences between arrays. We use this to find helpers that have not been undocumented.', function() {

    var options = this.options({
      read: false
    });
    options.compare = options.compare || '';

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

      var srcMatches = [];
      grunt.file.expand(f.src).map(function(file) {
        return {
          name: sanitizePath(file),
          content: options.srcPattern ? patternArray(options.srcPattern, file) : null
        };
      }).map(function(obj) {
         _(obj.content).forEach(function(match) {
          srcMatches.push(match);
        });
      });
      grunt.verbose.writeln(_.flatten(srcMatches));
      grunt.verbose.writeln(_.flatten(srcMatches).length);


      var comparison = [];
      grunt.file.expand(options.compare).map(function(file) {
        return {
          name: sanitizePath(file),
          content: options.comparePattern ? patternArray(options.comparePattern, file) : null
        };
      }).map(function(obj) {
        if(options.read === true) {
           _(obj.content).forEach(function(match) {
            comparison.push(match);
          });
        } else {
          comparison.push(path.basename(obj.name));
        }
      });

      grunt.verbose.writeln(_.flatten(comparison));
      grunt.verbose.writeln(_.flatten(comparison).length);



      var discrepancy = {};
      var difference = options.keyname || 'difference';
      discrepancy[difference] = _.difference(_.flatten(srcMatches), _.flatten(comparison)).sort()

      grunt.verbose.writeln(discrepancy[difference].length);

      grunt.file.write(f.dest, JSON.stringify(discrepancy, null, 2));
      grunt.file.write(path.join(path.dirname(f.dest), 'total.json'), JSON.stringify(srcMatches, null, 2));
    });
  });
};