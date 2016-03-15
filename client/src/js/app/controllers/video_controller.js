(function(){
'use strict';

angular.module('demoApp')
    .controller('videoController', ['$scope', '$rootScope', '$sce', 'VG_STATES', 'CAR_TIME_DISTANCE', 'carServices', videoController]);

    function videoController ($scope, $rootScope, $sce, VG_STATES, CAR_TIME_DISTANCE, carServices) {
        var vm = this;

        var videoPath = 'videos/tiz-20160125-101958.mp4',
            time = 0,
            carTime = 0
        ;

        var pathDistance = {};

        vm.config = {
            sources: [
                {
                    src: $sce.trustAsResourceUrl(videoPath),
                    type: "video/mp4"
                }
            ],
            theme: "css/style.min.css",
            plugins: {
                controls: {
                    autoHide: true,
                    autoHideTime: 500
                }
            }
        };

        vm.initialize = initialize;
        vm.updateState = updateState;
        vm.seekTime = seekTime;
        vm.updateTime = updateTime;
        vm.onPlayerReady = onPlayerReady;

        vm.initialize();

        function initialize () {
            window.onresize = function () {
                $('#video-canvas').height($(window).height() - (42));
            };

            // Listen for Reset Video Event
            $rootScope.$on('reset-video', resetVideo);

            // play / pause when SPACE pressed
            $(window).keypress(function (e) {
                if (e.keyCode == 32) vm.API.playPause();
                else if(e.keyCode == 13) {
                    console.log('Path Distance: ', JSON.stringify(pathDistance));
                }
            });

            // Listens event when marker is dragged on the path
            $rootScope.$on('seek-video-time', function(event, params){
                //console.log('Seek Video Time Event Triggered!');
                var time = params.time;
                vm.API.seekTime(time);
            });

            // Pause/Resume video during buffering event
            $scope.$watch(function(){
                return vm.API.isBuffering;
            }, function (newValue, oldValue) {
                if(newValue === oldValue) return;
                if(vm.API.isBuffering) {
                    carServices.pauseCar();
                } else {
                    carServices.resumeCar();
                }
            });
        }

        function onPlayerReady(API) {
            vm.API = API;
            //console.log('API: ',vm.API);
        }

        function updateState (state) {
            if (state === VG_STATES.PLAY) {
                carServices.startCar();
            } else {
                carServices.pauseCar(true);
            }
        }

        function resetVideo () {
            vm.API.seekTime(0);
            vm.API.play();
        }

        function getDistanceByTime(time) {
            try {
                //console.log('get distance by time: ', time);
                var carTime = CAR_TIME_DISTANCE[time];
                return carTime.distance;
            } catch (err) {
                var curTime = parseFloat(time);
                curTime += 0.1;
                curTime = curTime.toFixed(1);
                return getDistanceByTime(curTime.toString());
            }
        }

        function seekTime(value) {
            var seekTime = value.toFixed(1);

            //console.log('Seek time: ',seekTime);
            carServices.lastVertex = 0;

            carServices.distanceCovered = getDistanceByTime(seekTime)
            updateTime(value);

            //carServices.lastVertex = -1;
            carServices.plotCar(carServices.distanceCovered);
            carServices.processAngle(carServices.distanceCovered);
        }

        function updateTime (rawTime) {
            time = rawTime.toFixed(1);

            //console.log('Elapsed Time: ', time);
            //console.log('Distance Covered: ', carServices.distanceCovered);
            try {
                carTime = CAR_TIME_DISTANCE[time];

                if(carTime.distance) {
                    if(carTime.distance < carServices.distanceCovered) {
                        carServices.distanceCovered = carTime.distance;
                        //console.log('setting distance');
                    }
                }
            } catch(err){}

            if(time >= 4 && time < 4.8) {
                carServices.slowDown(200);
            }
            else if (time >= 4.8 && time < 5.5) {
                //console.log('is paused');
                carServices.pauseCar();
            }
            else if (time > 5.5 && time < 8.5) {
                //console.log('on accelerate');
                carServices.accelerate(250);
            }
            else if (time > 8.5 && time < 17) {
                carServices.changeSpeed(140);
            }
            else if(time > 17 && time < 27.5) {
                carServices.changeSpeed(90);
            }

            else if (time > 27.5 && time < 28.5) {
                carServices.slowDown(110);
            }

            else if (time > 28.5 && time < 30) {
                carServices.slowDown(200);
            }

            else if (time > 30 && time < 30.8) {
                carServices.pauseCar();
            }

            else if (time > 30.8 && time < 38) {
                carServices.accelerate(100);
            }

            else if (time > 38 && time < 41) {
                carServices.changeSpeed(120);
            }

            else if (time > 41 && time < 51.5) {
                //console.log('first stop on bridge');
                carServices.pauseCar();
            }
            else if (time >= 51.5 && time <= 53.5) {
                //console.log('first accelerate on bridge');
                carServices.accelerate(300);
            }
            else if (time >= 53.5 && time <= 60) {
                //console.log('second stop on bridge');
                carServices.pauseCar();
            }
            else if (time >= 60 && time <= 61.5) {
                //console.log('second accelerate on bridge');
                carServices.accelerate(300);
            }
            else if (time >= 61.5 && time <= 64.5) {
                //console.log('third stop on bridge');
                carServices.pauseCar();
            }

            else if (time >= 64.5 && time <= 68.5) {
                //console.log('third accelerate on bridge');
                carServices.accelerate(230);
            }

            else if (time >= 68.5 && time < 85.5) {
                //console.log('accelerate after uturn on bridge');
                carServices.accelerate(80);
            }

            else if (time >= 85.5 && time < 86) {
                //console.log('slowing down');
                carServices.pauseCar();
            }
            else if (time >= 86 && time <= 95) {
                carServices.accelerate(100);
            }
            else if (time >= 95 && time <= 121) {
                carServices.pauseCar();
            }


            else if (time >= 121 && time <= 122 ) {
                carServices.accelerate(200);
            }
            else if (time >= 122 && time <= 130) {
                carServices.accelerate(100);
            }

            else if (time > 130 && time < 133) {
                //console.log('third stop on stop light');
                carServices.pauseCar();
                // first stop before samsung
            }

            else if (time > 133 && time < 140.8) {
                //console.log('third accelerate after stop light');
                carServices.accelerate(100);
            }

            else if (time >= 140.8 && time < 160) {
                //console.log('fourth stop on stop light');
                carServices.pauseCar();
                // stop across samsung
            }

            else if (time > 160 && time < 167) {
                //console.log('fourth accelerate after stop light');
                carServices.accelerate(90);
            }

            else if (time > 167 && time < 168) {
                //console.log('slowing down');
                carServices.changeSpeed(180);
            }


            else if (time > 168 && time < 174) {
                //console.log('fifth accelerate after stop light');
                carServices.accelerate(70);
            }
        }

    }
}());