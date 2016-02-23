(function () {
    'use strict';

    angular
        .module('demo.authentication', [
            'ngSanitize',
            'ngMaterial',
            'ngAnimate',
            'oitozero.ngSweetAlert'
        ])
        .constant('BASE_URL', window.location.origin)
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('red')
                .accentPalette('pink');
        });

}());