(function () {
    'use strict';

    // Time Interval + 0.3
    // [ 0.0, 0.3, 0.5, 0.8, 1.0 ]

    var carTimeDistance = {
        "0.0": /* time elapsed from video */ {
            distance: 0,
            speed: 150
        },
        "1.0": {
            distance: 50,
            speed: 150
        },
        "2.0": {
            distance: 100,
            speed: 150
        },
        "3.0": {
            distance: 150,
            speed: 150
        },
        "4.0": {
            distance: 195,
            speed: 200
        },
        "4.8": {
            distance: 211,
            speed: 200
        },
        "5.0": {
            distance: 220,
            speed: 500
        },
        "5.3": {
            stop: true
        },
        "5.8": {
            stop: true
        }
    };

    angular.module('demoApp')
        .value('CAR_TIME_DISTANCE', carTimeDistance)
    ;

}());