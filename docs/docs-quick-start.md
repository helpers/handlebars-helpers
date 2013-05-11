For linting and testing this project uses Grunt `~0.4.1`, but Grunt is **not required** to use the helpers. Check out the [Getting Started](http://gruntjs.com/getting-started) guide to learn more about Grunt.

```shell
npm install helper-lib --save
```
Once helper-lib has been installed, it may be used within your application with the following JavaScript:

```js
var handlebars = require('handlebars');
var helpers = require('helper-lib');
helpers.register(handlebars);
```

Now your handlebars instance will have access to the helpers.