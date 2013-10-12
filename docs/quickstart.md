```shell
npm i handlebars-helpers --save
```

Use within your application with the following line of JavaScript:

```js
var helpers = require('handlebars-helpers');
```

Now your Handlebars instance will have access to the helpers.


### Features unique to this project

Some helpers offer useful functionality that is unique to this project, such as:

* File globbing using [minimatch][] patterns.
* Access to [assemble](https://github.com/assemble/assemble) options.
* Ability to render either markdown or HTML conditionally based on the file extension of the generated file.

Lots more...