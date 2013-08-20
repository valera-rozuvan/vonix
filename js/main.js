(function () {
    requirejs.config({
        baseUrl: 'js',

        paths: {
            jquery: 'vendor/jquery-2.0.3',
            underscore: 'vendor/underscore',
            raphael: 'vendor/raphael'
        },

        shim: {
            underscore: {
                exports: '_'
            },
            raphael: {
                exports: 'Raphael'
            }
        }
    });

    requirejs(
        ['jquery', 'underscore', 'initialize'],
        function ($, _, initialize) {

        var state = {};

        $.noConflict();
        _.noConflict();

        $(document).ready(function () {
            initialize(state);

            console.log(state);
        });
    });
}());
