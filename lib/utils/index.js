const handlebars = require('handlebars');

const utils = {};

// built-in utilities
utils.get = (value, path, defaultValue) => {
  return String(path).split('.').reduce((acc, v) => {
    try {
      acc = acc[v];
    } catch (e) {
      return defaultValue;
    }
    return acc;
  }, value);
};
utils.has = (value, path) => utils.get(value, path) !== void 0;
utils.isNumber = v => typeof v === 'number';
utils.isPlainObject = v => v !== null && typeof v === 'object' && v.toString() === '[object Object]';
utils.map = (arr, fn) => Array.isArray(arr) ? arr.map(fn) : undefined;
utils.includes = (c, v, i) => Array.isArray(c) || typeof c === 'string' ? c.includes(v, i) : false;
utils.isFunction = value => typeof value === 'function';
utils.sortBy = (arr, key) => [].concat(...arr).sort((a, b) => (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0));

// handlebars utilities:
utils.extend = handlebars.Utils.extend;
utils.escapeExpression = handlebars.Utils.escapeExpression;
utils.isEmpty = handlebars.Utils.isEmpty;
utils.createFrame = handlebars.Utils.createFrame;
utils.blockParams = handlebars.Utils.blockParams;

/**
 * Returns true if a helper is a block helper.
 *
 * ```js
 * Handlebars.registerHelper('example', function(options) {
 *   if (utils.isBlock(options)) {
 *     // do something if this is a block helper
 *   } else {
 *     // do something else if this is a not block helper
 *   }
 * });
 * ```
 * @param {Object} `options` Helper options object
 * @return {Boolean}
 * @api public
 */

utils.isBlock = function(options) {
  return utils.isOptions(options)
    && typeof options.fn === 'function'
    && typeof options.inverse === 'function';
};

/**
 * Returns the given value or renders the block if it's a block helper.
 *
 * ```js
 * Handlebars.registerHelper('example', function(val, locals, options) {
 *   return utils.fn(val, locals, options);
 * });
 * ```
 * @param {any} `val`
 * @param {Object} `options`
 * @param {Object} `context`
 * @return {String} Either returns the value, or renders the block.
 * @api public
 */

utils.fn = function(val, context, options) {
  if (utils.isOptions(val)) {
    return utils.fn('', val, options);
  }
  if (utils.isOptions(context)) {
    return utils.fn(val, {}, context);
  }
  return utils.isBlock(options) ? options.fn(context) : val;
};

/**
 * Returns the given value or renders the inverse block if it's a block helper.
 *
 * ```js
 * Handlebars.registerHelper('example', function(val, locals, options) {
 *   return utils.inverse(val, locals, options);
 * });
 * ```
 * @param {any} `val`
 * @param {Object} `options`
 * @param {Object} `context`
 * @return {String} Either returns the value, or renders the inverse block.
 * @api public
 */

utils.inverse = function(val, context, options) {
  if (utils.isOptions(val)) {
    return utils.identity('', val, options);
  }
  if (utils.isOptions(context)) {
    return utils.inverse(val, {}, context);
  }
  return utils.isBlock(options) ? options.inverse(context) : val;
};

/**
 * Gets the return value for a helper, by either rendering the block
 * or inverse block if it's a block helper, or returning the given value
 * (when truthy) or an empty string (when falsey) if it's a non-block expression.
 *
 * ```js
 * Handlebars.registerHelper('example', function(val, locals, options) {
 *   return utils.value(val, locals, options);
 * });
 * ```
 * @param {any} `val`
 * @param {Object} `options`
 * @param {Object} `context`
 * @return {String}
 * @api public
 */

utils.value = function(val, context, options) {
  if (utils.isOptions(val)) {
    return utils.value(null, val, options);
  }
  if (utils.isOptions(context)) {
    return utils.value(val, {}, context);
  }
  if (utils.isBlock(options)) {
    return val ? options.fn(context) : options.inverse(context);
  }
  return val;
};

/**
 * Returns true if the given value is a handlebar `options` object.
 *
 * ```js
 * Handlebars.registerHelper('example', function(val, locals, options) {
 *   if (utils.isOptions(locals)) {
 *     options = locals;
 *     locals = {};
 *   }
 *   // do stuff
 * });
 * ```
 * @param {Object} `val`
 * @return {Boolean}
 * @api public
 */

utils.isOptions = function(val) {
  return utils.isObject(val) && utils.isObject(val.hash);
};

/**
 * Returns true if the given value is `undefined` or is a handlebars
 * options hash (which means that a value was not passed by the user).
 *
 * ```js
 * Handlebars.registerHelper('example', function(val, options) {
 *   if (utils.isUndefined(val)) {
 *     return '';
 *   }
 *   // do stuff
 * });
 * ```
 * @param {any} `value`
 * @return {Boolean}
 * @api public
 */

utils.isUndefined = function(val) {
  return val == null || (utils.isOptions(val) && val.hash != null);
};

/**
 * Creates an options object from the `context`, `locals` and `options.`
 * Handlebars' `options.hash` is merged onto the options, and if the context
 * is created by [templates][], `this.options` will be merged onto the
 * options as well.
 *
 * @param {Object} `context`
 * @param {Object} `locals` Options or locals
 * @param {Object} `options`
 * @return {Boolean}
 * @api public
 */

utils.options = function(thisArg, locals, options) {
  if (utils.isOptions(thisArg)) {
    return utils.options({}, locals, thisArg);
  }
  if (utils.isOptions(locals)) {
    return utils.options(thisArg, options, locals);
  }
  options = options || {};
  if (!utils.isOptions(options)) {
    locals = Object.assign({}, locals, options);
  }
  let opts = Object.assign({}, locals, options.hash);
  if (utils.isObject(thisArg)) {
    opts = Object.assign({}, thisArg.options, opts);
  }
  if (opts[options.name]) {
    opts = Object.assign({}, opts[options.name], opts);
  }
  return opts;
};

/**
 * Returns true if the given value is an object.
 *
 * ```js
 * console.log(utils.isObject(null));
 * //=> false
 * console.log(utils.isObject([]));
 * //=> false
 * console.log(utils.isObject(function() {}));
 * //=> false
 * console.log(utils.isObject({}));
 * //=> true
 * ```
 * @param {Object} `val`
 * @return {Boolean}
 * @api public
 */

utils.isObject = function(val) {
  return utils.isPlainObject(val);
};

/**
 * Returns the given value. If the value is a function it will be
 * called with the current context, otherwise the value is returned.
 *
 * ```js
 * console.log(utils.result('foo'));
 * //=> 'foo'
 * console.log(utils.result(function() {
 *   return 'foo';
 * }));
 * //=> 'foo'
 * ```
 * @param  {any} `val`
 * @return {any}
 * @api public
 */

utils.result = function(val) {
  if (typeof val === 'function') {
    return val.apply(this, [].slice.call(arguments, 1));
  }
  return val;
};

/**
 * Returns the given value as-is, unchanged.
 *
 * ```js
 * console.log(utils.result('foo'));
 * //=> 'foo'
 * console.log(utils.result(function() {
 *   return 'foo';
 * }));
 * //=> [function]
 * ```
 * @param  {any} `val`
 * @return {any}
 * @api public
 */

utils.identity = function(val) {
  return val;
};

/**
 * Return true if `val` is a non-empty string.
 *
 * @param  {any} `val` The value to check
 * @return {Boolean}
 * @api public
 */

utils.isString = function(val) {
  return typeof val === 'string' && val !== '';
};

/**
 * Cast the given `val` to an array.
 *
 * ```js
 * console.log(utils.arrayify(''));
 * //=> []
 * console.log(utils.arrayify('foo'));
 * //=> ['foo']
 * console.log(utils.arrayify(['foo']));
 * //=> ['foo']
 * ```
 * @param  {any} `val`
 * @return {Array}
 * @api public
 */

utils.arrayify = function(val) {
  return val != null ? (Array.isArray(val) ? val : [val]) : [];
};

module.exports = utils;
