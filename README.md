# handlebars-helpers [![NPM version](https://badge.fury.io/js/handlebars-helpers.png)](http://badge.fury.io/js/handlebars-helpers)  [![Build Status](https://travis-ci.org/assemble/handlebars-helpers.png?branch=master)](https://travis-ci.org/assemble/handlebars-helpers)

> Extensive collection of Handlebars helpers.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install handlebars-helpers --save
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('handlebars-helpers');
```




## Helpers task
_Run this task with the `grunt helpers` command._

##### [Visit the docs →]([assemble](http://assemble.io/docs/helpers/index.html)

Handlebars.js ships with some built-in helpers, such as `{{#each}}`, `{{#if}}` and `{{#unless}}`. Here is how helpers work:

* A Handlebars helper call is a simple identifier, followed by zero or more parameters (separated by space).
* Each parameter is a Handlebars expression.
* Handlebars helpers can be accessed from any context in a template.

[Handlebars.js](https://github.com/wycats/handlebars.js) is currently the default template library for [assemble](http://assemble.io/).


###### Special features

Some helpers feature the following enhancements, which are unique to this project:

* File globbing
* Access to [assemble](http://assemble.io/docs/Options.html) options.
* Some helpers will render either markdown or HTML based on the file extension of the generated file.


###### Custom Helpers

> Contributions welcome! Please consider adding your own helpers to this library.

Handlebars accels over other templating libraries when it comes to creating your own custom helpers. Just register your function into Handlebars with the `Handlebars.registerHelper` method, and that helper will be available to any template you compile afterwards.

Handlebars allows two different kinds of helpers:

* **Expression helpers** are basically regular functions that take the name of the helper and the helper function as arguments. Once an expression helper is registered, it can be called anywhere in your templates, then Handlebars takes the expression's return value and writes it into the template.
* **Block helpers** There are a few block helpers included by default with Handlebars, `{{#each}}`, `{{#if}}` and `{{#unless}}`. Custom block helpers are registered the same way as exptression helpers, but the difference is that Handlebars will pass the contents of the block compiled into a function to the helper.





## Release History

 * 2013-08-20   v0.3.2   Add glob helper.
 * 2013-07-30   v0.3.0   The project has been refactored, cleaned up, and full documentataion has bee put up at http://assemble.io
 * 2013-05-11   v0.2.4   Adding object globbing utility functions to be used in helpers later.
 * 2013-05-11   v0.2.3   File globbing added to some helpers. Including md and some file helpers.
 * 2013-05-07   v0.2.0   A bunch of new tests for markdown and special helpers. Refactored most of the rest of the helpers to separate functions from Handlebars registration.
 * 2013-05-02   v0.1.32   Updated utils and a number of helpers, including value, property, and stringify.
 * 2013-04-21   v0.1.31   Fixing relative helper
 * 2013-04-20   v0.1.30   Refactoring helpers-collection module to separate the functions from the Handlebars helper registration process.
 * 2013-04-16   v0.1.25   Adding defineSection and renderSection helpers to try to get sections populated in a layout from the page.
 * 2013-04-07   v0.1.21   Add markdown helpers back, add more tests.
 * 2013-04-06   v0.1.20   Generalized helpers structure, externalized utilities.
 * 2013-04-05   v0.1.11   New authors and gist helpers, general cleanup and new tests.
 * 2013-04-04   v0.1.10   Externalized utility javascript from helpers.js
 * 2013-03-28   v0.1.8   Gruntfile updated with mocha tests for 71 helpers, bug fixes.
 * 2013-03-18   v0.1.7   New path helper "relative", for resolving relative path from one absolute path to another.
 * 2013-03-16   v0.1.3   New helpers, "formatPhoneNumber" and "eachProperty"
 * 2013-03-15   v0.1.2   Update README.md with documentation, examples.
 * 2013-03-06   v0.1.0   First commit.

***

Project authored by [Jon Schlinkert](http://github.com/jonschlinkert).

_This file was generated on Tue Aug 20 2013 09:03:59._
