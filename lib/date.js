'use strict';

const { date } = require('.');

var helpers = module.exports;

/**
 * Get the current year.
 *
 * ```handlebars
 * {{year}}
 * <!-- 2017 -->
 * ```
 * @exposes year as year
 * @api public
 */

helpers.year = require('year');

/**
 * Use [moment][] as a helper. See [helper-date][] for more details.
 *
 * @exposes helper-date as moment
 * @api public
 */

helpers.moment = helpers.date = require('helper-date');

helpers.ONE_SEC = 1000;
helpers.ONE_MIN = helpers.ONE_SEC * 60;
helpers.ONE_HOUR = helpers.ONE_MIN * 60;
helpers.ONE_DAY = helpers.ONE_HOUR * 24;
helpers.ONE_YEAR = helpers.ONE_DAY * 365;


helpers.dateroll = function (date1, nUnit, unit, format){
    var dateStart = null;

    if ( date1 instanceof Date){
        dateStart = date1
    }else if ( typeof(date1) == 'string'){
        dateStart = new Date(date1);
    }

    var time = dateStart.getTime();
    var delta = 0;

    if ( unit == "year" ){
        delta = nUnit * helpers.ONE_YEAR;
    }else if ( unit == "day" ){
        delta = nUnit * helpers.ONE_DAY;
    }else if ( unit == "hour" ){
        delta = nUnit * helpers.ONE_HOUR;
    }else if ( unit == "minute" ){
        delta = nUnit * helpers.ONE_MIN;
    }else if ( unit == "second" ){
        delta = nUnit * helpers.ONE_SEC;
    }

    time = time + delta;

    var d = new Date();
    d.setTime(time);

    var formattedDate = "";

    if ( typeof(format) == 'string' && format  ){
        formattedDate = format.replace("yyyy", d.getUTCFullYear()).replace("MM", ("0"+(d.getUTCMonth()+1)).slice(-2)).replace("dd", ("0" + d.getUTCDate()).slice(-2))
    }else{
        formattedDate = + d.getUTCFullYear() + "-" + ("0"+(d.getUTCMonth()+1)).slice(-2) + "-" +
        ("0" + d.getUTCDate()).slice(-2);
    }
    
    return formattedDate;

}


helpers.datediff = function(date1, date2, unit){
    let dateFrom= null;
    let dateTo = null; 
    if ( date1 instanceof Date ) {
        dateFrom = date1 ;
    }else if ( typeof(date1) == 'string' ){
        dateFrom = new Date(date1);
    }

    if ( date2 instanceof Date ) {
        dateTo = date2 ;
    }else if ( typeof(date2) == 'string' ){
        dateTo = new Date(date2);
    }


    var delta = dateTo.getTime() - dateFrom.getTime();
    
    if ( unit == "year" ){
        return delta / helpers.ONE_YEAR;
    }else if ( unit == "day"){
        return delta / helpers.ONE_DAY;
    }else if ( unit == "hour"){
        return delta / helpers.ONE_HOUR;
    }else if ( unit == "minute"){
        return delta / helpers.ONE_MIN;
    }else if ( unit == "second"){
        return delta / helpers.ONE_SEC;
    }else{
        return delta / helpers.ONE_DAY;
    }
}