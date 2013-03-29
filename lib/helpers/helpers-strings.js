(function() {
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

}).call(this);
