(function() {
  var Utils, after, any, arrayify, before, eachIndex, eachProperty, empty, first, inArray, join, last, length, lengthEqual, sort, withAfter, withBefore, withFirst, withLast, withSort;

  Utils = require('../utils/utils');

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
    Handlebars.registerHelper('first', first);
    Handlebars.registerHelper('withFirst', withFirst);
    Handlebars.registerHelper('last', last);
    Handlebars.registerHelper('withLast', withLast);
    Handlebars.registerHelper('after', after);
    Handlebars.registerHelper('withAfter', withAfter);
    Handlebars.registerHelper('before', before);
    Handlebars.registerHelper('withBefore', withBefore);
    Handlebars.registerHelper('join', join);
    Handlebars.registerHelper('sort', sort);
    Handlebars.registerHelper('withSort', withSort);
    Handlebars.registerHelper('length', length);
    Handlebars.registerHelper('lengthEqual', lengthEqual);
    Handlebars.registerHelper('empty', empty);
    Handlebars.registerHelper('any', any);
    Handlebars.registerHelper('inArray', inArray);
    Handlebars.registerHelper('eachIndex', eachIndex);
    Handlebars.registerHelper('eachProperty', eachProperty);
    Handlebars.registerHelper("arrayify", arrayify);
    return this;
  };

}).call(this);
