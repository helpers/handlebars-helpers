(function() {
  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper('is', function(value, test, options) {
      if (value === test) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    });
    Handlebars.registerHelper('isnt', function(value, test, options) {
      if (value !== test) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    });
    Handlebars.registerHelper('gt', function(value, test, options) {
      if (value > test) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    });
    Handlebars.registerHelper('gte', function(value, test, options) {
      if (value >= test) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    });
    Handlebars.registerHelper('lt', function(value, test, options) {
      if (value < test) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    });
    Handlebars.registerHelper('lte', function(value, test, options) {
      if (value <= test) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    });
    Handlebars.registerHelper('or', function(testA, testB, options) {
      if (testA || testB) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    });
    Handlebars.registerHelper('and', function(testA, testB, options) {
      if (testA && testB) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    });
    /*
    Similar to {{#if}} block helper but accepts multiple arguments.
    */

    Handlebars.registerHelper("ifAny", function() {
      var argLength, content, i, success;

      argLength = arguments_.length - 2;
      content = arguments_[argLength + 1];
      success = true;
      i = 0;
      while (i < argLength) {
        if (!arguments_[i]) {
          success = false;
          break;
        }
        i += 1;
      }
      if (success) {
        return content(this);
      } else {
        return content.inverse(this);
      }
    });
    /*
    If Equals
    if_eq this compare=that
    */

    Handlebars.registerHelper("if_eq", function(context, options) {
      if (context === options.hash.compare) {
        return options.fn(this);
      }
      return options.inverse(this);
    });
    /*
    Unless Equals
    unless_eq this compare=that
    */

    Handlebars.registerHelper("unless_eq", function(context, options) {
      if (context === options.hash.compare) {
        return options.inverse(this);
      }
      return options.fn(this);
    });
    /*
    If Greater Than
    if_gt this compare=that
    */

    Handlebars.registerHelper("if_gt", function(context, options) {
      if (context > options.hash.compare) {
        return options.fn(this);
      }
      return options.inverse(this);
    });
    /*
    Unless Greater Than
    unless_gt this compare=that
    */

    Handlebars.registerHelper("unless_gt", function(context, options) {
      if (context > options.hash.compare) {
        return options.inverse(this);
      }
      return options.fn(this);
    });
    /*
    If Less Than
    if_lt this compare=that
    */

    Handlebars.registerHelper("if_lt", function(context, options) {
      if (context < options.hash.compare) {
        return options.fn(this);
      }
      return options.inverse(this);
    });
    /*
    Unless Less Than
    unless_lt this compare=that
    */

    Handlebars.registerHelper("unless_lt", function(context, options) {
      if (context < options.hash.compare) {
        return options.inverse(this);
      }
      return options.fn(this);
    });
    /*
    If Greater Than or Equal To
    if_gteq this compare=that
    */

    Handlebars.registerHelper("if_gteq", function(context, options) {
      if (context >= options.hash.compare) {
        return options.fn(this);
      }
      return options.inverse(this);
    });
    /*
    Unless Greater Than or Equal To
    unless_gteq this compare=that
    */

    Handlebars.registerHelper("unless_gteq", function(context, options) {
      if (context >= options.hash.compare) {
        return options.inverse(this);
      }
      return options.fn(this);
    });
    /*
    If Less Than or Equal To
    if_lteq this compare=that
    */

    Handlebars.registerHelper("if_lteq", function(context, options) {
      if (context <= options.hash.compare) {
        return options.fn(this);
      }
      return options.inverse(this);
    });
    /*
    Unless Less Than or Equal To
    unless_lteq this compare=that
    */

    Handlebars.registerHelper("unless_lteq", function(context, options) {
      if (context <= options.hash.compare) {
        return options.inverse(this);
      }
      return options.fn(this);
    });
    return this;
  };

}).call(this);
