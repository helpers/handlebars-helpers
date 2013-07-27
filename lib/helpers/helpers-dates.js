/*! date helpers*/


(function() {
  var Dates, Utils, formatDate, now, timeago;

  Utils = require('../utils/utils');

  Dates = require('../utils/dates');

  module.exports = {
    formatDate: formatDate = function(date, format) {
      date = new Date(date);
      return Dates.format(date, format);
    },
    now: now = function(format) {
      var date;
      date = new Date();
      if (Utils.isUndefined(format)) {
        return date;
      } else {
        return Dates.format(date, format);
      }
    },
    timeago: timeago = function(date) {
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
    }
  };

  module.exports.register = function(Handlebars, options) {
    Handlebars.registerHelper("formatDate", formatDate);
    Handlebars.registerHelper("now", now);
    Handlebars.registerHelper("timeago", timeago);
    return this;
  };

}).call(this);
