(function(){
'use strict';

angular.module('demoApp')
    .controller('gmapController', ['$rootScope', 'carServices', 'gmapServices', 'alertServices', gmapController]);

    function gmapController($rootScope, carServices, gmapServices, alertServices) {

        var vm = this;

        vm.initialize = initialize;

        google.maps.event.addDomListener(window, 'load', initialize);

        function initialize () {
           gmapServices.createMap('map-canvas');

            // angular service
            carServices.initialize();

            $rootScope.$on('trip-completed', tripCompletedCallback);
        }

        function tripCompletedCallback (event, param) {
            alertServices.showTripCompleted(param.message);
            //alertServices.showReplayVideoPrompt(param.message, function () {
            //    carServices.resetCar();
            //    carServices.accelerate();
            //    $rootScope.$broadcast('reset-video');
            //});
        }
    }
}());