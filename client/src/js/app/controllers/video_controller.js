(function(){
'use strict';

angular.module('demoApp')
    .controller('videoController', ['$rootScope', '$sce', videoController]);

    function videoController ($rootScope, $sce) {
        var vm = this;

        var videoPath = 'videos/tiz-20160125-101958.mp4';

        vm.config = {
            sources: [
                {
                    src: $sce.trustAsResourceUrl(videoPath),
                    type: "video/mp4"
                }
            ],
            theme: "css/style.min.css",
            updateState: function (state) {
                $rootScope.$broadcast('video-player-state-changed', {state: state});
            }
        };

    }
}());