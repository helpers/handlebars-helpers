Handlebars = require('../helpers/helpers').Handlebars

fs    = require 'fs'
path  = require 'path'
grunt = require "grunt"

Utils          = module.exports = {}
Utils.toString = Object.prototype.toString



Utils.isUndefined = (value) ->
  value is 'undefined' or Utils.toString.call(value) is '[object Function]' or value.hash?

Utils.safeString = (str) ->
  new Handlebars.SafeString str

Utils.escapeString = (str, except) -> #String
  #String?
  str.replace /([\.$?*|{}\(\)\[\]\\\/\+\^])/g, (ch) ->
    return ch  if except and except.indexOf(ch) isnt -1
    "\\" + ch

Utils.escapeExpression = (str) ->
  Handlebars.Utils.escapeExpression

Utils.trim = (str) ->
  trim = if /\S/.test("\xA0") then /^[\s\xA0]+|[\s\xA0]+$/g else /^\s+|\s+$/g
  str.toString().replace trim, ''

Utils.propagate = (callback, func) ->
  (err, args...) ->
    return callback(err) if err
    func.apply(this, args)


Utils.isFunction = (obj) ->
  typeof obj is "function"

Utils.isBoolean = (obj) ->
  undef = undefined
  type = typeof obj
  obj isnt undef and type is "boolean" or type is "Boolean"

Utils.isNumber = (obj) ->
  undef = undefined
  obj isnt undef and obj isnt null and (typeof obj is "number" or obj instanceof Number)

Utils.isObject = (obj) ->
  undef = undefined
  obj isnt null and obj isnt undef and typeof obj is "object"

Utils.isRegExp = (obj) ->
  undef = undefined
  obj isnt undef and obj isnt null and (obj instanceof RegExp)


# Convenience for extracting repo url from package.json
Utils.repoUrl = (str) ->
  pkg = grunt.file.readJSON("./package.json")
  url = pkg.repository.url
  str = url.replace(/.*:\/\/github.com\/(.*?)(?:\.git|$)/, str)

###
# Detect and return the indentation.
# param  {String} string
# return {Mixed} Indentation used, or undefined.
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

Utils.getExt = (str) ->
  extname = path.extname(str)
  str = extname  if extname
  str = str.substring(1)  if str[0] is "."
  str

Utils.getBasename = (base, ext) ->
  fullName = path.basename(base, ext)
  base     = path.basename(base, path.extname(fullName))

Utils.getRelativePath = (from, to) ->
  fromDirname  = path.normalize(path.dirname(from))
  toDirname    = path.normalize(path.dirname(to))
  toBasename   = path.basename(to)
  relativePath = path.relative(fromDirname, toDirname)
  Utils.urlNormalize(path.join(relativePath, toBasename))

Utils.getPropString = (prop) ->
  prop = grunt.config.getPropString(prop)

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

Utils.toggleOutput = (ext, md, html) ->
  if ext is ''
    output = md
  else
    output = html

Utils.switchOutput = (ext, md, html) ->
  switch ext
    when "", ".md"
      output = md
    when ".html", ".htm"
      output = html
  output

Utils.switchType = (ext) ->
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

# Return an array of all file paths that match 
# the given wildcard patterns, then read each file
# and return its contents as a string, and last  
# normalize all line linefeeds in the string
Utils.globFiles = (src) ->
  content = grunt.file.expand(src)
  .map(grunt.file.read)
  .join(grunt.util.normalizelf(grunt.util.linefeed))

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


###
Markdown Utils
###
Utils.lowerCase = (str) ->
  str = toString(str)
  str.toLowerCase()

# Regex: all markdown headings
Utils.findHeadings = /^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/gm
# Regex: all markdown h1 headings
Utils.findh1 = /^(#{1} )\s*(.*?)\s*#*\s*(?:\n|$)/gm
# Utils.findh1 = /^#[ \t]+(.*)/gm
# Regex: all markdown h2 headings
Utils.findh2 = /^(#{2} )\s*(.*?)\s*#*\s*(?:\n|$)/gm

Utils.findParens = /\(([^)]+)\)/g


# Ensures that a url path is returned instead
# of a filesystem path.
Utils.urlNormalize = (filepath) ->
  filepath.replace /\\/g, "/"


