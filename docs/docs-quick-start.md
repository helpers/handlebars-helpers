This plugin requires Grunt `~0.4.1` for linting and testing, but Grunt is **not required** to use the helpers. 

If you want to learn more about using Grunt, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.

```shell
npm install helper-lib --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('helper-lib');
```

This plugin was designed to work with _Grunt 0.4.x_. If you're still using grunt _v0.3.x_ it's strongly recommended that you upgrade, but in case you can't please use _v0.3.1_.

### 
When completed, you'll be able to run the various `grunt` commands provided:

#### build - `grunt`
Runs the Less.js compiler to rebuild the specified `/test/fixtures/**` files. .

#### test - `grunt test`
Runs jshint on JavaScripts and nodeunit tests on . 

#### watch - `grunt watch`
This is a convenience method for watching  and automatically re-building them whenever you save. Requires the [grunt-contrib-watch](http://github.com/gruntjs/grunt-contrib-watch) Grunt plugin.

Should you encounter problems with installing dependencies or running the `grunt` commands, be sure to first uninstall any previous versions (global and local) you may have installed, and then rerun `npm install`.