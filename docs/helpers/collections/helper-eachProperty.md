#### \{{eachProperty}}
_Uses the key and value of each property in an object to render a block._
<br>Parameters: `none`

Data:

```json
"collection": {
  "one": 1,
  "two": 2
}
```
Template:

```html
\{{#eachProperty object}}
    \{{key}} - \{{value}}<br/>
\{{/eachProperty }}
```
Renders to:

```
one - 1
two - 2
```