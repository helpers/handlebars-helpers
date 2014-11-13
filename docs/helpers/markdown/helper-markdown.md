#### \{{markdown}}
_Block helper for embedding markdown content inside HTML, and rendering it to HTML at build time._

Template:

```html
<h1>My Blog</h1>

\{{#markdown}}
## Post of the day

Vestibulum posuere, quam sed bibendum posuere
Pellentesque habitant morbi tristique senectus
Pellentesque nulla augue, volutpat vitae

[Read more...](https://github.com/assemble/jonschlinkert)

In hac habitasse platea dictumst. Morbi non rutrum risus.

\{{/markdown}}
```

Renders to:

```html
<h1>My Blog</h1>

<h2>Post of the day</h2>

<p>Vestibulum posuere, quam sed bibendum posuere
Pellentesque habitant morbi tristique senectus
Pellentesque nulla augue, volutpat vitae</p>

<a href="https://github.com/assemble/jonschlinkert">Read more...</a>

<p>In hac habitasse platea dictumst. Morbi non rutrum risus.</p>
```
