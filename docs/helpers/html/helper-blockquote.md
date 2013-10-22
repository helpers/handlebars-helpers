{{#todo}}
#### \{{blockquote}}
**Planned...**

_Create a blockquote. Outputs a string with a given attribution as a quote._

Template:

```html
\{{#blockquote '@doowb' 'http://github.com/source/for/your/quote' 'This is the title' }}
  This is your quote.
\{{/blockquote}}
```
Renders to:

```html
<blockquote>
  <p>This is your quote.</p>
  <footer>
    <strong>@doowb</strong>
    <cite>
      <a href="http://github.com/source/for/your/quote">This is the title</a>
    </cite>
  </footer>
</blockquote>
```
{{/todo}}