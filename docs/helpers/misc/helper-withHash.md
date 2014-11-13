#### \{{#withHash}}
_Creates a new context from the attribute hash_
<br>Parameters: key/values - pairs which will be used to create context

Data:

```json
{
  "text": "Hello!"
}
```

Template:

```html
\{{#withHash subject="Feedback" message=this.text}}
    <h1>\{{subject}}</h1>
    <div>\{{message}}</div>
\{{/withHash}}
```

Renders to:

```html
<h1>Feedback</h1>
<div>Hello!</div>
```
