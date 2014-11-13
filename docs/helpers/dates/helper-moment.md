# \{{moment}} [![NPM version](https://badge.fury.io/js/handlebars-helper-momentjs.png)](http://badge.fury.io/js/handlebars-helper-momentjs) 

> A helper to master time! Combining the powers of Assemble, Handlebars.js and Moment.js. This helper leverages Moment.js to provide ultimate control over manipulating time and dates in your templates.

## Quickstart
Install the helper:

```bash
npm i helper-moment --save-dev
```

Now add the helper to Assemble's options:

```js
assemble: {
  options: {
    // Assemble will automatically resolve the path
    helpers: ['helper-moment', 'foo/*.js']
  }
}
```


## Options
The moment.js lib has plenty of features and options, these examples are just the tip of the iceberg of what [moment.js][moment] can do.

#### Tips
Remember that:

* `\{{moment method=null}}` means `moment().method()`, and 
* `\{{moment somedate method="something"}}` means `moment(somedate).method("something")`. 

Also, the handlebars syntax does not allow you pass certain values (like arrays and objects) directly from the tag, so you may need to use YAML frontmatter or supply JSON/YAML data to run those.



## Usage Examples
### Optional YAML Front Matter

> YAML front matter is not required, but we'll use it hear to supply our example data for purposes of demonstration:

```handlebars
---
example: <%= new Date("Sun Jun 30 2011 01:53:23 GMT+0300 (EEST)") %>
exampletextdate: 'Sun, 30 Jun 2012 11:19:15 +0300'

inputformats: ["ddd, DD MMM YYYY HH:mm:ss ZZ", "MMMM YYYY"]

daysadd:
  days: 5
timeago:
  years: 5
duration:
  hours: 2
  minutes: 33}
---

Unix timestamp of now

\{{moment}}
```

Results in:

```
1372599296756
```

#### Current time with formatting

```handlebars
\{{moment format="HH:mm:ss"}}
```

Results in:

```
16:34:56
```

#### Specific time with formatting

```handlebars
\{{moment example format="HH:mm:ss"}}
```

Results in:

```
01:53:23
```

#### Specific unix timestamp with formatting

```handlebars
\{{moment unixtimestamp format="HH:mm:ss"}}
```

Results in:

```
19:17:56
```

#### Specific datetime with formatting

```handlebars
\{{moment example format="dddd, DD MMMM YYYY HH:mm:ss ZZ"}}
```

Results in:

```
Sunday, 30 June 2013 01:53:23 +0300
```

### Language support

```handlebars
\{{moment example lang="fi" format="dddd, DD MMMM YYYY HH:mm:ss ZZ"}}
```

Results in:

```
sunnuntai, 30 kesäkuu 2013 01:53:23 +0300
```

Is the added date valid?

```handlebars
\{{moment example isValid=null}}
```

Results in:

```
true
```

#### Input as a string, with defined format

```handlebars
\{{moment [exampletextdate,"ddd, DD MMM YYYY HH:mm:ss ZZ"] format="MMMM YYYY"}}
```

Results in:

```
June 2013
```

### Multiple formats

When multiple formats are used, moment.js attempts to use the "correct" one

```handlebars
\{{moment [exampletextdate,formats] format="MMMM YYYY"}}
```

Results in:

```
June 2013
```

#### Specific datetime with formatting, converted to UTC

```handlebars
\{{moment example UTC=null format="dddd, DD MMMM YYYY HH:mm:ss ZZ"}}
```

Results in:

```
Saturday, 29 June 2013 22:53:23 +0000
```

#### Getters and setters

Example: get week of year, depends on lang (see [moment.js](http://momentjs.com/docs/#/get-set/) documentation for more details)

```handlebars
The week number in Finland is \{{moment example lang="fi" week=null}}
```

Results in:

```
The week number in Finland is 26
```

### [Manipulating](http://momentjs.com/docs/#/manipulating/)

See the [moment.js/manipulating](http://momentjs.com/docs/#/manipulating/) documentation for more details.


#### add days

```handlebars
\{{moment example format="dddd"}}-\{{moment example add=daysadd format="dddd"}}
```

Results in:

```
Sunday-Friday
```


#### subtract years

```handlebars
\{{moment example subtract=timeago format="YYYY"}}-\{{moment example format="YYYY"}}
```

Results in:

```
2008-2013
```

#### startOf month

```handlebars
\{{moment example startOf="month" format="dddd, DD MMMM YYYY HH:mm:ss ZZ"}}
```

Results in:

```
Saturday, 01 June 2013 00:00:00 +0300
```

#### endOf week

```handlebars
\{{moment example endOf="week" format="dddd, DD MMMM YYYY HH:mm:ss ZZ"}}
```

Results in:

```
Saturday, 06 July 2013 23:59:59 +0300
```

#### Time from now

```handlebars
After this page is rendered, the week will end \{{moment endOf="week" fromNow=null}}
```

Results in:

```
After this page is rendered, the week will end in 6 days
```

#### Time from X

```handlebars
This helper was coded \{{moment from=example}}
```

Results in:

```
This helper was coded in 15 hours
```

#### Calendar time

```handlebars
The coding started \{{moment example calendar=null}}
```

Results in:

```
The coding started Today at 1:53 AM
```


#### Diff

```handlebars
The difference between those two moments is \{{moment diff=example}}
```

Results in:

```
The difference between those two moments is 52893769
```


#### Days in Month

```handlebars
This month has \{{moment daysInMonth=null}} days
```

Results in:

```
This month has 30 days
```


#### Days in Month

```handlebars
This month has \{{moment daysInMonth=null}} days
```

Results in:

```
This month has 30 days
```


#### Duration, with humanization

```handlebars
The event will last \{{duration duration humanize=null}}
```

Results in:

```
The event will last 3 hours
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][].

## Author

**Mikko Tapionlinna**

+ [github.com/Arkkimaagi](https://github.com/Arkkimaagi)

## License
Copyright (c) 2013 Mikko Tapionlinna, contributors.
Released under the MIT license

***

_This file was generated on Sunday, October 13, 2013._

[moment]: http://momentjs.com/docs/ "Moment.js"
[grunt]: http://gruntjs.com "Grunt.js"