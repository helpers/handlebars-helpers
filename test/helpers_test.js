(function() {
  var Handlebars;

  require('should');

  Handlebars = require('handlebars');

  require('../lib/helper-lib').register(Handlebars, {});

}).call(this);
