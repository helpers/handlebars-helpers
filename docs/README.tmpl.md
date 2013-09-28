# {%= name %} [![NPM version](https://badge.fury.io/js/{%= name %}.png)](http://badge.fury.io/js/{%= name %}) {% if (travis) { %} [![Build Status]({%= travis %}.png)]({%= travis %}){% } %}

> {%= description %}

### [Visit the live docs →](http://assemble.io/helpers/)

## Quickstart
{%= _.doc("quickstart.md") %}

## Overview
{%= _.doc("overview.md") %}

## Development
{%= _.doc("contributing.md") %}


## Release History
{% if (changelog) {
  _.each(changelog, function(details, version) {
    var date = details.date;
    if (date instanceof Date) {
      date = grunt.template.date(new Date(date.getTime() + date.getTimezoneOffset() * 60000), 'yyyy-mm-dd');
    }
    print('\n * ' + [
      date,
      version,
      details.changes.join(' '),
    ].join('\u2003\u2003\u2003'));
  });
} else { %}
_(Nothing yet)_
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

_This file was generated on Mon Sep 02 2013 09:44:51._

[minimatch]: https://github.com/isaacs/minimatch
