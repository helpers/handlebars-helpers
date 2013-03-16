# Helpers Library

> A growing collection of useful helpers for Assemble.


## Handlebars
[Handlebars.js](https://github.com/wycats/handlebars.js) is currently the default template library for [assemble](http://github.com/assemble/assemble).


### Equals
#### If x Equals y
Parameters: `none`
``` handlebars
{{#if_eq x compare=y}} ... {{/if_eq}}
```

#### Unless x Equals y
Parameters: `none`
``` handlebars
{{#unless_eq x compare=y}} ... {{/unless_eq}}
```



### Greater Than
#### If x > y
Parameters: `none`
``` handlebars
{{#if_gt x compare=y}} ... {{/if_gt}}
```

#### Unless x > y
Parameters: `none`
``` handlebars
{{#unless_gt x compare=y}} ... {{/unless_gt}}
```



### Greater Than or Equal To
#### If x >= y
Parameters: `none`
``` handlebars
{{#if_gteq x compare=y}} ... {{/if_gteq}}
```

#### Unless x >= y
Parameters: `none`
``` handlebars
{{#unless_gteq x compare=y}} ... {{/unless_gteq}}
```



### Less Than
#### If x < y
Parameters: `none`
``` handlebars
{{#if_lt x compare=y}} ... {{/if_lt}}
```

#### Unless x < y
Parameters: `none`
``` handlebars
{{#unless_lt x compare=y}} ... {{/unless_lt}}
```



### Less Than or Equal To
#### If x <= y
Parameters: `none`
``` handlebars
{{#if_lteq x compare=y}} ... {{/if_lteq}}
```

#### Unless x <= y
Parameters: `none`
``` handlebars
{{#unless_lteq x compare=y}} ... {{/unless_lteq}}
```



### Strings
#### hyphenate
Parameters: `none`
<br>Description: _Replace spaces in string with hyphens._
``` handlebars
{{hyphenate "make this all hyphenated"}}

// Result 
make-this-all-hyphenated
```

#### dashify
Parameters: `none`
<br>Description: _Same as `hyphenate`, but replaces dots in string with hyphens._
``` handlebars
{{dashify "make.this.all.hyphenated"}}

// Result
make-this-all-hyphenated
```

#### lowercase
Parameters: `none`
<br>Description: _Turns a string to lowercase._
``` handlebars
{{lowercase "MAKE THIS ALL LOWERCASE"}}

// Result
make this all lowercase
```

#### uppercase
Parameters: `none`
<br>Description: Turns a string to uppercase. Opposite of `{{lowercase}}`.
``` handlebars
 {{uppercase "make this all uppercase"}}

// Result
MAKE THIS ALL UPPERCASE
```

#### capitalizeFirst
Parameters: `none`
<br>Description: Capitalizes the first word in a string.
``` handlebars
{{capitalizeFirst "capitalize first word in this sentence"}}

// Result
Capitalize first word in this sentence
```

#### capitalizeEach
Parameters: `none`
<br>Description: Capitalizes each word in a string.
``` handlebars
{{capitalizeEach "capitalize EACH word in this sentence"}}

// Result
Capitalize EACH Word In This Sentence
```

#### titleize
Parameters: `none`
Description: Capitalizes all words within a string. Taken from the templating library [Walrus](https://github.com/jeremyruppel/walrus) by [Jeremy Ruppel](https://github.com/jeremyruppel).
``` handlebars
{{titleize "capitalize EACH word in this sentence"}}

// Result
Capitalize Each Word In This Sentence.
```

#### sentence
Parameters: `none`
Description: Capitalizes the first word of each sentence in a string and converts the rest of the sentence to lowercase.
``` handlebars
{{sentence "capitalize the FIRST word in each sentence. but make the OTHER words lowercase."}}

// Result
Capitalize the first word in each sentence. But make the other words lowercase.
```

#### reverse
Parameters: `none`
Description: Reverses a string.
``` handlebars
{{reverse "bender should NOT be allowed on TV."}}

// Result
.VT no dewolla eb TON dluohs redneb
```

#### truncate
Parameters: 
<br>length: `int`- The number of characters to keep (Required). 
<br>omission: `string` - A string to denote an omission (Optional). 
<br>Description: Truncates a string given a specified `length`, providing a custom string to denote an `omission`.
``` handlebars
{{truncate "Bender should not be allowed on tv." 31 "..."}}

// Result
Bender should not be allowed...
```

#### center
Parameters:
<br>spaces: `int` - The number of spaces. (Required)
<br>Description: Centers a string using non-breaking spaces.
``` handlebars
{{center "Bender should not be allowed on tv." 10}}

// Result:
|              Bender should not be allowed on tv.              |
```

#### newLineToBr
Parameters: `none`
<br>Description: Converts new line characters `\n` to line breaks `<br>`.
```
{{{newLineToBr "Bender \n should \n not \n be allowed on tv."}}}

// Result:
Bender <br> should <br> not <br> be allowed on tv.
````

#### nl2br
Parameters: `none`
<br>Description: Convert new lines (`\r\n`, `\n\r`, `\r`, `\n`) to line breaks
``` handlebars
{{nl2br description}}

// Result: 
<br>
```



### Collections

#### first
Parameters: `none`
<br>Description: Returns the first item in a collection.
```
// Data
collection = ['Amy Wong', 'Bender', 'Dr. Zoidberg', 'Fry', 'Hermes Conrad', 'Leela', 'Professor Farnsworth', 'Scruffy']

// Template
{{first collection}}

// Result:
Amy Wong
```

#### withFirst
Parameters: `none`
<br>Description: Use the first item in a collection inside a block.
```
// Data
collection = ['Amy Wong', 'Bender', 'Dr. Zoidberg', 'Fry', 'Hermes Conrad', 'Leela', 'Professor Farnsworth', 'Scruffy']

// Template
{{#withFirst collection}}
  <p>{{this}} is smart.</p>
{{/withFirst}}

// Result:
<p>Amy Wong is smart.</p>
```

#### last
Parameters: `none`
<br>Description: Returns the last item in a collection. Opposite of `first`.
```
// Data
collection = ['Amy Wong', 'Bender', 'Dr. Zoidberg', 'Fry', 'Hermes Conrad', 'Leela', 'Professor Farnsworth', 'Scruffy']

// Template
{{last collection}}

// Result:
Scruffy
```

#### withLast
Parameters: `none`
<br>Description: Use the last item in a collection inside a block. Opposite of `withFirst`.
```
// Data
collection = ['Amy Wong', 'Bender', 'Dr. Zoidberg', 'Fry', 'Hermes Conrad', 'Leela', 'Professor Farnsworth', 'Scruffy']

// Template
{{#withLast collection}}
  <p>{{this}} is lazy.</p>
{{/withLast}}

// Result:
    <p>Scruffy is lazy.</p>
```

#### after
Parameters:
<br>count `int` - How many items to omit from the beginning. (Required)
<br>Description: Returns all of the items in the collection after the specified count.
```
// Date
collection = ['Amy Wong', 'Bender', 'Dr. Zoidberg', 'Fry', 'Hermes Conrad', 'Leela', 'Professor Farnsworth', 'Scruffy']

// Template
{{after collection 5}}

// Result:
Leela, Professor Farnsworth, Scruffy
```

#### withAfter
Parameters:
<br>count `int` - How many items to omit from the beginning. (Required)
<br>Description: Use all of the items in the collection after the specified count inside a block.
```
// Data
collection = ['Amy Wong', 'Bender', 'Dr. Zoidberg', 'Fry', 'Hermes Conrad', 'Leela', 'Professor Farnsworth', 'Scruffy']

// Template
{{#withAfter collection 5}}
    {{titleize this}}
{{/withAfter}}

// Result:
Leela Professor Farnsworth Scruffy
```

#### before
Parameters:
<br>count `int` - How many items to omit from the end. (Required)
<br>Description: Returns all of the items in the collection before the specified count. Opposite of `after`.
```
// Data
collection = ['Amy Wong', 'Bender', 'Dr. Zoidberg', 'Fry', 'Hermes Conrad', 'Leela', 'Professor Farnsworth', 'Scruffy']

// Template
{{before collection 5}}

// Result:
Amy Wong, Bender, Dr. Zoidberg
```

#### withBefore
Parameters:
<br>count `int` - How many items to omit from the end. (Required)
<br>Description: Use all of the items in the collection before the specified count inside a block. Opposite of `withAfter`.
```
// Data
collection = ['Amy Wong', 'Bender', 'Dr. Zoidberg', 'Fry', 'Hermes Conrad', 'Leela', 'Professor Farnsworth', 'Scruffy']

// Template
{{#withBefore collection 5}}
    {{reverse this}}
{{/withBefore}}

// Result:
gnoW ymA redneB grebdioZ .rD
```

#### join
Parameters:
<br>separator `string` - A string to use as a separator between the items. (Optional)
<br>Description: Joins all elements of a collection into a string using a separator if specified.
``` handlebars
// Data
collection = ['Amy Wong', 'Bender', 'Dr. Zoidberg', 'Fry', 'Hermes Conrad', 'Leela', 'Professor Farnsworth', 'Scruffy']

// Template
{{join collection " & "}}

// Result:
Amy Wong & Bender & Dr. Zoidberg & Fry & Hermes Conrad & Leela & Professor Farnsworth & Scruffy
```
#### sort
Parameters: `none`
<br>Description: Returns the collection sorted.
```
// Data
collection = ['Dr. Zoidberg', 'Fry', 'Amy Wong', 'Professor Farnsworth', 'Bender', 'Hermes Conrad', 'Leela', 'Scruffy']

// Template
{{sort collection}}

// Result:
Amy Wong, Bender, Dr. Zoidberg, Fry, Hermes Conrad, Leela, Professor Farnsworth, Scruffy
```

#### withSort
Parameters:
<br>field `string` - String name of the field or property to sort by. (Optional)
<br>Description: Uses the sorted collection inside the block.
```
// Data
collection = [
  name: 'Leela'
  deliveries: 8021,

  name: 'Bender'
  deliveries: 239,

  name: 'Fry'
  deliveries: -12
]

// Template
{{#withSort collection "deliveries"}}
    {{name}}: {{deliveries}} <br>
{{/withSort}}

// Result:
Fry: -12
Bender: 239
Leela: 8021
```

#### length
Parameters: `none`
<br>Description: Returns the length of the collection.
```
// Data
collection = ['Dr. Zoidberg', 'Fry', 'Amy Wong', 'Professor Farnsworth', 'Bender', 'Hermes Conrad', 'Leela', 'Scruffy']

// Template
{{length collection}}

// Result:
8
```

#### lengthEqual
Parameters:
<br>length `int` - The value to test against. (Required)
<br>Description: Conditionally render a block based on the length of a collection.
```
// Data
collection = [
  name: 'Leela'
  deliveries: 8021,

  name: 'Bender'
  deliveries: 239,

  name: 'Fry'
  deliveries: -12
]

// Template
{{#lengthEqual collection 3}}
        There are 3 people in Planet Express.
{{else}}
        This is not Planet Express.
{{/lengthEqual}}

// Result:
There are 3 people in Planet Express.
```

#### empty
Parameters: `none`
<br>Description: Conditionally render a block if the collection is empty.
```
// Data
collection = []

// Template
{{#empty collection}}
        Good news everyone!
{{else}}
        Bad news everyone!
{{/empty}}

// Result:
Good news everyone!
```
#### any
Parameters: `none`
<br>Description: Conditionally render a block if the collection isn't empty. Opposite of `empty`
```
// Data
collection = ['Professor Farnsworth']

// Templates
{{#any collection}}
        Good news everyone!
{{else}}
        Bad news everyone!
{{/any}}

// Result:
Good news everyone!
```

#### inArray
Parameters:
<br>value `string|int` - A value to test against. (Required)
<br>Description: Conditionally render a block if a specified value is in the collection.
```
// Data
collection = ['Professor Farnsworth', 'Fry', 'Bender']

// Templates
{{#inArray collection "Fry"}}
        I'm walking on sunshine!
{{else}}
        I'm walking on darkness.
{{/any}}

// Result:
I'm walking on sunshine!
```

#### eachIndex
Parameters: `none`
<br>Description: Current implementation of the default Handlebars loop helper {{#each}} adding index (0-based index) to the loop context.
```
// Data
collection = ['Professor Farnsworth', 'Fry', 'Bender']

// Templates
{{#eachIndex collection}}
    {{this}} is {{index}}
{{/eachIndex}}

// Result:
Professor Farnsworth is 0, Fry is 1, Bender is 2
```

### Math

#### add
Parameters:
<br>value `int` - The number to add to the expression. (Required)
<br>Description: Returns the sum of two numbers.
```
// Data
value = 5

// Template
{{add value 5}}

// Result:
10
```

#### subtract
Parameters:
<br>value `int` - The number to subtract from the expression. (Required)
<br>Description: Returns the difference of two numbers. Opposite of `add`
```
// Data
value = 5

// Template
{{subtract value 5}}

// Result
Result:
0
```

#### divide

Returns the division of two numbers.
Parameters:


    value `int` - The number to divide the expression. (Required)
<br>Example:

    value = 5

{{divide value 5}}

Result:
    1

#### multiply

Returns the multiplication of two numbers.
Parameters:


    value `int` - The number to multiply the expression. (Required)
<br>Example:

    value = 5

{{multiply value 5}}

Result:
    25

#### floor

Returns the value rounded down to the nearest integer.
Parameters: `none`

<br>Example:

    value = 5.6

{{floor value}}

Result:
    5

#### ceil

Returns the value rounded up to the nearest integer.
Parameters: `none`

<br>Example:

    value = 5.6

{{ceil value}}

Result:
    6

#### round

Returns the value rounded to the nearest integer.
Parameters: `none`

<br>Example:

    value = 5.69

{{round value}}

Result:
    6

### Numbers

#### toFixed

Returns exactly `digits` after the decimal place. The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it has the specified length.
Parameters:


    digits `int` - The number of digits to appear after the decimal point. (Optional)
<br>Example:

    value = 5.53231

{{toFixed value 3}}

Result:
    5.532

#### toPrecision

Returns the number in fixed-point or exponential notation rounded to `precision` significant digits.
Parameters:


    precision `int` - The number of digits. If omitted, it returns the entire number (without any formatting). (Optional)
<br>Example:

    value = 555.322

{{toPrecision value 4}}

Result:
    555.3


#### toExponential

Returns the number in exponential notation with one digit before the decimal point, rounded to `fractions` digits after the decimal point.
Parameters:


    fractions `int` - An integer specifying the number of digits after the decimal point. (Optional)
<br>Example:

    value = 5

{{toExponential value 5}}

Result:
    5.00000e+0

#### toInt

Returns an integer.
Parameters: `none`

<br>Example:

    value = '22.2abc'

{{toInt value}}

Result:
    22

#### toFloat

Returns a floating point number.
Parameters: `none`

<br>Example:

    value = '22.2abc'

{{toFloat value}}

Result:
    22.2

#### addCommas

Adds commas to a number.
Parameters: `none`

<br>Example:

    value = 2222222

{{addCommas value}}

Result:
    2,222,222



### Comparisons

#### is

Conditionally render a block if the condition is true.
Parameters:


    value `string|int` - the value to test against.
<br>Example:

    number = 5

{{#is number 5}}
        Kiss my shiny metal ass!
{{else}}
        Never mind :(
{{/is}}

Result:
    Kiss my shiny metal ass!

#### isnt

Conditionally render a block if the condition is false. Opposite of `is`.
Parameters:


    value `string|int` - the value to test against.
<br>Example:

    number = 5

{{#isnt number 5}}
        Kiss my shiny metal ass!
{{else}}
        Never mind :(
{{/isnt}}

Result:
    Never mind :(

#### gt

Conditionally render a block if the value is greater than a given number.
Parameters:


    value `string|int` - the value to test against.
<br>Example:

    number = 5

{{#gt number 8}}
        Kiss my shiny metal ass!
{{else}}
        Never mind :(
{{/gt}}

Result:
   Never mind :(

#### gte

Conditionally render a block if the value is greater or equal than a given number.
Parameters:


    value `string|int` - the value to test against.
<br>Example:

    number = 5

{{#gte number 5}}
        Kiss my shiny metal ass!
{{else}}
        Never mind :(
{{/gte}}

Result:
    Kiss my shiny metal ass!

#### lt

Conditionally render a block if the value is less than a given number. Opposite of `gt`.
Parameters:


    value `string|int` - the value to test against.
<br>Example:

    number = 5

{{#lt number 3}}
        Kiss my shiny metal ass!
{{else}}
        Never mind :(
{{/lt}}

Result:
    Never mind :(

#### lte

Conditionally render a block if the value is less or equal than a given number. Opposite of `gte`.
Parameters:


    value `string|int` - the value to test against.
<br>Example:

    number = 5

{{#lte number 5}}
        Kiss my shiny metal ass!
{{else}}
        Never mind :(
{{/lte}}

Result:
    Kiss my shiny metal ass!

#### or

Conditionally render a block if one of the values is truthy.
Parameters:


    values `string|int` - the values to test against.
<br>Example:

    great = no
    magnificent = true

{{#or great magnificent}}
        Kiss my shiny metal ass!
{{else}}
        Never mind :(
{{/or}}

Result:
    Kiss my shiny metal ass!

#### and

Conditionally render a block if both values are truthy.
Parameters:


    values `string|int` - the values to test against.
<br>Example:

    great = true
    magnificent = true

{{#and great magnificent}}
        Kiss my shiny metal ass!
{{else}}
        Never mind :(
{{/and}}

Result:
    Kiss my shiny metal ass!

### Dates

#### formatDate

Formats a date into a string given a format. Accepts any value that can be passed to `new Date()`. This helper is a port of the [formatDate-js](http://https://github.com/michaelbaldry/formatDate-js) library by [Michael Baldry](https://github.com/michaelbaldry).
Parameters:


    format `string` - The format string, according to these tokens: (http://www.ruby-doc.org/core-1.9.3/Time.html#method-i-strftime) (Required)
<br>Example:

    date = new Date()

{{formatDate date "%m/%d/%Y"}}
{{formatDate date "%I:%M%p"}}
{{formatDate date "%F"}}
{{formatDate date "%Y%m%dT%H%M%S%z"}}

Result:
    07/26/2012
    11:38PM
    2012-07-26
    20120726T233805-0004

#### now

Returns the current date.
Parameters:


    format `string` - The format string, according to these tokens: http://www.ruby-doc.org/core-1.9.3/Time.html#method-i-strftime (Optional)
<br>Example:

{{now}}
{{now "%m/%d/%Y"}}

Result:
    Thu Jul 26 2012 23:41:02 GMT-0400 (AST)
    07/26/2012

#### timeago

Returns a human-readable time phrase from the given date.
Parameters: `none`

<br>Example:

    date = 'Thu Jul 22 2012 23:41:02 GMT-0400 (AST)'

{{timeago date}}

Result:
    4 days ago

### Inflections

#### inflect

Returns the plural or singular form of a word based on a count.
Parameters:


    singular `string` - The singular form of the word. (Required)
    plural `string` - The plural form of the word. (Required)
    include [boolean] - whether or not to include the count before the word. (Optional)
<br>Example:

    enemies = 0
    friends = 1

{{inflect enemies "enemy" "enemies"}}
{{inflect friends "friend" "friends" true}}

Result:
    enemies
    1 friend

#### ordinalize

Turns a number into an ordinal string. Taken from the templating library [Walrus](https://github.com/jeremyruppel/walrus) by [Jeremy Ruppel](https://github.com/jeremyruppel).
Parameters: `none`

<br>Example:

{{ordinalize 3}}
{{ordinalize 1}}
{{ordinalize 22}}

Result:
    3rd
    1st
    22nd

### HTML

#### ul

Creates an unordered list.
Parameters:


    hash [html attributes] - HTML attributes to use on the ul element. (Optional)
<br>Example:

collection = [
            name: 'Leela'
            deliveries: 8021
        ,
            name: 'Bender'
            deliveries: 239
        ,
            name: 'Fry'
            deliveries: 1
    ]

{{#ul collection class="deliveries-list"}}
    {{name}} - {{inflect deliveries "delivery" "deliveries" true}}
{{/ul}}

Result:
    <ul class="deliveries-list">
        <li>
            Leela - 8021 deliveries
        </li>
        <li>
            Bender - 239 deliveries
        </li>
        <li>
            Fry - 1 delivery
        </li>
    </ul>

#### ol

Same as the `ul` helper but creates and ordered list.

#### br

Returns `<br>` tags based on a count.
Parameters:
<br>count `int` - The number of `br` elements to render. (Optional)
<br>Example:

{{br 5}}

Result:
    `<br><br><br><br><br>`

### Logging

#### log

Simple console.log()
Parameters: `none`

<br>Example:

{{log "Hi console :)"}}

Result:
    Hi console :)

#### debug

Simple console.debug() that shows the current context.
Parameters: `none`

<br>Example:

collection = [
            name: 'Leela'
            deliveries: 8021
        ,
            name: 'Bender'
            deliveries: 239
        ,
            name: 'Fry'
            deliveries: 1
    ]

{{#withFirst collection}}
    {{debug name}}
{{/withFirst}}

Result:
    Context: { deliveries: 8021, name: "Leela" }
    Value: Leela
    -----------------------------------------------

### Miscellaneous

#### default

Provides a default or fallback value if a value doesn't exist.
Parameters:


    defaultValue `string|int` - The default value to use.
<br>Example:

    title = ''

{{default title "Not title available."}}

Result:
    Not title available.

#### partial

Provides an easy way to register and use partials inside your templates. This helper only works if you define your templates as common.js modules, since it uses the common.js `require` function to find and register your templates with `Handlebars.registerPartial`. It was created with [brunch](http://brunch.io) in mind (which I use a lot), because brunch automatically wraps your scripts and templates in common.js modules to use in the browser.
Parameters:


    name `string` - The name or path of the file in which your template is defined. (Required)

    data [int|string|collection] - The data you want to use inside the partial. (Optional)
<br>Example:

    # Path to your templates from where you override config.partialsPath
    # The path must finish with a foward slash '/'
    config.partialsPath = '../views/templates/'

collection = ['Professor Farnsworth', 'Fry', 'Bender']

    # Your Partial (planet_express.hbs)
{{sort this}}

    # Your template
    <p>
    {{partial "planet_express" collection}}
    </p>

Result:
    <p>Bender, Fry, Professor Farnsworth</p>



### Credit

Many of these helpers come from the following repos:
  * [Handlebars Helpers, by Dan Harper](http://github.com/danharper)
  * [Swag v0.2.1, by Elving Rodriguez](http://elving.github.com/swag/)


