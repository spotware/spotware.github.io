/*jslint loopfunc: true, browser: true, jquery: true*/
/* jshint -W116 */ //Expected '===' and instead saw '=='.
/* jshint -W117 */ //'SOME_VAR' is not defined.
/* jshint -W097 */ //Use the function form of "use strict".
'use strict';

var Volume = require('js/charts/volume.js').Volume,
    Gzip = require('js/charts/gzip.js').Gzip,
    Sprites = require('js/charts/sprites.js').Sprites,
    ImageMin = require('js/charts/image-min.js').ImageMin,
    Dom = require('js/charts/dom.js').Dom,
    IndexedDB = require('js/charts/indexeddb.js').IndexedDB,
    Engagement = require('js/charts/engagement.js').Engagement,
    LocalStorage = require('js/charts/local-storage.js').LocalStorage,
    Visits = require('js/charts/visits.js').Visits;

var MobileSlide = function () {
    this.gzip = new Gzip();
    this.sprites = new Sprites();
    this.imageMin = new ImageMin();
    this.dom = new Dom();
    this.indexedDB = new IndexedDB();
    this.volume = new Volume();
    this.engagement = new Engagement();
    this.localStorage = new LocalStorage();
    this.visits = new Visits();
};

Reveal.addEventListener('ready', function () {
    window.APP = new MobileSlide();
});