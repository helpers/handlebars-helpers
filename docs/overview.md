## [Visit the docs →](http://assemble.io/helpers/)

[Handlebars.js](https://github.com/wycats/handlebars.js) is currently the default template library for [assemble][]. By default, [Handlebars.js](http://handlebarsjs.com/) ships with some built-in helpers, such as `{{#each}}`, `{{#if}}` and `{{#unless}}`. Here is how helpers work:

* A Handlebars helper call is a simple identifier, followed by zero or more parameters (separated by space).
* Each parameter is a Handlebars expression.
* Handlebars helpers can be accessed from any context in a template.