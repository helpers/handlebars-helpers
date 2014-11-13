#### \{{any}}
_Conditionally render a block if the collection isn't empty. Opposite of `empty`_
<br>Parameters: `none`

Data:

```json
"collection": ["Professor Farnswor"]
```
Templates:

```html
\{{#any collection}}
  Good news everyone!
\{{else}}
  Bad news everyone!
\{{/any}}
```

Renders to:

```
Good news everyone!
```