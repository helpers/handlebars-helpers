For linting and testing this project uses Grunt `~0.4.1`, but Grunt is **not required** to use the helpers. Check out the [Getting Started](http://gruntjs.com/getting-started) guide to learn more about Grunt.

```shell
npm install helper-lib --save
```
Once helper-lib has been installed, it may be used within your application with the following JavaScript:

```js
var handlebars = require('Handlebars');
var helpers = require('helper-lib');
helpers.register(Handlebars);
```

Now your handlebars instance will have access to the helpers.

### Features unique to helper-lib

Some helpers offer useful functionality that is unique to this project, such as:

* File globbing using [minimatch](https://github.com/isaacs/minimatch) patterns
* Access to [assemble](https://github.com/assemble/assemble) options.
* Ability to render either markdown or HTML conditionally based on the file extension of the generated file.

Lots more...