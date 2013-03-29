(function() {
  var Assemble, Dates, HTML, Handlebars, Utils,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  if (typeof window !== "undefined" && window !== null) {
    Handlebars = window.Handlebars;
    window.Assemble = Assemble = {};
  }

  if (typeof module !== "undefined" && module !== null) {
    Handlebars = require('handlebars');
    module.exports = Assemble = {};
  }

  Dates = {};

  Dates.padNumber = function(num, count, padCharacter) {
    var lenDiff, padding;

    if (typeof padCharacter === 'undefined') {
      padCharacter = '0';
    }
    lenDiff = count - String(num).length;
    padding = '';
    if (lenDiff > 0) {
      while (lenDiff--) {
        padding += padCharacter;
      }
    }
    return padding + num;
  };

  Dates.dayOfYear = function(date) {
    var oneJan;

    oneJan = new Date(date.getFullYear(), 0, 1);
    return Math.ceil((date - oneJan) / 86400000);
  };

  Dates.weekOfYear = function(date) {
    var oneJan;

    oneJan = new Date(date.getFullYear(), 0, 1);
    return Math.ceil((((date - oneJan) / 86400000) + oneJan.getDay() + 1) / 7);
  };

  Dates.isoWeekOfYear = function(date) {
    var dayDiff, dayNr, jan4, target;

    target = new Date(date.valueOf());
    dayNr = (date.getDay() + 6) % 7;
    target.setDate(target.getDate() - dayNr + 3);
    jan4 = new Date(target.getFullYear(), 0, 4);
    dayDiff = (target - jan4) / 86400000;
    return 1 + Math.ceil(dayDiff / 7);
  };

  Dates.tweleveHour = function(date) {
    if (date.getHours() > 12) {
      return date.getHours() - 12;
    } else {
      return date.getHours();
    }
  };

  Dates.timeZoneOffset = function(date) {
    var hoursDiff, result;

    hoursDiff = -date.getTimezoneOffset() / 60;
    result = Dates.padNumber(Math.abs(hoursDiff), 4);
    return (hoursDiff > 0 ? '+' : '-') + result;
  };

  Dates.format = function(date, format) {
    return format.replace(Dates.formats, function(m, p) {
      switch (p) {
        case 'a':
          return Dates.abbreviatedWeekdays[date.getDay()];
        case 'A':
          return Dates.fullWeekdays[date.getDay()];
        case 'b':
          return Dates.abbreviatedMonths[date.getMonth()];
        case 'B':
          return Dates.fullMonths[date.getMonth()];
        case 'c':
          return date.toLocaleString();
        case 'C':
          return Math.round(date.getFullYear() / 100);
        case 'd':
          return Dates.padNumber(date.getDate(), 2);
        case 'D':
          return Dates.format(date, '%m/%d/%y');
        case 'e':
          return Dates.padNumber(date.getDate(), 2, ' ');
        case 'F':
          return Dates.format(date, '%Y-%m-%d');
        case 'h':
          return Dates.format(date, '%b');
        case 'H':
          return Dates.padNumber(date.getHours(), 2);
        case 'I':
          return Dates.padNumber(Dates.tweleveHour(date), 2);
        case 'j':
          return Dates.padNumber(Dates.dayOfYear(date), 3);
        case 'k':
          return Dates.padNumber(date.getHours(), 2, ' ');
        case 'l':
          return Dates.padNumber(Dates.tweleveHour(date), 2, ' ');
        case 'L':
          return Dates.padNumber(date.getMilliseconds(), 3);
        case 'm':
          return Dates.padNumber(date.getMonth() + 1, 2);
        case 'M':
          return Dates.padNumber(date.getMinutes(), 2);
        case 'n':
          return '\n';
        case 'p':
          if (date.getHours() > 11) {
            return 'PM';
          } else {
            return 'AM';
          }
        case 'P':
          return Dates.format(date, '%p').toLowerCase();
        case 'r':
          return Dates.format(date, '%I:%M:%S %p');
        case 'R':
          return Dates.format(date, '%H:%M');
        case 's':
          return date.getTime() / 1000;
        case 'S':
          return Dates.padNumber(date.getSeconds(), 2);
        case 't':
          return '\t';
        case 'T':
          return Dates.format(date, '%H:%M:%S');
        case 'u':
          if (date.getDay() === 0) {
            return 7;
          } else {
            return date.getDay();
          }
        case 'U':
          return Dates.padNumber(Dates.weekOfYear(date), 2);
        case 'v':
          return Dates.format(date, '%e-%b-%Y');
        case 'V':
          return Dates.padNumber(Dates.isoWeekOfYear(date), 2);
        case 'W':
          return Dates.padNumber(Dates.weekOfYear(date), 2);
        case 'w':
          return Dates.padNumber(date.getDay(), 2);
        case 'x':
          return date.toLocaleDateString();
        case 'X':
          return date.toLocaleTimeString();
        case 'y':
          return String(date.getFullYear()).substring(2);
        case 'Y':
          return date.getFullYear();
        case 'z':
          return Dates.timeZoneOffset(date);
        default:
          return match;
      }
    });
  };

  Dates.formats = /%(a|A|b|B|c|C|d|D|e|F|h|H|I|j|k|l|L|m|M|n|p|P|r|R|s|S|t|T|u|U|v|V|W|w|x|X|y|Y|z)/g;

  Dates.abbreviatedWeekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

  Dates.fullWeekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  Dates.abbreviatedMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  Dates.fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  Handlebars.registerHelper('formatDate', function(date, format) {
    date = new Date(date);
    return Dates.format(date, format);
  });

  Handlebars.registerHelper('now', function(format) {
    var date;

    date = new Date();
    if (Utils.isUndefined(format)) {
      return date;
    } else {
      return Dates.format(date, format);
    }
  });

  Handlebars.registerHelper('timeago', function(date) {
    var interval, seconds;

    date = new Date(date);
    seconds = Math.floor((new Date() - date) / 1000);
    interval = Math.floor(seconds / 31536000);
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

  Assemble.Config = {
    partialsPath: ''
  };

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

  Handlebars.registerHelper('inflect', function(count, singular, plural, include) {
    var word;

    word = count > 1 || count === 0 ? plural : singular;
    if (Utils.isUndefined(include) || include === false) {
      return word;
    } else {
      return "" + count + " " + word;
    }
  });

  Handlebars.registerHelper('ordinalize', function(value) {
    var normal, _ref;

    normal = Math.abs(Math.round(value));
    if (_ref = normal % 100, __indexOf.call([11, 12, 13], _ref) >= 0) {
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
  });

  Handlebars.registerHelper('log', function(value) {
    return console.log(value);
  });

  Handlebars.registerHelper('debug', function(value) {
    console.log('Context: ', this);
    if (!Utils.isUndefined(value)) {
      console.log('Value: ', value);
    }
    return console.log('-----------------------------------------------');
  });

  Handlebars.registerHelper('add', function(value, addition) {
    return value + addition;
  });

  Handlebars.registerHelper('subtract', function(value, substraction) {
    return value - substraction;
  });

  Handlebars.registerHelper('divide', function(value, divisor) {
    return value / divisor;
  });

  Handlebars.registerHelper('multiply', function(value, multiplier) {
    return value * multiplier;
  });

  Handlebars.registerHelper('floor', function(value) {
    return Math.floor(value);
  });

  Handlebars.registerHelper('ceil', function(value) {
    return Math.ceil(value);
  });

  Handlebars.registerHelper('round', function(value) {
    return Math.round(value);
  });

  Handlebars.registerHelper('toFixed', function(number, digits) {
    if (Utils.isUndefined(digits)) {
      digits = 0;
    }
    return number.toFixed(digits);
  });

  Handlebars.registerHelper('toPrecision', function(number, precision) {
    if (Utils.isUndefined(precision)) {
      precision = 1;
    }
    return number.toPrecision(precision);
  });

  Handlebars.registerHelper('toExponential', function(number, fractions) {
    if (Utils.isUndefined(fractions)) {
      fractions = 0;
    }
    return number.toExponential(fractions);
  });

  Handlebars.registerHelper('toInt', function(number) {
    return parseInt(number, 10);
  });

  Handlebars.registerHelper('toFloat', function(number) {
    return parseFloat(number);
  });

  Handlebars.registerHelper('addCommas', function(number) {
    return number.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  });

  Handlebars.registerHelper('lowercase', function(str) {
    return str.toLowerCase();
  });

  Handlebars.registerHelper('uppercase', function(str) {
    return str.toUpperCase();
  });

  Handlebars.registerHelper('capitalizeFirst', function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  Handlebars.registerHelper('capitalizeEach', function(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    });
  });

  Handlebars.registerHelper('titleize', function(str) {
    var capitalize, title, word, words;

    title = str.replace(/[ \-_]+/g, ' ');
    words = title.match(/\w+/g);
    capitalize = function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    };
    return ((function() {
      var _i, _len, _results;

      _results = [];
      for (_i = 0, _len = words.length; _i < _len; _i++) {
        word = words[_i];
        _results.push(capitalize(word));
      }
      return _results;
    })()).join(' ');
  });

  Handlebars.registerHelper('sentence', function(str) {
    return str.replace(/((?:\S[^\.\?\!]*)[\.\?\!]*)/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  });

  Handlebars.registerHelper('reverse', function(str) {
    return str.split('').reverse().join('');
  });

  Handlebars.registerHelper('truncate', function(str, length, omission) {
    if (Utils.isUndefined(omission)) {
      omission = '';
    }
    if (str.length > length) {
      return str.substring(0, length - omission.length) + omission;
    } else {
      return str;
    }
  });

  Handlebars.registerHelper('center', function(str, spaces) {
    var i, space;

    space = '';
    i = 0;
    while (i < spaces) {
      space += '&nbsp;';
      i++;
    }
    return "" + space + str + space;
  });

  Handlebars.registerHelper('newLineToBr', function(str) {
    return str.replace(/\r?\n|\r/g, '<br>');
  });

  Utils = {};

  Utils.toString = Object.prototype.toString;

  Utils.isUndefined = function(value) {
    return value === 'undefined' || Utils.toString.call(value) === '[object Function]' || (value.hash != null);
  };

  Utils.safeString = function(str) {
    return new Handlebars.SafeString(str);
  };

  Utils.trim = function(str) {
    var trim;

    trim = /\S/.test("\xA0") ? /^[\s\xA0]+|[\s\xA0]+$/g : /^\s+|\s+$/g;
    return str.toString().replace(trim, '');
  };

  Handlebars.registerHelper('default', function(value, defaultValue) {
    return value != null ? value : defaultValue;
  });

  /*
  Handlebars.registerHelper 'partial', (name, data) ->
      partial = Assemble.Config.partialsPath + name
      data = if Utils.isUndefined(data) then {} else data
      Handlebars.registerPartial(name, require partial) unless Handlebars.partials[name]?
      Utils.safeString Handlebars.partials[name](data)
  */


}).call(this);
