#### \{{parseJSON}}

> This block helper parses "inline" JSON and passes it into the templates or partial contained therein.

Credit: [Keegan Street](https://github.com/keeganstreet) from [this issue](https://github.com/assemble/assemble/issues/228#issuecomment-20855238)

The helper:

```js
parseJSON = function(data, options) {
  return options.fn(JSON.parse(data));
};
```

Templates (here we are using a partial, `input.hbs`):

```html
<div>
  <label for="\{{id}}">\{{label}}</label>
  <input type="text" id="\{{id}}">
</div>
```

And we include our partial like this:

```html
\{{#parseJSON '{"id": "firstname", "label": "First name"}'}}
  \{{> input }}
\{{/parseJSON}}
```

> Instead of having to write out the same HTML over and over again, we can define it once in a partial and then include that partial inline whenever we need it. Typically Handlebars requires data to be defined separately from  templates. But in this use case it is easier to define the options for the partial where we include the partial. These options aren't "data" that should be separated from the template; they are really just options for the template. <br>
> -- Keegan Street (@keeganstreet)