### [Visit the docs →]([assemble](http://assemble.io/docs/helpers/index.html)

Handlebars.js ships with some built-in helpers, such as `{{#each}}`, `{{#if}}` and `{{#unless}}`. Here is how helpers work:

* A Handlebars helper call is a simple identifier, followed by zero or more parameters (separated by space).
* Each parameter is a Handlebars expression.
* Handlebars helpers can be accessed from any context in a template.

[Handlebars.js](https://github.com/wycats/handlebars.js) is currently the default template library for [assemble](http://assemble.io/).


#### Special features

Some helpers feature the following enhancements, which are unique to this project:

* File globbing
* Access to [assemble](http://assemble.io/docs/Options.html) options.
* Some helpers will render either markdown or HTML based on the file extension of the generated file.


#### Custom Helpers

> Contributions welcome! Please consider adding your own helpers to this library.

Handlebars accels over other templating libraries when it comes to creating your own custom helpers. Just register your function into Handlebars with the `Handlebars.registerHelper` method, and that helper will be available to any template you compile afterwards.

Handlebars allows two different kinds of helpers:

* **Expression helpers** are basically regular functions that take the name of the helper and the helper function as arguments. Once an expression helper is registered, it can be called anywhere in your templates, then Handlebars takes the expression's return value and writes it into the template.
* **Block helpers** There are a few block helpers included by default with Handlebars, `{{#each}}`, `{{#if}}` and `{{#unless}}`. Custom block helpers are registered the same way as exptression helpers, but the difference is that Handlebars will pass the contents of the block compiled into a function to the helper.

