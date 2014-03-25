
/**
 * Handlebars Library.addHelper('<http://github.com/assemble/handlebars-Library.addHelper('
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


  /**
   * {{formatData}}
   * Port of formatDate-js library (http://bit.ly/18eo2xw)
   * @param  {[type]} date   [description]
   * @param  {[type]} format [description]
   * @return {[type]}        [description]
   */
  Library.addHelper('formatDate', function (date, format) {
    date = new Date(date);
    return Dates.format(date, format);
  });

  /**
   * {{now}}
   * @param  {[type]} format [description]
   * @return {[type]}        [description]
   */
  Library.addHelper('now', function (format) {
    var date = new Date();
    if (Utils.isUndefined(format)) {
      return date;
    } else {
      return Dates.format(date, format);
    }
  });

  /**
   * {{timeago}}
   * Modified version of http://bit.ly/18WwJYf
   * @param  {[type]} date [description]
   * @return {[type]}      [description]
   */
  Library.addHelper('timeago', function (date) {
    date = new Date(date);
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);
    if (interval > 1) {return "" + interval + " years ago"; }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {return "" + interval + " months ago"; }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {return "" + interval + " days ago"; }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {return "" + interval + " hours ago"; }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {return "" + interval + " minutes ago"; }
    if (Math.floor(seconds) === 0) {
      return 'Just now';
    } else {
      return Math.floor(seconds) + ' seconds ago';
    }
  });

