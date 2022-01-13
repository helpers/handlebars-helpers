'use strict';

const hljs = require('highlight.js');
const util = require('handlebars-utils');
const { Remarkable } = require('remarkable');

module.exports.highlight = function(code, lang) {
  try {
    return hljs.highlight(lang, code).value;
  } catch (err) {
    if (!/Unknown language/i.test(err.message)) {
      return code;
    }
    try {
      return hljs.highlightAuto(code).value;
    } catch {
      return code;
    }
  }
};

const defaults = {
  html: true,
  breaks: true,
  highlight: null
};

module.exports = function(config = {}) {
  return function(str, locals, options) {
    if (typeof str !== 'string') {
      options = locals;
      locals = str;
      str = true;
    }

    if (util.isOptions(locals)) {
      options = locals;
      locals = {};
    }

    const ctx = util.context(this, locals, options);
    let opts = util.options(this, locals, options);
    opts = Object.assign({}, defaults, config, opts);

    if (opts.hasOwnProperty('lang')) {
      opts.langPrefix = opts.lang;
    }

    const md = new Remarkable(opts);
    const val = util.value(str, ctx, options);
    return md.render(val);
  };
};
