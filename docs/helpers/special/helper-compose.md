### \{{compose}} [![NPM version](https://badge.fury.io/js/helper-compose.png)](http://badge.fury.io/js/helper-compose)

> \{{compose}} handlebars helper. Inlines content from multiple files optionally using wildcard (globbing/minimatch) patterns, extracts YAML front matter to pass to context for each file. Accepts compare function as 3rd parameter for sorting inlined files.

#### Quickstart
In the root of your project, run the following in the command line:

```bash
npm i helper-compose --save-dev
```

Next, in your Gruntfile, simply add `helper-compose` to the `helpers` property in the [Assemble](http://assemble.io) task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      // the 'helper-compose' modules must also be listed in devDependencies
      // for assemble to automatically resolve the helper
      helpers: ['helper-compose']
    }
    files: {...}
  }
});
```

With that completed, you may now use the `\{{compose}}` helper in your templates:

```handlebars
\{{compose 'path/to/files/*.hbs'}}
  <h1>Title: \{{title}}</h1>
  \{{{content}}}</p>
\{{/compose}}
```


### Context & Lo-Dash templates

The helper will also process any valid Lo-Dash templates in the YAML front matter of targeted files, using `grunt.config.data` and the context of the "current" file. For example:

```handlebars
---
title: <%= blog.title %>
post: 1
heading: <%= blog.title %> | Blog <%= post %>
---
<h1>\{{title}}</h1>
<p class="heading">\{{heading}}</p>
```




### Options

#### cwd
Type: `String` (optional)
Default value: `''`

The `cwd` for paths defined in the helper.

#### sep
Type: `String`
Default value: `\n`

The separator to append after each inlined file.

#### compare
Type: `Function`
Default value: `function(a, b) {return a.index >= b.index ? 1 : -1;}`

Compare function for sorting the aggregated files.





### Defining options

#### "assemble" task options

> If you use Grunt and [Assemble](http://assemble.io), you can pass options from the `assemble` task in the Gruntfile to the helper.

In your project's Gruntfile, options for the `\{{#compose}}...\{{/compose}}` helper can be defined in the Assemble task options:

```javascript
assemble: {
  options: {
    helpers: ['helper-compose', 'other/helpers/*.js'],
    compose: {
      cwd: 'test/fixtures/includes',
      sep: '<!-- include -->',
      compare_fn: function(a, b) {
        return a.index >= b.index ? 1 : -1;
      }
    }
  },
  files: {}
}
```

Note that the options are defined in `options: {compose: {}}`, which is a [custom property](http://assemble.io/docs/Custom-Helpers.html) in the Assemble options.



### Examples

See examples of the `\{{compose}}` helper being used in the [yfm project](https://github.com/assemble/yfm):

#### example templates and content
* [the helper itself](https://github.com/assemble/yfm/blob/master/test/fixtures/compose.hbs)
* [content being composed by the helper](https://github.com/assemble/yfm/tree/master/test/fixtures/compose)
* [the compiled result](https://github.com/assemble/yfm/blob/master/test/actual/compose.html)

#### example options and context
* [defining helper options](https://github.com/assemble/yfm/blob/master/Gruntfile.js#L31-L35)
* [config data used in examples](https://github.com/assemble/yfm/blob/master/Gruntfile.js#L19)


#### all options

```js
assemble: {
  options: {
    compose: {
      cwd: 'test/fixtures/compose',
      sep: '<!-- include -->',
      compare: function(a, b) {
        return a.index >= b.index ? 1 : -1;
      }
    }
  }
}
```

#### cwd option

Instead of doing this:

```handlebars
\{{compose 'path/to/my/blog/posts/*.hbs'}}
  <h1>\{{post.title}}</h1>
  ...
\{{/compose}}
```

You could define the `cwd` in the `compose` options in your project's Gruntfile:

```javascript
assemble: {
  options: {
    helpers: ['helper-compose'],
    compose: {
      cwd: 'path/to/my/blog'
    }
  }
}
```
and then define paths in the templates like this:

```handlebars
\{{compose 'posts/*.hbs'}}
  <h1>\{{post.title}}</h1>
  ...
\{{/compose}}
```

### Usage example

Given you have this config in your project's gruntfile:

```js
// Project configuration.
grunt.initConfig({

  // Metadata for our blog.
  blog: require('./test/fixtures/blog/blog.yml'),

  assemble: {
    options: {
      helpers: ['helper-compose'],
      compose: {
        cwd: 'blog',
        sep: '<!-- post -->'
      },
      blog: {
        src: ['index.hbs'],
        dest: 'blog/'
      }
    }
  }
});
```

Our `index.hbs` file contains the following:


```handlebars
<!-- post -->
\{{#compose 'posts/*.hbs'}}
  <h1>\{{blog.title}}</h1>
  <h2>Post title: \{{title}}</h2>
  <p>Post \{{{content}}}</p>
\{{/compose}}
```

And the files we want to compose include these Lo-Dash and Handlebars templates:


```handlebars
---
title: Alpha post
---

This is the \{{title}}, which should be inserted in the composed result.
```

The result, `blog/index.html` would contain something like:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Brilliant Blog</title>
  </head>
  <body>

    <!-- post -->
    <h1>My Brilliant Blog</h1>
    <h2>Post title: Alpha</h2>
    <p>Post This is the Alpha post, which should be inserted in the composed result. </p>

    <!-- post -->
    <h1>My Brilliant Blog</h1>
    <h2>Post title: Beta</h2>
    <p>Post This is the Beta post, which should be inserted in the composed result. </p>

    <!-- post -->
    <h1>My Brilliant Blog</h1>
    <h2>Post title: Gamma</h2>
    <p>Post This is the Gamma post, which should be inserted in the composed result. </p>
  </body>
</html>
```


### Author

**Jon Schlinkert**

+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)
+ [github/jonschlinkert](http://github.com/jonschlinkert)


### License and Copyright
Licensed under the [MIT License](./LICENSE-MIT)
Copyright (c) Jon Schlinkert, contributors.