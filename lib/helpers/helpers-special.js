(function() {
  var Handlebars, Utils, fs, path;

  Handlebars = require('./helpers').Handlebars;

  Utils = require('../utils/utils');

  fs = require('fs');

  path = require('path');

  Handlebars.registerHelper("jsfiddle", function(id, tabs) {
    var result;

    if (Utils.isUndefined(tabs)) {
      tabs = "result,js,html,css";
    }
    result = "<iframe width=\"100%\" height=\"300\" src=\"http://jsfiddle.net/" + id + "/embedded/" + tabs + "/presentation/\" allowfullscreen=\"allowfullscreen\" frameborder=\"0\"></iframe>";
    return new Handlebars.SafeString(result);
  });

  Handlebars.registerHelper("gist", function(id, file) {
    var result;

    id = Handlebars.Utils.escapeExpression(id);
    if (Utils.isUndefined(file)) {
      file = "";
    }
    result = "<script src=\"https://gist.github.com/" + id + ".js\"></script>";
    return new Handlebars.SafeString(result);
  });

  Handlebars.registerHelper("authors", function(authors) {
    var matches;

    if (Utils.isUndefined(authors)) {
      authors = fs.readFileSync("./AUTHORS", "utf8");
    } else {
      authors = fs.readFileSync(authors, "utf8");
    }
    matches = authors.replace(/(.*?)\s*\((.*)\)/g, "[$1]" + "($2)") || [];
    return new Handlebars.SafeString(matches);
  });

  Handlebars.registerHelper("basename", function(base, ext) {
    var fullName;

    fullName = path.basename(base, ext);
    base = path.basename(base, path.extname(fullName));
    return base;
  });

}).call(this);
