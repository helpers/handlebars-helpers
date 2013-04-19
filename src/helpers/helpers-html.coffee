module.exports.register = (Handlebars, options) ->

  # Local deps
  Utils = require '../utils/utils'
  HTML  = require '../utils/html'




  ###
  Link helper: This will escape the passed in parameters, but mark the response as safe,
  so Handlebars will not try to escape it even if the "triple-stash" is not used.
  Usage: {{link 'href' 'title' 'class'}}
  ###
  Handlebars.registerHelper "link", (url, text, linkClass) ->
      url = Handlebars.Utils.escapeExpression(url)
      text = Handlebars.Utils.escapeExpression(text)
      linkClass = ""  if Utils.isUndefined(linkClass)
      result = '<a class="' + linkClass + '" href="' + url + '" title="' + text + '">' + text + '</a>'
      Utils.safeString(result)


  ###
  List: <ul>
  ###
  Handlebars.registerHelper "ul", (context, options) ->
      ("<ul " + (HTML.parseAttributes(options.hash)) + ">") + context.map((item) ->
        "<li>" + (options.fn(item)) + "</li>"
      ).join("\n") + "</ul>"


  ###
  List: <ol>
  Same as the `ul` helper but creates ordered lists.
  ###
  Handlebars.registerHelper "ol", (context, options) ->
      ("<ol " + (HTML.parseAttributes(options.hash)) + ">") + context.map((item) ->
        "<li>" + (options.fn(item)) + "</li>"
      ).join("\n") + "</ol>"



  ###
  Break helper: Add the specified number of br tags
  Usage: {{br 5}}
  ###
  Handlebars.registerHelper 'br', (count, options) ->
      br = '<br>'
      unless Utils.isUndefined count
          i = 0
          while i < count - 1
              br += '<br>'
              i++
      Utils.safeString br


  ###
  Convert new line (\n) to <br>
  from http://phpjs.org/functions/nl2br:480
  ###
  Handlebars.registerHelper 'nl2br', (text) ->
      nl2br = (text + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1" + "<br>" + "$2")
      Utils.safeString(nl2br)



  # Newline to break
  Handlebars.registerHelper 'newLineToBr', (str) ->
      str.replace /\r?\n|\r/g, '<br>'


  ###
  <!DOCTYPE>
  Same as the `ul` helper but creates and ordered list.
  ###
  Handlebars.registerHelper "DOCTYPE", (type) ->
    type = type.toLowerCase()
    switch type

      # HTML 5
      when "5", "html", "html5"
        return Utils.safeString('<!DOCTYPE1 html>')

      # XML
      when "xml"
        return Utils.safeString('<?xml version="1.0" encoding="utf-8" ?>')

      # XHTML
      when "strict"
        return Utils.safeString('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">')
      when "transitional"
        return Utils.safeString('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">')
      when "frameset"
        return Utils.safeString('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">')
      when "1.1", "xhtml 1.1"
        return Utils.safeString('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">')
      when "basic"
        return Utils.safeString('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">')
      when "mobile"
        return Utils.safeString('<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">')

      # HTML 4.01
      when "4.01 strict"
        return Utils.safeString('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">')
      when "4.01 trans"
        return Utils.safeString('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">')
      when "4.01 frameset"
        return Utils.safeString('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">')

      # SVG
      when "svg 1.1", "svg1.1"
        return Utils.safeString('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">')
      when "svg 1.0", "svg1.0", "svg1"
        return Utils.safeString('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">')

      # Default to HTML 5
      else
        Utils.safeString('<!DOCTYPE html>')



  Handlebars.registerHelper "icon", (attachment) ->
      extension = attachment.substr((attachment.lastIndexOf(".") + 1))
      value = Handlebars.Utils.escapeExpression(extension)
      switch value
        when "jpg", "jpeg", "png", "gif"
          return Utils.safeString('<img src="img/img-icon.png"><span>' + attachment + '</span>')
        when "zip", "rar"
          return Utils.safeString('<img src="img/archive-icon.png"><span>' + attachment + '</span>')
        when "pdf"
          return Utils.safeString('<img src="img/pdf-icon.png"><span>' + attachment + '</span>')
        when "txt"
          return Utils.safeString('<img src="img/txt-icon.png"><span>' + attachment + '</span>')
        when "doc", "docx"
          return Utils.safeString('<img src="img/word-icon.png"><span>' + attachment + '</span>')
        when "xls", "xlsx"
          return Utils.safeString('<img src="img/xls-icon.png"><span>' + attachment + '</span>')
        when "csv"
          return Utils.safeString('<img src="img/csv-icon.png"><span>' + attachment + '</span>')
        when "ppt", "pptx"
          return Utils.safeString('<img src="img/ppt-icon.png"><span>' + attachment + '</span>')
        when "mp3"
          return Utils.safeString('<img src="img/audio-icon.png"><span>' + attachment + '</span>')
        else
          Utils.safeString('<img src="img/other-icon.png"><span>' + attachment + '</span>')

  @
