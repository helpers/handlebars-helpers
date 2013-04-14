(function() {
  module.exports.register = function(Handlebars, options) {
    var HTML, Utils;

    Utils = require('../utils/utils');
    HTML = require('../utils/html');
    /*
    <!DOCTYPE>
    Same as the `ul` helper but creates and ordered list.
    */

    Handlebars.registerHelper("DOCTYPE", function(type) {
      type = type.toLowerCase();
      switch (type) {
        case "5":
        case "html":
        case "html5":
          return Utils.safeString('<!DOCTYPE1 html>');
        case "xml":
          return Utils.safeString('<?xml version="1.0" encoding="utf-8" ?>');
        case "strict":
          return Utils.safeString('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">');
        case "transitional":
          return Utils.safeString('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">');
        case "frameset":
          return Utils.safeString('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">');
        case "1.1":
        case "xhtml 1.1":
          return Utils.safeString('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">');
        case "basic":
          return Utils.safeString('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">');
        case "mobile":
          return Utils.safeString('<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">');
        case "4.01 strict":
          return Utils.safeString('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">');
        case "4.01 trans":
          return Utils.safeString('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">');
        case "4.01 frameset":
          return Utils.safeString('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">');
        case "svg 1.1":
        case "svg1.1":
          return Utils.safeString('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">');
        case "svg 1.0":
        case "svg1.0":
        case "svg1":
          return Utils.safeString('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">');
        default:
          return Utils.safeString('<!DOCTYPE html>');
      }
    });
    /*
    encode URI
    Encodes a Uniform Resource Identifier (URI) component by replacing each instance of 
    certain characters by one, two, three, or four escape sequences representing the 
    UTF-8 encoding of the character
    */

    Handlebars.registerHelper("encodeURI", function(uri) {
      return encodeURIComponent(uri);
    });
    /*
    Decode URI
    Decodes a Uniform Resource Identifier (URI) component previously created 
    by encodeURIComponent or by a similar routine.
    */

    Handlebars.registerHelper("decodeURI", function(encodedURI) {
      return decodeURIComponent(encodedURI);
    });
    /*
    List: <ul>
    */

    Handlebars.registerHelper("ul", function(context, options) {
      return ("<ul " + (HTML.parseAttributes(options.hash)) + ">") + context.map(function(item) {
        return "<li>" + (options.fn(item)) + "</li>";
      }).join("\n") + "</ul>";
    });
    /*
    List: <ol>
    Same as the `ul` helper but creates ordered lists.
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
