(function(){
'use strict';

angular.module('demoApp')
    .controller('indexController', ['$rootScope', indexController]);

    function indexController ($rootScope) {
        var vm = this;

        // Show Treasure Overlay Spinner
        $rootScope.spinner = {
            active: false
        };

        vm.initialize = initialize;

        //vm.initialize();

        function initialize() {
            //console.log('initialize called');
        }
    }
}());