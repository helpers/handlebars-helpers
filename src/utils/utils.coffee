Handlebars = require('../helpers/helpers').Handlebars

# Nodejs libs.
fs   = require 'fs'
path = require 'path'

# npm libs
grunt = require "grunt"
glob  = require 'globule'



Utils          = module.exports = {}
Utils.toString = Object.prototype.toString



Utils.isUndefined = (value) ->
  value is 'undefined' or Utils.toString.call(value) is '[object Function]' or value.hash?

Utils.safeString = (str) ->
  new Handlebars.SafeString str

Utils.trim = (str) ->
  trim = if /\S/.test("\xA0") then /^[\s\xA0]+|[\s\xA0]+$/g else /^\s+|\s+$/g
  str.toString().replace trim, ''


###
node.path utils
###

Utils.getExt = (str) ->
  extname = path.extname(str)
  str = extname  if extname
  str = str.substring(1)  if str[0] is "."
  str

Utils.getBasename = (base, ext) ->
  fullName = path.basename(base, ext)
  base     = path.basename(base, path.extname(fullName))

Utils.getRelativePath = (from, to) ->
  fromDirname = path.normalize(path.dirname(from))
  toDirname = path.normalize(path.dirname(to))
  toBasename = path.basename(to)
  relativePath = path.relative(fromDirname, toDirname)
  Util.urlNormalize(path.join(relativePath, toBasename))



Utils.getPropString = (prop) ->
  prop = grunt.config.getPropString(prop)

###
Globbing
###

glob = (pattern, config) ->
  options = {}
  options.cwd = path.normalize(config.dir)  if config.dir
  results = glob.sync(pattern, options)
  return results  unless config.exclude
  results = results.filter((path) ->
    not config.exclude.test(path)
  )
  results


# Grunt.file.exists True if the file path exists.
Utils.exists = (file) ->
  src = grunt.file.exists(file)

# Read a file, return its contents.
Utils.read = (filepath, options) ->
  src = grunt.file.read(filepath, options)

# Read a file, parse its contents, return an object.
Utils.readJSON = (filepath, options) ->
  src = grunt.file.readJSON(filepath, options)

# Read a YAML file, parse its contents, return an object.
Utils.readYAML = (filepath, options) ->
  src = grunt.file.readYAML(filepath, options)

# Write a Utils.
Utils.write = (filepath, contents, options) ->
  src = grunt.file.write(file)

# Copy file from A to B
Utils.copyFile = (filepath, options) ->
  src = grunt.file.copy(filepath, options)
  true

# Create a directory along with any intermediate directories.
Utils.mkDir = (dirpath, mode) ->
  src = grunt.file.mdDir(dirpath, mode)



# Ensures that a url path is returned instead
# of a filesystem path.
Utils.urlNormalize = (filepath) ->
  filepath.replace /\\/g, "/"





