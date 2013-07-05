/*! collection helpers
*/


(function() {
  var Handlebars, Utils, after, any, arrayify, before, eachIndex, eachProperty, each_with_classes, empty, first, foreach, inArray, iterate, join, joinAny, last, length, lengthEqual, sort, withAfter, withBefore, withFirst, withLast, withSort, _;

  Handlebars = require('../helpers/helpers').Handlebars;

  Utils = require('../utils/utils');

  _ = require('lodash');

  module.exports.first = first = function(array, count) {
    if (Utils.isUndefined(count)) {
      return array[0];
    } else {
      return array.slice(0, count);
    }
  };

  module.exports.withFirst = withFirst = function(array, count, options) {
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
  };

  module.exports.last = last = function(array, count) {
    if (Utils.isUndefined(count)) {
      return array[array.length - 1];
    } else {
      return array.slice(-count);
    }
  };

  module.exports.withLast = withLast = function(array, count, options) {
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
  };

  module.exports.after = after = function(array, count) {
    return array.slice(count);
  };

  module.exports.withAfter = withAfter = function(array, count, options) {
    var item, result;

    array = array.slice(count);
    result = '';
    for (item in array) {
      result += options.fn(array[item]);
    }
    return result;
  };

  module.exports.before = before = function(array, count) {
    return array.slice(0, -count);
  };

  module.exports.withBefore = withBefore = function(array, count, options) {
    var item, result;

    array = array.slice(0, -count);
    result = '';
    for (item in array) {
      result += options.fn(array[item]);
    }
    return result;
  };

  module.exports.join = join = function(array, separator) {
    return array.join(Utils.isUndefined(separator) ? ' ' : separator);
  };

  module.exports.joinAny = joinAny = function(items, block) {
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
  };

  module.exports.sort = sort = function(array, field) {
    if (Utils.isUndefined(field)) {
      return array.sort();
    } else {
      return array.sort(function(a, b) {
        return a[field] > b[field];
      });
    }
  };

  module.exports.withSort = withSort = function(array, field, options) {
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
        if(a[field] > b[field]){
          return 1;
        }else if (a[field] < b[field]) {
          return -1;
        }
        return 0;
      });
      for (item in array) {
        result += options.fn(array[item]);
      }
    }
    return result;
  };

  module.exports.length = length = function(array) {
    return array.length;
  };

  module.exports.lengthEqual = lengthEqual = function(array, length, options) {
    if (array.length === length) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  };

  module.exports.empty = empty = function(array, options) {
    if (array.length <= 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  };

  module.exports.any = any = function(array, options) {
    if (array.length > 0) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  };

  module.exports.inArray = inArray = function(array, value, options) {
    if (array.indexOf(value) !== -1) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
  };

  module.exports.iterate = iterate = function(context, options) {
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
  };

  module.exports.foreach = foreach = function(array, fn) {
    var buffer, i, item, j, total;

    total = array.length;
    buffer = "";
    i = 0;
    j = total;
    while (i < j) {
      item = array[i];
      item["_index"] = i + 1;
      item["_total"] = total;
      item["_isFirst"] = i === 0;
      item["_isLast"] = i === (total - 1);
      buffer += fn.fn(item);
      i++;
    }
    return buffer;
  };

  module.exports.each_with_classes = each_with_classes = function(array, fn) {
    var buffer, i, item, j;

    buffer = "";
    i = 0;
    j = array.length;
    while (i < j) {
      item = array[i];
      item.item_position = "";
      if (i === 0) {
        item.item_position = " " + fn.hash.prefix + "-first";
      }
      if (i === (array.length - 1)) {
        item.item_position += " " + fn.hash.prefix + "-last";
      }
      item.item_alt = (i % 2 ? fn.hash.prefix + "-alt" : "");
      item.item_index = i;
      buffer += fn(item);
      i++;
    }
    return buffer;
  };

  module.exports.eachIndex = eachIndex = function(array, options) {
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
  };

  module.exports.eachProperty = eachProperty = function(obj, options) {
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
  };

  module.exports.arrayify = arrayify = function(data) {
    var result;

    result = data.split(",").map(function(tag) {
      return "\"" + tag + "\"";
    });
    return result;
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper('after', after);
    Handlebars.registerHelper('any', any);
    Handlebars.registerHelper('arrayify', arrayify);
    Handlebars.registerHelper('before', before);
    Handlebars.registerHelper('each_with_classes', each_with_classes);
    Handlebars.registerHelper('eachIndex', eachIndex);
    Handlebars.registerHelper('eachProperty', eachProperty);
    Handlebars.registerHelper('empty', empty);
    Handlebars.registerHelper('first', first);
    Handlebars.registerHelper('foreach', foreach);
    Handlebars.registerHelper('inArray', inArray);
    Handlebars.registerHelper('iterate', iterate);
    Handlebars.registerHelper('join', join);
    Handlebars.registerHelper('joinAny', join);
    Handlebars.registerHelper('last', last);
    Handlebars.registerHelper('length', length);
    Handlebars.registerHelper('lengthEqual', lengthEqual);
    Handlebars.registerHelper('sort', sort);
    Handlebars.registerHelper('withAfter', withAfter);
    Handlebars.registerHelper('withBefore', withBefore);
    Handlebars.registerHelper('withFirst', withFirst);
    Handlebars.registerHelper('withLast', withLast);
    Handlebars.registerHelper('withSort', withSort);
    return this;
  };

}).call(this);
