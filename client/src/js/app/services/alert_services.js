(function () {
'use strict';

angular.module('demoApp')
    .factory('alertServices', ['SweetAlert', alertServices]);

    function alertServices(SweetAlert) {
        var service = {};

        service.showReplayVideoPrompt = showReplayVideoPrompt;

        function showReplayVideoPrompt (message, replayCallback) {
            SweetAlert.swal({
                    title: "Trip Completed!",
                    text: message,
                    type: "info",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Play Again",
                    closeOnConfirm: true
                },
                function () {
                    replayCallback();
                });
        }

        return service;
    }
}());