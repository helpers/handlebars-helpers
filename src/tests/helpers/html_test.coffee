require 'should'

Handlebars = require 'handlebars'
require('../../lib/helpers/helpers-html').register Handlebars, {}


# TODO:
# encodeURI
# decodeURI
# highlight
# icon
# nl2br

# describe 'href', ->
#   describe "{{href 'https://github.com/assemble/helper-lib' 'Awesome helpers'}}", ->
#     it 'should create an href tag.', ->
#       source = "{{href 'https://github.com/assemble/helper-lib' 'Awesome helpers'}}"
#       template = Handlebars.compile(source);
#       template({}).should.equal '<a class="" href="https://github.com/assemble/helper-lib" title="Awesome helpers">Awesome helpers</a>'

describe 'ul', ->
  describe '{{#ul list class="list"}} \n
    {{this}} \n
  {{/ul}}', ->
    it 'should create an unordered list.', ->
      source   = '{{#ul list class="list"}}{{this}}{{/ul}}'
      template = Handlebars.compile(source)
      context  = list: ['one']
      template(context).should.equal '<ul class="list"><li>one</li></ul>'

describe 'ol', ->
  describe '{{#ol list class="list"}} \n
    {{this}} \n
  {{/ol}}', ->
    it 'should create an ordered list.', ->
      source   = '{{#ol list class="list"}}{{this}}{{/ol}}'
      template = Handlebars.compile(source)
      context  = list: ['boom']
      template(context).should.equal '<ol class="list"><li>boom</li></ol>'

describe 'br', ->
  describe '{{br 4}}', ->
    it 'should return <br> tags based on a count.', ->
      source   = '{{br 4}}'
      template = Handlebars.compile(source)
      template(context).should.equal '<br><br><br><br>'


describe 'DOCTYPE', ->
  describe '{{DOCTYPE "5"}}', ->
    it 'should return a valid HTML 5 DOCTYPE declaration.', ->
      source   = '{{DOCTYPE "5"}}'
      template = Handlebars.compile(source)
      template(context).should.equal '<!DOCTYPE1 html>'

  describe '{{DOCTYPE "HTML5"}}', ->
    it 'should return a valid HTML 5 DOCTYPE declaration.', ->
      source   = '{{DOCTYPE "5"}}'
      template = Handlebars.compile(source)
      template(context).should.equal '<!DOCTYPE1 html>'

  describe '{{DOCTYPE "html"}}', ->
    it 'should return a valid HTML 5 DOCTYPE declaration.', ->
      source   = '{{DOCTYPE "5"}}'
      template = Handlebars.compile(source)
      template(context).should.equal '<!DOCTYPE1 html>'

  describe '{{DOCTYPE "xml"}}', ->
    it 'should return a valid XML DOCTYPE declaration.', ->
      source   = '{{DOCTYPE "xml"}}'
      template = Handlebars.compile(source)
      template(context).should.equal '<?xml version="1.0" encoding="utf-8" ?>'

  describe '{{DOCTYPE "strict"}}', ->
    it 'should return a valid XML DOCTYPE declaration.', ->
      source   = '{{DOCTYPE "strict"}}'
      template = Handlebars.compile(source)
      template(context).should.equal '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'

  describe '{{DOCTYPE "transitional"}}', ->
    it 'should return a valid XML DOCTYPE declaration.', ->
      source   = '{{DOCTYPE "transitional"}}'
      template = Handlebars.compile(source)
      template(context).should.equal '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'

  describe '{{DOCTYPE "frameset"}}', ->
    it 'should return a valid XML DOCTYPE declaration.', ->
      source   = '{{DOCTYPE "frameset"}}'
      template = Handlebars.compile(source)
      template(context).should.equal '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">'

  describe '{{DOCTYPE "1.1"}}', ->
    it 'should return a valid XHTML 1.1 DOCTYPE declaration.', ->
      source   = '{{DOCTYPE "1.1"}}'
      template = Handlebars.compile(source)
      template(context).should.equal '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">'

  describe '{{DOCTYPE "basic"}}', ->
    it 'should return a valid XHTML Basic DOCTYPE declaration.', ->
      source   = '{{DOCTYPE "basic"}}'
      template = Handlebars.compile(source)
      template(context).should.equal '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">'

  describe '{{DOCTYPE "mobile"}}', ->
    it 'should return a valid XHTML Mobile Profile (XHTML MP) DOCTYPE declaration.', ->
      source   = '{{DOCTYPE "mobile"}}'
      template = Handlebars.compile(source)
      template(context).should.equal '<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">'

  describe '{{DOCTYPE "4.01 strict"}}', ->
    it 'should return a valid HTML 4.01 Strict DOCTYPE declaration.', ->
      source   = '{{DOCTYPE "4.01 strict"}}'
      template = Handlebars.compile(source)
      template(context).should.equal '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">'

  describe '{{DOCTYPE "4.01 trans"}}', ->
    it 'should return a valid HTML 4.01 Transitional DOCTYPE declaration.', ->
      source   = '{{DOCTYPE "4.01 trans"}}'
      template = Handlebars.compile(source)
      template(context).should.equal '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">'

  describe '{{DOCTYPE "4.01 frameset"}}', ->
    it 'should return a valid HTML 4.01 Frameset DOCTYPE declaration.', ->
      source   = '{{DOCTYPE "4.01 frameset"}}'
      template = Handlebars.compile(source)
      template(context).should.equal '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">'

  describe '{{DOCTYPE "svg 1.1"}}', ->
    it 'should return a valid SVG 1.1 Full DOCTYPE declaration.', ->
      source   = '{{DOCTYPE "svg 1.1"}}'
      template = Handlebars.compile(source)
      template(context).should.equal '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'

  describe '{{DOCTYPE "svg 1.0"}}', ->
    it 'should return a valid SVG 1.0 DOCTYPE declaration.', ->
      source   = '{{DOCTYPE "svg 1.0"}}'
      template = Handlebars.compile(source)
      template(context).should.equal '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">'



