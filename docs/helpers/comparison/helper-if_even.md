#### \{{ifEven}}
_Conditionally render a block if the `@index` is an even number._

Parameters: none

Data: `data.json`

```json
{
	[
		{
			"name": "John"
		},
		{
			"name": Sally
		}
	]
}
```

Template:

```html
{{#each data}}
	{{#ifEven @index}}
		even
	{{else}}
		odd
	{{/ifEven}}
{{/each}}
```


Author: Stack Overflow Answer <http://stackoverflow.com/questions/18976274/odd-and-even-number-comparison-helper-for-handlebars/18993156#18993156>

AuthorMichael Sheedy <http://github.com/sheedy> (found code and added to repo)
