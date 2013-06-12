#### {{occurrences}}
_Evaluate string A, and count the occurrences of string B within string A_
<br>Default: `undefined`
<br>Parameters:
* `String A` (required): The string to evaluate
* `String B` (required): The string to look for and count in "string A"

``` erlang
{{occurrences "evaluate this string" "evaluate"}}

// Result 
1
```

#### {{hyphenate}}
_Replace spaces in string with hyphens._
<br>Parameters: `none`
``` erlang
{{hyphenate "make this all hyphenated"}}

// Result 
make-this-all-hyphenated
```

#### {{dashify}}
_Same as `hyphenate`, but replaces dots in string with hyphens._
<br>Parameters: `none`
``` erlang
{{dashify "make.this.all.hyphenated"}}

// Result
make-this-all-hyphenated
```

#### {{lowercase}}
_Turns a string to lowercase._
<br>Parameters: `none`
``` erlang
{{lowercase "MAKE THIS ALL LOWERCASE"}}

// Result
make this all lowercase
```

#### {{uppercase}}
_Turns a string to uppercase. Opposite of `{{lowercase}}`._
<br>Parameters: `none`
``` erlang
 {{uppercase "make this all uppercase"}}

// Result
MAKE THIS ALL UPPERCASE
```

#### {{capitalizeFirst}}
_Capitalizes the first word in a string._
<br>Parameters: `none`
``` erlang
{{capitalizeFirst "capitalize first word in this sentence"}}

// Result
Capitalize first word in this sentence
```

#### {{capitalizeEach}}
_Capitalizes each word in a string._
<br>Parameters: `none`
``` erlang
{{capitalizeEach "capitalize EACH word in this sentence"}}

// Result
Capitalize EACH Word In This Sentence
```

#### {{titleize}}
_Capitalizes all words within a string. Taken from the templating library [Walrus](https://github.com/jeremyruppel/walrus) by [Jeremy Ruppel](https://github.com/jeremyruppel)._
<br>Parameters: `none`
``` erlang
{{titleize "capitalize EACH word in this sentence"}}

// Result
Capitalize Each Word In This Sentence.
```

#### {{sentence}}
_Capitalizes the first word of each sentence in a string and converts the rest of the sentence to lowercase._
Parameters: `none`
``` erlang
{{sentence "capitalize the FIRST word in each sentence. but make the OTHER words lowercase."}}

// Result
Capitalize the first word in each sentence. But make the other words lowercase.
```

#### {{reverse}}
_Reverses a string._
<br>Parameters: `none`
``` erlang
{{reverse "bender should NOT be allowed on TV."}}

// Result
.VT no dewolla eb TON dluohs redneb
```

#### {{truncate}}
_Truncates a string given a specified `length`, providing a custom string to denote an `omission`._
<br>Parameters: 

* length: `int`- The number of characters to keep (Required). 
* omission: `string` - A string to denote an omission (Optional). 

``` erlang
{{truncate "Bender should not be allowed on tv." 31 "..."}}

// Result
Bender should not be allowed...
```

#### {{center}}
_Centers a string using non-breaking spaces._
<br>Parameters: spaces: `int` - The number of spaces. (Required)
``` erlang
{{center "Bender should not be allowed on tv." 10}}

// Result:
|              Bender should not be allowed on tv.              |
```

#### {{formatPhoneNumber}}
_Output a formatted phone number_

Credit: [Treehouse Blog](http://blog.teamtreehouse.com/handlebars-js-part-2-partials-and-helpers)

Given:
```js
number: 4444444444
```
and the template:

``` erlang
{{formatPhoneNumber number}}
```
The result would be:
```
(444) 444-4444
```
