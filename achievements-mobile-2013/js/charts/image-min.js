/*jslint loopfunc: true, browser: true, jquery: true*/
/* jshint -W116 */ //Expected '===' and instead saw '=='.
/* jshint -W117 */ //'SOME_VAR' is not defined.
/* jshint -W097 */ //Use the function form of "use strict".
'use strict';

var BarChart = require('js/charts/common/bar-chart.js').BarChart;

/**
 * @constructor
 */
var ImageMin = function () {
    this.chart = new BarChart({
        $el: $('.image-min-chart'),
        settings: {
            titleText: 'Images "weight"',
            xAxisCategories: ['Before', 'After'],
            tooltipValueSuffix: ' Mb',
            plotOptionsBarFormat: '{y} Mb',
            seriesData: [2.6, 1.6]
        },
        activateOn: 'image-min-slide'
    });
};

exports.ImageMin = ImageMin;