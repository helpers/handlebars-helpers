###! assemble helpers ###

module.exports.register = (Handlebars, options) ->

  # Internal libs.
  Utils    = require '../utils/utils'
  HTML     = require '../utils/html'
  
  fs       = require 'fs'
  path     = require 'path'
  grunt    = require 'grunt'
  _        = require 'lodash'


  # Switch (proof of concept), not intended for use in production code.
  # This helper demonstrates a simple example of how to switch the output
  # format based on the extension of the destination file(s) in the
  # 'assemble' grunt task.
  Handlebars.registerHelper "switch", (src) ->
    md = '# ' + src
    html = '<h1>' + src + '</h1>'
    output = Utils.switchOutput(options.ext, md, html)
    Utils.safeString(output)

  # readme-title: Generates a title and Travis CI badge for a README.md.
  # Syntax: {{travis [src]}}
  Handlebars.registerHelper "readme-title", (branch) ->
    pkg     = Utils.readJSON("./package.json")
    repo    = Utils.repoUrl('https://github.com/$1')
    name    = pkg.name
    version = pkg.version
    source   = '[' + name + ' v' + version + '](' + repo + ')'
    template = Handlebars.compile(source)
    Utils.safeString(template(pkg))

  # Travis CI: Generates a title and Travis CI badge for a README.md.
  # Syntax: {{travis [src]}}
  Handlebars.registerHelper "travis-badge", (branch) ->
    pkg       = Utils.readJSON("./package.json")
    travisUrl = Utils.repoUrl('https://travis-ci.org/$1')
    # pass in data from assemble task options
    travis    = options.travis || {}
    curBranch = ''
    if Utils.isUndefined(branch)
      curBranch = ''
    else if travis.branch
      curBranch = '?branch=' + travis.branch
    else 
      curBranch = '?branch=' + branch
    if travis.name
      pkg.name = travis.name
    else
      pkg.name
    source   = '[![Build Status](' + travisUrl + '.png' + curBranch + ')](' + travisUrl + ')'
    template = Handlebars.compile(source)
    Utils.safeString(template(pkg))

  # Travis CI: Generates a title and Travis CI badge for a README.md.
  # Syntax: {{travis [src]}}
  Handlebars.registerHelper "travis", (branch) ->
    pkg       = Utils.readJSON("./package.json")
    repo      = Utils.repoUrl('https://github.com/$1')
    travisUrl = Utils.repoUrl('https://travis-ci.org/$1')
    # pass in data from assemble task options
    travis    = options.travis || {}
    curBranch = ''
    if Utils.isUndefined(branch)
      curBranch = ''
    else if travis.branch
      curBranch = '?branch=' + travis.branch
    else 
      curBranch = '?branch=' + branch
    if travis.name
      pkg.name = travis.name
    else
      pkg.name

    unless travis.title is false
      title = '# [' + pkg.name + ' v' + pkg.version + '](' + repo + ')'
    source   = title + ' [![Build Status](' + travisUrl + '.png' + curBranch + ')](' + travisUrl + ')'
    template = Handlebars.compile(source)
    Utils.safeString(template(pkg))


  # Authors: reads in data from an "AUTHORS" file to generate markdown formtted
  # author or list of authors for a README.md. Accepts a second optional
  # parameter to a different file than the default.
  # Usage: {{authors}} or {{ authors [file] }}
  Handlebars.registerHelper 'authors', (authors) ->
    if Utils.isUndefined(authors)
      authors = Utils.read("./AUTHORS")
    else
      authors = Utils.read(authors)
    matches = authors.replace(/(.*?)\s*\((.*)\)/g, '* [$1]($2)  ') or []
    Utils.safeString(matches)

  # AUTHORS: (case senstitive) Same as `{{authors}}`, but outputs a different format.
  Handlebars.registerHelper 'AUTHORS', (authors) ->
    if Utils.isUndefined(authors)
      authors = Utils.read("./AUTHORS")
    else
      authors = Utils.read(authors)
    matches = authors.replace(/(.*?)\s*\((.*)\)/g, '\n**[$1]**\n  \n+ [$2]($2)  ') or [] 
    Utils.safeString(matches)

  # Changelog: Reads in data from an "CHANGELOG" file to generate markdown formatted
  # changelog or list of changelog entries for a README.md. Accepts a
  # second optional parameter to change to a different file than the default.
  # Usage: {{changelog}} or {{changelog [src]}}
  Handlebars.registerHelper "changelog", (changelog) ->
    if Utils.isUndefined(changelog)
      changelog = Utils.readYAML('./CHANGELOG')
    else
      changelog = Utils.readYAML(changelog)
    source = "{{#each .}}* {{date}}\t\t\t{{{@key}}}\t\t\t{{#each changes}}{{{.}}}  {{/each}}\n{{/each}}"
    template = Handlebars.compile(source)
    Utils.safeString(template(changelog))

  # Roadmap: Reads in data from an "ROADMAP" file to generate markdown formatted
  # roadmap or list of roadmap entries for a README.md. Accepts a
  # second optional parameter to change to a different file than the default.
  # Usage: {{roadmap}} or {{roadmap [src]}}
  Handlebars.registerHelper "roadmap", (roadmap) ->
    if Utils.isUndefined(roadmap)
      roadmap = Utils.readYAML('./ROADMAP')
    else
      roadmap = Utils.readYAML(roadmap)
    source = "{{#each .}}* {{eta}}\t\t\t{{{@key}}}\t\t\t{{#each goals}}{{{.}}}  {{/each}}\n{{else}}_(Big plans in the works)_{{/each}}"
    template = Handlebars.compile(source)
    Utils.safeString(template(roadmap))



  @
