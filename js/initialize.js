(function () {
    define(['jquery', 'raphael'], function ($, R) {
        var initialize = function (state) {
            state.name = 'VOnix';
            state.version = '0.0.1';

            $('body').html('<h1>Hello, world!</h1>');

            drawTest();
        };

        return initialize;

        // Test drawing taken from http://raphaeljs.com/ (official site).
        function drawTest() {
            var paper, circle;

            // Creates canvas 320 × 200 at 10, 50
            paper = Raphael(10, 50, 320, 200);

            // Creates circle at x = 50, y = 40, with radius 10
            circle = paper.circle(50, 40, 10);

            // Sets the fill attribute of the circle to red (#f00)
            circle.attr('fill', '#f00');

            // Sets the stroke attribute of the circle to white
            circle.attr('stroke', '#fff');
        }
    });
}());
