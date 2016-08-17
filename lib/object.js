'use strict';

var hasOwn = Object.hasOwnProperty;
var array = require('./array');
var utils = require('./utils/');

/**
 * Expose `helpers`
 */

var helpers = module.exports;

/**
 * Extend the context with the properties of other objects.
 * A shallow merge is performed to avoid mutating the context.
 *
 * @param {Object} `objects` One or more objects to extend.
 * @return {Object}
 * @api public
 */

helpers.extend = function(/*objects*/) {
  var args = [].slice.call(arguments);
  var last = args[args.length - 1];

  if (last && utils.isObject(last) && last.hash) {
    last = last.hash;
    args.pop(); // remove handlebars options object
    args.push(last);
  }

  var len = args.length;
  var context = {};
  var i = -1;

  while (++i < len) {
    var obj = args[i];
    if (utils.isObject(obj)) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          context[key] = obj[key];
        }
      }
    }
  }
  return context;
};

/**
 * Block helper that iterates over the properties of
 * an object, exposing each key and value on the context.
 *
 * @name .forIn
 * @param {Object} `context`
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */

helpers.forIn = function(obj, options) {
  if (!utils.isOptions(options)) {
    return obj.inverse(this);
  }

  var data = utils.createFrame(options, options.hash);
  var result = '';

  for (var key in obj) {
    data.key = key;
    result += options.fn(obj[key], {data: data});
  }
  return result;
};

/**
 * Block helper that iterates over the **own** properties of
 * an object, exposing each key and value on the context.
 *
 * @name .forOwn
 * @param {Object} `obj` The object to iterate over.
 * @param {Object} `options`
 * @return {String}
 * @block
 * @api public
 */

helpers.forOwn = function(obj, options) {
  if (!utils.isOptions(options)) {
    return obj.inverse(this);
  }

  var data = utils.createFrame(options, options.hash);
  var result = '';

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      data.key = key;
      result += options.fn(obj[key], {data: data});
    }
  }
  return result;
};

/**
 * Use property paths (`a.b.c`) to get a value or nested value from
 * the context. Works as a regular helper or block helper.
 *
 * @name .get
 * @param {String} `prop` The property to get, optionally using dot notation for nested properties.
 * @param {Object} `context` The context object
 * @param {Object} `options` The handlebars options object, if used as a block helper.
 * @return {String}
 * @block
 * @api public
 */

helpers.get = function(prop, context, options) {
  var val = utils.get(context, prop);
  if (options && options.fn) {
    return val ? options.fn(val) : options.inverse(context);
  }
  return val;
};

/**
 * Use property paths (`a.b.c`) to get an object from
 * the context. Differs from the `get` helper in that this
 * helper will return the actual object, including the
 * given property key. Also, this helper does not work as a
 * block helper.
 *
 * @name .getObject
 * @param {String} `prop` The property to get, optionally using dot notation for nested properties.
 * @param {Object} `context` The context object
 * @return {String}
 * @api public
 */

helpers.getObject = function(prop, context) {
  return utils.getObject(context, prop);
};

/**
 * Return true if `key` is an own, enumerable property
 * of the given `context` object.
 *
 * ```handlebars
 * {{hasOwn context key}}
 * ```
 *
 * @name .hasOwn
 * @param  {String} `key`
 * @param  {Object} `context` The context object.
 * @return {Boolean}
 * @api public
 */

helpers.hasOwn = function(context, key) {
  return hasOwn.call(context, key);
};

/**
 * Return true if `value` is an object.
 *
 * ```handlebars
 * {{isObject "foo"}}
 * //=> false
 * ```
 * @name .isObject
 * @param  {String} `value`
 * @return {Boolean}
 * @api public
 */

helpers.isObject = function(value) {
  return value && typeof value === 'object'
    && !Array.isArray(value);
};

/**
 * Deeply merge the properties of the given `objects` with the
 * context object.
 *
 * @name .merge
 * @param  {Object} `object` The target object. Pass an empty object to shallow clone.
 * @param  {Object} `objects`
 * @return {Object}
 * @api public
 */

helpers.merge = function(context/*, objects, options*/) {
  var args = [].slice.call(arguments);
  var last = args[args.length - 1];

  if (last && typeof last === 'object' && last.hash) {
    last = last.hash;
    args.pop(); // remove handlebars options object
    args.push(last);
  }

  context = utils.merge.apply(utils.merge, args);
  return context;
};

/**
 * Block helper that parses a string using `JSON.parse`,
 * then passes the parsed object to the block as context.
 *
 * @param {String} `string` The string to parse
 * @param {Object} `options` Handlebars options object
 * @contributor github.com/keeganstreet
 * @block
 * @api public
 */

helpers.parseJSON = function(str, options) {
  return options.fn(JSON.parse(str));
};

/**
 * Pick properties from the context object.
 *
 * @param {Array|String} `properties` One or more proeperties to pick.
 * @param {Object} `context`
 * @param {Object} `options` Handlebars options object.
 * @return {Object} Returns an object with the picked values. If used as a block helper, the values are passed as context to the inner block. If no values are found, the context is passed to the inverse block.
 * @block
 * @api public
 */

helpers.pick = function(props, context, options) {
  var keys = array.arrayify(props);
  var len = keys.length, i = -1;
  var result = {};

  while (++i < len) {
    result = helpers.extend(result, utils.getObject(context, keys[i]));
  }

  if (options.fn) {
    if (Object.keys(result).length) {
      return options.fn(result);
    } else {
      return options.inverse(context);
    }
  }
  return result;
};

/**
 * Stringify an object using `JSON.stringify`.
 *
 * @param  {Object} `obj` Object to stringify
 * @return {String}
 * @api public
 */

helpers.stringify = function(obj, indent) {
  if (!utils.isNumber(indent)) {
    indent = 0;
  }
  return JSON.stringify(obj, null, indent);
};
