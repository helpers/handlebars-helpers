(function() {
  var Handlebars, Utils, fs, gist, highlight, jsfiddle, property, stringify, value, _;

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
    Handlebars.registerHelper('property', property);
    Handlebars.registerHelper('value', value);
    Handlebars.registerHelper('stringify', stringify);
    Handlebars.registerHelper("gist", gist);
    Handlebars.registerHelper("highlight", highlight);
    Handlebars.registerHelper("jsfiddle", jsfiddle);
    return this;
  };

}).call(this);
