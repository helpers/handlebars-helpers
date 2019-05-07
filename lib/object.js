const utils = require('./utils');

const hasOwn = Object.hasOwnProperty;
/**
 * @exports object
 */
const helpers = module.exports;

/**
 * Extend the context with the properties of other objects.
 * A shallow merge is performed to avoid mutating the context.
 *
 * @param {Object} `objects` One or more objects to extend.
 * @return {Object}
 * @api public
 */

helpers.extend = function(/*objects*/) {
  const args = [].slice.call(arguments);
  let opts = {};

  if (utils.isOptions(args[args.length - 1])) {
    // remove handlebars options object
    opts = args.pop().hash;
    // re-add handlebars options.hash object
    args.push(opts);
  }

  const context = {};
  for (let i = 0; i < args.length; i++) {
    const obj = args[i];
    if (utils.isObject(obj)) {
      const keys = Object.keys(obj);
      for (let j = 0; j < keys.length; j++) {
        const key = keys[j];
        context[key] = obj[key];
      }
    }
  }

  return context;
};

/**
 * Take arguments and, if they are string or number, convert them to a dot-delineated object property path.
 *
 * @param {String|Number} `prop` The property segments to assemble (can be multiple).
 * @return {String}
 * @api public
 */

helpers.toPath = function(/*prop*/) {
  const prop = [];
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'string' || typeof arguments[i] === 'number') {
      prop.push(arguments[i]);
    }
  }
  return prop.join('.');
};

/**
 * Use property paths (`a.b.c`) to get a value or nested value from
 * the context. Works as a regular helper or block helper.
 *
 * @param {String} `prop` The property to get, optionally using dot notation for nested properties.
 * @param {Object} `context` The context object
 * @param {Object} `options` The handlebars options object, if used as a block helper.
 * @return {String}
 * @block
 * @api public
 */
helpers.get = function(prop, context, options) {
  const val = utils.get(context, prop);
  if (options && options.fn) {
    return val ? options.fn(val) : options.inverse(context);
  }
  return val;
};

/**
 * Use property paths (`a.b.c`) to get a value or nested value from
 * the context.
 *
 * @param {String} propertyName - The property to get, optionally using dot notation for nested properties.
 * @return {String} - The value at the requested property path
 * @api public
 */
helpers.getProperty = function getProperty(propertyName) {
  return utils.get(this, propertyName);
};

/**
 * Use property paths (`a.b.c`) to get an object from
 * the context. Differs from the `get` helper in that this
 * helper will return the actual object, including the
 * given property key. Also, this helper does not work as a
 * block helper.
 *
 * @param {String} `prop` The property to get, optionally using dot notation for nested properties.
 * @param {Object} `context` The context object
 * @return {String}
 * @api public
 */

helpers.getObject = function(prop, context) {
  const val = utils.get(context, prop);
  if (utils.isUndefined(val)) return undefined;
  const finalProp = prop.split('.').pop();
  return { [finalProp]: val };
};

/**
 * Return true if `key` is an own, enumerable property
 * of the given `context` object.
 *
 * ```handlebars
 * {{hasOwn context key}}
 * ```
 *
 * @param {String} `key`
 * @param {Object} `context` The context object.
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
 * @param {String} `value`
 * @return {Boolean}
 * @api public
 */

helpers.isObject = function(value) {
  return utils.isPlainObject(value);
};

/**
 * Parses the given string using `JSON.parse`.
 *
 * ```handlebars
 * <!-- string: '{"foo": "bar"}' -->
 * {{JSONparse string}}
 * <!-- results in: { foo: 'bar' } -->
 * ```
 * @param {String} `string` The string to parse
 * @contributor github.com/keeganstreet
 * @block
 * @api public
 */

helpers.JSONparse = function(str, options) {
  return JSON.parse(str);
};

/**
 * Stringify an object using `JSON.stringify`.
 *
 * ```handlebars
 * <!-- object: { foo: 'bar' } -->
 * {{JSONstringify object}}
 * <!-- results in: '{"foo": "bar"}' -->
 * ```
 * @param {Object} `obj` Object to stringify
 * @return {String}
 * @api public
 */

helpers.JSONstringify = function(obj, indent) {
  if (!utils.isNumber(indent)) {
    indent = 0;
  }
  return JSON.stringify(obj, null, indent);
};

/**
 * Pretty-stringify an object using `JSON.stringify`.
 *
 * ```handlebars
 * <!-- object: { foo: 'bar' } -->
 * {{prettyJson object}}
 * <!-- results in: '{\n  "foo": "bar"\n}' -->
 * ```
 * @param {Object} `obj` Object to stringify
 * @return {String}
 * @api public
 */

helpers.prettyJson = function(obj) {
  return helpers.JSONstringify(obj || {}, 2);
};

/**
 * Deeply merge the properties of the given `objects` with the
 * context object.
 *
 * @param {Object} `object` The target object. Pass an empty object to shallow clone.
 * @param {Object} `objects`
 * @return {Object}
 * @api public
 */

helpers.merge = function(context/*, objects, options*/) {
  const args = [].slice.call(arguments);
  let opts = {};

  if (utils.isOptions(args[args.length - 1])) {
    // remove handlebars options object
    opts = args.pop().hash;
    // re-add options.hash
    args.push(opts);
  }

  return Object.assign.apply(null, args);
};

/**
 * Alias for parseJSON. this will be
 * deprecated in a future release
 */

helpers.parseJSON = helpers.JSONparse;

/**
 * Pick properties from the context object.
 *
 * @param {Array|String} `properties` One or more properties to pick.
 * @param {Object} `context`
 * @param {Object} `options` Handlebars options object.
 * @return {Object} Returns an object with the picked values. If used as a block helper, the values are passed as context to the inner block. If no values are found, the context is passed to the inverse block.
 * @block
 * @api public
 */

helpers.pick = function(props, context, options) {
  const keys = utils.arrayify(props);
  const len = keys.length;
  let i = -1;
  let result = {};

  while (++i < len) {
    result = helpers.extend({}, result, helpers.getObject(keys[i], context));
  }

  if (options.fn) {
    if (Object.keys(result).length) {
      return options.fn(result);
    }
    return options.inverse(context);
  }
  return result;
};

/**
 * Alias for JSONstringify. this will be
 * deprecated in a future release
 */

helpers.stringify = helpers.JSONstringify;

/**
 * Checks if a field exists, and if so, passes the value to the inner block
 *
 * @param {Object} object - The target object. Pass an empty object to shallow clone.
 * @param {Object} field - The name of the field to check for in the object
 * @return {Object}
 * @block
 * @api public
 */
helpers.checkExists = function(obj, field, options) {
  if (obj && obj[field]) {
    return options.fn({
      obj,
      field,
      value: obj[field]
    });
  }
  return '';
};
