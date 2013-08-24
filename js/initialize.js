(function () {
    define(['jquery', 'raphael', 'logger'], function ($, R, Logger) {
        var Initialize;

        Initialize = function (state) {
            var logger = new Logger;

            state.logger = logger;

            state.name = 'VOnix';
            state.version = '0.0.1';

            state.pField = $('#playing_field');

            state.pfWidth = state.pField.width();
            state.pfHeight = state.pField.height();

            state.graphicsEngine = 'raphael_graphics';
        };

        return Initialize;
    });
}());
