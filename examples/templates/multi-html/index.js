(function() {
  "use strict";
  var Handlebars = require("handlebars"),
    util = require("../../lib/util.js"),
    exec = require("child_process").exec,
    fs = require("fs"),
    marked = require("marked"),
    wrench = require("wrench"),
    path = require("path");

  var template = __dirname;
  var compileIndexTmpl = Handlebars.compile(fs.readFileSync(path.resolve(template, "./index.html"), "utf8"));
  var compileClassesTmpl = Handlebars.compile(fs.readFileSync(path.resolve(template, "./classes.tmpl"), "utf8"));
  var compileNamespacesTmpl = Handlebars.compile(fs.readFileSync(path.resolve(template, "./namespaces.tmpl"), "utf8"));

  var normalize = function(name, context) {
    return util.resolveName(name, true).replace(/\./g, "_");
  };

  var getSymbolName = function(name) {
    var parts = name.replace(/\#.*/, "").split("."),
      symbol, last = parts[parts.length - 1];
    if (last.charAt(0).match(/[A-Z]/) && last.toUpperCase() !== last) {
      symbol = parts.join(".");
    } else {
      if (parts.length === 1) {
        symbol = parts.join(".");
      } else {
        parts.pop();
        symbol = parts.join(".");
      }
    }
    return normalize(symbol).trim();
  };

  var getAccessorName = function(name) {
    var match = name.match(/#(.*)|\.prototype\.(.*)/),
      symbol;
    if (match) {
      symbol = match[1] || match[2];
    } else {
      var parts = name.split(".");
      if (!(parts[parts.length - 1].charAt(0).match(/[A-Z]/) || parts.length === 1)) {
        symbol = "." + parts.pop();
      }
    }
    return symbol ? symbol.trim() : null;
  };


  var link = function(name, context) {
    if (this.isNamespace) {
      return new Handlebars.SafeString(
      normalize(name) + ".html");
    } else {
      name = name.replace(".prototype.", "#");
      var symbol = "./" + getSymbolName(name).trim() + ".html",
        prop = getAccessorName(name);
      return new Handlebars.SafeString(
      prop ? symbol + "#" + prop : symbol);
    }
  };

  var resolveInclude = function(location) {
    var extname = path.extname(location),
      baseName = path.basename(location, extname),
      content;
    if (extname === ".md") {
      content = marked(fs.readFileSync(location, "utf8"));
    } else {
      content = fs.readFileSync(location, 'utf8');
    }
    return new Handlebars.SafeString(
      "./" + baseName + ".html");
  };


  var escapeLink = function(name) {
    return getAccessorName(name);
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
      return ["<a href='", ["./" + getSymbolName(link).trim() + ".html", getAccessorName(link)].join("#"), "'>", link, "</a>"].join("");
    }) : "");
  };

  var replaceLinksAndParse = function(text) {
    return parseMarkdown(replaceCode(text ? replaceToken(text, "link", function(link) {
      link = link.replace(/^\{@link|\}$/g, "");
      return ["<a href='", ["./" + getSymbolName(link).trim() + ".html", getAccessorName(link)].join("#"), "'>", link, "</a>"].join("");
    }) : ""));
  };

  var parseMarkdown = function(text) {
    return marked(text).replace(/\<pre\>/ig, "<pre class='prettyprint linenums lang-js'>");
  };


  var replaceCode = function(text) {
    return text ? replaceToken(text, "code", function(code) {
      code = code.replace(/^\{@code|\}$/g, "");
      return ["<pre class='prettyprint linenums lang-js'>", code, "</pre>"].join("\n");
    }) : "";
  };

  var formatParamName = function(name) {
    var ret = name.name;
    if (name.optional) {
      var defaultValue = name.defaultValue;
      if ("undefined" !== typeof defaultValue) {
        ret = "[" + ret + "= <code>" + name.defaultValue + "</code>]";
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
        var description = replaceLinksAndParse(p.description) || "";

        ret += ["<tr><td>", name, "</td><td>", type, "</td><td>", value ? "<code>" + value + "</code>" : "", "</td><td>", description, "</td><tr>"].join("");
      });
      ret += "</table>";
    }
    return ret;
  };

  var importFile = (function() {
    var compiledImports = {};
    return function(file, context, b) {
      context = context || {};
      var fileContent, compile = util.isBoolean(context.compile) ? context.compile : true;
      if (!file.match(/\.(tmpl|md|html|css|js)$/)) {
        file += ".tmpl";
      } else if (path.extname(file) === ".md") {
        fileContent = '{{{import "./header.html"}}}\n' + parseMarkdown(fs.readFileSync(file, "utf8")) + '\n{{{import "./footer.html"}}}';
      }
      try {
        var filePath = path.resolve(template, file);
        var tmpl = compiledImports[filePath];
        if (!tmpl) {
          if (!fileContent) {
            fileContent = fs.readFileSync(filePath, "utf8");
          }
          tmpl = compiledImports[filePath] = compile ? Handlebars.compile(fileContent) : function() {
            return fileContent;
          };
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
      var sym = util.splitName(util.resolveName(parts[0], true));
    }
  };

  Handlebars.registerHelper('link', link);
  Handlebars.registerHelper('normalize', normalize);
  Handlebars.registerHelper('escapeLink', escapeLink);
  Handlebars.registerHelper("joinTypes", joinTypes);
  Handlebars.registerHelper("see", see);
  Handlebars.registerHelper("replaceLinks", replaceLinks);
  Handlebars.registerHelper("formatParamName", formatParamName);
  Handlebars.registerHelper("propertyTable", propertyTable);
  Handlebars.registerHelper("import", importFile);
  Handlebars.registerHelper("resolveInclude", resolveInclude);
  Handlebars.registerHelper("replaceLinksAndParse", replaceLinksAndParse);

  var objComp = function(n1, n2) {
    return n1.name === n2.name ? 0 : n1.name < n2.name ? -1 : 1;
  };

  function resolveLocations(headers, dir, tag) {
    return headers.map(function(symbol) {
      var header = symbol[tag];
      if (header.location) {
        var baseDir = dir ? path.dirname(path.resolve(dir, header.file)) : path.dirname(header.file)
        header = fs.readFileSync(path.resolve(baseDir, header.location), "utf8");
      } else {
        header = header.content;
      }
      symbol[tag] = header;
      return symbol;
    });
  }

  exports.generate = function(tree, options) {
    var nameSpaces = tree.getNamespaces().sort(objComp);
    var dir = path.resolve(process.cwd(), options.dir || "docs");
    if (!fs.existsSync(dir)) {
      wrench.mkdirSyncRecursive(dir, "0777");
    }
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

    var includedDocs = tree.getIncludedDocs();
    includedDocs.forEach(function(id) {
      var baseDir = dir ? path.dirname(path.resolve(dir, id.file)) : path.dirname(id.file)
      id.location = path.resolve(baseDir, id.location);
    });
    var base = {
      namespaces: nameSpaces,
      includeDocs: includedDocs,
      headers: resolveLocations(tree.getHeaders(), dir, "header"),
      footers: resolveLocations(tree.getFooters(), dir, "footer"),
      projectName: tree.getProjectName(),
      github: tree.getGitHub(),
      classes: classes
    };
    fs.writeFileSync(path.resolve(dir, "index.html"), compileIndexTmpl(base));
    nameSpaces.forEach(function(namespace) {
      fs.writeFileSync(path.resolve(dir, normalize(namespace.name) + ".html"), compileNamespacesTmpl(util.merge({
        namespace: namespace
      }, base)));
    });
    classes.forEach(function(clazz) {
      fs.writeFileSync(path.resolve(dir, normalize(clazz.name) + ".html"), compileClassesTmpl(util.merge({
        "class": clazz
      }, base)));
    });
    includedDocs.forEach(function(idFile) {
      fs.writeFileSync(path.resolve(dir, resolveInclude(idFile.location).toString()), importFile.call(base, idFile.location, idFile));
    });
    wrench.copyDirSyncRecursive(path.resolve(__dirname + "/assets"), path.resolve(dir, "assets"))
  };

})();