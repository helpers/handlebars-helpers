(function() {
  var Handlebars, Utils, defineSection, disqus, formatPhoneNumber, fs, gist, highlight, include, jsfiddle, property, renderSection, stringify, value, _;

  Handlebars = require('../helpers/helpers').Handlebars;

  fs = require('fs');

  Utils = require('../utils/utils');

  _ = require('lodash');

  module.exports.value = value = function(file, prop) {
    file = Utils.readJSON(file);
    prop = _.pick(file, prop);
    prop = _.pluck(prop);
    return Utils.safeString(prop);
  };

  module.exports.property = property = function(file, prop) {
    file = Utils.readJSON(file);
    prop = _.pick(file, prop);
    return Utils.safeString(JSON.stringify(prop, null, 2));
  };

  module.exports.stringify = stringify = function(file, props) {
    file = Utils.readJSON(file);
    return Utils.safeString(JSON.stringify(file, null, 2));
  };

  module.exports.include = include = function(file) {
    return Utils.safeString(Utils.read(file));
  };

  module.exports.section = defineSection = function(section, options) {
    if (Handlebars.sections) {
      Handlebars.sections[section] = options.fn(this);
    }
    return Utils.safeString('');
  };

  module.exports.section = renderSection = function(section, options) {
    var content;

    if (Handlebars.sections && Handlebars.sections[section]) {
      content = Handlebars.sections[section];
    } else {
      content = options.fn(this);
    }
    return Utils.safeString(content);
  };

  module.exports.disqus = disqus = function(slug, options) {
    var result;

    return "";
    result = "<a href=\"http://" + window.location.host + "/blog/" + slug + "#disqus_thread\" data-disqus-identifier=\"/blog/" + slug + "\" ></a>";
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

  module.exports.formatPhoneNumber = formatPhoneNumber = function(phoneNumber) {
    phoneNumber = phoneNumber.toString();
    return "(" + phoneNumber.substr(0, 3) + ") " + phoneNumber.substr(3, 3) + "-" + phoneNumber.substr(6, 4);
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper('property', property);
    Handlebars.registerHelper('stringify', stringify);
    Handlebars.registerHelper('value', value);
    Handlebars.registerHelper("disqus", disqus);
    Handlebars.registerHelper("gist", gist);
    Handlebars.registerHelper("highlight", highlight);
    Handlebars.registerHelper("include", include);
    Handlebars.registerHelper("jsfiddle", jsfiddle);
    Handlebars.registerHelper("defineSection", defineSection);
    Handlebars.registerHelper("renderSection", renderSection);
    Handlebars.registerHelper("formatPhoneNumber", formatPhoneNumber);
    return this;
  };

}).call(this);
