(function() {
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

  Handlebars.registerHelper('join', function(array, separator) {
    return array.join(Utils.isUndefined(separator) ? ' ' : separator);
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

}).call(this);
