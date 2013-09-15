/**
 * Convert jade with jade, pass in options.
 * @param   {String} src       Jade content to be converted.
 * @param   {Object} options   Default options to be passed jade, extended with Assemble options.
 * @returns {String}           HTML
 */

var _ = require('lodash');

module.exports = function(src, options, data) {
  var jade = require('jade');
  var defaults = {
    pretty: false,
    filename: ''
  };

  options = _.extend({}, defaults, require('assemble').options.jade, options);

  try {
    return jade.renderFile(src, _.merge(options, data));
  } catch (e) {
    console.error(e);
    console.warn('HTML prettification failed.');
  }
};