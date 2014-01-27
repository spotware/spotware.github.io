/*jslint loopfunc: true, browser: true, jquery: true*/
/* jshint -W116 */ //Expected '===' and instead saw '=='.
/* jshint -W117 */ //'SOME_VAR' is not defined.
/* jshint -W097 */ //Use the function form of "use strict".
'use strict';

var BarChart = require('js/charts/common/bar-chart.js').BarChart;

/**
 * @constructor
 */
var Sprites = function () {
    this.chart = new BarChart({
        $el: $('.sprites-chart'),
        settings: {
            titleText: 'Number of images, which are downloaded when page loads',
            xAxisCategories: ['Before', 'After'],
            tooltipValueSuffix: ' images',
            plotOptionsBarFormat: '{y} images',
            seriesData: [20, 5]
        },
        activateOn: 'sprites-slide'
    });
};

exports.Sprites = Sprites;