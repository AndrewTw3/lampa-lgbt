

(function () {
    'use strict';

    var PLUGIN_NAME = 'Lampa LGBT';
    var PLUGIN_VERSION = '1.0.0';

    function log(message, data) {
        console.log(
            '[' + PLUGIN_NAME + '] ' + message,
            data || ''
        );
    }

    function init() {
        log('Plugin initialized');
        log('Version: ' + PLUGIN_VERSION);
        log('Platform: Android TV');

        if (typeof Lampa === 'undefined') {
            log('Lampa API not found');
            return;
        }

        log('Lampa API detected');

        // Здесь будет подключена проверка
        // источника ограничения контента.
    }

    if (window.Lampa) {
        init();
    } else {
        log('Waiting for Lampa');
    }

})();
