#### {{authors}}
Generates a list of markdown-formatted project authors from the AUTHORS file in the root of a project. Since Handlebars enforces case sensitivity with helper names, this helper comes in two different flavors: `{{AUTHORS}}` or `{{authors}}`.

Params: `none`
Usage: `{{authors}}` or `{{authors "path/to/AUTHORS"}}`

Data (`AUTHORS` file in the root of our project): 

```
Brian Woodward (http://github.com/doowb)
Jon Schlinkert (http://github.com/jonschlinkert)
```

Template (lowercase version):
``` handlebars
{{authors}}
```

Renders to:
``` md
* [Brian Woodward](http://github.com/doowb)  
* [Jon Schlinkert](http://github.com/jonschlinkert)  
```

Or the uppercase version:
``` handlebars
{{AUTHORS}}
```

Renders to:
``` 
**Jon Schlinkert**

+ [http://twitter.com/jonschlinkert](http://twitter.com/jonschlinkert)
+ [http://github.com/jonschlinkert](http://github.com/jonschlinkert)

**Brian Woodward**

+ [http://twitter.com/doowb](http://twitter.com/doowb)
+ [http://github.com/doowb](http://github.com/doowb)
```


### Travis CI

#### {{travis}}
_Creates a "full" Travis CI link in markdown format_.

Params: `branch`
Type: `String`
Usage: `{{travis [branch]}}`

Template:
``` handlebars
{{travis}}`
```

Renders to:
``` markdown
# [helper-lib v2.0.0](https://github.com/assemble/helper-lib)[![Build Status](https://travis-ci.org/assemble/helper-lib.png)](https://travis-ci.org/assemble/helper-lib)
```

Template with branch: 
``` handlebars
{{travis 'master'}}
```

Renders to:
``` markdown
# [helper-lib v2.0.0](https://github.com/assemble/helper-lib)[![Build Status](https://travis-ci.org/assemble/helper-lib.png?branch=master)](https://travis-ci.org/assemble/helper-lib)
```

#### {{travis-badge}}
_Creates a Travis CI link in markdown format_.

Params: `none`
Usage: `{{travis-badge}}`

Template
``` handlebars
{{travis}}`
```

Renders to:
``` markdown
[![Build Status](https://travis-ci.org/assemble/helper-lib.png)](https://travis-ci.org/assemble/helper-lib)
```

#### {{changelog}}
A few convenience helpers that read data in YAML format, and do interesting things with the data. Well... they "do things" with the data. Anyway I guess only nerds like me find it interesting. 

**NOTE**: These helpers will throw an error if the source files are not  valid YAML format, using the following conventions:

A couple things to keep in mind about YAML:

* YAML is picky, so don't be surprised if the parser throws an error from improperly placed quotation marks.
* Seriously, don't be surprised. If you even come onto the issues and act surprised when it happens, an automated message will tell you to read the first bullet.

Example of the format to follow in your `CHANGELOG` file:

``` yaml
v0.1.2
  date: "2014-04-09"
  changes:
    - The future sucks.
    - This is my third and last commmit from the future.
v0.1.1
  date: "2014-04-08"
  changes:
    - Second commit from the future.
    - The future is more boring that I thought it would be.
v0.1.0
  date: "2014-03-07"
  changes:
    - First commit... from the future. Yes!
```
Of coure, you are under no obligation to make your changelog entries as interesting as these, and you may record your entries at any point in whatever timeline you prefer, but whatever you write must be valid YAML when you do it.

The output will look like this:

``` md
* 2013-03-15    v0.1.2    Update README.md with documentation, examples.
* 2013-03-06    v0.1.0    First commit.
```

* More info here: [js-yaml](https://github.com/nodeca/js-yaml)
* See the tests here: [test/helpers/special_test.js](test/helpers/special_test.js)
