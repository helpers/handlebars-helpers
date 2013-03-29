(function() {
  var Assemble, Handlebars;

  if (typeof window !== "undefined" && window !== null) {
    Handlebars = window.Handlebars;
    window.Assemble = Assemble = {};
  }

  if (typeof module !== "undefined" && module !== null) {
    Handlebars = require('handlebars');
    module.exports = Assemble = {};
  }

}).call(this);
