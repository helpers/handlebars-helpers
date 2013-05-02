(function() {
  module.exports.register = function(Handlebars, options) {
    var Utils, _;

    Utils = require('../utils/utils');
    _ = require('lodash');
    Handlebars.registerHelper("value", function(file, prop) {
      file = Utils.readJSON(file);
      prop = _.pick(file, prop);
      prop = _.pluck(prop);
      return new Handlebars.SafeString(prop);
    });
    Handlebars.registerHelper("property", function(file, prop) {
      file = Utils.readJSON(file);
      prop = _.pick(file, prop);
      return new Handlebars.SafeString(JSON.stringify(prop, null, 2));
    });
    Handlebars.registerHelper("stringify", function(file, props) {
      file = Utils.readJSON(file);
      return new Handlebars.SafeString(JSON.stringify(file, null, 2));
    });
    Handlebars.registerHelper('first', function(array, count) {
      if (Utils.isUndefined(count)) {
        return array[0];
      } else {
        return array.slice(0, count);
      }
    });
    Handlebars.registerHelper('withFirst', function(array, count, options) {
      var item, result;

      if (Utils.isUndefined(count)) {
        options = count;
        return options.fn(array[0]);
      } else {
        array = array.slice(0, count);
        result = '';
        for (item in array) {
          result += options.fn(array[item]);
        }
        return result;
      }
    });
    Handlebars.registerHelper('last', function(array, count) {
      if (Utils.isUndefined(count)) {
        return array[array.length - 1];
      } else {
        return array.slice(-count);
      }
    });
    Handlebars.registerHelper('withLast', function(array, count, options) {
      var item, result;

      if (Utils.isUndefined(count)) {
        options = count;
        return options.fn(array[array.length - 1]);
      } else {
        array = array.slice(-count);
        result = '';
        for (item in array) {
          result += options.fn(array[item]);
        }
        return result;
      }
    });
    Handlebars.registerHelper('after', function(array, count) {
      return array.slice(count);
    });
    Handlebars.registerHelper('withAfter', function(array, count, options) {
      var item, result;

      array = array.slice(count);
      result = '';
      for (item in array) {
        result += options.fn(array[item]);
      }
      return result;
    });
    Handlebars.registerHelper('before', function(array, count) {
      return array.slice(0, -count);
    });
    Handlebars.registerHelper('withBefore', function(array, count, options) {
      var item, result;

      array = array.slice(0, -count);
      result = '';
      for (item in array) {
        result += options.fn(array[item]);
      }
      return result;
    });
    Handlebars.registerHelper('sort', function(array, field) {
      if (Utils.isUndefined(field)) {
        return array.sort();
      } else {
        return array.sort(function(a, b) {
          return a[field] > b[field];
        });
      }
    });
    Handlebars.registerHelper('join', function(array, separator) {
      return array.join(Utils.isUndefined(separator) ? ' ' : separator);
    });
    Handlebars.registerHelper("joinAny", function(items, block) {
      var delimiter, end, i, len, out, start;

      delimiter = block.hash.delimiter || ",";
      start = start = block.hash.start || 0;
      len = (items ? items.length : 0);
      end = block.hash.end || len;
      out = "";
      if (end > len) {
        end = len;
      }
      if ("function" === typeof block) {
        i = start;
        while (i < end) {
          if (i > start) {
            out += delimiter;
          }
          if ("string" === typeof items[i]) {
            out += items[i];
          } else {
            out += block(items[i]);
          }
          i++;
        }
        return out;
      } else {
        return [].concat(items).slice(start, end).join(delimiter);
      }
    });
    Handlebars.registerHelper('withSort', function(array, field, options) {
      var item, result, _i, _len;

      result = '';
      if (Utils.isUndefined(field)) {
        options = field;
        array = array.sort();
        for (_i = 0, _len = array.length; _i < _len; _i++) {
          item = array[_i];
          result += options.fn(item);
        }
      } else {
        array = array.sort(function(a, b) {
          return a[field] > b[field];
        });
        for (item in array) {
          result += options.fn(array[item]);
        }
      }
      return result;
    });
    Handlebars.registerHelper('length', function(array) {
      return array.length;
    });
    Handlebars.registerHelper('lengthEqual', function(array, length, options) {
      if (array.length === length) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    });
    Handlebars.registerHelper('empty', function(array, options) {
      if (array.length <= 0) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    });
    Handlebars.registerHelper('any', function(array, options) {
      if (array.length > 0) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    });
    Handlebars.registerHelper('inArray', function(array, value, options) {
      if (array.indexOf(value) !== -1) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    });
    /*
    Similar to #each helper, but treats array-like objects as arrays 
    (i.e. objects with a `.length` property which is a number)
    rather than objects. This lets us iterate over our Collection's.
    */

    Handlebars.registerHelper("iterate", function(context, options) {
      var data, fn, i, inverse, j, key, ret;

      fn = options.fn;
      inverse = options.inverse;
      i = 0;
      ret = "";
      data = void 0;
      if (options.data) {
        data = Handlebars.createFrame(options.data);
      }
      if (context && typeof context === "object") {
        if (typeof context.length === "number") {
          j = context.length;
          while (i < j) {
            if (data) {
              data.index = i;
            }
            ret = ret + fn(context[i], {
              data: data
            });
            i++;
          }
        } else {
          for (key in context) {
            if (context.hasOwnProperty(key)) {
              if (data) {
                data.key = key;
              }
              ret = ret + fn(context[key], {
                data: data
              });
              i++;
            }
          }
        }
      }
      if (i === 0) {
        ret = inverse(this);
      }
      return ret;
    });
    Handlebars.registerHelper('eachIndex', function(array, options) {
      var index, result, value, _i, _len;

      result = '';
      for (index = _i = 0, _len = array.length; _i < _len; index = ++_i) {
        value = array[index];
        result += options.fn({
          item: value,
          index: index
        });
      }
      return result;
    });
    Handlebars.registerHelper('eachProperty', function(obj, options) {
      var key, result, value;

      result = '';
      for (key in obj) {
        value = obj[key];
        result += options.fn({
          key: key,
          value: value
        });
      }
      return result;
    });
    Handlebars.registerHelper("arrayify", function(data) {
      var result;

      result = data.split(",").map(function(tag) {
        return "\"" + tag + "\"";
      });
      return result;
    });
    return this;
  };

}).call(this);
