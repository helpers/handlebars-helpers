#### {{first}}
_Returns the first item in a collection._
<br>Parameters: `none`
``` js
// Data
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]

```
``` xml
// Template
{{first collection}}

// Result:
Amy Wong
```

#### {{withFirst}}
_Use the first item in a collection inside a block._
<br>Parameters: `none`
``` js
// Data
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]
```
``` xml
// Template
{{#withFirst collection}}
  <p>{{this}} is smart.</p>
{{/withFirst}}

// Result:
<p>Amy Wong is smart.</p>
```

#### {{last}}
_Returns the last item in a collection. Opposite of `first`._
<br>Parameters: `none`
``` js
// Data
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]
```
``` xml
// Template
{{last collection}}

// Result:
Scruffy
```

#### {{withLast}}
_Use the last item in a collection inside a block. Opposite of `withFirst`._
<br>Parameters: `none`
``` js
// Data
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]
```
``` xml
// Template
{{#withLast collection}}
  <p>{{this}} is lazy.</p>
{{/withLast}}

// Result:
<p>Scruffy is lazy.</p>
```

#### {{after}}
_Returns all of the items in the collection after the specified count._
<br>Parameters: count `int` - How many items to omit from the beginning. (Required)
```
// Date
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]
```
``` xml
// Template
{{after collection 5}}

// Result:
Leela, Professor Farnsworth, Scruffy
```

#### {{withAfter}}
_Use all of the items in the collection after the specified count inside a block._
<br>Parameters: count `int` - How many items to omit from the beginning. (Required)
``` js
// Data
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]
```
``` xml
// Template
{{#withAfter collection 5}}
    {{titleize this}}
{{/withAfter}}

// Result:
Leela Professor Farnsworth Scruffy
```

#### {{before}}
_Returns all of the items in the collection before the specified count. Opposite of `after`._
<br>Parameters: count `int` - How many items to omit from the end. (Required)
``` js
// Data
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]
```
``` xml
// Template
{{before collection 5}}

// Result:
Amy Wong, Bender, Dr. Zoidberg
```

#### {{withBefore}}
_Use all of the items in the collection before the specified count inside a block. Opposite of `withAfter`._
<br>Parameters: count `int` - How many items to omit from the end. (Required)
``` js
// Data
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]
```
``` xml
// Template
{{#withBefore collection 5}}
    {{reverse this}}
{{/withBefore}}

// Result:
gnoW ymA redneB grebdioZ .rD
```

#### {{join}}
_Joins all elements of a collection into a string using a separator if specified._
<br>Parameters: separator `string` - A string to use as a separator between the items. (Optional)
``` js
// Data
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]
```
``` xml
// Template
{{join collection " & "}}

// Result:
Amy Wong & Bender & Dr. Zoidberg & Fry & Hermes Conrad & Leela & Professor Farnsworth & Scruffy
```

#### {{sort}}
_Returns the collection sorted._
Parameters: `none`
``` js
// Data
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]
```
``` xml
// Template
{{sort collection}}

// Result:
Amy Wong, Bender, Dr. Zoidberg, Fry, Hermes Conrad, Leela, Professor Farnsworth, Scruffy
```

#### {{withSort}}
_Uses the sorted collection inside the block._
<br>Parameters: field `string` - String name of the field or property to sort by. (Optional)
``` js
// Data
collection = [
  name: 'Leela'
  deliveries: 8021,

  name: 'Bender'
  deliveries: 239,

  name: 'Fry'
  deliveries: -12
]

```
``` xml
// Template
{{#withSort collection "deliveries"}}
    {{name}}: {{deliveries}} <br>
{{/withSort}}

// Result:
Fry: -12
Bender: 239
Leela: 8021
```

#### {{length}}
_Returns the length of the collection._
<br>Parameters: `none`
``` js
// Data
collection = [
  'Amy Wong', 
  'Bender', 
  'Dr. Zoidberg', 
  'Fry', 
  'Hermes Conrad', 
  'Leela', 
  'Professor Farnsworth', 
  'Scruffy'
]

```
``` xml
// Template
{{length collection}}

// Result:
8
```

#### {{lengthEqual}}
_Conditionally render a block based on the length of a collection._
<br>Parameters: length `int` - The value to test against. (Required)
``` js
// Data
collection = [
  name: 'Leela'
  deliveries: 8021,

  name: 'Bender'
  deliveries: 239,

  name: 'Fry'
  deliveries: -12
]
```
``` xml
// Template
{{#lengthEqual collection 3}}
        There are 3 people in Planet Express.
{{else}}
        This is not Planet Express.
{{/lengthEqual}}

// Result:
There are 3 people in Planet Express.
```

#### {{empty}}
_Conditionally render a block if the collection is empty._
<br>Parameters: `none`
``` js
// Data
collection = []
```
``` xml
// Template
{{#empty collection}}
        Good news everyone!
{{else}}
        Bad news everyone!
{{/empty}}

// Result:
Good news everyone!
```
#### {{any}}
_Conditionally render a block if the collection isn't empty. Opposite of `empty`_
<br>Parameters: `none`
``` js
// Data
collection = ['Professor Farnsworth']
```
``` xml
// Templates
{{#any collection}}
        Good news everyone!
{{else}}
        Bad news everyone!
{{/any}}

// Result:
Good news everyone!
```

#### {{inArray}}
_Conditionally render a block if a specified value is in the collection._
<br>Parameters: value `string|int` - A value to test against. (Required)
``` js
// Data
collection = ['Professor Farnsworth', 'Fry', 'Bender']
```
``` xml
// Templates
{{#inArray collection "Fry"}}
        I'm walking on sunshine!
{{else}}
        I'm walking on darkness.
{{/any}}

// Result:
I'm walking on sunshine!
```

#### {{eachIndex}}
_Current implementation of the default Handlebars loop helper {{#each}} adding index (0-based index) to the loop context._
<br>Parameters: `none`
``` js
// Data
collection = ['Professor Farnsworth', 'Fry', 'Bender']
```
``` xml
// Templates
{{#eachIndex collection}}
    {{this}} is {{index}}
{{/eachIndex}}

// Result:
Professor Farnsworth is 0, Fry is 1, Bender is 2
```

#### {{eachProperty}}
_Loop through an objects properties_
<br>Parameters: `none`
``` js
// Data
TODO...
```
``` xml
// Templates
{{#eachProperty object}}
    {{property}}: {{value}}<br/>
{{/eachProperty }}

// Result
TODO...
```