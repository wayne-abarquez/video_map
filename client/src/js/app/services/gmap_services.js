(function(){
    'use strict';

    angular.module('demoApp')
        .factory('gmapServices', ['GMAP_STYLES', gmapServices]);

    function gmapServices(GMAP_STYLES) {
        var service = {};

        //infowindow balloons
        service.INFO_WINDOWS = [];

        service.ZOOM_OUT_LEVEL = 8;
        service.ZOOM_IN_LEVEL = 17;

        service.map = null;
        service.mapProjection = null;
        service.overlayView = null;

        service.geocoder = null;

        service.markers = [];

        service.defaultZoom = service.ZOOM_IN_LEVEL;

        service.defaultLatLng = new google.maps.LatLng(37.4150183, -121.9381816);

        // Maintain only one infobox
        // Prevent from opening multiple infoboxes
        service.lastInfoboxOpen = null;
        service.infoboxes = [];

        service.directionsService = null;
        service.directionsDisplay = null;

        /**
         * Service Functions
         */
        service.apiAvailable = apiAvailable;
        service.createMap = createMap;
        service.addMapListener = addMapListener;
        service.getDistanceOfPath = getDistanceOfPath;
        service.fromLatLngToContainerPixel = fromLatLngToContainerPixel;
        service.fromLatLngToDivPixel = fromLatLngToDivPixel;
        service.fromLatLngToPoint = fromLatLngToPoint;
        service.createCoordinate = createCoordinate;
        service.createInfoWindow = createInfoWindow;
        service.showInfoWindow = showInfoWindow;
        service.hideInfoWindow = hideInfoWindow;
        service.clearInstanceListeners = clearInstanceListeners;
        service.initMarker = initMarker;
        service.createMarker = createMarker;
        service.createCustomMarker = createCustomMarker;
        service.createCircleMarker = createCircleMarker;
        service.panTo = panTo;
        service.showMarker = showMarker;
        service.showMarkers = showMarkers;
        service.hideMarker = hideMarker;
        service.hideMarkers = hideMarkers;
        service.destroyMarker = destroyMarker;
        service.centerMarker = centerMarker;
        service.setMapCenter = setMapCenter;
        service.setMapCenterDefault = setMapCenterDefault;
        service.setZoom = setZoom;
        service.setZoomIfGreater = setZoomIfGreater;
        service.setZoomDefault = setZoomDefault;
        service.setZoomInDefault = setZoomInDefault;
        service.createPolyline = createPolyline;
        service.destroyPolyline = destroyPolyline;
        service.createDashedPolyline = createDashedPolyline;
        service.updatePolyline = updatePolyline;
        service.showPolyline = showPolyline;
        service.hidePolyline = hidePolyline;
        service.addListener = addListener;
        service.addListenerOnce = addListenerOnce;
        service.clearInstanceListeners = clearInstanceListeners;
        service.clearListeners = clearListeners;
        service.removeListener = removeListener;
        service.triggerEvent = triggerEvent;
        service.computeBearing = computeBearing;
        service.initCanvasMarker = initCanvasMarker;
        service.castToLatLngObject = castToLatLngObject;
        service.applyMapStyle = applyMapStyle;
        service.initDirectionsService = initDirectionsService;

        function apiAvailable() {
            return typeof window.google === 'object';
        }

        function createMap(mapId) {
            var mapIdLoc = mapId || 'map3d';
            var myMapId = '#' + mapIdLoc;

            if (service.map) return service.map;
            if (!service.apiAvailable()) return null;

            var mapOptions = {
                zoom: service.defaultZoom,
                minZoom: 2,
                center: service.defaultLatLng,
                mapTypeId: google.maps.MapTypeId.MAP,
                mapTypeControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_TOP
                },
                zoomControlOptions: {
                    position: google.maps.ControlPosition.RIGHT_BOTTOM
                },
                panControl: false
            };

            $(myMapId).height($(window).height() - (42));

            service.map = new google.maps.Map(document.getElementById(mapIdLoc), mapOptions);

            // handle window resize event
            google.maps.event.addDomListener(window, 'resize', function () {
                $(myMapId).height($(window).height() - (42));
                var center = service.map.getCenter();
                google.maps.event.trigger(service.map, 'resize');
                service.map.setCenter(center);
            });

            // apply map styles
            //service.applyMapStyle(GMAP_STYLES);

            return service.map;
        }
        function addMapListener(eventName, callback) {
            if (service.map) {
                return service.addListener(service.map, eventName, callback);
            }
            return null;
        }
        function getDistanceOfPath(path) {
            if (!service.apiAvailable()) return 0;
            return google.maps.geometry.spherical.computeLength(path);
        }

        function fromLatLngToContainerPixel(latlng) {
            if (service.overlayView) {
                return service.overlayView.getProjection().fromLatLngToContainerPixel(latlng);
            }
            return new google.maps.Point();
        }

        function fromLatLngToDivPixel(latlng) {
            if (service.overlayView) {
                return service.overlayView.getProjection().fromLatLngToDivPixel(latlng);
            }
            return new google.maps.Point();
        }

        function fromLatLngToPoint(latlng) {
            if (service.map) {
                var numTiles = 1 << service.map.getZoom();
                var projection = new MercatorProjection();
                var worldCoordinate = projection.fromLatLngToPoint(latlng);
                return new google.maps.Point(
                    worldCoordinate.x * numTiles,
                    worldCoordinate.y * numTiles
                );
            } else {
                return new google.maps.Point();
            }
        }

        function createCoordinate(latitude, longitude) {
            return new google.maps.LatLng(latitude, longitude);
        }

        function createInfoWindow(content) {
            if (!service.apiAvailable()) return null;
            return new google.maps.InfoWindow({content: content});
        }

        function showInfoWindow(infoWindow, target) {
            if (infoWindow) infoWindow.open(service.map, target);
        }

        function hideInfoWindow(infoWindow) {
            if (infoWindow) infoWindow.close();
        }

        function initMarker(_position, _icon, _opts) {
            if (!service.apiAvailable()) return null;

            var additionalOpts = _opts || {};

            var opts = angular.extend({}, {
                position: _position,
                map: service.map,
                icon: _icon
            }, additionalOpts);

            return new google.maps.Marker(opts);
        }

        function createMarker(_position, _color) {
            _color = _color || service.MARKER_ICONS.RED;
            var marker = service.initMarker(_position, _color);

            service.markers.push(marker);

            return marker;
        }

        function createCustomMarker(_position, _icon, _opts) {
            var opts = _opts || {},
                icon = _icon || 'images/markers/default-marker.png';

            return service.initMarker(_position, icon, opts);
        }

        function createCircleMarker(_position, color) {
            var icon = {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 5,
                fillColor: color || '#6ac1ff',
                fillOpacity: 1,
                strokeColor: 'black',
                strokeWeight: 1
            };

            var marker = service.initMarker(_position, icon);
            service.markers.push(marker);

            return marker;
        }

        function panTo(_position) {
            if (!service.map) return;

            service.map.panTo(_position);
        }

        function showMarker(marker) {
            if (marker && marker instanceof google.maps.Marker) marker.setMap(service.map);
        }

        function showMarkers(markerArray) {
            markerArray.forEach(function (marker) {
                service.showMarker(marker);
            });
        }

        function hideMarker(marker) {
            if (marker && marker instanceof google.maps.Marker) marker.setMap(null);
        }

        function hideMarkers(markerArray) {
            markerArray.forEach( function(marker) {
                service.hideMarker(marker);
            });
        }

        function destroyPolyline(polyline) {
            if (polyline && polyline instanceof google.maps.Polyline) polyline.setMap(null);
            service.clearInstanceListeners(polyline);
            polyline = null;
        }

        function destroyMarker(marker) {
            if (marker instanceof Cluster) {
                marker.remove();
            }
            else if (marker instanceof google.maps.Marker) {
                service.hideMarker(marker);
                service.clearInstanceListeners(marker);
            }
            marker = null;
        }

        function centerMarker(marker) {
            if (service.map) {
                service.map.setCenter(marker.position);
            }
        }

        function setMapCenter(coordinates) {
            if (service.map) {
                service.map.setCenter(coordinates);
            }
        }

        function setMapCenterDefault() {
            service.setMapCenter(service.defaultLatLng);
        }

        function setZoom(zoomValue) {
            if (service.map) {
                service.map.setZoom(zoomValue);
            }
        }

        function setZoomIfGreater(zoomValue) {
            if (zoomValue > service.map.getZoom())
                service.setZoom(zoomValue);
        }

        function setZoomDefault() {
            service.setZoom(service.defaultZoom);
        }

        function setZoomInDefault() {
            service.setZoom(service.ZOOM_IN_LEVEL);
        }

        function createPolyline(path, lineColor) {
            if (!service.apiAvailable()) return null;

            var polylineOptions = {
                path: path,
                strokeColor: lineColor || '#ff0000',
                strokeOpacity: 0.2,
                strokeWeight: 2
            };

            return new google.maps.Polyline(polylineOptions);
        }

        function createDashedPolyline(path, lineColor) {
            if (!service.apiAvailable()) return null;

            var lineSymbol = {
                path: 'M 0,-1 0,1',
                strokeOpacity: 0.3,
                scale: 2
            };

            var polylineOptions = {
                path: path,
                clickable: true,
                draggable: false,
                editable: false,
                map: service.map,
                strokeColor: lineColor || '#34495e',
                icons: [{
                    icon: lineSymbol,
                    offset: '0',
                    repeat: '15px'
                }],
                strokeOpacity: 0,
                zIndex: 100
            };
            return new google.maps.Polyline(polylineOptions);
        }

        function updatePolyline(polyline, path) {
            if (polyline) polyline.setPath(path);
        }

        function showPolyline(polyline) {
            if (polyline) polyline.setMap(service.map);
        }

        function hidePolyline(polyline) {
            if (polyline) polyline.setMap(null);
        }

        function addListener(instance, eventName, handler) {
            if (!service.apiAvailable()) return null;
            return google.maps.event.addListener(instance, eventName, handler);
        }

        function addListenerOnce(instance, eventName, handler, capture) {
            if (!service.apiAvailable()) return null;
            return google.maps.event.addListenerOnce(instance, eventName, handler, capture);
        }

        function clearInstanceListeners(instance) {
            if (service.apiAvailable())
                google.maps.event.clearInstanceListeners(instance);
        }

        function clearListeners(instance, eventName) {
            if (service.apiAvailable())
                google.maps.event.clearListeners(instance, eventName);
        }

        function removeListener(listener) {
            if (service.apiAvailable())
                google.maps.event.removeListener(listener);
        }

        function triggerEvent (obj, event) {
            google.maps.event.trigger(obj, 'click');
        }

        function computeBearing(from, to) {
            // Convert to radians.
            var lat1 = from.latRadians();
            var lon1 = from.lngRadians();
            var lat2 = to.latRadians();
            var lon2 = to.lngRadians();

            // Compute the angle.
            var angle = -Math.atan2(Math.sin(lon1 - lon2) * Math.cos(lat2), Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon1 - lon2));

            if (angle < 0.0) angle += Math.PI * 2.0;

            return angle;
        }

        function initCanvasMarker (position, canvasId, iconPath, pixelOffset) {
            var img = new Image();
                img.src = iconPath;

            return new CanvasMarker({
                position: position,
                id: canvasId,
                image: img,
                pixelOffset: pixelOffset || new google.maps.Size(-16, 16),
                map: service.map
            })
        }

        function castToLatLngObject (latLngLiteral) {
            return new google.maps.LatLng(latLngLiteral);
        }

        function applyMapStyle (mapStyles) {
            service.map.setOptions({styles: mapStyles});
        }

        function initDirectionsService () {
            service.directionsService = new google.maps.DirectionsService();
            service.directionsDisplay = new google.maps.DirectionsRenderer();

            service.directionsDisplay.setMap(service.map);
        }

        service.getDirections = getDirections;
        service.waypoint = [];

        $(window).keypress(function (e) {
            //console.log('key press: ', e.keyCode);

            if (e.keyCode == 32) { // SPACE
                service.waypoint = [{location: {"lat": 37.41096261262822, "lng": -121.92425787448883}, stopover: false}];
            }
        });

        function getDirections(origin, dest) {
            //console.log('waypoints: ', service.waypoint);

            service.directionsService.route({
                origin: origin,
                destination: dest,
                travelMode: google.maps.TravelMode.DRIVING,
                waypoints: service.waypoint,
                optimizeWaypoints: true
            }, function(response, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    console.log('Directions Service resp: ', response);
                    service.directionsDisplay.setDirections(response);
                    var distance = google.maps.geometry.spherical.computeLength(response.routes[0].overview_path);
                    console.log('Distance: ',distance);
                } else {
                    window.alert('Directions request failed due to ' + status);
                }
                service.waypoint = [];
            });
        }

        return service;
    }
}());

