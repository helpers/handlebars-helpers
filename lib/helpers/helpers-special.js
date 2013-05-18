/*! special helpers
*/


(function() {
  var Handlebars, Utils, embed, gist, grunt, highlight, jsfiddle, path, _;

  Handlebars = require('../helpers/helpers').Handlebars;

  Utils = require('../utils/utils');

  grunt = require('grunt');

  path = require('path');

  _ = require('lodash');

  module.exports.embed = embed = function(src, lang) {
    var content, ext, output, result;

    content = Utils.globFiles(src);
    ext = path.extname(src).replace(/^(\.)/gm, '');
    if (Utils.isUndefined(lang)) {
      lang = ext;
    } else {
      lang = lang;
    }
    switch (ext) {
      case "md":
      case "markdown":
      case "mdown":
        output = content.replace(/^(```)/gm, '&#x60;&#x60;&#x60;');
        ext = "md";
        break;
      case "txt":
        ext = "text";
        output = content;
        break;
      case "hbs":
      case "hbars":
        output = content.replace(/^(---)/gm, '---');
        ext = "html";
        break;
      case "less":
        ext = "scss";
        output = content;
        break;
      case void 0:
        ext = "";
        output = content;
        break;
      default:
        ext = "";
        output = content;
    }
    result = '``` ' + lang + '\n' + output + '\n```\n';
    return Utils.safeString(result);
  };

  module.exports.jsfiddle = jsfiddle = function(id, tabs) {
    var result;

    if (Utils.isUndefined(tabs)) {
      tabs = "result,js,html,css";
    }
    result = '<iframe width="100%" height="300" src="http://jsfiddle.net/' + id + '/embedded/' + tabs + '/presentation/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>';
    return Utils.safeString(result);
  };

  module.exports.gist = gist = function(id, file) {
    var result;

    id = Handlebars.Utils.escapeExpression(id);
    if (Utils.isUndefined(file)) {
      file = "";
    }
    result = '<script src="https://gist.github.com/' + id + '.js"></script>';
    return Utils.safeString(result);
  };

  module.exports.highlight = highlight = function(text, modifier) {
    var result;

    if (Utils.isUndefined(modifier)) {
      modifier = "highlight";
    }
    result = '<span class="' + modifier + '">' + text + '</span>';
    return Utils.safeString(result);
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("embed", embed);
    Handlebars.registerHelper("gist", gist);
    Handlebars.registerHelper("highlight", highlight);
    Handlebars.registerHelper("jsfiddle", jsfiddle);
    return this;
  };

}).call(this);
