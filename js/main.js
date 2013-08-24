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
        function ($, _, Initialize) {

        var state = {};

        $.noConflict();
        _.noConflict();

        $(document).ready(function () {
            new Initialize(state);

            require([state.graphicsEngine], function (G) {
                var g = new G(state);

                _.each(_.keys(g.prototype), function (value, index, list) {
                    console.log('value = ' + value + '; index = ' + index + '.');
                });

                // _.each(g, function (value, index, list) {
                //     console.log('value = ' + value + '; index = ' + index + '.');
                // });

                // For now, we are just playing with test functions.
                $('#test_id').change(function (event) {
                    var optionVal;

                    optionVal = $(event.target).find('option:selected').val();

                    g[optionVal].call(g);
                });

                g.drawTest();
            });
        });
    });
}());
