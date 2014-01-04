#### \{{extend}}
_Imports a partial into the current template. If that partial contains `{{block}}` sections, they can be altered by `{{content}}` blocks inside the extend._

Parameters: partial `string` The name of the partial to import
Default: `undefined`



##### Example #1:

A partial named "panel" contains the following:

```html
<div class="panel panel-default">
  <div class="panel-heading">
    {{#block "panelHeading"}}<h3 class="panel-title">{{block "panelTitle"}}</h3>{{/block}}
  </div>
  <div class="panel-body">
    {{block "panelBody"}}
  </div>
</div>
```

This would be used in a template like so:

```html
{{#extend "panel"}}
  {{#content "panelTitle"}}This is my panel title{{/content}}
  {{#content "panelBody"}}
    <p>This is some panel content</p>
  {{/content}}
{{/extend}}
```

This produces:

```html
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">This is my panel title</h3>
  </div>
  <div class="panel-body">
    <p>This is some panel content</p>
  </div>
</div>
```

_Note that content was only defined for `panelTitle`, not `panelHeading`, so the h3 was not replaced.  Blocks are only altered if content is defined for that block._

##### Example #2:

Partial template "pageFoundation":

```html
<!DOCTYPE html>
<html lang="en-us">
  <head>
  {{#block "head"}}
    <title>{{title}}</title>
  {{/block}}
  </head>
  <body>
    <div class="site">
      <header>
        {{#block "header"}}
        <h1>{{title}}</h1>
        {{/block}}
      </header>
      <section>
        {{{block "body"}}}
      </section>
      <footer>
        {{#block "footer"}}
          <small>&copy; 2013</small>
        {{/block}}
      </footer>
    </div>
    {{{block "foot"}}}
  </body>
</html>
```

Extending template:

```html
{{#extend "pageFoundation"}}
  {{#content "head" mode="append"}}
  <link rel="stylesheet" href="/assets/css/home.css" />
  {{/content}}

  {{#content "body"}}
    <h2>Welcome Home</h2>

    <ul>
      {{#items}}
        <li>{{.}}</li>
      {{/items}}
    </ul>
  {{/content}}

  {{#content "foot" mode="prepend"}}
    <script src="assets/js/analytics.js"></script>
  {{/content}}
{{/extend}}
```

When given the data:

```js
{
  title: 'Layout Test',
  items: [
    'apple',
    'orange',
    'banana'
  ]
}
```

Produces:

```
<!DOCTYPE html>
<html lang="en-us">
  <head>
    <title>Layout Test</title>
    <link rel="stylesheet" href="/assets/css/home.css" />
  </head>
  <body>
    <div class="site">
      <header>
        <h1>Layout Test</h1>
      </header>
      <section>
        <h2>Welcome Home</h2>

        <ul>
            <li>apple</li>
            <li>orange</li>
            <li>banana</li>
        </ul>
      </section>
      <footer>
          <small>&copy; 2013</small>
      </footer>
    </div>
    <script src="assets/js/analytics.js"></script>
  </body>
</html>
```