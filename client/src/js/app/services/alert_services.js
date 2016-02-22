(function () {
'use strict';

angular.module('demoApp')
    .factory('alertServices', ['SweetAlert', alertServices]);

    function alertServices(SweetAlert) {
        var service = {};

        service.showReplayVideoPrompt = showReplayVideoPrompt;
        service.showTripCompleted = showTripCompleted;

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

        function showTripCompleted (distance) {
            SweetAlert.swal("Trip Completed!", distance);
        }


        return service;
    }
}());