(function() {
  module.exports.register = function(Handlebars, options) {
    var Utils, fs, _;

    fs = require('fs');
    _ = require('lodash');
    Utils = require('../utils/utils');
    /*
    Include: Include content from an external source.
    Usage: {{ include [file] }}
    */

    Handlebars.registerHelper('include', function(file) {
      file = Utils.read(file);
      return Utils.safeString(file);
    });
    /*
    "section": block helper.
    Usage: {{#section [file] }}
    */

    Handlebars.registerHelper('section', function(section, options) {
      if (Handlebars.sections) {
        Handlebars.sections[section] = options.fn(this);
      }
      return Utils.safeString('');
    });
    /*
    "override" block helper.
    Usage: {{#override [file] }}
    */

    Handlebars.registerHelper('override', function(section, options) {
      var content;

      if (Handlebars.sections && Handlebars.sections[section]) {
        content = Handlebars.sections[section];
      } else {
        content = options.fn(this);
      }
      return Utils.safeString(content);
    });
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
    Highlight: wraps the output in a span with the class "highlight". 
    Usage: {{highlight 'value' 'class'}}
    */

    Handlebars.registerHelper('highlight', function(text, modifier) {
      var result;

      if (Utils.isUndefined(modifier)) {
        modifier = "highlight";
      }
      result = '<span class="' + modifier + '">' + text + '</span>';
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
