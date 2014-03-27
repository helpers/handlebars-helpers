

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
    if (Utils._indexOf.call(array, value) >= 0) {
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
