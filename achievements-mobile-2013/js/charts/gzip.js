/*jslint loopfunc: true, browser: true, jquery: true*/
/* jshint -W116 */ //Expected '===' and instead saw '=='.
/* jshint -W117 */ //'SOME_VAR' is not defined.
/* jshint -W097 */ //Use the function form of "use strict".
'use strict';

var BarChart = require('js/charts/common/bar-chart.js').BarChart;

/**
 * @constructor
 */
var Gzip = function () {
    this.chart = new BarChart({
        $el: $('.gzip-chart'),
        settings: {
            titleText: 'Site "weight"',
            xAxisCategories: ['Before', 'After'],
            tooltipValueSuffix: ' Mb',
            plotOptionsBarFormat: '{y} Mb',
            seriesData: [1.45, this.kbToMb(459)]
        },
        activateOn: 'gzip-slide'
    });
};

Gzip.prototype.kbToMb = function (Kb) {
    return parseInt(Kb / 1024 * 100) / 100;
};

exports.Gzip = Gzip;