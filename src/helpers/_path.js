
/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */


  /**
   * {{relative}}
   * Returns the derived relative path from A to B.
   * @param  {[type]} a [description]
   * @param  {[type]} b [description]
   * @return {[type]}   [description]
   * @example:
   *   {{relative [from] [to]}}
   */
  Library.addHelper('relative', function (a, b) {
    return Utils.getRelativePath(a, b);
  });

  /**
   * {{extname}}
   * Returns the extension of a given file
   * @param  {[type]} ext [description]
   * @return {[type]}     [description]
   * @example:
   *   {{extname "docs/toc.md"}}
   * @returns:
   *   .md
   */
  Library.addHelper('extname', function (ext) {
    return Utils.getExt(ext);
  });
