#### \{{authors}}

Generates a list of markdown-formatted project authors from the AUTHORS file in the root of a project. Since Handlebars enforces case sensitivity with helper names, this helper comes in two different flavors: `\{{AUTHORS}}` or `\{{authors}}`.

Params: `none`
Usage: `\{{authors}}` or `\{{authors "path/to/AUTHORS"}}`

For data, we'll use the `AUTHORS` file in the root of our project. We format it this way so that NPM can:

```
Brian Woodward (http://github.com/doowb)
Jon Schlinkert (http://github.com/jonschlinkert)
```

Template (lowercase version):

```html
\{{authors}}
```

Renders to:

```
* [Brian Woodward](http://github.com/doowb)
* [Jon Schlinkert](http://github.com/jonschlinkert)
```

Renders to:

```markdown
**Jon Schlinkert**

+ [http://twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)
+ [http://github.com/jonschlinkert](http://github.com/jonschlinkert)

**Brian Woodward**

+ [http://twitter.com/doowb](http://twitter.com/doowb)
+ [http://github.com/doowb](http://github.com/doowb)
```
