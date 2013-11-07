# {%= name %} [![NPM version](https://badge.fury.io/js/{%= name %}.png)](http://badge.fury.io/js/{%= name %}) {% if (travis) { %} [![Build Status]({%= travis %}.png)]({%= travis %}){% } %}

> {%= description %}

### [Visit the live docs →](http://assemble.io/helpers/)

## Quickstart
{%= _.doc("quickstart.md") %}

## Overview
{%= _.doc("overview.md") %}

## Contributing

### Undocumented Helpers
We can always use your help documenting helpers. Here is an up-to-date list of **{%= docsDifference.length %} helpers** that require documentation:
{% if (docsDifference) { %}{% for(var helper in docsDifference) { %}
* `{{{%= docsDifference[helper] %}}}`{% } %}{% } else { %}_(Everything is documented!)_
{% } %}

### Helpers that need tests
We can always use your help writing tests for helpers. Here is an up-to-date list of **{%= testsDifference.length %} helpers** that require tests:
{% if (testsDifference) { %}{% for(var helper in testsDifference) { %}
* `{{{%= testsDifference[helper] %}}}`{% } %}{% } else { %}
_(Everything is documented!)_
{% } %}

{%= _.doc("contributing.md") %}

{% if (changelog) { %}
## Release History
{%= _.include("docs-changelog.md") %} {% } else { %}
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
