#### \{{ifAny}}
_Conditionally render a block if any of the values is truthy._

Parameters: values `Boolean|Number|String|Object` - the values to test against.

Data:

```javascript
{
  name: 'Spinach',
  isMeat: false,
  isFruit: false,
  isVegetable: true,
  isDairy: false
}
```

Template:

```handlebars
\{{#ifAny isMeat isFruit isVegetable isDairy}}
    It's edible.
\{{else}}
    Don't eat that!
\{{/ifAny}}
```

Renders to:

```
It's edible.
```