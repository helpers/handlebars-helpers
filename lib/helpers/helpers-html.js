(function() {
  module.exports.register = function(Handlebars, options) {
    var HTML, Utils;

    Utils = require('../utils/utils');
    HTML = require('../utils/html');
    Handlebars.registerHelper("ul", function(context, options) {
      return ("<ul " + (HTML.parseAttributes(options.hash)) + ">") + context.map(function(item) {
        return "<li>" + (options.fn(item)) + "</li>";
      }).join("\n") + "</ul>";
    });
    /*
    <ol>
    Same as the `ul` helper but creates and ordered list.
    */

    Handlebars.registerHelper("ol", function(context, options) {
      return ("<ol " + (HTML.parseAttributes(options.hash)) + ">") + context.map(function(item) {
        return "<li>" + (options.fn(item)) + "</li>";
      }).join("\n") + "</ol>";
    });
    Handlebars.registerHelper('br', function(count, options) {
      var br, i;

      br = '<br>';
      if (!Utils.isUndefined(count)) {
        i = 0;
        while (i < count - 1) {
          br += '<br>';
          i++;
        }
      }
      return Utils.safeString(br);
    });
    /*
    Convert new line (\n) to <br>
    from http://phpjs.org/functions/nl2br:480
    */

    Handlebars.registerHelper('nl2br', function(text) {
      var nl2br;

      nl2br = (text + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1" + "<br>" + "$2");
      return Utils.safeString(nl2br);
    });
    /*
    link helper function.
    
    This will escape the passed in parameters, but mark the response as safe,
    so Handlebars will not try to escape it even if the "triple-stash" is not used.
    
    Usage:
    
    {{link 'href' 'title' 'class'}}
    */

    Handlebars.registerHelper("link", function(url, text, linkClass) {
      var result;

      url = Handlebars.Utils.escapeExpression(url);
      text = Handlebars.Utils.escapeExpression(text);
      if (Utils.isUndefined(linkClass)) {
        linkClass = "";
      }
      result = '<a class="' + linkClass + '" href="' + url + '" title="' + text + '">' + text + '</a>';
      return Utils.safeString(result);
    });
    Handlebars.registerHelper("highlight", function(value, options) {
      var escaped;

      escaped = Handlebars.Utils.escapeExpression(value);
      return Utils.safeString("<span class=\"highlight\">" + escaped + "</span>");
    });
    Handlebars.registerHelper("icon", function(attachment) {
      var extension, value;

      extension = attachment.substr(attachment.lastIndexOf(".") + 1);
      value = Handlebars.Utils.escapeExpression(extension);
      switch (value) {
        case "jpg":
        case "jpeg":
        case "png":
        case "gif":
          return Utils.safeString('<img src="img/img-icon.png"><span>' + attachment + '</span>');
        case "zip":
        case "rar":
          return Utils.safeString('<img src="img/archive-icon.png"><span>' + attachment + '</span>');
        case "pdf":
          return Utils.safeString('<img src="img/pdf-icon.png"><span>' + attachment + '</span>');
        case "txt":
          return Utils.safeString('<img src="img/txt-icon.png"><span>' + attachment + '</span>');
        case "doc":
        case "docx":
          return Utils.safeString('<img src="img/word-icon.png"><span>' + attachment + '</span>');
        case "xls":
        case "xlsx":
          return Utils.safeString('<img src="img/xls-icon.png"><span>' + attachment + '</span>');
        case "csv":
          return Utils.safeString('<img src="img/csv-icon.png"><span>' + attachment + '</span>');
        case "ppt":
        case "pptx":
          return Utils.safeString('<img src="img/ppt-icon.png"><span>' + attachment + '</span>');
        case "mp3":
          return Utils.safeString('<img src="img/audio-icon.png"><span>' + attachment + '</span>');
        default:
          return Utils.safeString('<img src="img/other-icon.png"><span>' + attachment + '</span>');
      }
    });
    return this;
  };

}).call(this);
