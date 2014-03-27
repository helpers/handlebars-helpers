/*!
 * handlebars-helpers v0.6.0 <https://github.com/assemble/handlebars-helpers>
 * Copyright (c) 2013-2014, Jon Schlinkert, Brian Woodward, contributors.
 * Source code licensed under the MIT license.

 * Thank you to Elving Rodriquez. Many of the helpers in this library
 * originated in Swag. This library has been super useful because of
 * your hard work!
 *
 * Swag <http://elving.github.com/swag/>
 * Copyright 2012 Elving Rodriguez <http://elving.me/>
 * MIT license <https://raw.github.com/elving/swag/master/LICENSE>
 */


var _ = require('lodash');
var path = require('path');
var file = require('fs-utils');
var matter = require('gray-matter');
var sort = require('sort-object');
var marked = require('marked');
var extras = require('marked-extras');
var url = require('url');
var helpersUtils = require('helpers-utils');

var utils = helpersUtils.Utils;
var Library = helpersUtils.Library;

var Utils = require("../../src/utils/utils");
var Glob = require("../../src/utils/glob");
var Dates = require("../../src/utils/dates");
var HTML = require("../../src/utils/html");
var _indexOf = require( "../../src/utils/lib/indexOf");

var specs = {
  context: function () { return {}; },
  options: { },
  registerHelper: function () { },
  registerFunction: function () { },
  registerHelpers: function () { },
  registerFunctions: function () { },
  Handlebars: {
    safeString: function (str) {
      return utils.safeString(str);
    }
  }
};

var HandlebarsHelpers = function (config) {
  utils.expects(config, specs);
  var Handlebars = config.Handlebars;
  var options = config.options;
	// Source File: ./src/helpers/collections.js


var _indexOf = [].indexOf || function (item) {
  for (var i = 0, l = this.length; i < l; i++) {
    if (i in this && this[i] === item) {
      return i;
    }
  }
  return -1;
};

Library.addHelper('first', function (array, count) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    if (!Utils.isUndefined(count)) {
      count = parseFloat(Utils.result(count));
    }
    if (Utils.isUndefined(count)) {
      return array[0];
    } else {
      return array.slice(0, count);
    }
  } else {
    return Utils.err('{{first}} takes at least one argument (array).');
  }
});

Library.addHelper('withFirst', function (array, count, options) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    if (!Utils.isUndefined(count)) {
      count = parseFloat(Utils.result(count));
    }
    if (Utils.isUndefined(count)) {
      options = count;
      return options.fn(array[0]);
    } else {
      array = array.slice(0, count);
      var result = '';
      for (var item in array) {
        result += options.fn(array[item]);
      }
      return result;
    }
  } else {
    return Utils.err('{{withFirst}} takes at least one argument (array).');
  }
});

Library.addHelper('last', function (array, count) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    if (!Utils.isUndefined(count)) {
      count = parseFloat(Utils.result(count));
    }
    if (Utils.isUndefined(count)) {
      return array[array.length - 1];
    } else {
      return array.slice(-count);
    }
  } else {
    return Utils.err('{{last}} takes at least one argument (array).');
  }
});

Library.addHelper('withLast', function (array, count, options) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    if (!Utils.isUndefined(count)) {
      count = parseFloat(Utils.result(count));
    }
    if (Utils.isUndefined(count)) {
      options = count;
      return options.fn(array[array.length - 1]);
    } else {
      array = array.slice(-count);
      var result = '';
      for (var item in array) {
        result += options.fn(array[item]);
      }
      return result;
    }
  } else {
    return Utils.err('{{withLast}} takes at least one argument (array).');
  }
});

Library.addHelper('after', function (array, count) {
  if (!((Utils.isUndefined(array)) && (Utils.isUndefined(count)))) {
    array = Utils.result(array);
    if (!Utils.isUndefined(count)) {
      count = parseFloat(Utils.result(count));
    }
    return array.slice(count);
  } else {
    return Utils.err('{{after}} takes two arguments (array, number).');
  }
});

Library.addHelper('withAfter', function (array, count, options) {
  if (!((Utils.isUndefined(array)) && (Utils.isUndefined(count)))) {
    array = Utils.result(array);
    if (!Utils.isUndefined(count)) {
      count = parseFloat(Utils.result(count));
    }
    array = array.slice(count);
    var result = '';
    for (var item in array) {
      result += options.fn(array[item]);
    }
    return result;
  } else {
    return Utils.err('{{withAfter}} takes two arguments (array, number).');
  }
});

Library.addHelper('before', function (array, count) {
  if (!((Utils.isUndefined(array)) && (Utils.isUndefined(count)))) {
    array = Utils.result(array);
    if (!Utils.isUndefined(count)) {
      count = parseFloat(Utils.result(count));
    }
    return array.slice(0, -count);
  } else {
    return Utils.err('{{before}} takes two arguments (array, number).');
  }
});

Library.addHelper('withBefore', function (array, count, options) {
  if (!((Utils.isUndefined(array)) && (Utils.isUndefined(count)))) {
    array = Utils.result(array);
    if (!Utils.isUndefined(count)) {
      count = parseFloat(Utils.result(count));
    }
    array = array.slice(0, -count);
    var result = '';
    for (var item in array) {
      result += options.fn(array[item]);
    }
    return result;
  } else {
    return Utils.err('{{withBefore}} takes two arguments (array, number).');
  }
});

Library.addHelper('join', function (array, separator) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    if (!Utils.isUndefined(separator)) {
      separator = Utils.result(separator);
    }
    return array.join(Utils.isUndefined(separator) ? ' ' : separator);
  } else {
    return Utils.err('{{join}} takes at least one argument (array).');
  }
});

Library.addHelper('sort', function (array, field) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    if (Utils.isUndefined(field)) {
      return array.sort();
    } else {
      field = Utils.result(field);
      return array.sort(function (a, b) {
        return a[field] > b[field];
      });
    }
  } else {
    return Utils.err('{{sort}} takes at least one argument (array).');
  }
});

Library.addHelper('withSort', function (array, field, options) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    var result = '';
    if (Utils.isUndefined(field)) {
      options = field;
      array = array.sort();
      for (var i = 0, len = array.length; i < len; i++) {
        var item = array[i];
        result += options.fn(item);
      }
    } else {
      field = Utils.result(field);
      array = array.sort(function (a, b) {
        return a[field] > b[field];
      });
      for (item in array) {
        result += options.fn(array[item]);
      }
    }
    return result;
  } else {
    return Utils.err('{{withSort}} takes at least one argument (array).');
  }
});

Library.addHelper('length', function (array) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    return array.length;
  } else {
    return Utils.err('{{length}} takes one argument (array).');
  }
});

Library.addHelper('lengthEqual', function (array, length, options) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    if (!Utils.isUndefined(length)) {
      length = parseFloat(Utils.result(length));
    }
    if (array.length === length) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{lengthEqual}} takes two arguments (array, number).');
  }
});

Library.addHelper('empty', function (array, options) {
  if (!Utils.isHandlebarsSpecific(array)) {
    array = Utils.result(array);
    if (!array || array.length <= 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{empty}} takes one argument (array).');
  }
});

Library.addHelper('any', function (array, options) {
  if (!Utils.isHandlebarsSpecific(array)) {
    array = Utils.result(array);
    if (array && array.length > 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{any}} takes one argument (array).');
  }
});

Library.addHelper('inArray', function (array, value, options) {
  if (!((Utils.isUndefined(array)) && (Utils.isUndefined(value)))) {
    array = Utils.result(array);
    value = Utils.result(value);
    if (_indexOf.call(array, value) >= 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{inArray}} takes two arguments (array, string|number).');
  }
});

Library.addHelper('eachIndex', function (array, options) {
  if (!Utils.isUndefined(array)) {
    array = Utils.result(array);
    var result = '';
    for (var index = i = 0, len = array.length; i < len; index = ++i) {
      var value = array[index];
      result += options.fn({
        item: value,
        index: index
      });
    }
    return result;
  } else {
    return Utils.err('{{eachIndex}} takes one argument (array).');
  }
});

Library.addHelper('eachProperty', function (obj, options) {
  if (!Utils.isUndefined(obj)) {
    obj = Utils.result(obj);
    var result = '';
    for (var key in obj) {
      var value = obj[key];
      result += options.fn({
        key: key,
        value: value
      });
    }
    return result;
  } else {
    return Utils.err('{{eachProperty}} takes one argument (object).');
  }
});

	// Source File: ./src/helpers/comparisons.js


Library.addHelper('is', function (value, test, options) {
  if (!((Utils.isHandlebarsSpecific(value)) && (Utils.isHandlebarsSpecific(test)))) {
    value = Utils.result(value);
    test = Utils.result(test);
    if (value && value === test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{is}} takes two arguments (string|number, string|number).');
  }
});

Library.addHelper('isnt', function (value, test, options) {
  if (!((Utils.isHandlebarsSpecific(value)) && (Utils.isHandlebarsSpecific(test)))) {
    value = Utils.result(value);
    test = Utils.result(test);
    if (!value || value !== test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{isnt}} takes two arguments (string|number, string|number).');
  }
});

Library.addHelper('gt', function (value, test, options) {
  if (!((Utils.isHandlebarsSpecific(value)) && (Utils.isHandlebarsSpecific(test)))) {
    value = Utils.result(value);
    test = Utils.result(test);
    if (value > test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{gt}} takes two arguments (string|number, string|number).');
  }
});

Library.addHelper('gte', function (value, test, options) {
  if (!((Utils.isHandlebarsSpecific(value)) && (Utils.isHandlebarsSpecific(test)))) {
    value = Utils.result(value);
    test = Utils.result(test);
    if (value >= test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{gte}} takes two arguments (string|number, string|number).');
  }
});

Library.addHelper('lt', function (value, test, options) {
  if (!((Utils.isHandlebarsSpecific(value)) && (Utils.isHandlebarsSpecific(test)))) {
    value = Utils.result(value);
    test = Utils.result(test);
    if (value < test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{lt}} takes two arguments (string|number, string|number).');
  }
});

Library.addHelper('lte', function (value, test, options) {
  if (!((Utils.isHandlebarsSpecific(value)) && (Utils.isHandlebarsSpecific(test)))) {
    value = Utils.result(value);
    test = Utils.result(test);
    if (value <= test) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{lte}} takes two arguments (string|number, string|number).');
  }
});

Library.addHelper('or', function (testA, testB, options) {
  if (!((Utils.isHandlebarsSpecific(testA)) && (Utils.isHandlebarsSpecific(testB)))) {
    testA = Utils.result(testA);
    testB = Utils.result(testB);
    if (testA || testB) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{or}} takes two arguments (string|number, string|number).');
  }
});

Library.addHelper('and', function (testA, testB, options) {
  if (!((Utils.isHandlebarsSpecific(testA)) && (Utils.isHandlebarsSpecific(testB)))) {
    testA = Utils.result(testA);
    testB = Utils.result(testB);
    if (testA && testB) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  } else {
    return Utils.err('{{and}} takes two arguments (string|number, string|number).');
  }
});



	// Source File: ./src/helpers/dates.js

/**
 * Handlebars Library.addHelper('<http://github.com/assemble/handlebars-Library.addHelper('
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


Library.addHelper('formatDate', function (date, format) {
  if (!Utils.isUndefined(date)) {
    date = Utils.result(date);
    format = Utils.result(format);
    date = new Date(date);
    return Dates.format(date, format);
  } else {
    return Utils.err('{{formatDate}} takes two arguments (string|number|date, string).');
  }
});

Library.addHelper('now', function (format) {
  if (!Utils.isUndefined(format)) {
    format = Utils.result(format);
  }
  var date = new Date();
  if (Utils.isUndefined(format)) {
    return date;
  } else {
    return Dates.format(date, format);
  }
});

Library.addHelper('timeago', function (date) {
  if (!Utils.isUndefined(date)) {
    date = Utils.result(date);
    date = new Date(date);
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
      return "" + interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return "" + interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return "" + interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return "" + interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return "" + interval + " minutes ago";
    }
    if (Math.floor(seconds) === 0) {
      return 'Just now';
    } else {
      return Math.floor(seconds) + ' seconds ago';
    }
  } else {
    return Utils.err('{{timeago}} takes one argument (string|number|date).');
  }
});


	// Source File: ./src/helpers/html.js

/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


Library.addHelper('ul', function (context, options) {
  return ("<ul " + (HTML.parseAttributes(options.hash)) + ">") + context.map(function (item) {
    return "<li>" + (options.fn(Utils.result(item))) + "</li>";
  }).join('\n') + "</ul>";
});

Library.addHelper('ol', function (context, options) {
  return ("<ol " + (HTML.parseAttributes(options.hash)) + ">") + context.map(function (item) {
    return "<li>" + (options.fn(Utils.result(item))) + "</li>";
  }).join('\n') + "</ol>";
});

Library.addHelper('br', function (count, options) {
  var br = '<br>';
  if (!Utils.isUndefined(count)) {
    var i = 0;
    count = Utils.result(count);
    while (i < (parseFloat(count)) - 1) {
      br += '<br>';
      i++;
    }
  }
  return Utils.safeString(br);
});


	// Source File: ./src/helpers/inflections.js

/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */
var __indexOf = [].indexOf || function (item) {
  for (var i = 0, l = this.length; i < l; i++) {
    if (i in this && this[i] === item) {
      return i;
    }
  }
  return -1;
};


Library.addHelper('inflect', function (count, singular, plural, include) {
  if (!((Utils.isUndefined(count)) && (Utils.isUndefined(singular)) && (Utils.isUndefined(plural)))) {
    count = parseFloat(Utils.result(count));
    singular = Utils.result(singular);
    plural = Utils.result(plural);
    var word = count > 1 || count === 0 ? plural : singular;
    if (Utils.isUndefined(include) || include === false) {
      return word;
    } else {
      return "" + count + " " + word;
    }
  } else {
    return Utils.err('{{inflect}} takes at least three arguments (number, string, string).');
  }
});

Library.addHelper('ordinalize', function (value) {
  var ref;
  if (!Utils.isUndefined(value)) {
    value = parseFloat(Utils.result(value));
    var normal = Math.abs(Math.round(value));
    if (ref = normal % 100, __indexOf.call([11, 12, 13], ref) >= 0) {
      return "" + value + "th";
    } else {
      switch (normal % 10) {
      case 1:
        return "" + value + "st";
      case 2:
        return "" + value + "nd";
      case 3:
        return "" + value + "rd";
      default:
        return "" + value + "th";
      }
    }
  } else {
    return Utils.err('{{ordinalize}} takes one arguments (number).');
  }
});

	// Source File: ./src/helpers/logging.js

/**
 * Handlebars Library.addHelper('<http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


Library.addHelper('log', function (value) {
  if (!Utils.isUndefined(value)) {
    value = Utils.result(value);
    return console.log(value);
  } else {
    return Utils.err('{{log}} takes one arguments (string|number|boolean|array|object).');
  }
});

Library.addHelper('debug', function (value) {
  if (!Utils.isUndefined(value)) {
    value = Utils.result(value);
  }
  console.log('Context: ', this);
  if (!Utils.isUndefined(value)) {
    console.log('Value: ', value);
  }
  return console.log('-----------------------------------------------');
});

	// Source File: ./src/helpers/markdown.js

/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */

  options.marked = options.marked || {};

  // Initialize `marked-extras`
  extras.init(options.marked);

  // Extend defaults from `marked-extras` with Gruntfile options
  var markedOpts = _.extend({}, extras.markedDefaults, options.marked);

  // Set marked.js options
  marked.setOptions(markedOpts);

  Library.addHelper('md', function (patterns, context, opts) {
    opts = _.extend({}, options, opts || {});

    _.extend(opts, opts.hash || {});

    var filepath = this;
    var str = file.readFileSync(filepath);
    var page = matter(str);
    var content = page.content;
    var metadata = page.context;

    var data = Handlebars.createFrame({filepath: filepath});

    // Prepend or append any content in the given partial to the output
    _.extend({}, markedOpts, context.data.root.markedOpts || {});

    var append = '';
    var prepend = '';

    if(markedOpts.prepend) {
      prepend = Handlebars.partials[markedOpts.prepend];
    }
    if(markedOpts.append) {
      append = Handlebars.partials[markedOpts.append];
    }

    _.defaults(metadata, context.data.root);
    var sections = [prepend, content, append].join('\n\n');

    var fn = Handlebars.compile(sections);
    var output = fn(metadata, {data: data});

    return new Handlebars.SafeString(marked(output));
  });

  Library.addHelper('markdown', function (options) {
    return marked(options.fn(this));
  });

	// Source File: ./src/helpers/math.js

/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */



Library.addHelper('add', function (value, addition) {
  if (!((Utils.isUndefined(value)) && (Utils.isUndefined(addition)))) {
    value = parseFloat(Utils.result(value));
    addition = parseFloat(Utils.result(addition));
    return value + addition;
  } else {
    return Utils.err('{{add}} takes two arguments (number, number).');
  }
});

Library.addHelper('subtract', function (value, substraction) {
  if (!((Utils.isUndefined(value)) && (Utils.isUndefined(substraction)))) {
    value = parseFloat(Utils.result(value));
    substraction = parseFloat(Utils.result(substraction));
    return value - substraction;
  } else {
    return Utils.err('{{subtract}} takes two arguments (number, number).');
  }
});

Library.addHelper('divide', function (value, divisor) {
  if (!((Utils.isUndefined(value)) && (Utils.isUndefined(divisor)))) {
    value = parseFloat(Utils.result(value));
    divisor = parseFloat(Utils.result(divisor));
    return value / divisor;
  } else {
    return Utils.err('{{divide}} takes two arguments (number, number).');
  }
});

Library.addHelper('multiply', function (value, multiplier) {
  if (!((Utils.isUndefined(value)) && (Utils.isUndefined(multiplier)))) {
    value = parseFloat(Utils.result(value));
    multiplier = parseFloat(Utils.result(multiplier));
    return value * multiplier;
  } else {
    return Utils.err('{{multiply}} takes two arguments (number, number).');
  }
});

Library.addHelper('floor', function (value) {
  if (!(Utils.isUndefined(value))) {
    value = parseFloat(Utils.result(value));
    return Math.floor(value);
  } else {
    return Utils.err('{{floor}} takes one argument (number).');
  }
});

Library.addHelper('ceil', function (value) {
  if (!(Utils.isUndefined(value))) {
    value = parseFloat(Utils.result(value));
    return Math.ceil(value);
  } else {
    return Utils.err('{{ceil}} takes one argument (number).');
  }
});

Library.addHelper('round', function (value) {
  if (!(Utils.isUndefined(value))) {
    value = parseFloat(Utils.result(value));
    return Math.round(value);
  } else {
    return Utils.err('{{round}} takes one argument (number).');
  }
});

Library.addHelper('remainder', function (first, second) {
  if (!((Utils.isUndefined(first)) && (Utils.isUndefined(second)))) {
    first = parseFloat(Utils.result(first));
    second = parseFloat(Utils.result(second));
    return first % second;
  } else {
    return Utils.err('{{remainder}} takes two arguments (number, number).');
  }
});

	// Source File: ./src/helpers/miscellaneous.js

/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */

Library.addHelper('default', function (value, defaultValue) {
  if (!((Utils.isHandlebarsSpecific(value)) && (Utils.isUndefined(defaultValue)))) {
    value = Utils.result(value);
    defaultValue = Utils.result(defaultValue);
    return value || defaultValue;
  } else {
    return Utils.err('{{default}} takes two arguments (string|number, string|number).');
  }
});

if (typeof Ember === 'undefined' || Ember === null) {
  Library.addHelper('partial', function (name, data, template) {
    if (!(Utils.isUndefined(name))) {

      name = Utils.result(name);
      data = Utils.result(data);


      var path = Library.Config.partialsPath + name;
      if (!Utils.isUndefined(template)) {
        template = Utils.result(template);
      }


      if (Library.Handlebars.partials[name] == null) {
        if (!Utils.isUndefined(template)) {
          if (Utils.isString(template)) {
            template = Library.Handlebars.compile(template);
          }
          Library.Handlebars.registerPartial(name, template);
        } else if ((typeof define !== 'undefined' && define !== null) && (Utils.isFunc(define)) && define.amd) {

          if (!Library.Config.precompiledTemplates) {
            path = '!text' + path;
          }

          require([path], function (template) {
            if (Utils.isString(template)) {
              template = Library.Handlebars.compile(template);
            }
            return Library.Handlebars.registerPartial(name, template);
          });

        } else if (typeof require !== 'undefined' && require !== null) {
          template = require(path);
          if (Utils.isString(template)) {
            template = Library.Handlebars.compile(template);
          }
          Library.Handlebars.registerPartial(name, template);
        } else {
          Utils.err('{{partial}} no amd or commonjs module support found.');
        }
      }

      return Utils.safeString(Library.Handlebars.partials[name](data));
    } else {
      return Utils.err('{{partial}} takes at least one argument (string).');
    }
  });
}

	// Source File: ./src/helpers/numbers.js

/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


  /**
   * {{addCommas}}
   *
   * Add commas to numbers
   * @param {[type]} number [description]
   */
  Library.addHelper('addCommas', function (number) {
    return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  });

 /**
  * {{formatPhoneNumber number}}
  * Output a formatted phone number
  * @author: http://bit.ly/QlPmPr
  * @param  {Number} phoneNumber [8005551212]
  * @return {Number}             [(800) 555-1212]
  */
  Library.addHelper('formatPhoneNumber', function (num) {
    num = num.toString();
    return "(" + num.substr(0, 3) + ") " + num.substr(3, 3) + "-" + num.substr(6, 4);
  });

  /**
   * {{random}}
   * Generate a random number between two values
   * @author Tim Douglas <https://github.com/timdouglas>
   * @param  {[type]} min [description]
   * @param  {[type]} max [description]
   * @return {[type]}     [description]
   */
  Library.addHelper('random', function (min, max) {
    return _.random(min, max);
  });

  /**
   * {{toAbbr}}
   *
   * Abbreviate numbers
   * @param  {[type]} number [description]
   * @param  {[type]} digits [description]
   * @return {[type]}        [description]
   */
  Library.addHelper('toAbbr', function (number, digits) {
    if (Utils.isUndefined(digits)) {
      digits = 2;
    }
    // @default: 2 decimal places => 100, 3 => 1000, etc.
    digits = Math.pow(10, digits);
    var abbr = ["k", "m", "b", "t"];
    var i = abbr.length - 1;
    while (i >= 0) {
      var size = Math.pow(10, (i + 1) * 3);
      if (size <= number) {
        number = Math.round(number * digits / size) / digits;
        // Special case where we round up to the next abbreviation
        if ((number === 1000) && (i < abbr.length - 1)) {
          number = 1;
          i++;
        }
        number += abbr[i];
        break;
      }
      i--;
    }
    return number;
  });

  Library.addHelper('toExponential', function (number, fractions) {
    if (Utils.isUndefined(fractions)) {
      fractions = 0;
    }
    return number.toExponential(fractions);
  });

  Library.addHelper('toFixed', function (number, digits) {
    if (Utils.isUndefined(digits)) {
      digits = 0;
    }
    return number.toFixed(digits);
  });

  Library.addHelper('toFloat', function (number) {
    return parseFloat(number);
  });

  Library.addHelper('toInt', function (number) {
    return parseInt(number, 10);
  });

  Library.addHelper('toPrecision', function (number, precision) {
    if (Utils.isUndefined(precision)) {
      precision = 1;
    }
    return number.toPrecision(precision);
  });

	// Source File: ./src/helpers/strings.js

/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


  /**
   * {{capitalizeFirst}}
   * Capitalize first word in a sentence
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  Library.addHelper('capitalizeFirst', function (str) {
    if(str && typeof str === "string") {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  });

  /**
   * {{capitalizeEach}}
   * Capitalize each word in a sentence
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  Library.addHelper('capitalizeEach', function (str) {
    if(str && typeof str === "string") {
      return str.replace(/\w\S*/g, function (word) {
        return word.charAt(0).toUpperCase() + word.substr(1);
      });
    }
  });

  /**
   * {{center}}
   * Center a string using non-breaking spaces
   * @param  {[type]} str    [description]
   * @param  {[type]} spaces [description]
   * @return {[type]}        [description]
   */
  Library.addHelper('center', function (str, spaces) {
    if(str && typeof str === "string") {
      var space = '';
      var i = 0;
      while (i < spaces) {
        space += '&nbsp;';
        i++;
      }
      return "" + space + str + space;
    }
  });

  /**
   * {{dashify}}
   * Replace periods in string with hyphens.
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  Library.addHelper('dashify', function (str) {
    if(str && typeof str === "string") {
      return str.split(".").join("-");
    }
  });

  /**
   * {{hyphenate}}
   * Replace spaces in string with hyphens.
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  Library.addHelper('hyphenate', function (str) {
    if(str && typeof str === "string") {
      return str.split(" ").join("-");
    }
  });

  /**
   * {{lowercase}}
   * Make all letters in the string lowercase
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  Library.addHelper('lowercase', function (str) {
    if(str && typeof str === "string") {
      return str.toLowerCase();
    }
  });

  /**
   * {{plusify}}
   * Replace spaces in string with pluses.
   * @author: Stephen Way <https://github.com/stephenway>
   * @param  {[type]} str The input string
   * @return {[type]}     Input string with spaces replaced by plus signs
   */
  Library.addHelper('plusify', function (str) {
    if (str && typeof str === 'string') {
      return str.split(' ').join('+');
    }
  });

  /**
   * {{safeString}}
   * Output a Handlebars safeString
   * @param  {[type]} str [description]
   * @return {[type]}       [description]
   */
  Library.addHelper('safeString', function (str) {
    if(str && typeof str === "string") {
      return new Utils.safeString(str);
    }
  });

  /**
   * {{sentence}}
   * Sentence case
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  Library.addHelper('sentence', function (str) {
    if(str && typeof str === "string") {
      return str.replace(/((?:\S[^\.\?\!]*)[\.\?\!]*)/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }
  });

  /**
   * {{titleize}}
   * Title case. "This is Title Case"
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  Library.addHelper('titleize', function (str) {
    if(str && typeof str === "string") {
      var title = str.replace(/[ \-_]+/g, ' ');
      var words = title.match(/\w+/g);
      var capitalize = function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      };
      return ((function () {
        var i, len, results;
        results = [];
        for (i = 0, len = words.length; i < len; i++) {
          var word = words[i];
          results.push(capitalize(word));
        }
        return results;
      })()).join(' ');
    }
  });

  Library.addHelper('uppercase', function (options) {
    if(options && typeof options === "string") {
      return options.toUpperCase();
    } else if(options && typeof options === "object") {
      return options.fn(this).toUpperCase();
    }
  });

  Library.addHelper('reverse', function (str) {
    if(str && typeof str === "string") {
      return str.split('').reverse().join('');
    }
  });

  /**
   * {{count}}
   * Return the number of occurrances of a string, within a string
   * @author: Jon Schlinkert <http://github.com/jonschlinkert>
   * @param  {String} str       The haystack
   * @param  {String} substring The needle
   * @return {Number}           The number of times the needle is found in the haystack.
   */
  Library.addHelper('count', function (str, substring) {
    if(str && typeof str === "string") {
      var n = 0;
      var pos = 0;
      var l = substring.length;
      while (true) {
        pos = str.indexOf(substring, pos);
        if (pos > -1) {
          n++;
          pos += l;
        } else {
          break;
        }
      }
      return n;
    }
  });

  /**
   * {{replace}}
   * Replace occurrences of string "A" with string "B"
   * @author: Jon Schlinkert <http://github.com/jonschlinkert>
   * @param  {[type]} str [description]
   * @param  {[type]} a   [description]
   * @param  {[type]} b   [description]
   * @return {[type]}     [description]
   */
  Library.addHelper('replace', function (str, a, b) {
    if(str && typeof str === "string") {
      return str.split(a).join(b);
    }
  });

  /**
   * {{ellipsis}}
   * @author: Jon Schlinkert <http://github.com/jonschlinkert>
   * Truncate the input string and removes all HTML tags
   * @param  {String} str      The input string.
   * @param  {Number} limit    The number of characters to limit the string.
   * @param  {String} append   The string to append if charaters are omitted.
   * @return {String}          The truncated string.
   */
  Library.addHelper('ellipsis', function (str, limit, append) {
    if (Utils.isUndefined(append)) {
      append = '';
    }
    var sanitized = str.replace(/(<([^>]+)>)/g, '');
    if (sanitized.length > limit) {
      return sanitized.substr(0, limit - append.length) + append;
    } else {
      return sanitized;
    }
  });

  /**
   * {{truncate}}
   * Truncates a string given a specified `length`,
   * providing a custom string to denote an `omission`.
   * @param  {[type]} str      [description]
   * @param  {[type]} length   [description]
   * @param  {[type]} omission [description]
   * @return {[type]}          [description]
   */
  Library.addHelper('truncate', function (str, limit, omission) {
    if (Utils.isUndefined(omission)) {
      omission = '';
    }
    if (str.length > limit) {
      return str.substring(0, limit - omission.length) + omission;
    } else {
      return str;
    }
  });

  /**
   * {{startsWith}}
   * @author: Dan Fox <http://github.com/iamdanfox>
   *
   * Tests whether a string begins with the given prefix.
   * Behaves sensibly if the string is null.
   * @param  {[type]} prefix     [description]
   * @param  {[type]} testString [description]
   * @param  {[type]} options    [description]
   * @return {[type]}            [description]
   *
   * @example:
   *   {{#startsWith "Goodbye" "Hello, world!"}}
   *     Whoops
   *   {{else}}
   *     Bro, do you even hello world?
   *   {{/startsWith}}
   */
  Library.addHelper('startsWith', function (prefix, str, options) {
    if ((str != null ? str.indexOf(prefix) : void 0) === 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  });


  Library.registerHelpers(config.Handlebars);
};

