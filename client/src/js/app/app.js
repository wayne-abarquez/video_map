(function () {
    'use strict';

    angular
        .module('demoApp', [
            'ngSanitize',
            'ngMaterial',
            'ngAnimate',
            'oitozero.ngSweetAlert',
            'treasure-overlay-spinner',
            'com.2fdevs.videogular',
            'com.2fdevs.videogular.plugins.controls',
            'com.2fdevs.videogular.plugins.overlayplay'
        ])

        .constant('BASE_URL', window.location.origin)
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('red')
                .accentPalette('pink');
        });

    //console.log('demo app initialized!');

}());

