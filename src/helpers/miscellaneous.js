
/**
 * Handlebars Helpers <http://github.com/assemble/handlebars-helpers>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT)
 */

Library.addHelper('default', function (value, defaultValue) {
  if (!((Utils.isHandlebarsSpecific(value)) && (Utils.isUndefined(defaultValue)))) {
    value = Utils.result(value);
    defaultValue = Utils.result(defaultValue);
    return value || defaultValue;
  } else {
    return Utils.err('{{default}} takes two arguments (string|number, string|number).');
  }
});

if (typeof Ember === 'undefined' || Ember === null) {
  Library.addHelper('partial', function (name, data, template) {
    if (!(Utils.isUndefined(name))) {

      name = Utils.result(name);
      data = Utils.result(data);


      var path = Library.Config.partialsPath + name;
      if (!Utils.isUndefined(template)) {
        template = Utils.result(template);
      }


      if (Library.Handlebars.partials[name] == null) {
        if (!Utils.isUndefined(template)) {
          if (Utils.isString(template)) {
            template = Library.Handlebars.compile(template);
          }
          Library.Handlebars.registerPartial(name, template);
        } else if ((typeof define !== 'undefined' && define !== null) && (Utils.isFunc(define)) && define.amd) {

          if (!Library.Config.precompiledTemplates) {
            path = '!text' + path;
          }

          require([path], function (template) {
            if (Utils.isString(template)) {
              template = Library.Handlebars.compile(template);
            }
            return Library.Handlebars.registerPartial(name, template);
          });

        } else if (typeof require !== 'undefined' && require !== null) {
          template = require(path);
          if (Utils.isString(template)) {
            template = Library.Handlebars.compile(template);
          }
          Library.Handlebars.registerPartial(name, template);
        } else {
          Utils.err('{{partial}} no amd or commonjs module support found.');
        }
      }

      return Utils.safeString(Library.Handlebars.partials[name](data));
    } else {
      return Utils.err('{{partial}} takes at least one argument (string).');
    }
  });
}
