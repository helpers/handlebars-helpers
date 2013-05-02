Handlebars = require('../helpers/helpers').Handlebars

# Nodejs libs.
fs   = require 'fs'
path = require 'path'

# NPM libs
grunt = require "grunt"
mout  = require 'mout'

Utils          = module.exports = {}
Utils.toString = Object.prototype.toString



Utils.isUndefined = (value) ->
  value is 'undefined' or Utils.toString.call(value) is '[object Function]' or value.hash?

Utils.safeString = (str) ->
  new Handlebars.SafeString str

Utils.trim = (str) ->
  trim = if /\S/.test("\xA0") then /^[\s\xA0]+|[\s\xA0]+$/g else /^\s+|\s+$/g
  str.toString().replace trim, ''

Utils.pluck = mout.collection.pluck

Utils.propagate = (callback, func) ->
  (err, args...) ->
    return callback(err) if err
    func.apply(this, args)

###
# Detect and return the indentation.
#
# @param  {String} string
#
# @return {Mixed} Indentation used, or undefined.
###
Utils.detectIndentation = (string) ->
  tabs = string.match(/^[\t]+/g) or []
  spaces = string.match(/^[ ]+/g) or []
  
  # Pick the smallest indentation level of a prevalent type
  prevalent = (if tabs.length >= spaces.length then tabs else spaces)
  indentation = undefined
  i = 0
  il = prevalent.length

  while i < il
    indentation = prevalent[i]  if not indentation or prevalent[i].length < indentation.length
    i++
  indentation


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
  relativePath = Utils.urlNormalize(path.relative(from, to))


Utils.getPropString = (prop) ->
  prop = grunt.config.getPropString(prop)

###
Globbing
###

Utils.glob = (pattern, config) ->
  options = {}
  options.cwd = path.normalize(config.dir)  if config.dir
  results = glob.sync(pattern, options)
  return results  unless config.exclude
  results = results.filter((path) ->
    not config.exclude.test(path)
  )
  results


Utils.detectType = (value) ->
  switch typeof value
    when "string"
      "str"
    when "number"
      "num"
    when "object"
      "obj"
    else
      "other"

Utils.readBasedOnType = (ext) ->
  ext = options.ext
  reader = grunt.file.readJSON
  switch ext
    when ".json"
      reader = grunt.file.readJSON
    when ".yml", ".yaml"
      reader = grunt.file.readYAML
  reader

# 'Optional' JSON
Utils.readOptionalJSON = (filepath) ->
  data = {}
  try
    data = grunt.file.readJSON(filepath)
    grunt.verbose.write("Reading " + filepath + "...").ok()
  data

# 'Optional' YAML
Utils.readOptionalYAML = (filepath) ->
  data = {}
  try
    data = grunt.file.readYAML(filepath)
    grunt.verbose.write("Reading " + filepath + "...").ok()
  data

Utils.detectDestType = (dest) ->
  if grunt.util._.endsWith(dest, "/")
    "directory"
  else
    "file"

# Grunt.file.exists True if the file path exists.
Utils.exists = (file) ->
  src = grunt.file.exists(file)

# Read a file, return its contents.
Utils.read = (filepath, options) ->
  src = grunt.file.read(filepath, options)

# Return an array of all file paths that match the given wildcard patterns.
Utils.expand = (filepath, options) ->
  src = grunt.file.expand(filepath, options)

Utils.expandMapping = (patterns, destBase, options) ->
  src = grunt.file.expandMapping(patterns, destBase, options)

# Read a file, parse its contents, return an object.
Utils.readJSON = (filepath, options) ->
  src = grunt.file.readJSON(filepath, options)
  
# Read a YAML file, parse its contents, return an object.
Utils.readYAML = (filepath, options) ->
  src = grunt.file.readYAML(filepath, options)

# Write a file.
Utils.write = (filepath, contents, options) ->
  src = grunt.file.write(filepath, contents, options)

# Copy file from A to B
Utils.copyFile = (filepath, options) ->
  src = grunt.file.copy(filepath, options)
  true

# Create a directory along with any intermediate directories.
Utils.mkDir = (dirpath, mode) ->
  src = grunt.file.mdDir(dirpath, mode)

# Normalize linefeeds in a string.
Utils.normalizelf = (str) ->
  src = grunt.util.normalizelf(str)

# Normalize \\ paths to / paths.
Utils.urlNormalize = (filepath) ->
  win32 = process.platform is "win32"
  if win32
    filepath.replace /\\/g, "/"
  else
    filepath





