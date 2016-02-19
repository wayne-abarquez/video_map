(function(){
'use strict';

angular.module('demoApp')
    .controller('gmapController', ['$rootScope', 'carServices', 'gmapServices', gmapController]);

    function gmapController($rootScope, carServices, gmapServices) {

        var vm = this;

        vm.initialize = initialize;

        google.maps.event.addDomListener(window, 'load', initialize);

        function initialize () {
           window.map = gmapServices.createMap('map-canvas');

            //carServices.initialize();
            initCar();

            $rootScope.$on('video-player-state-changed', videoStateChanged);
        }

        function videoStateChanged (event, param) {
            //console.log('video-player-state-changed triggered!');
            if(param.state === 'play') {
                if(marker) {
                    marker.setMap(window.map);
                }
                //carServices.startCar();
                startCar();
                console.log('video is played');
            } else {
                //carServices.stopCar();
                marker.setMap(null);
                console.log('video is paused');
            }
        }

    }
}());