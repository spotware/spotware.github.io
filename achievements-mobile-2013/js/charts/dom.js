/*jslint loopfunc: true, browser: true, jquery: true*/
/* jshint -W116 */ //Expected '===' and instead saw '=='.
/* jshint -W117 */ //'SOME_VAR' is not defined.
/* jshint -W097 */ //Use the function form of "use strict".
'use strict';

var BarChart = require('js/charts/common/bar-chart.js').BarChart;

/**
 * @constructor
 */
var Dom = function () {
    this.chart1 = new BarChart({
        $el: $('.dom-chart1'),
        settings: {
            height: 180,
            titleText: 'Number of DOM nodes',
            xAxisCategories: ['Before', 'After'],
            tooltipValueSuffix: ' nodes',
            plotOptionsBarFormat: '{y} nodes',
            seriesData: [3623, 1801]
        },
        activateOn: 'dom-slide'
    });
    this.chart2 = new BarChart({
        $el: $('.dom-chart2'),
        settings: {
            height: 180,
            titleText: 'Allocated memory',
            xAxisCategories: ['Before', 'After'],
            tooltipValueSuffix: ' Mb',
            plotOptionsBarFormat: '{y} Mb',
            seriesData: [26, 15]
        },
        activateOn: 'dom-slide'
    });
    this.chart3 = new BarChart({
        $el: $('.dom-chart3'),
        settings: {
            height: 180,
            titleText: 'Number of eventListeners',
            xAxisCategories: ['Before', 'After'],
            tooltipValueSuffix: '',
            plotOptionsBarFormat: '{y}',
            seriesData: [3318, 1438]
        },
        activateOn: 'dom-slide'
    });
};

exports.Dom = Dom;