(function() {
  module.exports.register = function(Handlebars, options) {
    var Utils, fs, _;

    fs = require('fs');
    _ = require('lodash');
    Utils = require('../utils/utils');
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
      return Utils.safeString(result);
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
      return Utils.safeString(result);
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

      file = Utils.read(file);
      if (Utils.isUndefined(language)) {
        language = "";
      }
      result = '``` ' + language + '\n' + file + '\n```';
      return Utils.safeString(result);
    });
    /*
    Format Phone Number
    from: http://blog.teamtreehouse.com/handlebars-js-part-2-partials-and-helpers
    Helper function to output a formatted phone number
    Usage: {{formatPhoneNumber phoneNumber}}
    */

    Handlebars.registerHelper("formatPhoneNumber", function(phoneNumber) {
      phoneNumber = phoneNumber.toString();
      return "(" + phoneNumber.substr(0, 3) + ") " + phoneNumber.substr(3, 3) + "-" + phoneNumber.substr(6, 4);
    });
    return this;
  };

}).call(this);
