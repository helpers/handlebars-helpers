
/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */



    /**
     * {{css}}
     * Add an array of <link></link> tags. Automatically resolves
     * relative paths to `options.assets` in the Assemble task.
     * @param  {[type]} context [description]
     * @return {[type]}         [description]
     */
    Library.addHelper('css', function (context) {
      if (!Array.isArray(context)) {
        context = [context];
      }
      return new Utils.safeString(context.map(function (item) {
        var ext = Utils.getExt(item);
        var css = '<link rel="stylesheet" href="' + options.assets + '/css/' + item + '">';
        var less = '<link rel="stylesheet/less" href="' + options.assets + '/less/' + item + '">';
        switch (ext) {
          case "less":
            return less;
          case "css":
            return css;
          default:
            return css;
        }
      }).join("\n"));
    });

    /**
     * {{js "src/to/*.js"}}
     * @param  {[type]} context [description]
     * @return {[type]}         [description]
     */
    Library.addHelper('js', function (context) {
      if (!Array.isArray(context)) {
        context = [context];
      }
      return new Utils.safeString(context.map(function (item) {
        var ext = Utils.getExt(item);
        var js = '<script src="' + options.assets + '/js/' + item + '"></script>';
        var coffee = '<script type="text/coffeescript" src="' + options.assets + '/js/' + item + '"></script>';
        switch (ext) {
          case "js":
            return js;
          case "coffee":
            return coffee;
          default:
            return js;
        }
      }).join("\n"));
    });

    /**
     * {{#ul}}
     *   <li></li>
     * {{/ul}}
     * Block helper for creating unordered lists.
     * @param  {[type]} context [description]
     * @param  {[type]} opts    [description]
     * @return {[type]}         [description]
     */
    Library.addHelper('ul', function (context, opts) {
      return ("<ul " + (HTML.parseAttributes(opts.hash)) + ">") + context.map(function (item) {
        return "<li>" + (opts.fn(item)) + "</li>";
      }).join("\n") + "</ul>";
    });

    /**
     * {{#ol}}
     *   <li></li>
     * {{ol}}
     * Block helper for creating ordered lists.
     * @param  {[type]} context [description]
     * @param  {[type]} opts    [description]
     * @return {[type]}         [description]
     */
    Library.addHelper('ol', function (context, opts) {
      return ("<ol " + (HTML.parseAttributes(opts.hash)) + ">") + context.map(function (item) {
        return "<li>" + (opts.fn(item)) + "</li>";
      }).join("\n") + "</ol>";
    });

