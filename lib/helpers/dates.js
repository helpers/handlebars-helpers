'use strict';
var Utils = require('../utils/utils');
var Dates = require('../utils/dates');

/**
 * Port of formatDate-js library (http://bit.ly/18eo2xw)
 */

exports.formatDate = function(date, format) {
  date = new Date(date);
  return Dates.format(date, format);
};

exports.now = function(format) {
  var date = new Date();
  if (Utils.isUndefined(format)) {
    return date;
  } else {
    return Dates.format(date, format);
  }
};

/**
 * Modified version of http://bit.ly/18WwJYf
 */

exports.timeago = function(date) {
  date = new Date(date);

  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + ' years ago';
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + ' months ago';
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + ' days ago';
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + ' hours ago';
  }

  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + ' minutes ago';
  }

  if (Math.floor(seconds) === 0) {
    return 'Just now';
  } else {
    return Math.floor(seconds) + ' seconds ago';
  }
};
