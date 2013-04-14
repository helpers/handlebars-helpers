(function() {
  var Handlebars;

  require('should');

  Handlebars = require('handlebars');

  require('../../lib/helpers/helpers-html').register(Handlebars, {});

}).call(this);
