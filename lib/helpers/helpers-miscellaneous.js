(function() {
  var noop, _default;

  module.exports["default"] = _default = function(value, defaultValue) {
    return value != null ? value : defaultValue;
  };

  module.exports.noop = noop = function(options) {
    return options.fn(this);
  };

  /*
  Handlebars.registerHelper 'partial', (name, data) ->
    partial = Assemble.Config.partialsPath + name
    data = if Utils.isUndefined(data) then {} else data
    Handlebars.registerPartial(name, require partial) unless Handlebars.partials[name]?
    Utils.safeString Handlebars.partials[name](data)
  */


  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("default", _default);
    Handlebars.registerHelper("noop", noop);
    return this;
  };

}).call(this);
