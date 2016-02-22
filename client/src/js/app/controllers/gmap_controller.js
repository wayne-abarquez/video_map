(function(){
'use strict';

angular.module('demoApp')
    .controller('gmapController', ['$rootScope', 'carServices', 'gmapServices', gmapController]);

    function gmapController($rootScope, carServices, gmapServices) {

        var vm = this;

        vm.initialize = initialize;

        google.maps.event.addDomListener(window, 'load', initialize);

        function initialize () {
           gmapServices.createMap('map-canvas');

            // angular service
            carServices.initialize();

            $rootScope.$on('video-player-state-changed', videoStateChanged);
        }

        function videoStateChanged (event, param) {
            if(param.state === 'play') {
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