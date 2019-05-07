/*!
 * handlebars-helpers <https://github.com/helpers/handlebars-helpers>
 *
 * Copyright (c) 2013-2017, Jon Schlinkert, Brian Woodward.
 * Released under the MIT License.
 */

const lib = require('./lib/');

module.exports = (groups, options) => {
  if (typeof groups === 'string') {
    groups = [groups];
  } else if (!Array.isArray(groups)) {
    options = groups;
    groups = null;
  }

  const hbs = options.handlebars || options.hbs;
  if (!hbs) throw new Error('You need to pass "handlebars" as an option');

  if (groups) {
    groups.forEach(function(key) {
      hbs.registerHelper(lib[key]);
    });
  } else {
    Object.keys(lib).forEach(key => hbs.registerHelper(lib[key]));
  }

  return hbs.helpers;
};

Object.keys(lib).forEach(key => {
  module.exports[key] = options => {
    options = options || {};
    const hbs = options.handlebars || options.hbs;
    if (!hbs) throw new Error('You need to pass "handlebars" as an option');
    hbs.registerHelper(lib[key]);
    return hbs.helpers;
  };
});
