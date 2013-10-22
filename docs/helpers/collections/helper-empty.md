#### \{{empty}}
_Conditionally render a block if the collection is empty._
<br>Parameters: `none`

Data:

```json
"collection": []
```
Template:

```html
\{{#empty collection}}
    Good news everyone!
\{{else}}
    Bad news everyone!
\{{/empty}}
```

Renders to:

```
Good news everyone!
```
