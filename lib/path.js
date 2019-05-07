const path = require('path');
/**
 * @exports path
 */
const helpers = module.exports;

/**
 * Get the directory path segment from the given `filepath`.
 *
 * ```handlebars
 * {{dirname "docs/toc.md"}}
 * <!-- results in: 'docs' -->
 * ```
 * @param {String} `ext`
 * @return {String}
 * @api public
 */

helpers.dirname = function(filepath) {
  if (typeof filepath !== 'string') return '';
  return path.dirname(filepath);
};

/**
 * Get the file extension from the given `filepath`.
 *
 * ```handlebars
 * {{basename "docs/toc.md"}}
 * <!-- results in: 'toc.md' -->
 * ```
 * @param {String} `ext`
 * @return {String}
 * @api public
 */

helpers.basename = function(filepath) {
  if (typeof filepath !== 'string') return '';
  return path.basename(filepath);
};

/**
 * Get the "stem" from the given `filepath`.
 *
 * ```handlebars
 * {{stem "docs/toc.md"}}
 * <!-- results in: 'toc' -->
 * ```
 * @param {String} `filepath`
 * @return {String}
 * @api public
 */

helpers.stem = function(filepath) {
  if (typeof filepath !== 'string') return '';
  return path.basename(filepath, path.extname(filepath));
};

/**
 * Get the file extension from the given `filepath`.
 *
 * ```handlebars
 * {{extname "docs/toc.md"}}
 * <!-- results in: '.md' -->
 * ```
 * @param {String} `filepath`
 * @return {String}
 * @api public
 */

helpers.extname = function(filepath) {
  if (typeof filepath !== 'string') return '';
  return path.extname(filepath);
};

/**
 * Get specific (joined) segments of a file path by passing a
 * range of array indices.
 *
 * ```handlebars
 * {{segments "a/b/c/d" "2" "3"}}
 * <!-- results in: 'c/d' -->
 *
 * {{segments "a/b/c/d" "1" "3"}}
 * <!-- results in: 'b/c/d' -->
 *
 * {{segments "a/b/c/d" "1" "2"}}
 * <!-- results in: 'b/c' -->
 * ```
 *
 * @param {String} `filepath` The file path to split into segments.
 * @return {String} Returns a single, joined file path.
 * @api public
 */
helpers.segments = function(filepath, a, b) {
  if (typeof filepath !== 'string') return '';
  const segments = filepath.split(/[\\\/]+/);
  return segments.slice(a, b).join('/');
};

/**
 * Convert a file:// path to a UNC formatted path
 *
 * ```handlebars
 * {{linkToUNC "file://path.to/here"}}
 * <!-- results in: '\\path.to\here' -->
 * ```
 *
 * @param {String} path - The file path to convert to UNC
 * @return {String} The UNC version of the path
 * @api public
 */
helpers.linkToUNC = function(link) {
  if (!link) return '';
  const unc = link.replace('file://', '\\\\');
  return unc.replace(/\//g, '\\');
};
