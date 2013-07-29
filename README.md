# [handlebars-helpers v0.3.0](http://github.com/assemble/handlebars-helpers) [![Build Status](https://travis-ci.org/assemble/handlebars-helpers.png)](https://travis-ci.org/assemble/handlebars-helpers)

> Extensive collection of Handlebars helpers.

### [Visit the helper docs →](http://assemble.io/docs/helpers/index.html)


## Quick start
This helper library is built into [Assemble](http://assemble.io), but the helpers can be used with any project by doing the following:

```shell
npm install handlebars-helpers --save
```

Once handlebars-helpers has been installed, it may be used within your application with the following JavaScript:

```js
var handlebars = require('Handlebars');
var helpers = require('handlebars-helpers');
helpers.register(Handlebars);
```
Now your handlebars instance will have access to the helpers.

(For linting and testing this project uses Grunt `~0.4.1`, but Grunt is **not required** to use the helpers. Check out the Grunt.js [Getting Started](http://gruntjs.com/getting-started) guide to learn more about Grunt.)


### Features unique to this project

* File globbing using [minimatch](https://github.com/isaacs/minimatch) patterns
* Access to [assemble](https://github.com/assemble/assemble) options.
* Ability to render either markdown or HTML conditionally based on the file extension of the generated file.


## How Handlebars Helpers Work
Handlebars.js ships with some built-in helpers, such as `{{#each}}`, `{{#if}}` and `{{#unless}}`. Here is how helpers work:

* A Handlebars helper call is a simple identifier, followed by zero or more parameters (separated by space).
* Each parameter is a Handlebars expression.
* Handlebars helpers can be accessed from any context in a template.

[Handlebars.js](https://github.com/wycats/handlebars.js) is currently the default template library for [assemble](http://github.com/assemble/assemble).

### Creating Helpers

> Contributions welcome! Please consider adding your own helpers to this library.

Handlebars is advantageous over other templating libraries when it comes to creating your own custom helpers. Just register your function into Handlebars with the `Handlebars.registerHelper` method, and that helper will be available to any template you compile afterwards.

Handlebars allows two different kinds of helpers:

* **Expression helpers** are basically regular functions that take the name of the helper and the helper function as arguments. Once an expression helper is registered, it can be called anywhere in your templates, then Handlebars takes the expression's return value and writes it into the template.
* **Block helpers** There are a few block helpers included by default with Handlebars, `{{#each}}`, `{{#if}}` and `{{#unless}}`. Custom block helpers are registered the same way as exptression helpers, but the difference is that Handlebars will pass the contents of the block compiled into a function to the helper.

Also, if you use Assemble be sure to visit the [assemble docs](https://github.com/assemble/assemble/wiki/Helpers) to learn about registering custom helpers.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using Grunt.


## Authors
* [Jon Schlinkert](http://github.com/jonschlinkert)
* [Brian Woodward](http://github.com/doowb)


## Credit

> Many of these helpers come from the following repos:

* [Handlebars Helpers, by Dan Harper](http://github.com/danharper)
* [Swag v0.2.1, by Elving Rodriguez](http://elving.github.com/swag/)


## Copyright and license
Copyright 2013 Assemble

[MIT License](LICENSE-MIT)

## Release History
* 2013-05-11			v0.2.3			File globbing added to some helpers. Including md and some file helpers.
* 2013-05-07			v0.2.0			A bunch of new tests for markdown and special helpers.  Refactored most of the rest of the helpers to separate functions from Handlebars registration.
* 2013-05-02			v0.1.32			Updated utils and a number of helpers, including value, property, and stringify.
* 2013-04-21			v0.1.31			Fixing relative helper
* 2013-04-20			v0.1.30			Refactoring helpers-collection module to separate the functions from the Handlebars helper registration process.
* 2013-04-16			v0.1.25			Adding defineSection and renderSection helpers to try to get sections populated in a layout from the page.
* 2013-04-07			v0.1.21			Add markdown helpers back, add more tests.
* 2013-04-06			v0.1.20			Generalized helpers structure, externalized utilities.
* 2013-04-05			v0.1.11			New authors and gist helpers, general cleanup and new tests.
* 2013-04-04			v0.1.10			Externalized utility javascript from helpers.js
* 2013-03-28			v0.1.8			Gruntfile updated with mocha tests for 71 helpers, bug fixes.
* 2013-03-18			v0.1.7			New path helper "relative", for resolving relative path from one absolute path to another.
* 2013-03-16			v0.1.3			New helpers, "formatPhoneNumber" and "eachProperty"
* 2013-03-15			v0.1.2			Update README.md with documentation, examples.
* 2013-03-06			v0.1.0			First commit.





---
Authored by [assemble](https://github.com/assemble/assemble)

_This file was generated using Grunt and [assemble](http://github.com/assemble/assemble) on Sun Jun 23 2013 18:44:17._




[download]: https://github.com/assemble/helper-lib/zipball/master


[org]: https://github.com/assemble
[assemble]: https://github.com/assemble/assemble
[issues]: https://github.com/assemble/assemble/issues
[wiki]: https://github.com/assemble/assemble/wiki



[config]: https://github.com/assemble/assemble/wiki/Configuration
[gruntfile]: https://github.com/assemble/assemble/wiki/Gruntfile
[tasks]: https://github.com/assemble/assemble/wiki/Task-and-Targets
[options]: https://github.com/assemble/assemble/wiki/Options


[templates]: https://github.com/assemble/assemble/wiki/Templates
[layouts]: https://github.com/assemble/assemble/wiki/Layouts
[pages]: https://github.com/assemble/assemble/wiki/Pages
[partials]: https://github.com/assemble/assemble/wiki/Partials


[content]: https://github.com/assemble/assemble/wiki/Content
[data]: https://github.com/assemble/assemble/wiki/Data
[yaml]: https://github.com/assemble/assemble/wiki/YAML-front-matter
[markdown]: https://github.com/assemble/assemble/wiki/Markdown


[helpers]: https://github.com/assemble/assemble/wiki/Helpers
[assets]: https://github.com/assemble/assemble/wiki/Assets
[collections]: https://github.com/assemble/assemble/wiki/Collections


[examples]: https://github.com/assemble/assemble-examples
[exampleReadme]: https://github.com/assemble/assemble-examples-readme
[exampleBasic]: https://github.com/assemble/assemble-examples-basic
[exampleAdvanced]: https://github.com/assemble/assemble-examples-advanced
[exampleGrid]: https://github.com/assemble/assemble-examples-grid
[exampleTable]: https://github.com/assemble/assemble-examples-table
[exampleForm]: https://github.com/assemble/assemble-examples-form
[exampleSite]: https://github.com/assemble/assemble-examples-site
[exampleSitemap]: https://github.com/assemble/assemble-examples-sitemap


[contribute]: https://github.com/assemble/assemble/wiki/Contributing-to-Assemble
[extend]: https://github.com/assemble/assemble/wiki/Extending-Assemble
[helpers-lib]: https://github.com/assemble/assemble/wiki/Helpers


[grunt]: http://gruntjs.com/
[upgrading]: http://gruntjs.com/upgrading-from-0.3-to-0.4
[getting-started]: http://gruntjs.com/getting-started
[package]: https://npmjs.org/doc/json.html


[assemble]: https://github.com/assemble/assemble
[pre]: https://github.com/assemble/pre
[dry]: https://github.com/assemble/dry
[assemble-github-com]: https://github.com/assemble/assemble.github.com
[assemble-examples-bootstrap]: https://github.com/assemble/assemble-examples-bootstrap
[assemble-internal]: https://github.com/assemble/assemble-internal
[assemble-less]: https://github.com/assemble/assemble-less
[assemble-examples-readme]: https://github.com/assemble/assemble-examples-readme
[grunt-toc]: https://github.com/assemble/grunt-toc
[helper-lib]: https://github.com/assemble/helper-lib
[grunt-dry]: https://github.com/assemble/grunt-dry
[assemble-examples]: https://github.com/assemble/assemble-examples
