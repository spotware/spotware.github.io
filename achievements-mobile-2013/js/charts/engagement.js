/*jslint loopfunc: true, browser: true, jquery: true*/
/* jshint -W116 */ //Expected '===' and instead saw '=='.
/* jshint -W117 */ //'SOME_VAR' is not defined.
/* jshint -W097 */ //Use the function form of "use strict".
'use strict';

/**
 * @constructor
 */
var Engagement = function () {
    this.$elDesktop = $('.engagement-chart-desktop');
    this.$elMobile = $('.engagement-chart-mobile');
    this.settingsDesktop = this.getSettings({
        title: 'Desktop Engagement',
        dataByMonths: [
            81.2,
            0.9,
            1.1,
            2.4,
            3.6,
            6.0,
            4.8
        ]
    });
    this.settingsMobile = this.getSettings({
        title: 'Mobile Engagement',
        dataByMonths: [
            65.9,
            0.8,
            1.0,
            2.5,
            5.2,
            10.7,
            13.8
        ]
    });

    if (this.$elDesktop.closest($(Reveal.getCurrentSlide())).length) {
        // current slide is active on load
        this.activate();
    }
    this.bindEvents('engagement-slide');
};

Engagement.prototype.bindEvents = function (eventName) {
    Reveal.addEventListener(eventName, function () {
        this.activate();
    }.bind(this), false);
};

Engagement.prototype.activate = function () {
    if (this.activated) return;

    this.chartDesktop = this.$elDesktop.highcharts(this.settingsDesktop);
    this.chartMobile = this.$elMobile.highcharts(this.settingsMobile);

    this.activated = true;
    Reveal.layout();
};

/*
 * @param options
 * @param {String} options.title
 * @param {Array} options.dataByMonths
 * @param {Array} options.dataByMonths
 */
Engagement.prototype.getSettings = function (options) {
    var dataByMonths = options.dataByMonths;
    return {
        chart: {
            height: 300,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: options.title
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [
            {
                type: 'pie',
                name: 'Engagement',
                data: [
                    ['0-10 seconds', dataByMonths[0]],
                    ['11-30 seconds', dataByMonths[1]],
                    ['31-60 seconds', dataByMonths[2]],
                    ['61-180 seconds', dataByMonths[3]],
                    ['181-600 seconds', dataByMonths[4]],
                    ['601-1800 seconds', dataByMonths[5]],
                    {
                        name: '1801+ seconds',
                        y: dataByMonths[6],
                        sliced: true,
                        selected: true
                    }
                ]
            }
        ],
        credits: {
            enabled: false
        }
    };
};

exports.Engagement = Engagement;