(function(){
'use strict';

angular.module('demoApp')
    .controller('videoController', ['$rootScope', '$sce', 'carServices', videoController]);

    function videoController ($rootScope, $sce, carServices) {
        var vm = this;

        vm.secondsElapsed = 0
        var time = 0;

        var videoPath = 'videos/tiz-20160125-101958.mp4';

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
                    autoHideTime: 2000
                }
            }
        };

        vm.initialize = initialize;
        vm.updateState = updateState;
        vm.updateTime = updateTime;

        vm.initialize();

        function initialize () {
            window.onresize = function () {
                $('#video-canvas').height($(window).height() - (42));
            };
        }

        function updateState (state) {
            $rootScope.$broadcast('video-player-state-changed', {state: state});
        }

        function updateTime (rawTime) {
            vm.secondsElapsed = rawTime;

            time = rawTime.toFixed(1);

            console.log('Time: ',time);

            if(time > 4.5 && time < 6) {
                carServices.pauseCar();
                carServices.accelerateCarAfter(4000);
            } else if(time > 6 && time < 13) {
                carServices.slowDown(300);
            }
            else if (time > 14 && time < 20) {
                carServices.changeSpeed(100);
            }
            else if (time > 31 && time < 31.5) {
                carServices.slowDown(300);
                carServices.accelerateCarAfter(1000);
            }
            else if (time > 41 && time < 50) {
                carServices.pauseCar();
            }
            else if (time > 50 && time < 52) {
                carServices.accelerateCarAfter(0, 300);
            }
            else if (time > 52 && time < 58) {
                carServices.pauseCar();
            }
            else if (time > 58 && time < 59) {
                carServices.accelerateCarAfter(0, 300);
            }
            else if (time > 59 && time < 63) {
                carServices.pauseCar();
            }
            else if (time > 63 && time < 70) {
                carServices.accelerateCarAfter(0, 110);
            }
            else if (time > 71 && time < 83) {
                carServices.accelerateCarAfter(0, 80);
            }
            else if (time > 85.5 && time < 85.9) {
                carServices.pauseCar();
            }
            else if (time > 85.9 && time < 100) {
                carServices.accelerateCarAfter(0, 80);
            }
            //else if (time > 98 && time < 124) {
            //    carServices.pauseCar();
            //}
            //else if (time > 124 && time < 100) {
            //    carServices.accelerateCarAfter(0, 100);
            //}
            //else if (time > 135 && time < 136) {
            //    carServices.pauseCar();
            //}
        }

    }
}());