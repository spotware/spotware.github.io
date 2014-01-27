/*jslint loopfunc: true, browser: true, jquery: true*/
/* jshint -W116 */ //Expected '===' and instead saw '=='.
/* jshint -W117 */ //'SOME_VAR' is not defined.
/* jshint -W097 */ //Use the function form of "use strict".
'use strict';

/**
 * @constructor
 */
var SplineChart = function (options) {
    this.$el = options.$el;
    this.activated = false;
    this.settings = this.getSettings(options.settings);

    this.chart = undefined;

    if (this.$el.closest($(Reveal.getCurrentSlide())).length) {
        // current slide is active on load
        this.activate();
    }
    this.bindEvents(options.activateOn);
};

SplineChart.prototype.bindEvents = function (eventName) {
    Reveal.addEventListener(eventName, function () {
        this.activate();
    }.bind(this), false);
};

SplineChart.prototype.activate = function () {
    if (this.activated) return;

    this.chart = this.$el.highcharts(this.settings);

    this.activated = true;
    Reveal.layout();
};

/*
 * @param options custom settings for current chart
 */
SplineChart.prototype.getSettings = function (options) {
    return {
        chart: {
            type: 'spline'
        },
        title: {
            text: options.titleText,
            style: {
                fontSize: '36px'
            },
            margin: -10,
            y: 25
        },
        subtitle: {
            text: options.subtitleText,
            align: 'right',
            y: 10,
            style: {
                fontSize: '18px'
            }
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            plotLines: [
                {
                    value: options.dividerValue,
                    width: 3,
                    color: 'red',
                    label: {
                        text: options.dividerText,
                        rotation: 0,
                        y: 100,
                        style: {
                            fontSize: '16px'
                        }
                    },
                    zIndex: 1000
                }
            ]
        },
        yAxis: {
            title: {
                text: options.yAxisTitle
            },
            lineWidth: 1,
            gridLineWidth: 0
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%e. %b', this.x) + ': ' + this.y + options.valueSuffix;
            }
        },
        series: [
            {
                showInLegend: false,
                name: options.titleText,
                data: options.data
            }
        ],
        credits: {
            enabled: false
        }
    };
};

exports.SplineChart = SplineChart;