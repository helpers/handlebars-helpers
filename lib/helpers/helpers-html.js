(function() {
  var HTML, Handlebars, Utils;

  Handlebars = require('./helpers').Handlebars;

  HTML = require('../utils/html');

  Utils = require('../utils/utils');

  Handlebars.registerHelper('ul', function(context, options) {
    return ("<ul " + (HTML.parseAttributes(options.hash)) + ">") + context.map(function(item) {
      return "<li>" + (options.fn(item)) + "</li>";
    }).join('\n') + "</ul>";
  });

  Handlebars.registerHelper('ol', function(context, options) {
    return ("<ol " + (HTML.parseAttributes(options.hash)) + ">") + context.map(function(item) {
      return "<li>" + (options.fn(item)) + "</li>";
    }).join('\n') + "</ol>";
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
    return new Handlebars.SafeString(nl2br);
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
    return new Handlebars.SafeString(result);
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
        return new Handlebars.SafeString('<img src="img/img-icon.png"><span>' + attachment + '</span>');
      case "zip":
      case "rar":
        return new Handlebars.SafeString('<img src="img/archive-icon.png"><span>' + attachment + '</span>');
      case "pdf":
        return new Handlebars.SafeString('<img src="img/pdf-icon.png"><span>' + attachment + '</span>');
      case "txt":
        return new Handlebars.SafeString('<img src="img/txt-icon.png"><span>' + attachment + '</span>');
      case "doc":
      case "docx":
        return new Handlebars.SafeString('<img src="img/word-icon.png"><span>' + attachment + '</span>');
      case "xls":
      case "xlsx":
        return new Handlebars.SafeString('<img src="img/xls-icon.png"><span>' + attachment + '</span>');
      case "csv":
        return new Handlebars.SafeString('<img src="img/csv-icon.png"><span>' + attachment + '</span>');
      case "ppt":
      case "pptx":
        return new Handlebars.SafeString('<img src="img/ppt-icon.png"><span>' + attachment + '</span>');
      case "mp3":
        return new Handlebars.SafeString('<img src="img/audio-icon.png"><span>' + attachment + '</span>');
      default:
        return new Handlebars.SafeString('<img src="img/other-icon.png"><span>' + attachment + '</span>');
    }
  });

}).call(this);
