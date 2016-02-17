(function(){
'use strict';

angular.module('demoApp')
    .controller('videoController', ['$sce', videoController]);

    function videoController ($sce) {
        var vm = this;

        vm.config = {
            sources: [
                {
                    src: $sce.trustAsResourceUrl("videos/tiz-20160125-101958.mp4"),
                    //src: $sce.trustAsResourceUrl('http://static.videogular.com/assets/videos/videogular.mp4'),
                    type: "video/mp4"
                }
            ],
            theme: "css/style.min.css",
            updateState: function (state) {
                console.log('state changed! ' + state);
            }
        };


        //vm.initialize = initialize;
        //
        //vm.initialize();
        //
        ///* Controller Functions here */
        //
        //function initialize () {
        //}

        /* Non Scope Functions here */

    }
}());