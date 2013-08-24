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
                var g = new G(state),
                    selectEl = $('#test_id');

                // For now, we are just playing with test functions.
                _.each(g.availableTests, function (value, index, list) {
                    console.log('value = ' + value + '; index = ' + index + '.');

                    selectEl.append(
                        '<option value="' + value + '">' +
                            value + '()' +
                        '</option>'
                    );
                });

                $('#test_id').change(function (event) {
                    var optionVal;

                    optionVal = $(event.target).find('option:selected').val();

                    g[optionVal].call(g);
                });

                g[g.availableTests[0]].call(g);
            });
        });
    });
}());
