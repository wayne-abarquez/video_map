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
                carServices.changeSpeed(90);
            }
            else if (time > 28.5 && time < 31.5) {
                carServices.slowDown(200);
                carServices.accelerateCarAfter(2000);
            }
            else if (time > 41 && time < 49.5) {
                console.log('first stop on bridge');
                carServices.pauseCar();
            }

            else if (time > 49.5 && time < 51.5) {
                console.log('first accelerate on bridge');
                carServices.accelerateCarAfter(0, 300);
            }
            else if (time > 51.5 && time < 58) {
                console.log('second stop on bridge');
                carServices.pauseCar();
            }
            else if (time > 58 && time < 58.5) {
                console.log('second accelerate on bridge');
                carServices.accelerateCarAfter(0, 300);
            }
            else if (time > 58.5 && time < 62.5) {
                console.log('third stop on bridge');
                carServices.pauseCar();
            }

            else if (time > 62.5 && time < 68.5) {
                console.log('third accelerate on bridge');
                carServices.accelerateCarAfter(0, 205);
            }

            else if (time > 68.5 && time < 82) {
                console.log('accelerate after uturn on bridge');
                carServices.accelerateCarAfter(0, 70);
            }

            else if (time > 82 && time < 84.8) {
                console.log('change speed');
                carServices.changeSpeed(100);
            }

            else if (time > 84.8 && time < 85.5) {
                console.log('slowing down');
                carServices.changeSpeed(300);
            }

            else if (time > 85.5 && time < 85.8) {
                console.log('first stop on stop light');
                carServices.pauseCar();
            }

            else if (time > 85.8 && time < 94.3) {
                console.log('first accelerate after stop light');
                carServices.accelerate(90);
            }

            else if (time > 94.3 && time < 121.5) {
                console.log('second stop on stop light');
                carServices.pauseCar();
            }

            else if (time > 121.5 && time < 130.5) {
                console.log('second accelerate after stop light');
                carServices.accelerate(100);
            }


            else if (time > 130.5 && time < 133) {
                console.log('third stop on stop light');
                carServices.pauseCar();

                // first stop before samsung
            }

            else if (time > 133 && time < 140.5) {
                console.log('third accelerate after stop light');
                carServices.accelerate(120);
            }

            else if (time > 140.5 && time < 160) {
                console.log('fourth stop on stop light');
                carServices.pauseCar();

                // stop across samsung
            }

            else if (time > 160 && time < 167) {
                console.log('fourth accelerate after stop light');
                carServices.accelerate(90);
            }

            else if (time > 167 && time < 168) {
                console.log('slowing down');
                carServices.changeSpeed(200);
            }


            else if (time > 168 && time < 174) {
                console.log('fifth accelerate after stop light');
                carServices.accelerate(80);
            }
        }

    }
}());