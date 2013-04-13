(function() {
  module.exports.register = function(Handlebars, options) {
    var Utils, fs, _;

    Utils = require('../utils/utils');
    fs = require('fs');
    _ = require('lodash');
    /*
    jsFiddle: Embed a jsFiddle, second parameter sets tabs
    Usage: {{ jsfiddle [id] [tabs] }}
    */

    Handlebars.registerHelper('jsfiddle', function(id, tabs) {
      var result;

      if (Utils.isUndefined(tabs)) {
        tabs = "result,js,html,css";
      }
      result = '<iframe width="100%" height="300" src="http://jsfiddle.net/' + id + '/embedded/' + tabs + '/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>';
      return new Handlebars.SafeString(result);
    });
    /* 
    Gist: Downloads and embeds public GitHub Gists by
    adding only the Id of the Gist.
    Usage: {{ gist [id] [file] }}
    */

    Handlebars.registerHelper('gist', function(id, file) {
      var result;

      id = Handlebars.Utils.escapeExpression(id);
      if (Utils.isUndefined(file)) {
        file = "";
      }
      result = '<script src="https://gist.github.com/' + id + '.js"></script>';
      return new Handlebars.SafeString(result);
    });
    /*
    Embed: Embeds code from an external file as preformatted text. The first parameter
    requires a path to the file you want to embed. There is a second optional
    parameter to specify (force) syntax highlighting for a specific language.
    Syntax:  {{ embed [file] [lang] }}
    Usage:   {{ embed 'src/examples/Gruntfile.js' 'javascript' }}
    */

    Handlebars.registerHelper('embed', function(file, language) {
      var result;

      file = fs.readFileSync(file, "utf8");
      if (Utils.isUndefined(language)) {
        language = "";
      }
      result = '``` ' + language + '\n' + file + '\n```';
      return new Handlebars.SafeString(result);
    });
    return this;
  };

}).call(this);
