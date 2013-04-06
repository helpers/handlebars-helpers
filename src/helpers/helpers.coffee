if window?
  Handlebars = window.Handlebars
if module?
  Handlebars = module.exports.Handlebars = require 'handlebars'
