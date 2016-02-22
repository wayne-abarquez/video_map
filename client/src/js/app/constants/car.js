(function(){
    'use strict';

    var pathFromDirections = [
        {
            "lat": 37.40458,
            "lng": -121.93255
        },
        {
            "lat": 37.40457,
            "lng": -121.93245
        },
        {
            "lat": 37.404540000000004,
            "lng": -121.93233000000001
        },
        {
            "lat": 37.404500000000006,
            "lng": -121.93215000000001
        },
        {
            "lat": 37.40446,
            "lng": -121.93200000000002
        },
        {
            "lat": 37.404360000000004,
            "lng": -121.93158000000001
        },
        {
            "lat": 37.404230000000005,
            "lng": -121.93106000000002
        },
        {
            "lat": 37.40406,
            "lng": -121.93037000000001
        },
        {
            "lat": 37.40388,
            "lng": -121.92961000000001
        },
        {
            "lat": 37.403830000000006,
            "lng": -121.92944000000001
        },
        {
            "lat": 37.40381,
            "lng": -121.92934000000001
        },
        {
            "lat": 37.403780000000005,
            "lng": -121.92920000000001
        },
        {
            "lat": 37.40377,
            "lng": -121.92916000000001
        },
        {
            "lat": 37.40377,
            "lng": -121.92916000000001
        },
        {
            "lat": 37.403850000000006,
            "lng": -121.92913000000001
        },
        {
            "lat": 37.40431,
            "lng": -121.92899000000001
        },
        {
            "lat": 37.40439000000001,
            "lng": -121.92896
        },
        {
            "lat": 37.404450000000004,
            "lng": -121.92894000000001
        },
        {
            "lat": 37.40458,
            "lng": -121.92889000000001
        },
        {
            "lat": 37.40476,
            "lng": -121.92882000000002
        },
        {
            "lat": 37.405570000000004,
            "lng": -121.92851000000002
        },
        {
            "lat": 37.40565,
            "lng": -121.92848000000001
        },
        {
            "lat": 37.40641,
            "lng": -121.92819000000001
        },
        {
            "lat": 37.40643,
            "lng": -121.92818000000001
        },
        {
            "lat": 37.40648,
            "lng": -121.92817000000001
        },
        {
            "lat": 37.40654,
            "lng": -121.92816
        },
        {
            "lat": 37.406600000000005,
            "lng": -121.92814000000001
        },
        {
            "lat": 37.4067,
            "lng": -121.92813000000001
        },
        {
            "lat": 37.40673,
            "lng": -121.92813000000001
        },
        {
            "lat": 37.406760000000006,
            "lng": -121.92813000000001
        },
        {
            "lat": 37.40699,
            "lng": -121.92813000000001
        },
        {
            "lat": 37.40715,
            "lng": -121.92813000000001
        },
        {
            "lat": 37.40747,
            "lng": -121.92812
        },
        {
            "lat": 37.40782,
            "lng": -121.92813000000001
        },
        {
            "lat": 37.40795,
            "lng": -121.92813000000001
        },
        {
            "lat": 37.408170000000005,
            "lng": -121.92813000000001
        },
        {
            "lat": 37.408350000000006,
            "lng": -121.92813000000001
        },
        {
            "lat": 37.408570000000005,
            "lng": -121.92813000000001
        },
        {
            "lat": 37.40863,
            "lng": -121.92813000000001
        },
        {
            "lat": 37.40876,
            "lng": -121.92812
        },
        {
            "lat": 37.409310000000005,
            "lng": -121.92812
        },
        {
            "lat": 37.409850000000006,
            "lng": -121.92813000000001
        },
        {
            "lat": 37.40997,
            "lng": -121.92813000000001
        },
        {
            "lat": 37.410090000000004,
            "lng": -121.92813000000001
        },
        {
            "lat": 37.41028,
            "lng": -121.92814000000001
        },
        {
            "lat": 37.41051,
            "lng": -121.92816
        },
        {
            "lat": 37.4108,
            "lng": -121.92818000000001
        },
        {
            "lat": 37.41091,
            "lng": -121.92819000000001
        },
        {
            "lat": 37.41111,
            "lng": -121.92819000000001
        },
        {
            "lat": 37.41129,
            "lng": -121.92819000000001
        },
        {
            "lat": 37.41149,
            "lng": -121.9282
        },
        {
            "lat": 37.411590000000004,
            "lng": -121.9282
        },
        {
            "lat": 37.41178,
            "lng": -121.92817000000001
        },
        {
            "lat": 37.41185,
            "lng": -121.92815000000002
        },
        {
            "lat": 37.411910000000006,
            "lng": -121.92813000000001
        },
        {
            "lat": 37.41198,
            "lng": -121.92809000000001
        },
        {
            "lat": 37.41212,
            "lng": -121.92803
        },
        {
            "lat": 37.41212,
            "lng": -121.92803
        },
        {
            "lat": 37.41136,
            "lng": -121.92584000000001
        },
        {
            "lat": 37.41129,
            "lng": -121.92564000000002
        },
        {
            "lat": 37.41118,
            "lng": -121.92524000000002
        },
        {
            "lat": 37.411100000000005,
            "lng": -121.92496000000001
        },
        {
            "lat": 37.411080000000005,
            "lng": -121.92487000000001
        },
        {
            "lat": 37.41107,
            "lng": -121.92483000000001
        },
        {
            "lat": 37.41105,
            "lng": -121.92471
        },
        {
            "lat": 37.411030000000004,
            "lng": -121.92460000000001
        },
        {
            "lat": 37.410990000000005,
            "lng": -121.92441000000001
        },
        {
            "lat": 37.41095,
            "lng": -121.92415000000001
        },
        {
            "lat": 37.41093,
            "lng": -121.92386
        },
        {
            "lat": 37.41091,
            "lng": -121.92368
        },
        {
            "lat": 37.41091,
            "lng": -121.92347000000001
        },
        {
            "lat": 37.410920000000004,
            "lng": -121.92319
        },
        {
            "lat": 37.41093,
            "lng": -121.92296
        },
        {
            "lat": 37.410940000000004,
            "lng": -121.92274
        },
        {
            "lat": 37.41096,
            "lng": -121.92246000000002
        },
        {
            "lat": 37.410990000000005,
            "lng": -121.92204000000001
        },
        {
            "lat": 37.41102,
            "lng": -121.92167
        },
        {
            "lat": 37.411060000000006,
            "lng": -121.92137000000001
        },
        {
            "lat": 37.411060000000006,
            "lng": -121.92137000000001
        },
        {
            "lat": 37.411080000000005,
            "lng": -121.92120000000001
        },
        {
            "lat": 37.411190000000005,
            "lng": -121.92121000000002
        },
        {
            "lat": 37.41124000000001,
            "lng": -121.92122
        },
        {
            "lat": 37.411370000000005,
            "lng": -121.92124000000001
        },
        {
            "lat": 37.41132,
            "lng": -121.92142000000001
        },
        {
            "lat": 37.41125,
            "lng": -121.92193
        },
        {
            "lat": 37.411210000000004,
            "lng": -121.92226000000001
        },
        {
            "lat": 37.411150000000006,
            "lng": -121.92285000000001
        },
        {
            "lat": 37.41113,
            "lng": -121.92314
        },
        {
            "lat": 37.41114,
            "lng": -121.92368
        },
        {
            "lat": 37.411150000000006,
            "lng": -121.92391
        },
        {
            "lat": 37.411190000000005,
            "lng": -121.92425000000001
        },
        {
            "lat": 37.41122,
            "lng": -121.92449
        },
        {
            "lat": 37.41124000000001,
            "lng": -121.92459000000001
        },
        {
            "lat": 37.411260000000006,
            "lng": -121.92471
        },
        {
            "lat": 37.41129,
            "lng": -121.92481000000001
        },
        {
            "lat": 37.41134,
            "lng": -121.92503
        },
        {
            "lat": 37.411370000000005,
            "lng": -121.92515000000002
        },
        {
            "lat": 37.4114,
            "lng": -121.92524000000002
        },
        {
            "lat": 37.41142,
            "lng": -121.92531000000001
        },
        {
            "lat": 37.41145,
            "lng": -121.92542000000002
        },
        {
            "lat": 37.41149,
            "lng": -121.92551000000002
        },
        {
            "lat": 37.411500000000004,
            "lng": -121.92554000000001
        },
        {
            "lat": 37.41154,
            "lng": -121.92567000000001
        },
        {
            "lat": 37.411680000000004,
            "lng": -121.92601
        },
        {
            "lat": 37.41179,
            "lng": -121.92634000000001
        },
        {
            "lat": 37.41196,
            "lng": -121.92676000000002
        },
        {
            "lat": 37.41239,
            "lng": -121.92788000000002
        },
        {
            "lat": 37.41263,
            "lng": -121.92859000000001
        },
        {
            "lat": 37.41283,
            "lng": -121.92917000000001
        },
        {
            "lat": 37.41319,
            "lng": -121.93021000000002
        },
        {
            "lat": 37.4133,
            "lng": -121.93052000000002
        },
        {
            "lat": 37.41344,
            "lng": -121.93099000000001
        },
        {
            "lat": 37.413500000000006,
            "lng": -121.93132000000001
        },
        {
            "lat": 37.41355,
            "lng": -121.93162000000001
        },
        {
            "lat": 37.413560000000004,
            "lng": -121.93174
        },
        {
            "lat": 37.41357,
            "lng": -121.93191000000002
        },
        {
            "lat": 37.41358,
            "lng": -121.93221000000001
        },
        {
            "lat": 37.41358,
            "lng": -121.93255
        },
        {
            "lat": 37.41357,
            "lng": -121.93283000000001
        },
        {
            "lat": 37.413540000000005,
            "lng": -121.93313
        },
        {
            "lat": 37.413500000000006,
            "lng": -121.93341000000001
        },
        {
            "lat": 37.413450000000005,
            "lng": -121.93371
        },
        {
            "lat": 37.41326,
            "lng": -121.93457000000001
        },
        {
            "lat": 37.41306,
            "lng": -121.93542000000001
        },
        {
            "lat": 37.41302,
            "lng": -121.93560000000001
        },
        {
            "lat": 37.41284,
            "lng": -121.9364
        },
        {
            "lat": 37.41266,
            "lng": -121.93709000000001
        },
        {
            "lat": 37.412620000000004,
            "lng": -121.93728000000002
        },
        {
            "lat": 37.41248,
            "lng": -121.93794000000001
        },
        {
            "lat": 37.41248,
            "lng": -121.93796
        },
        {
            "lat": 37.412440000000004,
            "lng": -121.93811000000001
        },
        {
            "lat": 37.41241,
            "lng": -121.93824000000001
        },
        {
            "lat": 37.41236,
            "lng": -121.93840000000002
        },
        {
            "lat": 37.412310000000005,
            "lng": -121.93856000000001
        },
        {
            "lat": 37.412240000000004,
            "lng": -121.93872
        },
        {
            "lat": 37.412220000000005,
            "lng": -121.93876000000002
        },
        {
            "lat": 37.41214,
            "lng": -121.93895
        },
        {
            "lat": 37.41208,
            "lng": -121.93908
        },
        {
            "lat": 37.411950000000004,
            "lng": -121.93934000000002
        },
        {
            "lat": 37.4119,
            "lng": -121.93947000000001
        },
        {
            "lat": 37.411840000000005,
            "lng": -121.93959000000001
        },
        {
            "lat": 37.41180000000001,
            "lng": -121.93969000000001
        },
        {
            "lat": 37.41176,
            "lng": -121.9398
        },
        {
            "lat": 37.4117,
            "lng": -121.93994
        },
        {
            "lat": 37.41163,
            "lng": -121.94016
        },
        {
            "lat": 37.411570000000005,
            "lng": -121.94032000000001
        },
        {
            "lat": 37.411550000000005,
            "lng": -121.94036000000001
        },
        {
            "lat": 37.41143,
            "lng": -121.94062000000001
        },
        {
            "lat": 37.41113,
            "lng": -121.94130000000001
        },
        {
            "lat": 37.41077000000001,
            "lng": -121.94206000000001
        },
        {
            "lat": 37.41057,
            "lng": -121.94249
        },
        {
            "lat": 37.4104,
            "lng": -121.94282000000001
        },
        {
            "lat": 37.41028,
            "lng": -121.94305000000001
        },
        {
            "lat": 37.410270000000004,
            "lng": -121.94306000000002
        },
        {
            "lat": 37.41017,
            "lng": -121.94322000000001
        },
        {
            "lat": 37.41013,
            "lng": -121.94327000000001
        },
        {
            "lat": 37.410090000000004,
            "lng": -121.94334
        },
        {
            "lat": 37.410050000000005,
            "lng": -121.94342
        },
        {
            "lat": 37.41001,
            "lng": -121.94349000000001
        },
        {
            "lat": 37.409780000000005,
            "lng": -121.94394000000001
        },
        {
            "lat": 37.40939,
            "lng": -121.94479000000001
        },
        {
            "lat": 37.409290000000006,
            "lng": -121.94499
        },
        {
            "lat": 37.408840000000005,
            "lng": -121.94594000000001
        },
        {
            "lat": 37.40845,
            "lng": -121.94677000000001
        },
        {
            "lat": 37.408350000000006,
            "lng": -121.94698000000001
        },
        {
            "lat": 37.40832,
            "lng": -121.94706000000001
        },
        {
            "lat": 37.40827,
            "lng": -121.94716000000001
        },
        {
            "lat": 37.40823,
            "lng": -121.94728
        },
        {
            "lat": 37.408170000000005,
            "lng": -121.94743000000001
        },
        {
            "lat": 37.40811,
            "lng": -121.94761000000001
        },
        {
            "lat": 37.408060000000006,
            "lng": -121.94783000000001
        },
        {
            "lat": 37.40802,
            "lng": -121.94799
        },
        {
            "lat": 37.408010000000004,
            "lng": -121.94803000000002
        },
        {
            "lat": 37.407990000000005,
            "lng": -121.94816000000002
        },
        {
            "lat": 37.407970000000006,
            "lng": -121.94833000000001
        },
        {
            "lat": 37.40796,
            "lng": -121.94844
        },
        {
            "lat": 37.40795,
            "lng": -121.94855000000001
        },
        {
            "lat": 37.40794,
            "lng": -121.94873000000001
        },
        {
            "lat": 37.40794,
            "lng": -121.94886000000001
        },
        {
            "lat": 37.40794,
            "lng": -121.94901000000002
        },
        {
            "lat": 37.40795,
            "lng": -121.94922000000001
        },
        {
            "lat": 37.407970000000006,
            "lng": -121.94938
        },
        {
            "lat": 37.407970000000006,
            "lng": -121.94943
        },
        {
            "lat": 37.408,
            "lng": -121.9496
        },
        {
            "lat": 37.408030000000004,
            "lng": -121.94975000000001
        },
        {
            "lat": 37.40807,
            "lng": -121.94993000000001
        },
        {
            "lat": 37.408120000000004,
            "lng": -121.95013000000002
        },
        {
            "lat": 37.408190000000005,
            "lng": -121.95032
        },
        {
            "lat": 37.40825,
            "lng": -121.95049000000002
        },
        {
            "lat": 37.40833000000001,
            "lng": -121.95065000000001
        },
        {
            "lat": 37.408350000000006,
            "lng": -121.95070000000001
        },
        {
            "lat": 37.408390000000004,
            "lng": -121.95078000000001
        },
        {
            "lat": 37.40847,
            "lng": -121.95094000000002
        },
        {
            "lat": 37.40849,
            "lng": -121.95097000000001
        },
        {
            "lat": 37.40861,
            "lng": -121.95118000000001
        },
        {
            "lat": 37.408620000000006,
            "lng": -121.95118000000001
        },
        {
            "lat": 37.4087,
            "lng": -121.95132000000001
        },
        {
            "lat": 37.408770000000004,
            "lng": -121.95142000000001
        },
        {
            "lat": 37.40888,
            "lng": -121.95157
        },
        {
            "lat": 37.409200000000006,
            "lng": -121.95206
        },
        {
            "lat": 37.409220000000005,
            "lng": -121.95208000000001
        },
        {
            "lat": 37.40934,
            "lng": -121.95230000000001
        }
    ];

    var carIcon = 'images/markers/caricon.png';

    angular.module('demoApp')
        .value('CAR_PATH', pathFromDirections)
        .value('CAR_PATH_DISTANCE', 4915)
        .value('CAR_ICON', carIcon);
}());
