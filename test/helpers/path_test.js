(function() {
  var Handlebars;

  require('should');

  Handlebars = require('handlebars');

  require('../../lib/helpers/helpers-special').register(Handlebars, {});

}).call(this);
