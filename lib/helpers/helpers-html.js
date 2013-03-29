(function() {
  var HTML;

  HTML = {};

  HTML.parseAttributes = function(hash) {
    return Object.keys(hash).map(function(key) {
      return "" + key + "=\"" + hash[key] + "\"";
    }).join(' ');
  };

  Handlebars.registerHelper('ul', function(context, options) {
    return ("<ul " + (HTML.parseAttributes(options.hash)) + ">") + context.map(function(item) {
      return "<li>" + (options.fn(item)) + "</li>";
    }).join('\n') + "</ul>";
  });

  Handlebars.registerHelper('ol', function(context, options) {
    return ("<ol " + (HTML.parseAttributes(options.hash)) + ">") + context.map(function(item) {
      return "<li>" + (options.fn(item)) + "</li>";
    }).join('\n') + "</ol>";
  });

  Handlebars.registerHelper('br', function(count, options) {
    var br, i;

    br = '<br>';
    if (!Utils.isUndefined(count)) {
      i = 0;
      while (i < count - 1) {
        br += '<br>';
        i++;
      }
    }
    return Utils.safeString(br);
  });

}).call(this);
