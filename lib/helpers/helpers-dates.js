(function() {
  var Dates, Handlebars, Utils;

  Handlebars = require('./helpers').Handlebars;

  Dates = require('../utils/dates');

  Utils = require('../utils/utils');

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

}).call(this);
