
/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */



    Library.addHelper('stripQuerystring', function (url) {
      return url.split("?")[0];
    });

    /**
     * {{encodeURI}}
     * Encodes a Uniform Resource Identifier (URI) component
     * by replacing each instance of certain characters by
     * one, two, three, or four escape sequences representing
     * the UTF-8 encoding of the character.
     *
     * @author: Jon Schlinkert <http://github.com/jonschlinkert>
     * @param  {String} uri: The un-encoded string
     * @return {String}      The endcoded string.
     */
    Library.addHelper('encodeURI', function (uri) {
      return encodeURIComponent(uri);
    });

    /**
     * {{decodeURI}}
     * Decodes a Uniform Resource Identifier (URI) component
     * previously created by encodeURIComponent or by a
     * similar routine.
     *
     * @author: Jon Schlinkert <http://github.com/jonschlinkert>
     * @param  {[type]} encodedURI [description]
     * @return {[type]}            [description]
     */
    Library.addHelper('decodeURI', function (encodedURI) {
      return decodeURIComponent(encodedURI);
    });

    /**
     * {{urlresolve}}
     * Take a base URL, and a href URL, and resolve them as a
     * browser would for an anchor tag.
     *
     * @author: Jon Schlinkert <http://github.com/jonschlinkert>
     * @param  {[type]} base [description]
     * @param  {[type]} href [description]
     * @return {[type]}      [description]
     */
    Library.addHelper('urlresolve', function (base, href) {
      return url.resolve(base, href);
    });

    /**
     * {{urlparse}}
     * Take a URL string, and return an object. Pass true as the
     * second argument to also parse the query string using the
     * querystring module. Defaults to false.
     *
     * @author: Jon Schlinkert <http://github.com/jonschlinkert>
     * @param  {[type]} path  [description]
     * @param  {[type]} type  [description]
     * @param  {[type]} query [description]
     * @return {[type]}       [description]
     */
    Library.addHelper('urlparse', function (path, type, query) {
      var result = Utils.stringifyObj(url.parse(path), type, query);
      return new Handlebars.safeString(result);
    });
