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

                $('#test_id').change(function (event) {
                    var optionVal;

                    optionVal = $(event.target).find('option:selected').val();

                    g[optionVal].call(g);
                });

                // For now, we just run a test functions.
                g.drawTest();
                // g.drawTest2();
            });
        });
    });
}());
