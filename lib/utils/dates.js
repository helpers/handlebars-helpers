'use strict';

exports.padNumber = function(num, count, padCharacter) {
  if (typeof padCharacter === 'undefined') {
    padCharacter = '0';
  }
  var lenDiff = count - String(num).length;
  var padding = '';
  if (lenDiff > 0) {
    while (lenDiff--) {
      padding += padCharacter;
    }
  }
  return padding + num;
};

exports.dayOfYear = function(date) {
  var oneJan = new Date(date.getFullYear(), 0, 1);
  return Math.ceil((date - oneJan) / 86400000);
};

exports.weekOfYear = function(date) {
  var oneJan = new Date(date.getFullYear(), 0, 1);
  return Math.ceil((((date - oneJan) / 86400000) + oneJan.getDay() + 1) / 7);
};

exports.isoWeekOfYear = function(date) {
  var target = new Date(date.valueOf());
  var dayNr = (date.getDay() + 6) % 7;
  target.setDate(target.getDate() - dayNr + 3);
  var jan4 = new Date(target.getFullYear(), 0, 4);

  var dayDiff = (target - jan4) / 86400000;
  return 1 + Math.ceil(dayDiff / 7);
};

exports.tweleveHour = function(date) {
  if (date.getHours() > 12) {
    return date.getHours() - 12;
  } else {
    return date.getHours();
  }
};

exports.timeZoneOffset = function(date) {
  var hoursDiff = -date.getTimezoneOffset() / 60;
  var result = exports.padNumber(Math.abs(hoursDiff), 4);
  return (hoursDiff > 0 ? '+' : '-') + result;
};

exports.format = function(date, format) {
  var match = null;
  return format.replace(exports.formats, function(m, p) {
    switch (p) {
      case 'a':
        return exports.abbreviatedWeekdays[date.getDay()];
      case 'A':
        return exports.fullWeekdays[date.getDay()];
      case 'b':
        return exports.abbreviatedMonths[date.getMonth()];
      case 'B':
        return exports.fullMonths[date.getMonth()];
      case 'c':
        return date.toLocaleString();
      case 'C':
        return Math.round(date.getFullYear() / 100);
      case 'd':
        return exports.padNumber(date.getDate(), 2);
      case 'D':
        return exports.format(date, '%m/%d/%y');
      case 'e':
        return exports.padNumber(date.getDate(), 2, ' ');
      case 'F':
        return exports.format(date, '%Y-%m-%d');
      case 'h':
        return exports.format(date, '%b');
      case 'H':
        return exports.padNumber(date.getHours(), 2);
      case 'I':
        return exports.padNumber(exports.tweleveHour(date), 2);
      case 'j':
        return exports.padNumber(exports.dayOfYear(date), 3);
      case 'k':
        return exports.padNumber(date.getHours(), 2, ' ');
      case 'l':
        return exports.padNumber(exports.tweleveHour(date), 2, ' ');
      case 'L':
        return exports.padNumber(date.getMilliseconds(), 3);
      case 'm':
        return exports.padNumber(date.getMonth() + 1, 2);
      case 'M':
        return exports.padNumber(date.getMinutes(), 2);
      case 'n':
        return '\n';
      case 'p':
        if (date.getHours() > 11) {
          return 'PM';
        } else {
          return 'AM';
        }
        break;
      case 'P':
        return exports.format(date, '%p').toLowerCase();
      case 'r':
        return exports.format(date, '%I:%M:%S %p');
      case 'R':
        return exports.format(date, '%H:%M');
      case 's':
        return date.getTime() / 1000;
      case 'S':
        return exports.padNumber(date.getSeconds(), 2);
      case 't':
        return '\t';
      case 'T':
        return exports.format(date, '%H:%M:%S');
      case 'u':
        if (date.getDay() === 0) {
          return 7;
        } else {
          return date.getDay();
        }
        break;
      case 'U':
        return exports.padNumber(exports.weekOfYear(date), 2);
      case 'v':
        return exports.format(date, '%e-%b-%Y');
      case 'V':
        return exports.padNumber(exports.isoWeekOfYear(date), 2);
      case 'W':
        return exports.padNumber(exports.weekOfYear(date), 2);
      case 'w':
        return exports.padNumber(date.getDay(), 2);
      case 'x':
        return date.toLocaleDateString();
      case 'X':
        return date.toLocaleTimeString();
      case 'y':
        return String(date.getFullYear()).substring(2);
      case 'Y':
        return date.getFullYear();
      case 'z':
        return exports.timeZoneOffset(date);
      default:
        return match;
    }
  });
};

exports.formats = /%(a|A|b|B|c|C|d|D|e|F|h|H|I|j|k|l|L|m|M|n|p|P|r|R|s|S|t|T|u|U|v|V|W|w|x|X|y|Y|z)/g;

exports.abbreviatedWeekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

exports.fullWeekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

exports.abbreviatedMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

exports.fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
