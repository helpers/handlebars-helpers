

### YAML Helpers

A few convenience helpers that read data in YAML format, and do interesting things with the data. Well... they "do things" with the data. Anyway I guess only nerds like me find it interesting. 

**NOTE**: These helpers will throw an error if the source files are not  valid YAML format, using the following conventions:

A couple things to keep in mind about YAML:

* YAML is picky, so don't be surprised if the parser throws an error from improperly placed quotation marks.
* Seriously, don't be surprised. If you even come onto the issues and act surprised when it happens, an automated message will tell you to read the first bullet.

More info here: [js-yaml](https://github.com/nodeca/js-yaml)


#### changelog
Here is the format to follow in your `CHANGELOG` file:

``` yaml
v0.1.2
  date: "2014-04-09"
  changes:
    - The future sucks.
    - This is my third and last commmit from the future.
v0.1.1
  date: "2014-04-08"
  changes:
    - Second commit from the future.
    - The future is more boring that I thought it would be.
v0.1.0
  date: "2014-03-07"
  changes:
    - First commit... from the future. Yes!
```
Of coure, you are under no obligation to make your changelog entries as interesting as these, and you may record your entries at any point in whatever timeline you prefer, but whatever you write must be valid YAML when you do it.

And the output will look like this:

``` md
* 2013-03-15    v0.1.2    Update README.md with documentation, examples.
* 2013-03-06    v0.1.0    First commit.
```



 






#### formatPhoneNumber
_Output a formatted phone number_
Credit: [Treehouse Blog](http://blog.teamtreehouse.com/handlebars-js-part-2-partials-and-helpers)
```js
phoneNumber: 4444444444
```
``` handlebars
{{formatPhoneNumber phoneNumber}}
```
Result:
```
(444) 444-4444
```