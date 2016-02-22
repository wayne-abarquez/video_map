(function(){
'use strict';

angular.module('demoApp')
    .controller('gmapController', ['$rootScope', 'VG_STATES', 'carServices', 'gmapServices', 'alertServices', gmapController]);

    function gmapController($rootScope, VG_STATES, carServices, gmapServices, alertServices) {

        var vm = this;

        vm.initialize = initialize;

        google.maps.event.addDomListener(window, 'load', initialize);

        function initialize () {
           gmapServices.createMap('map-canvas');

            // angular service
            carServices.initialize();

            $rootScope.$on('video-player-state-changed', videoStateChanged);
            $rootScope.$on('trip-completed', tripCompletedCallback);
        }

        function tripCompletedCallback (event, param) {
            alertServices.showReplayVideoPrompt(param.message, function () {
                carServices.resetCar();
                carServices.accelerate();
                $rootScope.$broadcast('reset-video');
            });
        }

        function videoStateChanged (event, param) {
            if(param.state === VG_STATES.PLAY) {
                // angular service
                carServices.startCar();
                console.log('video is played');
            } else {
                // angular service
                carServices.pauseCar();
                console.log('video is paused');
            }
        }

    }
}());