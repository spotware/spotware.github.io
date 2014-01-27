/*jslint loopfunc: true, browser: true, jquery: true*/
/* jshint -W116 */ //Expected '===' and instead saw '=='.
/* jshint -W117 */ //'SOME_VAR' is not defined.
/* jshint -W097 */ //Use the function form of "use strict".
'use strict';

var ColumnChart = require('js/charts/common/column-chart.js').ColumnChart;

/**
 * @constructor
 */
var Volume = function () {
    this.chart = new ColumnChart({
        $el: $('.volume-chart'),
        settings: {
            titleText: '2013',
            columnFormat: '{y} %',
            categories: ['July', 'August', 'September', 'October', 'November', 'December'],
            series: [
                {
                    name: 'Desktop',
                    data: [87.34, 67.41, 54.6, 58.23, 67.18, 64.12]
                },
                {
                    name: 'Mobile',
                    data: [12.66, 32.59, 45.4, 41.77, 32.82, 35.88]
                }
            ]
        },
        activateOn: 'volume-slide'
    });
};

exports.Volume = Volume;