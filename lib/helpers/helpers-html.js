(function() {
  module.exports.register = function(Handlebars, options) {
    var HTML, Utils;

    Utils = require('../utils/utils');
    HTML = require('../utils/html');
    /*
    Switch (proof of concept), not intended for use in production code.
    This helper demonstrates a simple example of how to switch the output
    format based on the extension of the destination file(s) in the
    'assemble' grunt task.
    */

    Handlebars.registerHelper("switch", function(src) {
      var html, md, output;

      md = '# ' + src;
      html = '<h1>' + src + '</h1>';
      output = Utils.switchOutput(options.ext, md, html);
      return Utils.safeString(output);
    });
    Handlebars.registerHelper("css", function(context) {
      if (!Array.isArray(context)) {
        context = [context];
      }
      return Utils.safeString(context.map(function(item) {
        var css, ext, less;

        ext = Utils.getExt(item);
        css = '<link rel="stylesheet" href="' + options.assets + '/css/' + item + '">';
        less = '<link rel="stylesheet/less" href="' + options.assets + '/less/' + item + '">';
        switch (ext) {
          case "less":
            return less;
          case "css":
            return css;
          default:
            return css;
        }
      }).join("\n"));
    });
    Handlebars.registerHelper("js", function(context) {
      if (!Array.isArray(context)) {
        context = [context];
      }
      return Utils.safeString(context.map(function(item) {
        var coffee, ext, js;

        ext = Utils.getExt(item);
        js = '<script src="' + options.assets + '/js/' + item + '"></script>';
        coffee = '<script type="text/coffeescript" src="' + options.assets + '/js/' + item + '"></script>';
        switch (ext) {
          case "js":
            return js;
          case "coffee":
            return coffee;
          default:
            return js;
        }
      }).join("\n"));
    });
    /*
    href: This will escape the passed in parameters, but mark the response as safe,
    so Handlebars will not try to escape it even if the "triple-stash" is not used.
    Usage: {{href 'url' 'title/text' 'class'}}
    */

    Handlebars.registerHelper("href", function(url, text, linkClass) {
      var html, md, result;

      url = Handlebars.Utils.escapeExpression(url);
      text = Handlebars.Utils.escapeExpression(text);
      if (Utils.isUndefined(linkClass)) {
        linkClass = "";
      }
      md = '[' + text + '](' + url + ')';
      html = '<a class="' + linkClass + '" href="' + url + '" title="' + text + '">' + text + '</a>';
      result = Utils.switchOutput(options.ext, md, html);
      return Utils.safeString(result);
    });
    Handlebars.registerHelper("ul", function(context, options) {
      return ("<ul " + (HTML.parseAttributes(options.hash)) + ">") + context.map(function(item) {
        return "<li>" + (options.fn(item)) + "</li>";
      }).join("\n") + "</ul>";
    });
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
    Handlebars.registerHelper('nl2br', function(text) {
      var nl2br;

      nl2br = (text + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1" + "<br>" + "$2");
      return Utils.safeString(nl2br);
    });
    Handlebars.registerHelper('newLineToBr', function(str) {
      return str.replace(/\r?\n|\r/g, '<br>');
    });
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
        case "4":
        case "4.01":
        case "4.01 strict":
          return Utils.safeString('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">');
        case "4.01 trans":
          return Utils.safeString('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">');
        case "4.01 frameset":
          return Utils.safeString('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">');
        case "svg":
        case "svg 1.1":
        case "svg1.1":
          return Utils.safeString('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">');
        case "svg 1.0":
        case "svg1.0":
        case "svg1":
          return Utils.safeString('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">');
        default:
          return Utils.safeString('<!DOCTYPE1 html>');
      }
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
