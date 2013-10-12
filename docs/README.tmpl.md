# {%= name %} [![NPM version](https://badge.fury.io/js/{%= name %}.png)](http://badge.fury.io/js/{%= name %}) {% if (travis) { %} [![Build Status]({%= travis %}.png)]({%= travis %}){% } %}

> {%= description %}

### [Visit the live docs →](http://assemble.io/helpers/)

## Quickstart
{%= _.doc("quickstart.md") %}

## Overview
{%= _.doc("overview.md") %}

## Contributing
{%= _.doc("undocumented.md") %}
{%= _.doc("notest.md") %}
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