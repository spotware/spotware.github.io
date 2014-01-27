/*jslint loopfunc: true, browser: true, jquery: true*/
/* jshint -W116 */ //Expected '===' and instead saw '=='.
/* jshint -W117 */ //'SOME_VAR' is not defined.
/* jshint -W097 */ //Use the function form of "use strict".
'use strict';

var ColumnChart = require('js/charts/common/column-chart.js').ColumnChart;

/**
 * @constructor
 */
var Visits = function () {
    this.chart = new ColumnChart({
        $el: $('.visits-chart'),
        settings: {
            titleText: '2013',
            columnFormat: '{point.y:,.0f} %',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            series: [
                {
                    name: 'Desktop',
                    data: [95.01, 79.07, 78.79, 73.15, 69.89, 68.41, 65, 63, 62.98, 61, 58.67, 55.53]
                },
                {
                    name: 'Mobile',
                    data: [3.19, 17.17, 16.44, 21.70, 23.89, 25.51, 28, 29, 29.55, 31, 32.29, 35.33]
                },
                {
                    name: 'Tablet',
                    data: [1.8, 3.76, 4.77, 5.15, 6.22, 6.08, 7, 8, 7.47, 8, 9.04, 9.14]
                }
            ]
        },
        activateOn: 'visits-slide'
    });
};

exports.Visits = Visits;