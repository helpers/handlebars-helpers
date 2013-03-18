#### log
_Simple `console.log()`_
<br>Parameters: `none`
``` html
// Template
\{{log "Hi console :)"}}

// Result:
Hi console :)
```

#### debug
_Simple `console.debug()` that shows the current context._
<br>Parameters: `none`
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
``` html
// Template
\{{#withFirst collection}}
\{{debug name}}
\{{/withFirst}}

// Result:
Context: { deliveries: 8021, name: "Leela" }
Value: Leela
```