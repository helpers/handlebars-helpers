## [Visit the docs →]([assemble](http://assemble.io/docs/helpers/index.html)

[Handlebars.js](https://github.com/wycats/handlebars.js) is currently the default template library for [assemble][]. By default, [Handlebars.js](http://handlebarsjs.com/) ships with some built-in helpers, such as `{{#each}}`, `{{#if}}` and `{{#unless}}`. Here is how helpers work:

* A Handlebars helper call is a simple identifier, followed by zero or more parameters (separated by space).
* Each parameter is a Handlebars expression.
* Handlebars helpers can be accessed from any context in a template.


## Special "Assemble" features

Some helpers feature enhancements that are specifically intended for use with [Assemble][assemble], the static site generator built on Grunt.js. Here are some highlights:

* File globbing.
* Access to [assemble](http://assemble.io/docs/Options.html) options.
* Some helpers will render either markdown or HTML based on the file extension of the generated file.