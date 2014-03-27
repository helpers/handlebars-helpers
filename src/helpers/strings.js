
/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


Library.addHelper('lowercase', function (str) {
  if (!Utils.isUndefined(str)) {
    str = Utils.result(str);
    return str.toLowerCase();
  } else {
    return Utils.err('{{lowercase}} takes one argument (string).');
  }
});

Library.addHelper('uppercase', function (str) {
  if (!Utils.isUndefined(str)) {
    str = Utils.result(str);
    return str.toUpperCase();
  } else {
    return Utils.err('{{uppercase}} takes one argument (string).');
  }
});

Library.addHelper('capitalizeFirst', function (str) {
  if (!Utils.isUndefined(str)) {
    str = Utils.result(str);
    return str.charAt(0).toUpperCase() + str.slice(1);
  } else {
    return Utils.err('{{capitalizeFirst}} takes one argument (string).');
  }
});

Library.addHelper('capitalizeEach', function (str) {
  if (!Utils.isUndefined(str)) {
    str = Utils.result(str);
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    });
  } else {
    return Utils.err('{{capitalizeEach}} takes one argument (string).');
  }
});

Library.addHelper('titleize', function (str) {
  var word;

  if (!Utils.isUndefined(str)) {
    str = Utils.result(str);
    var title = str.replace(/[ \-_]+/g, ' ');
    var words = title.match(/\w+/g);
    var capitalize = function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    };
    return ((function () {
      var results = [];
      for (var i = 0, len = words.length; i < len; i++) {
        word = words[i];
        results.push(capitalize(word));
      }
      return results;
    })()).join(' ');
  } else {
    return Utils.err('{{titleize}} takes one argument (string).');
  }
});

Library.addHelper('sentence', function (str) {
  if (!Utils.isUndefined(str)) {
    str = Utils.result(str);
    return str.replace(/((?:\S[^\.\?\!]*)[\.\?\!]*)/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  } else {
    return Utils.err('{{sentence}} takes one argument (string).');
  }
});

Library.addHelper('reverse', function (str) {
  if (!Utils.isUndefined(str)) {
    str = Utils.result(str);
    return str.split('').reverse().join('');
  } else {
    return Utils.err('{{reverse}} takes one argument (string).');
  }
});

Library.addHelper('truncate', function (str, length, omission) {
  if (!Utils.isUndefined(str)) {
    str = Utils.result(str);
    if (Utils.isUndefined(omission)) {
      omission = '';
    }
    if (str.length > length) {
      return str.substring(0, length - omission.length) + omission;
    } else {
      return str;
    }
  } else {
    return Utils.err('{{truncate}} takes one argument (string).');
  }
});

Library.addHelper('center', function (str, spaces) {
  if (!((Utils.isUndefined(str)) && (Utils.isUndefined(spaces)))) {
    str = Utils.result(str);
    spaces = Utils.result(spaces);
    var space = '';
    var i = 0;
    while (i < spaces) {
      space += '&nbsp;';
      i++;
    }
    return "" + space + str + space;
  } else {
    return Utils.err('{{center}} takes two arguments (string, number).');
  }
});

Library.addHelper('newLineToBr', function (str) {
  if (!Utils.isUndefined(str)) {
    str = Utils.result(str);
    return str.replace(/\r?\n|\r/g, '<br>');
  } else {
    return Utils.err('{{newLineToBr}} takes one argument (string).');
  }
});

Library.addHelper('sanitize', function (str, replaceWith) {
  if (!Utils.isUndefined(str)) {
    str = Utils.result(str);
    if (Utils.isUndefined(replaceWith)) {
      replaceWith = '-';
    }
    return str.replace(/[^a-z0-9]/gi, replaceWith);
  } else {
    return Utils.err('{{sanitize}} takes one argument (string).');
  }
});
