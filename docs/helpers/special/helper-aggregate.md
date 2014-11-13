### \{{aggregate}} [![NPM version](https://badge.fury.io/js/helper-aggregate.png)](http://badge.fury.io/js/helper-aggregate)

> \{{aggregate}} handlebars helper. Inlines content from multiple files optionally using wildcard (globbing/minimatch) patterns, extracts YAML front matter to pass to context for each file. Accepts compare function as 3rd parameter for sorting inlined files.

### Quickstart
In the root of your project, run the following in the command line:

```bash
npm i helper-aggregate --save-dev
```

### Usage

```handlebars
\{{aggregate 'path/to/*.hbs'}}
```

#### Usage in Assemble
In your Gruntfile, simply add `helper-aggregate` to the `helpers` property in the [Assemble](http://assemble.io) task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      // must be in devDependencies for assemble
      // to automatically resolve the helper
      helpers: ['helper-aggregate']
    }
    ...
  }
});
```

With that completed, you may now use the `\{{aggregate}}` helper in your Assemble project.

#### Usage examples
See examples of the `\{{aggregate}}` helper being used in the [yfm project](https://github.com/assemble/yfm):

##### templates and content
* [the helper itself](https://github.com/assemble/yfm/blob/master/test/fixtures/aggregate.hbs)
* [content being aggregated by the helper](https://github.com/assemble/yfm/tree/master/test/fixtures/book)
* [the compiled result](https://github.com/assemble/yfm/blob/master/test/actual/aggregate.html)

##### options and context
* [defining helper options](https://github.com/assemble/yfm/blob/master/Gruntfile.js#L31-L35)
* [config data used in examples](https://github.com/assemble/yfm/blob/master/Gruntfile.js#L19)



### Options
#### sep
Type: `String`
Default value: `\n`

The separator to append after each inlined file.



### Setting options
#### hash options
Set options as hash arguments.


```handlebars
\{{aggregate 'my/book/chapters/*.hbs' sep="<!- Chapter -->"}}
```


#### "assemble" task options
Pass [Assemble](http://assemble.io) options into the helper.

In your project's Gruntfile, options for the `\{{aggregate}}` helper can be defined in the Assemble task options:

```javascript
assemble: {
  options: {
    helpers: ['helper-aggregate'],
    aggregate: {
      sep: '\n\n',
      compare_fn: function(a, b) {
        return a.index >= b.index ? 1 : -1;
      }
    }
  }
  ...
}
```

Note that the options are defined in the [custom property](http://assemble.io/docs/Custom-Helpers.html), `aggregate`, not on the `options` object itself.


### Lo-Dash templates

The helper will also process any valid Lo-Dash templates in the YAML front matter of targeted files, using `grunt.config.data` and the context of the "current" file. For example:

Given you have this in the gruntfile:

```js
// Project configuration.
grunt.initConfig({

  // Metadata for our book.
  book: require('./test/fixtures/book/book.yml'),

  assemble: {
    options: {
      helpers: ['helper-aggregate'],
      aggregate: {
        sep: '<!-- chapter -->',
        compare_fn: function(a, b) {
          return a.index >= b.index ? 1 : -1;
        }
      },
      book: {
        src: ['chapters/*.hbs'],
        dest: 'book/'
      }
    }
  }
});
```

And these Lo-Dash and Handlebars templates:

```handlebars
---
title: <%= book.title %>
chapter: 1
intro: Chapter <%= chapter %>
---
<h1>Content from \{{title}}</h1>
<p class="intro">\{{intro}}</p>
<p class="chapter">Chapter: \{{chapter}}</p>
```

would result in:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Amazing Book</title>
  </head>
  <body>

    <!-- chapter -->
    <h1>Content from My Amazing Book</h1>
    <p class="intro">Chapter 1</p>
    <p class="chapter">Chapter: 1</p>

    <!-- chapter -->
    <h1>Content from My Amazing Book</h1>
    <p class="intro">Chapter 2</p>
    <p class="chapter">Chapter: 2</p>

    <!-- chapter -->
    <h1>Content from My Amazing Book</h1>
    <p class="intro">Chapter 3</p>
    <p class="chapter">Chapter: 3</p>
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