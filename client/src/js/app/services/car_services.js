(function () {
    'use strict';

    angular.module('demoApp')
        .factory('carServices', ['CAR_PATH', 'CAR_PATH_DISTANCE', 'CAR_ICON', '$rootScope', '$timeout', 'gmapServices', carServices]);

    function carServices(CAR_PATH, CAR_PATH_DISTANCE, CAR_ICON, $rootScope, $timeout, gmapServices) {
        var service = {};

        var carCanvasId = 'carcanvas';

        var polyline = null,
            polylinePath = []
            ;

        var img = new Image();
        img.src = CAR_ICON;

        var eol = CAR_PATH_DISTANCE,// eol is distance generated by directions service ex. result.routes[0].legs[0].distance.value
            k = 0,
            step = 5,
            angle = 0
            ;

        service.distanceCovered = 0

        service.carPath = extractCoordsArray(CAR_PATH);

        var startCoord = new google.maps.LatLng(service.carPath[0]);

        service.defaultSpeed = 100;

        service.lastVertex = 0;
        service.speed = 100,
            service.car = null;

        service.isPaused = false;
        // force pause
        service.paused_ = false;

        service.initialize = initialize;
        service.runCar = runCar;
        service.startCar = startCar;
        service.resetCar = resetCar;

        service.accelerate = accelerate;

        service.accelerateCar = accelerateCar;
        service.pauseCar = pauseCar;
        service.resumeCar = resumeCar;

        service.changeSpeed = changeSpeed;
        service.slowDown = slowDown;
        service.accelerateCarAfter = accelerateCarAfter;


        function initialize() {
            gmapServices.initDirectionsService();

            polyline = gmapServices.createPolyline(service.carPath);
            polylinePath = polyline.getPath().getArray();
            gmapServices.showPolyline(polyline);

            gmapServices.addMapListener('click', function (event) {
                console.log('Click Position: ', event.latLng.toJSON());
            });


            gmapServices.addListener(polyline, 'click', function (e) {
                console.log('Polyline clicked: ', e.latLng.toJSON());
                //console.log('Distance from start: ', startCoord.distanceFrom(e.latLng));
                gmapServices.getDirections(startCoord, e.latLng);
            });

            console.log('Polyline Distance: ', polyline.Distance());

            //var newPath = [];
            //service.carPath.forEach(function(latLng, index){
            //    newPath.push({
            //      position: latLng,
            //      index: index
            //    });
            //   //var marker = gmapServices.createCircleMarker(latLng);
            //   // marker.coords = latLng;
            //   //
            //   //gmapServices.addListener(marker, 'click', function(){
            //   //    console.log('Marker Position: ',this.coords);
            //   //})
            //});
            //console.log('New Path: ',JSON.stringify(newPath));

            resetCar();
        }

        function resetCar() {
            var p0 = gmapServices.castToLatLngObject(service.carPath[0]),
                p1 = gmapServices.castToLatLngObject(service.carPath[1]);

            gmapServices.setMapCenter(p0);

            initCar(p0, p1);
        }

        function initCar(p0, p1) {
            if (!service.car) service.car = gmapServices.initCanvasMarker(p0, carCanvasId, CAR_ICON);
            else service.car.setPoint(p0);

            angle = gmapServices.computeBearing(p0, p1);

            service.car.plot(angle);
        }

        function runCar(distance) {
            //console.log('run car: ',distance);

            if (!service.isPaused && !service.paused_) {
                var point = polyline.GetPointAtDistance(distance);

                if (distance > eol || !point) {
                    var msg = 'Distance: ' + (distance / 1609.344).toFixed(2) + ' miles';
                    $rootScope.$broadcast('trip-completed', {message: msg});
                    return;
                }

                if ( k++ >= 180 / step ) {
                    gmapServices.panTo(point);
                    k = 0;
                }

                service.car.setPoint(point);

                //console.log("Miles: " + (distance / 1609.344).toFixed(2) + service.speed);

                if (polyline.GetIndexAtDistance(distance) > service.lastVertex) {
                    console.log('last vertex: ', service.lastVertex);
                    service.lastVertex = polyline.GetIndexAtDistance(distance);

                    if (service.lastVertex == polylinePath.length) {
                        service.lastVertex -= 1;
                    }

                    while (polylinePath[service.lastVertex - 1].equals(polylinePath[service.lastVertex])) {
                        service.lastVertex -= 1;
                    }

                    angle = gmapServices.computeBearing(
                        polylinePath[service.lastVertex - 1],
                        polylinePath[service.lastVertex]
                    );

                    service.car.plot(angle);
                }

                service.distanceCovered = distance + step;
            }

            $timeout(function () {
                service.runCar(service.distanceCovered);
            }, service.speed);
        }

        function startCar() {
            if (service.isPaused || service.paused_) {
                accelerateCar();
                return;
            }

            if (service.car && !service.car.getMap()) service.car.setMap(gmapServices.map);

            $timeout(function () {
                service.runCar(0);
            }, 0);
        }

        function accelerate(speed) {
            var _speed = speed || 100;

            changeSpeed(_speed);
            service.isPaused = false;
        }

        function accelerateCar() {
            service.isPaused = false;
            service.paused_ = false;
        }

        function pauseCar(forcePause) {
            if (forcePause) service.paused_ = true;

            service.isPaused = true;
        }

        function resumeCar() {
            if (service.isPaused) {
                service.isPaused = false;
            }
        }

        function slowDown(speed) {
            if (service.isPaused) service.isPaused = false;

            changeSpeed(speed);
        }

        function changeSpeed(speed) {
            service.speed = speed;
        }

        function accelerateCarAfter(timeMillis, speed) {
            var _timeMillis = timeMillis || 2000,
                _speed = speed || 100;

            $timeout(function () {
                accelerate(_speed);
            }, _timeMillis);
        }

        function extractCoordsArray(coords) {
            var paths = [];

            coords.forEach(function (pos) {
                paths.push(pos.position);
            });

            return paths;
        }

        return service;
    }
}());