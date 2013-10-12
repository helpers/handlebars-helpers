## Developing Helpers

### Custom Helpers
When it comes to adding custom helpers, [Handlebars](http://handlebarsjs.com/) really excels over other templating libraries. Simply register your function into Handlebars with the `Handlebars.registerHelper` method, and that helper will be available to any template you compile afterwards.

Additionally, Handlebars allows two different kinds of helpers:

* **Expression helpers** are basically regular functions that take the name of the helper and the helper function as arguments. Once an expression helper is registered, it can be called anywhere in your templates, then Handlebars takes the expression's return value and writes it into the template.
* **Block helpers** There are a few block helpers included by default with Handlebars, `{{#each}}`, `{{#if}}` and `{{#unless}}`. Custom block helpers are registered the same way as exptression helpers, but the difference is that Handlebars will pass the contents of the block compiled into a function to the helper.


## Contributing New Helpers
> Want to contribute a new helper? **Awesome!** Please follow these steps before submitting a pull request with your helper:

* **Search existing helpers** to see if there is one that already does what your helper does. If they are similar, but different, please explain how they differ.
* **Use camelCase** for the helper's name. You'll see a few helpers in the lib that use underscores, these are from another library (and are appropriately credited). All other helpers use camelcase.
* [**document the helper**]() so that developers don't need to jump through hoops to figure out how to use it.

Please remember to add some kind of attribution for yourself in this format: `@author: Your Name <github address>`, example:

```js
/**
 * {{newhelper}}
 * Description of what the helper does
 * @author: Mike Griffin <https://github.com/BrewDawg>
 */
```