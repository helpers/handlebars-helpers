# {%= name %} [![NPM version](https://badge.fury.io/js/{%= name %}.png)](http://badge.fury.io/js/{%= name %}) {% if (travis) { %} [![Build Status]({%= travis %}.png)]({%= travis %}){% } %}

> {%= total.length %} Handlebars helpers in 19 categories. Helpers can be used with [Assemble](https://github.com/assemble/assemble), YUI, Ghost or any Handlebars project.

### [Visit the live docs →](http://assemble.io/helpers/)

## Quickstart
{%= _.doc("quickstart.md") %}

## Overview
{%= _.doc("overview.md") %}

## Contributing

### Undocumented Helpers
We can always use your help documenting helpers. As of {%= grunt.template.date("fullDate") %}, **{%= docsDifference.length %} of {%= total.length %} helpers** require documentation:
{% if (docsDifference) { %}{% for(var helper in docsDifference) { %}
* `{{{%= docsDifference[helper] %}}}`{% } %}{% } else { %}_(Everything is documented!)_
{% } %}

### Helpers that need tests
We can always use your help writing tests for helpers. As of {%= grunt.template.date("fullDate") %}, **{%= testsDifference.length %} of {%= total.length %} helpers** require tests:
{% if (testsDifference) { %}{% for(var helper in testsDifference) { %}
* `{{{%= testsDifference[helper] %}}}`{% } %}{% } else { %}
_(Everything is documented!)_
{% } %}

{%= _.doc("contributing.md") %}

{% if (changelog) { %}
## Release History
{%= _.include("release-history.md") %} {% } else { %}
 * {%= grunt.template.today('yyyy') %}   v0.1.0   First commit
{% } %}

## Credit
{%= _.doc("credit.md") %}

## Authors

**Jon Schlinkert**

+ [github.com/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)

**Brian Woodward**

+ [github.com/doowb](https://github.com/doowb)
+ [twitter.com/doowb](http://twitter.com/doowb)

## License
{%= copyright %}
{%= license %}

***

_This file was generated on {%= grunt.template.date("fullDate") %}._

[assemble]: http://assemble.io/ "Assemble: the static site generator for Node.js, Grunt.js and Yeoman."
[minimatch]: https://github.com/isaacs/minimatch "minimatch"
