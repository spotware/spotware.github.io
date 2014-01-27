/*jslint loopfunc: true, browser: true, jquery: true*/
/* jshint -W116 */ //Expected '===' and instead saw '=='.
/* jshint -W117 */ //'SOME_VAR' is not defined.
/* jshint -W097 */ //Use the function form of "use strict".
'use strict';

/**
 * @constructor
 */
var ColumnChart = function (options) {
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

ColumnChart.prototype.bindEvents = function (eventName) {
    Reveal.addEventListener(eventName, function () {
        this.activate();
    }.bind(this), false);
};

ColumnChart.prototype.activate = function () {
    if (this.activated) return;

    this.chart = this.$el.highcharts(this.settings);

    this.activated = true;
    Reveal.layout();
};

/*
 * @param options custom settings for current chart
 * @param {String} options.titleText
 * @param {String} options.columnFormat
 * @param {Array} options.categories
 * @param {Array} options.series
 */
ColumnChart.prototype.getSettings = function (options) {
    return {
        chart: {
            type: 'column',
            height: 600
        },
        title: {
            text: options.titleText,
            align: 'right',
            style: {
                fontSize: '24px'
            }
        },
        xAxis: {
            categories: options.categories,
            labels: {
                style: {
                    fontSize: '16px'
                },
                y: 20
            }
        },
        yAxis: {
            title: {
                text: null,
                style: {
                    fontSize: '16px'
                }
            },
            labels: {
                style: {
                    fontSize: '14px'
                }
            },
            gridLineWidth: 0,
            max: 100,
            lineWidth: 1
        },
        legend: {
            verticalAlign: 'top',
            itemStyle: {
                fontSize: '18px'
            }
        },
        tooltip: {
            valueSuffix: ' %'
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true,
                    format: '{y} %',
                    style: {
                        fontSize: '14px',
                        color: '#0f0f0f'
                    }
                }
            },
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    format: options.columnFormat,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: options.series,
        credits: {
            enabled: false
        }
    };
};

exports.ColumnChart = ColumnChart;