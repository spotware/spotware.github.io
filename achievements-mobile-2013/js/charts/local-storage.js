/*jslint loopfunc: true, browser: true, jquery: true*/
/* jshint -W116 */ //Expected '===' and instead saw '=='.
/* jshint -W117 */ //'SOME_VAR' is not defined.
/* jshint -W097 */ //Use the function form of "use strict".
'use strict';

var SplineChart = require('js/charts/common/spline-chart.js').SplineChart;

/**
 * @constructor
 */
var LocalStorage = function () {
    var loadSpeed = [
            8.11, 8.43, 7.8, 9.51, 6.62, 6.63, 6.24, 6.11, 6.86, 8.12, 8.76, 5.9, 4.08, 3.65, 3.32, 4.63, 3.32, 5.32, 5.66, 2.28, 1.55, 3.06, 4.76, 3.06, 2.08, 3.88, 4.52, 4.33, 3.71, 1.91, 4.56
        ],
        data = [];
    for (var date = 1; date < 31; date++) {
        data.push([Date.UTC(2013, 11, date), loadSpeed[date]])
    }

    this.chart = new SplineChart({
        $el: $('.local-storage-chart'),
        settings: {
            titleText: 'Page Load time',
            subtitleText: 'December 2013',
            dividerValue: Date.UTC(2013, 11, 12),
            dividerText: 'Release date',
            yAxisTitle: 'Seconds',

            valueSuffix: ' sec',
            data: data
        },
        activateOn: 'local-storage-slide'
    });
};

exports.LocalStorage = LocalStorage;