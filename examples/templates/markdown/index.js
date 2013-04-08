(function() {
  "use strict";
  var Handlebars = require("handlebars"),
    util = require("../../lib/util.js"),
    fs = require("fs"),
    path = require("path");


  var template = __dirname;
  var readmeTemplate = fs.readFileSync(path.resolve(template, "./index.tmpl"), "utf8");
  var compiledReadmeTemplate = Handlebars.compile(readmeTemplate);


  var link = function(name, context) {
    return new Handlebars.SafeString(
      "#" + normalize(name));
  };

  var formatName = function(name) {
    var ret = [];
    ret.push("###", name + "\n");
    if (this.isStatic) {
      ret.push(" _static_ ");
    }
    if (this.isFunction) {
      ret.push(" function");
    }
    if (this.isPrivate) {
      ret.push(" __private__");
    } else if (this.isProtected) {
      ret.push(" __protected__ ");
    } else {
      ret.push(" public");
    }
    ret.push("\n");
    return ret.join("");
  };

  var normalize = function(name, context) {
    return util.resolveName(name).replace(/\./g, "_");
  };


  var escapeLink = function(name) {
    return normalize(name.replace(/\./g, "_"));
  };


  var joinTypes = function(types) {
    return "<code>" + types.join("|") + "</code>";
  };

  var replaceToken = function(str, token, cb) {
    var start = "{@" + token,
      startToken = "{",
      endToken = "}",
      index = str.indexOf(start);
    while (index !== -1) {
      var code = util.getTokensBetween(str.substr(index), startToken, endToken, true).join("");
      if (new RegExp("\\" + endToken + "$").test(code)) {
        str = str.replace(code, cb(code, str, index));
        index = str.indexOf(start);
      } else {
        break;
      }
    }
    return str;
  };


  var replaceLinks = function(text) {
    return replaceCode(text ? replaceToken(text, "link", function(link) {
      link = link.replace(/^\{@link|\}$/g, "");
      return ["<a href='#", normalize(link), "'>", link, "</a>"].join("");
    }) : "");
  };


  var replaceCode = function(text) {
    return text ? replaceToken(text, "code", function(code) {
      code = code.replace(/^\{@code|\}$/g, "");
      return ["```javascript", code, "```"].join("\n");
    }) : "";
  };

  var formatParamName = function(name) {
    var ret = name.name;
    if (name.optional) {
      if ("undefined" !== typeof name.defaultValue) {
        ret = "[" + ret + "=" + name.defaultValue + "]";
      } else {
        ret += "?";
      }
    }
    return ret;
  };

  var propertyTable = function(properties) {
    var ret = "";
    if (properties.length) {
      ret = "<table class='table table-bordered table-striped'><tr><td>Property</td><td>Type</td><td>Default Value</td><td>Description</td></tr>";
      properties.forEach(function(p) {
        var nameValue = util.isString(p.name) ? p.name : p.name.name;
        var name = p.isStatic ? "<em>" + nameValue + "</em>" : nameValue;
        var value = replaceLinks(p.code || p.defaultValue || "");
        var type = p.type || "";
        var description = replaceLinks(p.description) || "";
        ret += ["<tr><td>", name, "</td><td>", type, "</td><td>", value ? "<code>" + value + "</code>" : "", "</td><td>", description, "</td><tr>"].join("");
      });
      ret += "</table>";
    }
    return ret;
  };

  var importFile = (function() {
    var compiledImports = {};
    return function(file, context, b) {
      if (!file.match(/\.(tmpl|html|css|js)$/)) {
        file += ".tmpl";
      }
      try {

        var filePath = path.resolve(template, file);
        var tmpl = compiledImports[filePath];
        if (!tmpl) {
          var fileContent = fs.readFileSync(filePath, "utf8");
          tmpl = compiledImports[filePath] = Handlebars.compile(fileContent);
        }
        return tmpl(this);
      } catch (e) {
        throw e;
      }
    };
  })();

  var see = function(see) {
    var parts = see.split(/\s+/);
    if (parts.length) {
      var sym = util.splitName(util.resolveName(parts[0]));
    }
  };

  Handlebars.registerHelper('link', link);
  Handlebars.registerHelper('formatName', formatName);
  Handlebars.registerHelper('normalize', normalize);
  Handlebars.registerHelper('escapeLink', escapeLink);
  Handlebars.registerHelper("joinTypes", joinTypes);
  Handlebars.registerHelper("see", see);
  Handlebars.registerHelper("replaceLinks", replaceLinks);
  Handlebars.registerHelper("formatParamName", formatParamName);
  Handlebars.registerHelper("propertyTable", propertyTable);
  Handlebars.registerHelper("import", importFile);

  var objComp = function(n1, n2) {
    return n1.name === n2.name ? 0 : n1.name < n2.name ? -1 : 1;
  };

  exports.generate = function(tree, options) {
    var nameSpaces = tree.getNamespaces().sort(objComp);
    nameSpaces.forEach(function(n) {
      n.methods.sort(objComp);
      n.properties.sort(objComp);
    });
    var classes = tree.getClasses().sort(objComp);
    classes.forEach(function(c) {
      c.instanceMethods.sort(objComp);
      c.instanceProperties.sort(objComp);
      c.staticMethods.sort(objComp);
      c.staticProperties.sort(objComp);
      c.allMethods = c.instanceMethods.concat(c.staticMethods).sort(objComp);
    });
    return compiledReadmeTemplate({
      namespaces: nameSpaces,
      headers: tree.getHeaders(),
      footers: tree.getFooters(),
      projectName: tree.getProjectName(),
      classes: classes
    });
  };

}());