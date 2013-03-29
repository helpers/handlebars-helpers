if window?
    Handlebars = window.Handlebars
    window.Assemble = Assemble = {}
if module?
    Handlebars = require 'handlebars'
    module.exports = Assemble = {}
