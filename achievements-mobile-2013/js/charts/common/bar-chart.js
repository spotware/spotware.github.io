/*jslint loopfunc: true, browser: true, jquery: true*/
/* jshint -W116 */ //Expected '===' and instead saw '=='.
/* jshint -W117 */ //'SOME_VAR' is not defined.
/* jshint -W097 */ //Use the function form of "use strict".
'use strict';

/**
 * @constructor
 */
var BarChart = function (options) {
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

BarChart.prototype.bindEvents = function (eventName) {
    Reveal.addEventListener(eventName, function () {
        this.activate();
    }.bind(this), false);
};

BarChart.prototype.activate = function () {
    if (this.activated) return;

    this.chart = this.$el.highcharts(this.settings);

    this.activated = true;
    Reveal.layout();
};

/*
 * @param options custom settings for current chart
 */
BarChart.prototype.getSettings = function (options) {
    var series;
    if (options.series) {
        series = options.series;
    } else {
        series = [
            {
                name: options.titleText,
                showInLegend: false,
                data: options.seriesData
            }
        ];
    }

    return {
        chart: {
            height: options.height || undefined,
            type: 'bar'
        },
        title: {
            text: options.titleText,
            y: 25,
            style: {
                fontSize: '26px'
            }
        },
        xAxis: {
            categories: options.xAxisCategories,
            title: {
                text: null
            },
            gridLineWidth: 0,
            labels: {
                style: {
                    fontSize: '18px'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '',
                align: 'high'
            },
            labels: {
                overflow: 'justify',
                enabled: false
            },
            gridLineWidth: 0
        },
        tooltip: {
            valueSuffix: options.tooltipValueSuffix
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    format: options.plotOptionsBarFormat,
                    style: {
                        fontSize: '16px',
                        color: '#0f0f0f'
                    }
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: 0,
            y: 290,
            floating: true,
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
            shadow: true
        },
        series: series,
        credits: {
            enabled: false
        }
    };
};

exports.BarChart = BarChart;