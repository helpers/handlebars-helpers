Handlebars = require('../helpers/helpers').Handlebars

Utils = require '../utils/utils'
grunt = require 'grunt'
path  = require 'path'
to    = require 'to'
_     = require 'lodash'


# NOTE: Most of these helpers are experimental. 
# Please do not use in production. 
# 

# Copy: copies src file from A to B. USE WITH CAUTION!!! Usage: {{copy [a] [b]}}
module.exports.copy = copy = (a, b) ->
  Utils.copyFile(a, b)

# Define Section:
module.exports.section = defineSection = (section, options) ->
  if Handlebars.sections
    Handlebars.sections[section] = options.fn(this)
  Utils.safeString ''

# Render Section
module.exports.section = renderSection = (section, options) ->
  if Handlebars.sections and Handlebars.sections[section]
    content = Handlebars.sections[section]
  else
    content = options.fn this
  Utils.safeString content

# Include: Include content from an external source.
# Usage: {{ include [file] }}
module.exports.include = include = (src) ->
  Utils.safeString(Utils.read(src))

###
Concat: reads in data from a markdown file, and uses the first heading
as a section heading, and then copies the rest of the content inline.
Usage: {{{ glob [file] }}
###
module.exports.glob = glob = (src) ->
  content = Utils.globFiles(src)
  Utils.safeString(content)

module.exports.chapter = chapter = (src) ->
  content = Utils.globFiles(src)
  Utils.safeString(content)

module.exports.extract = extract = (str) ->
  content = Utils.globFiles(src)
  Utils.safeString(content)

module.exports.dir = dir = (src) ->
  list = grunt.file.expandMapping(src)
  yml = to.format.yaml.stringify(list)
  Utils.safeString(yml)

module.exports.expMappingYAML = expMappingYAML = (src) ->
  list = grunt.file.expandMapping(src)
  yml  = to.format.yaml.stringify(list)
  Utils.safeString(yml)

module.exports.expMappingJSON = expMappingJSON = (src) ->
  list = grunt.file.expandMapping(src)
  json = JSON.stringify(list, null, 2)
  Utils.safeString(json)

module.exports.dir = dirJSON = (src) ->
  list = grunt.file.expand(src)
  json = JSON.stringify(list, null, 2)
  Utils.safeString(json)

# module.exports.toc = toc = (src) ->
#   content = grunt.file.expand(src)
#   .map(grunt.file.read)
#   .join(grunt.util.normalizelf(grunt.util.linefeed))

#   # headings = content.match(/(^#{1,}?)([ \t]+(.*))/gm).join('\n')
#   headings = content.match(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/gm).join('\n')
#     .replace(/^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/gm, '$1 [$2]($2)\n')
#   Utils.safeString(headings)


module.exports.toc = toc = (src) ->
  content = grunt.file.expand(src)
  .map(grunt.file.read)
  .join(grunt.util.normalizelf(grunt.util.linefeed))
  headings = content.match(Utils.findHeadings).join('')
  # output   = headings.replace(Utils.findHeadings, '$1 [$2](#' + Utils.linkify('$2') + ')\n')
  output = headings.replace(Utils.findHeadings, '$1 [$2](#' + '$2' + ')\n')
  output = Utils.safeString(output)


module.exports.register = (Handlebars, options) ->

  Handlebars.registerHelper "copy", copy
  Handlebars.registerHelper "dir", dir
  Handlebars.registerHelper "include", include
  Handlebars.registerHelper "expMappingYAML", expMappingYAML
  Handlebars.registerHelper "expMappingJSON", expMappingJSON
  Handlebars.registerHelper "glob", glob
  Handlebars.registerHelper "extract", extract
  Handlebars.registerHelper "chapter", chapter
  Handlebars.registerHelper "toc", toc
  Handlebars.registerHelper "defineSection", defineSection
  Handlebars.registerHelper "renderSection", renderSection

  @