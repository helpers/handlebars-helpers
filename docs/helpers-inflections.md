#### {{inflect}}
_Returns the plural or singular form of a word based on a count._
<br>Parameters:
* singular `string` - The singular form of the word. (Required)
* plural `string` - The plural form of the word. (Required)
* include `boolean` - whether or not to include the count before the word. (Optional)
``` js
// Data
enemies = 0
friends = 1
```
``` xml
// Template
{{inflect enemies "enemy" "enemies"}}
{{inflect friends "friend" "friends" true}}

// Result:
enemies
1 friend

#### {{ordinalize}}
_Turns a number into an ordinal string. Taken from the templating library [Walrus](https://github.com/jeremyruppel/walrus) by [Jeremy Ruppel](https://github.com/jeremyruppel)._
<br>Parameters: `none`
``` xml
// Template
{{ordinalize 3}}
{{ordinalize 1}}
{{ordinalize 22}}

// Result:
3rd
1st
22nd
```