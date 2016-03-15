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
    }
}());