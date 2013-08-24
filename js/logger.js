(function () {
    define(['jquery'], function ($) {
        var Logger;

        Logger = function () {
            this.logEl = $('#log');
        };

        Logger.prototype.log = function (message) {
            this.logEl.append(message + '\n');

            this.logEl.scrollTop(
                this.logEl[0].scrollHeight - this.logEl.height()
            );
        };

        Logger.prototype.clear = function () {
            this.logEl.text('');
        };

        return Logger;
    });
}());
