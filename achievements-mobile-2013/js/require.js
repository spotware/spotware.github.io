/* global enableCallLog */
/* jshint -W061 */ //eval
/* jshint -W041 */ //eval
/* jshint -W079 */ //prevent "Redefinition of 'require'."
/* jshint -W116 */ //Expected '===' and instead saw '=='.
/* jshint -W117 */ //'SOME_VAR' is not defined.
/*browser: true, jquery: true*/

/**
 * A trivial implementaion of the CommonJS require pattern.
 * To be used in development *only*!
 *
 * paths started with '.' or '..' - relative to current
 * if not - it is absolute (from moduleRoot)
 *
 * delayed require (executed after initial file evaluation) - is calculated relative to moduleRoot, not current file!
 *
 *
 * @public
 * @param {string} name
 * @param {function} [handler]
 * @return {*}
 */
var require = function (name, handler) {
    'use strict';
    handler = handler || function (source, path) {
        if (path.indexOf('//') == -1) {
            path = path[0] !== '/' ? window.location.href : window.location.protocol + '//' + window.location.host + path;
        }
        // fix for Firefox, if put string directly in eval-> sourceURL doesn't work
        var strToEval = '(function (module, exports) { ' + source + '\n//*/\n})(mod, mod.exports);\n//@ sourceURL=' + path;
        eval(strToEval);
    };

    if (require.moduleRoot && require.moduleRoot[require.moduleRoot.length - 1] != '/') require.moduleRoot += '/';

    var path = [];
    var fileName;

    if (name[0] == '.' || name[0] == '..') {
        //relative path
        name = name.split('/');

        path = require.modulePath !== '' ? require.modulePath.split('/') : [];

        while (name[0] == '.') { name.shift(); }

        while (name[0] == '..' && path.length) {
            name.shift();
            path.pop();
        }

        path = path.concat(name);
    } else {
        //absolute (from moduleRoot) path
        path = name.split('/');
    }

    fileName = path.pop();

    var oldPath = require.modulePath;

    require.modulePath = path.join('/');

    path.push(fileName);
    path = require.moduleRoot + path.join('/');

    var mod = require.modules[path];

    if (mod === undefined) {
        // load file with blocking (!)
        var xhr = new XMLHttpRequest();
//        console.log('requesting:', path);
        xhr.open('GET', path + require.timestampQuery, false);
        xhr.send();

        // OK: when we're using async-loading we can don't use "onreadystatechange" callback
        var source = xhr.responseText;
        if (xhr.status === 200 || xhr.status === 0) {// 0 when files are loaded locally (e.g., cordova app.)
            mod = {exports: {}};
            try {
                handler(source, path, mod);
            } catch (e) {
                console.error('Error in file ' + path + ': ', e, e.stack);
            }
            if (require.developmentMode) enableCallLog(mod.exports);// ToDo
        } else {
            // NOT OK: handling errors here
            console.log(
                [
                    'require.js loading file "' + path + '" was failed.',
                    'Status: ' + xhr.status,
                    'State: ' + xhr.readyState
                ].join('\n')
            );
        }

        // caching
        require.modules[path] = mod;
    }

    require.modulePath = oldPath;
    return mod.exports;
};

require.clearCache = function () {
    'use strict';
    this.modules = {};
};

require.moduleRoot = '';
require.modulePath = '';
require.modules = {};
require.developmentMode = false;
require.timestampQuery = '?' + new Date().getTime();
