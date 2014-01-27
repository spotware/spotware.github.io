/*jslint loopfunc: true, browser: true, jquery: true*/
/* jshint -W116 */ //Expected '===' and instead saw '=='.
/* jshint -W117 */ //'SOME_VAR' is not defined.
/* jshint -W097 */ //Use the function form of "use strict".
'use strict';

var BarChart = require('js/charts/common/bar-chart.js').BarChart;

/**
 * @constructor
 */
var IndexedDB = function () {
    this.chart = new BarChart({
        $el: $('.indexedDB-chart'),
        settings: {
            height: 600,
            titleText: 'Time to get trendbars (for EURUSD,h1)',
            xAxisCategories: ['Chrome', 'FF', 'Safari (webSQL)', 'IE'],
            tooltipValueSuffix: ' ms',
            plotOptionsBarFormat: '{y} ms',
            series: [
                {
                    name: 'After (when data is cached)',
                    data: [1628, 1351, 1615, 1350]
                },
                {
                    name: 'Before',
                    data: [1985, 1691, 1915, 1529]
                }
            ]
        },
        activateOn: 'indexedDB-slide'
    });
};

exports.IndexedDB = IndexedDB;