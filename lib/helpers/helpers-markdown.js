(function() {
  var Handlebars, Utils, isServer, markdown;

  Handlebars = require('./helpers').Handlebars;

  Utils = require('../utils/utils');

  markdown = require('../utils/markdown').Markdown({
    gfm: true,
    highlight: "auto"
  });

  isServer = typeof process !== 'undefined';

  /*
  Markdown
  
  Markdown helper used to write markdown inside and
  rendered the markdown inline with the HTML
  
  Usage:
  
  {{#markdown}}
  # This is a title.
  {{/markdown}}
  
  Renders to:
  <h1>This is a title </h1>
  */


  Handlebars.registerHelper("markdown", function(options) {
    var content;

    content = options.fn(this);
    return markdown.convert(content);
  });

  if (isServer) {
    /*
    Markdown helper used to read in a file and inject
    the rendered markdown into the HTML.
    
    Usage:
    
    {{md ../path/to/file.md}}
    */

    Handlebars.registerHelper("md", function(path) {
      var content;

      content = markdown.read(path);
      return content;
    });
  }

}).call(this);
