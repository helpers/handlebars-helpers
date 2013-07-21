/*! comparison helpers
*/


(function() {
  var gt, gte, ifAny, if_eq, if_gt, if_gteq, if_lt, if_lteq, lt, lte, unless_eq, unless_gt, unless_gteq, unless_lt, unless_lteq, _and, _is, _isnt, _or;

  module.exports.and = _and = function(testA, testB, options) {
    if (testA && testB) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  };

  module.exports.gt = gt = function(value, test, options) {
    if (value > test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  };

  module.exports.gte = gte = function(value, test, options) {
    if (value >= test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  };

  module.exports.is = _is = function(value, test, options) {
    if (value === test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  };

  module.exports.isnt = _isnt = function(value, test, options) {
    if (value !== test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  };

  module.exports.lt = lt = function(value, test, options) {
    if (value < test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  };

  module.exports.lte = lte = function(value, test, options) {
    if (value <= test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  };

  module.exports.or = _or = function(testA, testB, options) {
    if (testA || testB) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  };

  module.exports.if_eq = if_eq = function(context, options) {
    if (context === options.hash.compare) {
      return options.fn(this);
    }
    return options.inverse(this);
  };

  module.exports.unless_eq = unless_eq = function(context, options) {
    if (context === options.hash.compare) {
      return options.inverse(this);
    }
    return options.fn(this);
  };

  module.exports.if_gt = if_gt = function(context, options) {
    if (context > options.hash.compare) {
      return options.fn(this);
    }
    return options.inverse(this);
  };

  module.exports.unless_gt = unless_gt = function(context, options) {
    if (context > options.hash.compare) {
      return options.inverse(this);
    }
    return options.fn(this);
  };

  module.exports.if_lt = if_lt = function(context, options) {
    if (context < options.hash.compare) {
      return options.fn(this);
    }
    return options.inverse(this);
  };

  module.exports.unless_lt = unless_lt = function(context, options) {
    if (context < options.hash.compare) {
      return options.inverse(this);
    }
    return options.fn(this);
  };

  module.exports.if_gteq = if_gteq = function(context, options) {
    if (context >= options.hash.compare) {
      return options.fn(this);
    }
    return options.inverse(this);
  };

  module.exports.unless_gteq = unless_gteq = function(context, options) {
    if (context >= options.hash.compare) {
      return options.inverse(this);
    }
    return options.fn(this);
  };

  module.exports.if_lteq = if_lteq = function(context, options) {
    if (context <= options.hash.compare) {
      return options.fn(this);
    }
    return options.inverse(this);
  };

  module.exports.unless_lteq = unless_lteq = function(context, options) {
    if (context <= options.hash.compare) {
      return options.inverse(this);
    }
    return options.fn(this);
  };

  module.exports.ifAny = ifAny = function() {
    var argLength, content, i, success;

    argLength = arguments.length - 2;
    content = arguments[argLength + 1];
    success = true;
    i = 0;
    while (i < argLength) {
      if (!arguments[i]) {
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
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("and", _and);
    Handlebars.registerHelper("gt", gt);
    Handlebars.registerHelper("gte", gte);
    Handlebars.registerHelper("if_eq", if_eq);
    Handlebars.registerHelper("if_gt", if_gt);
    Handlebars.registerHelper("if_gteq", if_gteq);
    Handlebars.registerHelper("if_lt", if_lt);
    Handlebars.registerHelper("if_lteq", if_lteq);
    Handlebars.registerHelper("ifAny", ifAny);
    Handlebars.registerHelper("is", _is);
    Handlebars.registerHelper("isnt", _isnt);
    Handlebars.registerHelper("lt", lt);
    Handlebars.registerHelper("lte", lte);
    Handlebars.registerHelper("or", _or);
    Handlebars.registerHelper("unless_eq", unless_eq);
    Handlebars.registerHelper("unless_gt", unless_gt);
    Handlebars.registerHelper("unless_gteq", unless_gteq);
    Handlebars.registerHelper("unless_lt", unless_lt);
    Handlebars.registerHelper("unless_lteq", unless_lteq);
    return this;
  };

}).call(this);
