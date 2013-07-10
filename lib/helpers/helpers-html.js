/*! html helpers*/


(function() {
  module.exports.register = function(Handlebars, options) {
    var HTML, Utils, grunt, util, _;
    grunt = require('grunt');
    util = require('util');
    Utils = require('../utils/utils');
    HTML = require('../utils/html');
    _ = require('lodash');
    Handlebars.registerHelper("switch", function(src) {
      var html, md, output;
      md = '# ' + src;
      html = '<h1>' + src + '</h1>';
      output = Utils.switchOutput(options.ext, md, html);
      return Utils.safeString(output);
    });
    Handlebars.sections = {};
    Handlebars.registerHelper("section", function(name, options) {
      var html;
      console.log("inside section", name);
      if (!Handlebars.sections[name]) {
        Handlebars.sections[name] = {};
      }
      html = "";
      _.forOwn(Handlebars.sections[name], function(value, key) {
        var data;
        console.log("item", key, value);
        data = Handlebars.createFrame({
          item: value
        });
        console.log("data", data);
        return html += options.fn(data);
      });
      return new Handlebars.SafeString(html);
    });
    Handlebars.registerHelper("push", function(options) {
      var item, name, section;
      console.log("inside push", options.hash.section, options.hash.name);
      section = options.hash.section;
      name = options.hash.name;
      if (section) {
        if (!Handlebars.sections[section]) {
          Handlebars.sections[section] = {};
        }
        item = new Handlebars.SafeString(options.fn(this));
        if (name) {
          return Handlebars.sections[section][name] = item;
        } else {
          return Handlebars.sections[section]["item" + (Handlebars.sections[section].length + 1)] = item;
        }
      }
    });
    Handlebars.registerHelper("link", function(url, text, linkClass) {
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
    Handlebars.registerHelper("exticon", function(attachment) {
      var extension, value;
      extension = attachment.substr(attachment.lastIndexOf(".") + 1);
      value = Handlebars.Utils.escapeExpression(extension);
      switch (value) {
        case "jpg":
        case "jpeg":
        case "png":
        case "gif":
          return Utils.safeString("<img src=\"img/img-icon.png\"><i>" + attachment + "</i>");
        case "zip":
        case "rar":
          return Utils.safeString("<img src=\"img/archive-icon.png\"><i>" + attachment + "</i>");
        case "pdf":
          return Utils.safeString("<img src=\"img/pdf-icon.png\"><i>" + attachment + "</i>");
        case "txt":
          return Utils.safeString("<img src=\"img/txt-icon.png\"><i>" + attachment + "</i>");
        case "doc":
        case "docx":
          return Utils.safeString("<img src=\"img/word-icon.png\"><i>" + attachment + "</i>");
        case "xls":
        case "xlsx":
          return Utils.safeString("<img src=\"img/xls-icon.png\"><i>" + attachment + "</i>");
        case "csv":
          return Utils.safeString("<img src=\"img/csv-icon.png\"><i>" + attachment + "</i>");
        case "ppt":
        case "pptx":
          return Utils.safeString("<img src=\"img/ppt-icon.png\"><i>" + attachment + "</i>");
        case "mp3":
          return Utils.safeString("<img src=\"img/audio-icon.png\"><i>" + attachment + "</i>");
        default:
          return Utils.safeString("<img src=\"img/other-icon.png\"><i>" + attachment + "</i>");
      }
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
    return this;
  };

}).call(this);
