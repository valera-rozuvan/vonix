(function () {
    define(['raphael', 'underscore', 'jquery'], function (R, _, $) {
        var RaphaelGraphics;

        RaphaelGraphics = function (state) {
            this.state = state;

            this.log = _.bind(state.logger.log, state.logger);
            this.clearLog = _.bind(state.logger.clear, state.logger);

            this.width = state.pfWidth;
            this.height = state.pfHeight;

            this.paper = Raphael(state.pField[0], this.width, this.height);
        };

        RaphaelGraphics.prototype.drawTest = function () {
            var circle;

            this.clearLog();
            this.log(
                'A simple red circle.'
            );

            this.paper.clear();

            circle = this.paper.circle(50, 40, 10);

            circle.attr('fill', '#f00');
            circle.attr('stroke', '#fff');
        }

        RaphaelGraphics.prototype.drawTest2 = function () {
            var circle, fS, rectSize, numCols, numRows, outlineWidth, colors,
                _this;

            this.clearLog();
            this.log(
                'Click on any square. Clicking multiple times changes the ' +
                'square\'s color.'
            );

            fS = [];

            rectSize = 12;
            outlineWidth = 1;

            colors = ['#CCFFFF', '#F00', '#000', '#339', '#339000'];

            _this = this;

            numCols = Math.floor(this.width / (rectSize + 2));
            numRows = Math.floor(this.height / (rectSize + 2));

            this.paper.clear();

            _.each(_.range(0, numCols * numRows, 1), createRectangle, this);

            $(this.paper.canvas)
                .on('mousedown', {type: 'mousedown'}, onMouseAction);
            $(this.paper.canvas)
                .on('mousemove', {type: 'mousemove'}, onMouseAction);

            return;

            function createRectangle(value, index, list) {
                var rect, xPos, yPos;

                yPos = 1 + Math.floor(value / numCols) * (rectSize + 2);
                xPos = 1 + value * (rectSize + 2) - (yPos - 1) * numCols;

                rect = this.paper.rect(xPos, yPos, rectSize, rectSize, 0);

                rect.attr('fill', colors[0]);
                rect.attr('stroke', '#000');
                rect.attr('stroke-width', outlineWidth);

                rect.data('index', index);
                rect.data('color', 0);

                fS.push(rect);
            }

            function onMouseAction(event) {
                var el, colorIndex;

                event.preventDefault();

                el = _this.paper.getElementByPoint(event.pageX, event.pageY);

                if (!el) {
                    return;
                }

                if (event.data.type && event.data.type === 'mousedown') {
                    colorIndex = el.data('color') + 1;

                    if (colorIndex >= colors.length) {
                        colorIndex = 0;
                    }
                    el.data('color', colorIndex);

                    el.attr('fill', colors[colorIndex]);

                    _this.log('square index = ' + el.data('index'));
                } else if (
                    event.data.type &&
                    event.data.type === 'mousemove'
                ) {
                    colorIndex = el.data('color');

                    if (colorIndex === 0) {
                        el.data('color', 1);
                        el.attr('fill', colors[1]);
                    }
                }
            }
        }

        return RaphaelGraphics;
    });
}());
