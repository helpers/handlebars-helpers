(function() {
  var Utils, after, any, arrayify, before, eachIndex, eachProperty, empty, first, inArray, join, joinAny, last, length, lengthEqual, property, sort, stringify, value, withAfter, withBefore, withFirst, withLast, withSort, _;

  Utils = require('../utils/utils');

  _ = require('lodash');

  module.exports.value = value = function(file, prop) {
    file = Utils.readJSON(file);
    prop = _.pick(file, prop);
    prop = _.pluck(prop);
    return Utils.safeString(prop);
  };

  module.exports.property = property = function(file, prop) {
    file = Utils.readJSON(file);
    prop = _.pick(file, prop);
    return Utils.safeString(JSON.stringify(prop, null, 2));
  };

  module.exports.stringify = stringify = function(file, props) {
    file = Utils.readJSON(file);
    return Utils.safeString(JSON.stringify(file, null, 2));
  };

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
        return a[field] > b[field];
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

  /*
  Similar to #each helper, but treats array-like objects as arrays
  (i.e. objects with a `.length` property which is a number)
  rather than objects. This lets us iterate over our Collection's.
  */


  module.exports.eachIndex = eachIndex = function(array, options) {
    var index, result, _i, _len;

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
    var key, result;

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
    Handlebars.registerHelper("arrayify", arrayify);
    Handlebars.registerHelper('after', after);
    Handlebars.registerHelper('any', any);
    Handlebars.registerHelper('before', before);
    Handlebars.registerHelper('eachIndex', eachIndex);
    Handlebars.registerHelper('eachProperty', eachProperty);
    Handlebars.registerHelper('empty', empty);
    Handlebars.registerHelper('first', first);
    Handlebars.registerHelper('inArray', inArray);
    Handlebars.registerHelper('join', join);
    Handlebars.registerHelper('joinAny', join);
    Handlebars.registerHelper('last', last);
    Handlebars.registerHelper('length', length);
    Handlebars.registerHelper('lengthEqual', lengthEqual);
    Handlebars.registerHelper('property', property);
    Handlebars.registerHelper('sort', sort);
    Handlebars.registerHelper('stringify', stringify);
    Handlebars.registerHelper('value', value);
    Handlebars.registerHelper('withAfter', withAfter);
    Handlebars.registerHelper('withBefore', withBefore);
    Handlebars.registerHelper('withFirst', withFirst);
    Handlebars.registerHelper('withLast', withLast);
    Handlebars.registerHelper('withSort', withSort);
    return this;
  };

}).call(this);
