
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

