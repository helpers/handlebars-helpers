#### ul
_Creates an unordered list._

Params: `Hash|HTML attributes`, `Optional`

HTML attributes to use on the `ul` element. 
``` js
// Data
collection = [
  name: 'Leela'
  deliveries: 8021,
  name: 'Bender'
  deliveries: 239,
  name: 'Fry'
  deliveries: 1
]
```
``` hbs
// Template
\{{#ul collection class="deliveries-list"}}
  \{{name}} - \{{inflect deliveries "delivery" "deliveries" true}}
\{{/ul}}
```
``` html
// Result:
<ul class="deliveries-list">
  <li> Leela - 8021 deliveries </li>
  <li> Bender - 239 deliveries </li>
  <li> Fry - 1 delivery </li>
</ul>
```
#### ol
_Same as the `ul` helper but creates and ordered list. Returns `<br>` tags based on a count._

Params: `Hash`, `HTML attributes`, `Optional`

HTML attributes to use on the `ol` element. 
``` js
// Data
collection = [
  name: 'Leela'
  deliveries: 8021,
  name: 'Bender'
  deliveries: 239,
  name: 'Fry'
  deliveries: 1
]
```
``` hbs
// Template
\{{#ol collection class="deliveries-list"}}
  \{{name}} - \{{inflect deliveries "delivery" "deliveries" true}}
\{{/ol}}
```
``` html
// Result:
<ol class="deliveries-list">
  <li> Leela - 8021 deliveries </li>
  <li> Bender - 239 deliveries </li>
  <li> Fry - 1 delivery </li>
</ol>
```

#### br
Params: `Integer|Count`, `Optional`

The number of `br` elements to render. 

`template.hbs`
``` hbs
\{{br 5}}
```
renders to:
``` html
`<br><br><br><br><br>`
```