(function() {
  var Handlebars;

  require('should');

  Handlebars = require('handlebars');

  require('../../lib/helpers/helpers-html').register(Handlebars, {
    assets: 'assets'
  });

  describe('css', function() {
    describe('{{css myStylesFile}}', function() {
      return it('should create a style tag for the css file', function() {
        var context, source, template;
        source = '{{css myStylesFile}}';
        template = Handlebars.compile(source);
        context = {
          myStylesFile: 'myStyles.css'
        };
        return template(context).should.equal('<link rel="stylesheet" href="assets/css/myStyles.css">');
      });
    });
    describe('{{css myStylesFile}}', function() {
      return it('should create a style tag for the less file', function() {
        var context, source, template;
        source = '{{css myStylesFile}}';
        template = Handlebars.compile(source);
        context = {
          myStylesFile: 'myStyles.less'
        };
        return template(context).should.equal('<link rel="stylesheet/less" href="assets/less/myStyles.less">');
      });
    });
    describe('{{css myStylesList}}', function() {
      return it('should create a list of style tags for the css files', function() {
        var context, source, template;
        source = '{{css myStylesList}}';
        template = Handlebars.compile(source);
        context = {
          myStylesList: ['myStyles1.css', 'myStyles2.css', 'myStyles3.css']
        };
        return template(context).should.equal('<link rel="stylesheet" href="assets/css/myStyles1.css">\n\
<link rel="stylesheet" href="assets/css/myStyles2.css">\n\
<link rel="stylesheet" href="assets/css/myStyles3.css">');
      });
    });
    describe('{{css myStylesList}}', function() {
      return it('should create a list of style tags for the less files', function() {
        var context, source, template;
        source = '{{css myStylesList}}';
        template = Handlebars.compile(source);
        context = {
          myStylesList: ['myStyles1.less', 'myStyles2.less', 'myStyles3.less']
        };
        return template(context).should.equal('<link rel="stylesheet/less" href="assets/less/myStyles1.less">\n\
<link rel="stylesheet/less" href="assets/less/myStyles2.less">\n\
<link rel="stylesheet/less" href="assets/less/myStyles3.less">');
      });
    });
    return describe('{{css myStylesList}}', function() {
      return it('should create a list of style tags for the mixed css and less files', function() {
        var context, source, template;
        source = '{{css myStylesList}}';
        template = Handlebars.compile(source);
        context = {
          myStylesList: ['myStyles1.less', 'myStyles2.css', 'myStyles3.css', 'myStyles1.css', 'myStyles2.less', 'myStyles3.less']
        };
        return template(context).should.equal('<link rel="stylesheet/less" href="assets/less/myStyles1.less">\n\
<link rel="stylesheet" href="assets/css/myStyles2.css">\n\
<link rel="stylesheet" href="assets/css/myStyles3.css">\n\
<link rel="stylesheet" href="assets/css/myStyles1.css">\n\
<link rel="stylesheet/less" href="assets/less/myStyles2.less">\n\
<link rel="stylesheet/less" href="assets/less/myStyles3.less">');
      });
    });
  });

  describe('js', function() {
    describe('{{js myScriptFile}}', function() {
      return it('should create a script tag for the javascript file', function() {
        var context, source, template;
        source = '{{js myScriptFile}}';
        template = Handlebars.compile(source);
        context = {
          myScriptFile: 'myScript.js'
        };
        return template(context).should.equal('<script src="assets/js/myScript.js"></script>');
      });
    });
    describe('{{js myScriptFile}}', function() {
      return it('should create a script tag for the coffee script file', function() {
        var context, source, template;
        source = '{{js myScriptFile}}';
        template = Handlebars.compile(source);
        context = {
          myScriptFile: 'myScript.coffee'
        };
        return template(context).should.equal('<script type="text/coffeescript" src="assets/js/myScript.coffee"></script>');
      });
    });
    describe('{{js myScriptList}}', function() {
      return it('should create a list of script tags for the javascript files', function() {
        var context, source, template;
        source = '{{js myScriptList}}';
        template = Handlebars.compile(source);
        context = {
          myScriptList: ['myScript1.js', 'myScript2.js', 'myScript3.js']
        };
        return template(context).should.equal('<script src="assets/js/myScript1.js"></script>\n\
<script src="assets/js/myScript2.js"></script>\n\
<script src="assets/js/myScript3.js"></script>');
      });
    });
    describe('{{js myScriptList}}', function() {
      return it('should create a list of script tags for the coffee script files', function() {
        var context, source, template;
        source = '{{js myScriptList}}';
        template = Handlebars.compile(source);
        context = {
          myScriptList: ['myScript1.coffee', 'myScript2.coffee', 'myScript3.coffee']
        };
        return template(context).should.equal('<script type="text/coffeescript" src="assets/js/myScript1.coffee"></script>\n\
<script type="text/coffeescript" src="assets/js/myScript2.coffee"></script>\n\
<script type="text/coffeescript" src="assets/js/myScript3.coffee"></script>');
      });
    });
    return describe('{{js myScriptList}}', function() {
      return it('should create a list of script tags for the mixed javascript and coffee script files', function() {
        var context, source, template;
        source = '{{js myScriptList}}';
        template = Handlebars.compile(source);
        context = {
          myScriptList: ['myScript1.coffee', 'myScript2.js', 'myScript3.js', 'myScript1.js', 'myScript2.coffee', 'myScript3.coffee']
        };
        return template(context).should.equal('<script type="text/coffeescript" src="assets/js/myScript1.coffee"></script>\n\
<script src="assets/js/myScript2.js"></script>\n\
<script src="assets/js/myScript3.js"></script>\n\
<script src="assets/js/myScript1.js"></script>\n\
<script type="text/coffeescript" src="assets/js/myScript2.coffee"></script>\n\
<script type="text/coffeescript" src="assets/js/myScript3.coffee"></script>');
      });
    });
  });

  describe('ul', function() {
    return describe('{{#ul list class="list"}} \n\
    {{this}} \n\
  {{/ul}}', function() {
      return it('should create an unordered list.', function() {
        var context, source, template;
        source = '{{#ul list class="list"}}{{this}}{{/ul}}';
        template = Handlebars.compile(source);
        context = {
          list: ['one']
        };
        return template(context).should.equal('<ul class="list"><li>one</li></ul>');
      });
    });
  });

  describe('ol', function() {
    return describe('{{#ol list class="list"}} \n\
    {{this}} \n\
  {{/ol}}', function() {
      return it('should create an ordered list.', function() {
        var context, source, template;
        source = '{{#ol list class="list"}}{{this}}{{/ol}}';
        template = Handlebars.compile(source);
        context = {
          list: ['boom']
        };
        return template(context).should.equal('<ol class="list"><li>boom</li></ol>');
      });
    });
  });

  describe('br', function() {
    return describe('{{br 4}}', function() {
      return it('should return <br> tags based on a count.', function() {
        var source, template;
        source = '{{br 4}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<br><br><br><br>');
      });
    });
  });

  describe('DOCTYPE', function() {
    describe('{{DOCTYPE "5"}}', function() {
      return it('should return a valid HTML 5 DOCTYPE declaration.', function() {
        var source, template;
        source = '{{DOCTYPE "5"}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<!DOCTYPE1 html>');
      });
    });
    describe('{{DOCTYPE "HTML5"}}', function() {
      return it('should return a valid HTML 5 DOCTYPE declaration.', function() {
        var source, template;
        source = '{{DOCTYPE "5"}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<!DOCTYPE1 html>');
      });
    });
    describe('{{DOCTYPE "html"}}', function() {
      return it('should return a valid HTML 5 DOCTYPE declaration.', function() {
        var source, template;
        source = '{{DOCTYPE "5"}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<!DOCTYPE1 html>');
      });
    });
    describe('{{DOCTYPE "xml"}}', function() {
      return it('should return a valid XML DOCTYPE declaration.', function() {
        var source, template;
        source = '{{DOCTYPE "xml"}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<?xml version="1.0" encoding="utf-8" ?>');
      });
    });
    describe('{{DOCTYPE "strict"}}', function() {
      return it('should return a valid XML DOCTYPE declaration.', function() {
        var source, template;
        source = '{{DOCTYPE "strict"}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">');
      });
    });
    describe('{{DOCTYPE "transitional"}}', function() {
      return it('should return a valid XML DOCTYPE declaration.', function() {
        var source, template;
        source = '{{DOCTYPE "transitional"}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">');
      });
    });
    describe('{{DOCTYPE "frameset"}}', function() {
      return it('should return a valid XML DOCTYPE declaration.', function() {
        var source, template;
        source = '{{DOCTYPE "frameset"}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">');
      });
    });
    describe('{{DOCTYPE "1.1"}}', function() {
      return it('should return a valid XHTML 1.1 DOCTYPE declaration.', function() {
        var source, template;
        source = '{{DOCTYPE "1.1"}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">');
      });
    });
    describe('{{DOCTYPE "basic"}}', function() {
      return it('should return a valid XHTML Basic DOCTYPE declaration.', function() {
        var source, template;
        source = '{{DOCTYPE "basic"}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML Basic 1.1//EN" "http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd">');
      });
    });
    describe('{{DOCTYPE "mobile"}}', function() {
      return it('should return a valid XHTML Mobile Profile (XHTML MP) DOCTYPE declaration.', function() {
        var source, template;
        source = '{{DOCTYPE "mobile"}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.2//EN" "http://www.openmobilealliance.org/tech/DTD/xhtml-mobile12.dtd">');
      });
    });
    describe('{{DOCTYPE "4.01 strict"}}', function() {
      return it('should return a valid HTML 4.01 Strict DOCTYPE declaration.', function() {
        var source, template;
        source = '{{DOCTYPE "4.01 strict"}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">');
      });
    });
    describe('{{DOCTYPE "4.01 trans"}}', function() {
      return it('should return a valid HTML 4.01 Transitional DOCTYPE declaration.', function() {
        var source, template;
        source = '{{DOCTYPE "4.01 trans"}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">');
      });
    });
    describe('{{DOCTYPE "4.01 frameset"}}', function() {
      return it('should return a valid HTML 4.01 Frameset DOCTYPE declaration.', function() {
        var source, template;
        source = '{{DOCTYPE "4.01 frameset"}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">');
      });
    });
    describe('{{DOCTYPE "svg 1.1"}}', function() {
      return it('should return a valid SVG 1.1 Full DOCTYPE declaration.', function() {
        var source, template;
        source = '{{DOCTYPE "svg 1.1"}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">');
      });
    });
    return describe('{{DOCTYPE "svg 1.0"}}', function() {
      return it('should return a valid SVG 1.0 DOCTYPE declaration.', function() {
        var source, template;
        source = '{{DOCTYPE "svg 1.0"}}';
        template = Handlebars.compile(source);
        return template(context).should.equal('<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.0//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">');
      });
    });
  });

}).call(this);
