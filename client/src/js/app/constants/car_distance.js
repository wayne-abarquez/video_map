(function () {
    'use strict';

    // Time Interval + 0.3
    // [ 0.0, 0.3, 0.5, 0.8, 1.0 ]

    var carTimeDistance = {
        /* time elapsed from video */
        "0.0": {
            "distance": 0
        },
        "0.3": {
            "distance": 15
        },
        "0.8": {
            "distance": 40
        },
        "1.0": {
            "distance": 50
        },
        "1.3": {
            "distance": 65
        },
        "1.8": {
            "distance": 90
        },
        "2.3": {
            "distance": 115
        },
        "2.5": {
            "distance": 125
        },
        "3.0": {
            "distance": 150
        },
        "3.5": {
            "distance": 175
        },
        "3.8": {
            "distance": 185
        },
        "4.0": {
            "distance": 200
        },
        "4.5": {
            "distance": 215
        },
        "4.8": {
            "distance": 220
        },
        "5.0": {
            "distance": 220
        },
        "5.3": {
            "distance": 220
        },
        "5.8": {
            "distance": 220
        },
        "6.0": {
            "distance": 225
        },
        "6.5": {
            "distance": 235
        },
        "7.0": {
            "distance": 245
        },
        "7.3": {
            "distance": 250
        },
        "7.8": {
            "distance": 260
        },
        "8.0": {
            "distance": 265
        },
        "8.5": {
            "distance": 275
        },
        "8.8": {
            "distance": 280
        },
        "9.3": {
            "distance": 295
        },
        "9.8": {
            "distance": 315
        },
        "10.0": {
            "distance": 325
        },
        "10.5": {
            "distance": 340
        },
        "10.8": {
            "distance": 350
        },
        "11.0": {
            "distance": 360
        },
        "11.5": {
            "distance": 375
        },
        "11.8": {
            "distance": 385
        },
        "12.0": {
            "distance": 395
        },
        "12.5": {
            "distance": 410
        },
        "12.8": {
            "distance": 420
        },
        "13.0": {
            "distance": 430
        },
        "13.3": {
            "distance": 440
        },
        "13.8": {
            "distance": 455
        },
        "14.0": {
            "distance": 465
        },
        "14.5": {
            "distance": 480
        },
        "14.8": {
            "distance": 490
        },
        "15.3": {
            "distance": 510
        },
        "15.5": {
            "distance": 520
        },
        "15.8": {
            "distance": 525
        },
        "16.0": {
            "distance": 535
        },
        "16.5": {
            "distance": 555
        },
        "17.0": {
            "distance": 570
        },
        "17.3": {
            "distance": 580
        },
        "17.8": {
            "distance": 605
        },
        "18.0": {
            "distance": 620
        },
        "18.3": {
            "distance": 635
        },
        "18.5": {
            "distance": 645
        },
        "19.0": {
            "distance": 675
        },
        "19.3": {
            "distance": 690
        },
        "19.8": {
            "distance": 715
        },
        "20.0": {
            "distance": 730
        },
        "20.5": {
            "distance": 755
        },
        "21.0": {
            "distance": 785
        },
        "21.3": {
            "distance": 795
        },
        "21.8": {
            "distance": 825
        },
        "22.0": {
            "distance": 840
        },
        "22.3": {
            "distance": 850
        },
        "22.5": {
            "distance": 865
        },
        "23.0": {
            "distance": 895
        },
        "23.5": {
            "distance": 920
        },
        "23.8": {
            "distance": 935
        },
        "24.0": {
            "distance": 950
        },
        "24.5": {
            "distance": 975
        },
        "24.8": {
            "distance": 990
        },
        "25.0": {
            "distance": 1005
        },
        "25.5": {
            "distance": 1030
        },
        "26.0": {
            "distance": 1060
        },
        "26.5": {
            "distance": 1085
        },
        "26.8": {
            "distance": 1100
        },
        "27.3": {
            "distance": 1125
        },
        "27.5": {
            "distance": 1140
        },
        "27.8": {
            "distance": 1155
        },
        "28.0": {
            "distance": 1165
        },
        "28.3": {
            "distance": 1175
        },
        "28.5": {
            "distance": 1190
        },
        "28.8": {
            "distance": 1200
        },
        "29.3": {
            "distance": 1215
        },
        "29.8": {
            "distance": 1225
        },
        "30.0": {
            "distance": 1230
        },
        "30.5": {
            "distance": 1245
        },
        "30.8": {
            "distance": 1245
        },
        "31.0": {
            "distance": 1245
        },
        "31.5": {
            "distance": 1270
        },
        "31.8": {
            "distance": 1285
        },
        "32.0": {
            "distance": 1295
        },
        "32.5": {
            "distance": 1320
        },
        "32.8": {
            "distance": 1335
        },
        "33.0": {
            "distance": 1345
        },
        "33.3": {
            "distance": 1360
        },
        "33.8": {
            "distance": 1385
        },
        "34.0": {
            "distance": 1395
        },
        "34.3": {
            "distance": 1410
        },
        "34.5": {
            "distance": 1420
        },
        "35.0": {
            "distance": 1445
        },
        "35.3": {
            "distance": 1455
        },
        "35.5": {
            "distance": 1470
        },
        "35.8": {
            "distance": 1480
        },
        "36.3": {
            "distance": 1505
        },
        "36.5": {
            "distance": 1520
        },
        "36.8": {
            "distance": 1530
        },
        "37.0": {
            "distance": 1545
        },
        "37.5": {
            "distance": 1570
        },
        "37.8": {
            "distance": 1580
        },
        "38.3": {
            "distance": 1605
        },
        "38.5": {
            "distance": 1615
        },
        "38.8": {
            "distance": 1625
        },
        "39.0": {
            "distance": 1635
        },
        "39.5": {
            "distance": 1660
        },
        "40.0": {
            "distance": 1680
        },
        "40.5": {
            "distance": 1700
        },
        "40.8": {
            "distance": 1710
        },
        "41.3": {
            "distance": 1730
        },
        "41.8": {
            "distance": 1730
        },
        "42.0": {
            "distance": 1730
        },
        "42.3": {
            "distance": 1730
        },
        "42.5": {
            "distance": 1730
        },
        "42.8": {
            "distance": 1730
        },
        "43.3": {
            "distance": 1730
        },
        "43.5": {
            "distance": 1730
        },
        "44.0": {
            "distance": 1730
        },
        "44.3": {
            "distance": 1730
        },
        "44.5": {
            "distance": 1730
        },
        "44.8": {
            "distance": 1730
        },
        "45.3": {
            "distance": 1730
        },
        "45.5": {
            "distance": 1730
        },
        "45.8": {
            "distance": 1730
        },
        "46.0": {
            "distance": 1730
        },
        "46.5": {
            "distance": 1730
        },
        "46.8": {
            "distance": 1730
        },
        "47.0": {
            "distance": 1730
        },
        "47.5": {
            "distance": 1730
        },
        "47.8": {
            "distance": 1730
        },
        "48.0": {
            "distance": 1730
        },
        "48.5": {
            "distance": 1730
        },
        "49.0": {
            "distance": 1730
        },
        "49.5": {
            "distance": 1730
        },
        "49.8": {
            "distance": 1730
        },
        "50.0": {
            "distance": 1730
        },
        "50.3": {
            "distance": 1730
        },
        "50.5": {
            "distance": 1730
        },
        "51.0": {
            "distance": 1730
        },
        "51.5": {
            "distance": 1730
        },
        "51.8": {
            "distance": 1735
        },
        "52.0": {
            "distance": 1740
        },
        "52.5": {
            "distance": 1750
        },
        "52.8": {
            "distance": 1750
        },
        "53.0": {
            "distance": 1755
        },
        "53.5": {
            "distance": 1765
        },
        "54.0": {
            "distance": 1775
        },
        "54.3": {
            "distance": 1775
        },
        "54.5": {
            "distance": 1775
        },
        "54.8": {
            "distance": 1775
        },
        "55.0": {
            "distance": 1775
        },
        "55.5": {
            "distance": 1775
        },
        "55.8": {
            "distance": 1775
        },
        "56.0": {
            "distance": 1775
        },
        "56.5": {
            "distance": 1775
        },
        "57.0": {
            "distance": 1775
        },
        "57.3": {
            "distance": 1775
        },
        "57.8": {
            "distance": 1775
        },
        "58.0": {
            "distance": 1775
        },
        "58.3": {
            "distance": 1775
        },
        "58.5": {
            "distance": 1775
        },
        "58.8": {
            "distance": 1775
        },
        "59.3": {
            "distance": 1775
        },
        "59.5": {
            "distance": 1775
        },
        "59.8": {
            "distance": 1775
        },
        "60.0": {
            "distance": 1775
        },
        "60.5": {
            "distance": 1775
        },
        "61.0": {
            "distance": 1785
        },
        "61.3": {
            "distance": 1790
        },
        "61.5": {
            "distance": 1795
        },
        "62.0": {
            "distance": 1800
        },
        "62.3": {
            "distance": 1800
        },
        "62.5": {
            "distance": 1800
        },
        "63.0": {
            "distance": 1800
        },
        "63.3": {
            "distance": 1800
        },
        "63.5": {
            "distance": 1800
        },
        "64.0": {
            "distance": 1800
        },
        "64.5": {
            "distance": 1800
        },
        "64.8": {
            "distance": 1800
        },
        "65.0": {
            "distance": 1805
        },
        "65.5": {
            "distance": 1820
        },
        "66.0": {
            "distance": 1830
        },
        "66.3": {
            "distance": 1835
        },
        "66.8": {
            "distance": 1845
        },
        "67.0": {
            "distance": 1850
        },
        "67.3": {
            "distance": 1855
        },
        "67.5": {
            "distance": 1860
        },
        "68.0": {
            "distance": 1870
        },
        "68.5": {
            "distance": 1885
        },
        "68.8": {
            "distance": 1890
        },
        "69.0": {
            "distance": 1895
        },
        "69.5": {
            "distance": 1925
        },
        "70.0": {
            "distance": 1955
        },
        "70.5": {
            "distance": 1990
        },
        "71.0": {
            "distance": 2020
        },
        "71.3": {
            "distance": 2035
        },
        "71.8": {
            "distance": 2065
        },
        "72.3": {
            "distance": 2095
        },
        "72.8": {
            "distance": 2125
        },
        "73.0": {
            "distance": 2140
        },
        "73.5": {
            "distance": 2175
        },
        "73.8": {
            "distance": 2190
        },
        "74.3": {
            "distance": 2220
        },
        "74.5": {
            "distance": 2235
        },
        "74.8": {
            "distance": 2250
        },
        "75.0": {
            "distance": 2265
        },
        "75.3": {
            "distance": 2280
        },
        "75.8": {
            "distance": 2310
        },
        "76.0": {
            "distance": 2325
        },
        "76.3": {
            "distance": 2340
        },
        "76.5": {
            "distance": 2360
        },
        "77.0": {
            "distance": 2390
        },
        "77.3": {
            "distance": 2405
        },
        "77.8": {
            "distance": 2435
        },
        "78.3": {
            "distance": 2465
        },
        "78.5": {
            "distance": 2480
        },
        "79.0": {
            "distance": 2510
        },
        "79.5": {
            "distance": 2540
        },
        "79.8": {
            "distance": 2555
        },
        "80.0": {
            "distance": 2570
        },
        "80.3": {
            "distance": 2590
        },
        "80.8": {
            "distance": 2620
        },
        "81.0": {
            "distance": 2635
        },
        "81.5": {
            "distance": 2665
        },
        "82.0": {
            "distance": 2695
        },
        "82.5": {
            "distance": 2725
        },
        "83.0": {
            "distance": 2755
        },
        "83.3": {
            "distance": 2775
        },
        "83.8": {
            "distance": 2805
        },
        "84.0": {
            "distance": 2820
        },
        "84.5": {
            "distance": 2850
        },
        "84.8": {
            "distance": 2865
        },
        "85.0": {
            "distance": 2880
        },
        "85.5": {
            "distance": 2910
        },
        "86.0": {
            "distance": 2910
        },
        "86.5": {
            "distance": 2935
        },
        "86.8": {
            "distance": 2950
        },
        "87.0": {
            "distance": 2960
        },
        "87.5": {
            "distance": 2985
        },
        "87.8": {
            "distance": 3000
        },
        "88.3": {
            "distance": 3020
        },
        "88.8": {
            "distance": 3045
        },
        "89.0": {
            "distance": 3060
        },
        "89.3": {
            "distance": 3070
        },
        "89.8": {
            "distance": 3095
        },
        "90.0": {
            "distance": 3110
        },
        "90.5": {
            "distance": 3135
        },
        "90.8": {
            "distance": 3145
        },
        "91.3": {
            "distance": 3170
        },
        "91.5": {
            "distance": 3185
        },
        "91.8": {
            "distance": 3195
        },
        "92.3": {
            "distance": 3220
        },
        "92.5": {
            "distance": 3235
        },
        "92.8": {
            "distance": 3245
        },
        "93.0": {
            "distance": 3255
        },
        "93.3": {
            "distance": 3270
        },
        "93.8": {
            "distance": 3295
        },
        "94.0": {
            "distance": 3305
        },
        "94.3": {
            "distance": 3320
        },
        "94.8": {
            "distance": 3345
        },
        "95.0": {
            "distance": 3355
        },
        "95.5": {
            "distance": 3380
        },
        "95.8": {
            "distance": 3380
        },
        "96.0": {
            "distance": 3380
        },
        "96.3": {
            "distance": 3380
        },
        "96.8": {
            "distance": 3380
        },
        "97.0": {
            "distance": 3380
        },
        "97.5": {
            "distance": 3380
        },
        "97.8": {
            "distance": 3380
        },
        "98.3": {
            "distance": 3380
        },
        "98.5": {
            "distance": 3380
        },
        "98.8": {
            "distance": 3380
        },
        "99.3": {
            "distance": 3380
        },
        "99.5": {
            "distance": 3380
        },
        "99.8": {
            "distance": 3380
        },
        "100.0": {
            "distance": 3380
        },
        "100.5": {
            "distance": 3380
        },
        "100.8": {
            "distance": 3380
        },
        "101.0": {
            "distance": 3380
        },
        "101.5": {
            "distance": 3380
        },
        "101.8": {
            "distance": 3380
        },
        "102.0": {
            "distance": 3380
        },
        "102.5": {
            "distance": 3380
        },
        "102.8": {
            "distance": 3380
        },
        "103.0": {
            "distance": 3380
        },
        "103.5": {
            "distance": 3380
        },
        "103.8": {
            "distance": 3380
        },
        "104.3": {
            "distance": 3380
        },
        "104.8": {
            "distance": 3380
        },
        "105.0": {
            "distance": 3380
        },
        "105.5": {
            "distance": 3380
        },
        "105.8": {
            "distance": 3380
        },
        "106.0": {
            "distance": 3380
        },
        "106.3": {
            "distance": 3380
        },
        "106.8": {
            "distance": 3380
        },
        "107.3": {
            "distance": 3380
        },
        "107.5": {
            "distance": 3380
        },
        "108.0": {
            "distance": 3380
        },
        "108.3": {
            "distance": 3380
        },
        "108.8": {
            "distance": 3380
        },
        "109.0": {
            "distance": 3380
        },
        "109.3": {
            "distance": 3380
        },
        "109.8": {
            "distance": 3380
        },
        "110.3": {
            "distance": 3380
        },
        "110.5": {
            "distance": 3380
        },
        "111.0": {
            "distance": 3380
        },
        "111.3": {
            "distance": 3380
        },
        "111.8": {
            "distance": 3380
        },
        "112.0": {
            "distance": 3380
        },
        "112.5": {
            "distance": 3380
        },
        "113.0": {
            "distance": 3380
        },
        "113.3": {
            "distance": 3380
        },
        "113.8": {
            "distance": 3380
        },
        "114.0": {
            "distance": 3380
        },
        "114.5": {
            "distance": 3380
        },
        "114.8": {
            "distance": 3380
        },
        "115.3": {
            "distance": 3380
        },
        "115.5": {
            "distance": 3380
        },
        "115.8": {
            "distance": 3380
        },
        "116.0": {
            "distance": 3380
        },
        "116.5": {
            "distance": 3380
        },
        "116.8": {
            "distance": 3380
        },
        "117.0": {
            "distance": 3380
        },
        "117.3": {
            "distance": 3380
        },
        "117.5": {
            "distance": 3380
        },
        "118.0": {
            "distance": 3380
        },
        "118.5": {
            "distance": 3380
        },
        "118.8": {
            "distance": 3380
        },
        "119.0": {
            "distance": 3380
        },
        "119.3": {
            "distance": 3380
        },
        "119.5": {
            "distance": 3380
        },
        "120.0": {
            "distance": 3380
        },
        "120.3": {
            "distance": 3380
        },
        "120.5": {
            "distance": 3380
        },
        "121.0": {
            "distance": 3380
        },
        "121.3": {
            "distance": 3380
        },
        "121.8": {
            "distance": 3395
        },
        "122.0": {
            "distance": 3400
        },
        "122.3": {
            "distance": 3405
        },
        "122.8": {
            "distance": 3430
        },
        "123.0": {
            "distance": 3440
        },
        "123.5": {
            "distance": 3465
        },
        "123.8": {
            "distance": 3480
        },
        "124.0": {
            "distance": 3490
        },
        "124.3": {
            "distance": 3505
        },
        "124.5": {
            "distance": 3515
        },
        "124.8": {
            "distance": 3530
        },
        "125.3": {
            "distance": 3550
        },
        "125.5": {
            "distance": 3565
        },
        "126.0": {
            "distance": 3590
        },
        "126.3": {
            "distance": 3600
        },
        "126.5": {
            "distance": 3615
        },
        "126.8": {
            "distance": 3625
        },
        "127.3": {
            "distance": 3650
        },
        "127.8": {
            "distance": 3675
        },
        "128.0": {
            "distance": 3690
        },
        "128.3": {
            "distance": 3700
        },
        "128.8": {
            "distance": 3725
        },
        "129.0": {
            "distance": 3735
        },
        "129.5": {
            "distance": 3760
        },
        "129.8": {
            "distance": 3775
        },
        "130.0": {
            "distance": 3785
        },
        "130.5": {
            "distance": 3810
        },
        "130.8": {
            "distance": 3810
        },
        "131.3": {
            "distance": 3810
        },
        "131.5": {
            "distance": 3810
        },
        "132.0": {
            "distance": 3810
        },
        "132.3": {
            "distance": 3810
        },
        "132.5": {
            "distance": 3810
        },
        "132.8": {
            "distance": 3810
        },
        "133.3": {
            "distance": 3810
        },
        "133.8": {
            "distance": 3835
        },
        "134.3": {
            "distance": 3855
        },
        "134.8": {
            "distance": 3880
        },
        "135.0": {
            "distance": 3895
        },
        "135.3": {
            "distance": 3905
        },
        "135.8": {
            "distance": 3930
        },
        "136.0": {
            "distance": 3945
        },
        "136.5": {
            "distance": 3970
        },
        "136.8": {
            "distance": 3980
        },
        "137.3": {
            "distance": 4005
        },
        "137.5": {
            "distance": 4020
        },
        "138.0": {
            "distance": 4040
        },
        "138.3": {
            "distance": 4055
        },
        "138.5": {
            "distance": 4065
        },
        "139.0": {
            "distance": 4090
        },
        "139.5": {
            "distance": 4115
        },
        "139.8": {
            "distance": 4130
        },
        "140.3": {
            "distance": 4155
        },
        "140.8": {
            "distance": 4180
        },
        "141.0": {
            "distance": 4180
        },
        "141.5": {
            "distance": 4180
        },
        "141.8": {
            "distance": 4180
        },
        "142.3": {
            "distance": 4180
        },
        "142.5": {
            "distance": 4180
        },
        "142.8": {
            "distance": 4180
        },
        "143.0": {
            "distance": 4180
        },
        "143.5": {
            "distance": 4180
        },
        "143.8": {
            "distance": 4180
        },
        "144.0": {
            "distance": 4180
        },
        "144.5": {
            "distance": 4180
        },
        "145.0": {
            "distance": 4180
        },
        "145.3": {
            "distance": 4180
        },
        "145.8": {
            "distance": 4180
        },
        "146.0": {
            "distance": 4180
        },
        "146.5": {
            "distance": 4180
        },
        "147.0": {
            "distance": 4180
        },
        "147.3": {
            "distance": 4180
        },
        "147.5": {
            "distance": 4180
        },
        "147.8": {
            "distance": 4180
        },
        "148.0": {
            "distance": 4180
        },
        "148.3": {
            "distance": 4180
        },
        "148.8": {
            "distance": 4180
        },
        "149.3": {
            "distance": 4180
        },
        "149.5": {
            "distance": 4180
        },
        "150.0": {
            "distance": 4180
        },
        "150.5": {
            "distance": 4180
        },
        "150.8": {
            "distance": 4180
        },
        "151.0": {
            "distance": 4180
        },
        "151.3": {
            "distance": 4180
        },
        "151.8": {
            "distance": 4180
        },
        "152.0": {
            "distance": 4180
        },
        "152.5": {
            "distance": 4180
        },
        "152.8": {
            "distance": 4180
        },
        "153.3": {
            "distance": 4180
        },
        "153.5": {
            "distance": 4180
        },
        "153.8": {
            "distance": 4180
        },
        "154.0": {
            "distance": 4180
        },
        "154.3": {
            "distance": 4180
        },
        "154.8": {
            "distance": 4180
        },
        "155.3": {
            "distance": 4180
        },
        "155.5": {
            "distance": 4180
        },
        "155.8": {
            "distance": 4180
        },
        "156.3": {
            "distance": 4180
        },
        "156.5": {
            "distance": 4180
        },
        "156.8": {
            "distance": 4180
        },
        "157.3": {
            "distance": 4180
        },
        "157.5": {
            "distance": 4180
        },
        "157.8": {
            "distance": 4180
        },
        "158.0": {
            "distance": 4180
        },
        "158.3": {
            "distance": 4180
        },
        "158.8": {
            "distance": 4180
        },
        "159.0": {
            "distance": 4180
        },
        "159.3": {
            "distance": 4180
        },
        "159.5": {
            "distance": 4180
        },
        "159.8": {
            "distance": 4180
        },
        "160.0": {
            "distance": 4180
        },
        "160.5": {
            "distance": 4180
        },
        "161.0": {
            "distance": 4210
        },
        "161.3": {
            "distance": 4225
        },
        "161.5": {
            "distance": 4235
        },
        "161.8": {
            "distance": 4250
        },
        "162.3": {
            "distance": 4280
        },
        "162.5": {
            "distance": 4290
        },
        "163.0": {
            "distance": 4320
        },
        "163.3": {
            "distance": 4335
        },
        "163.8": {
            "distance": 4360
        },
        "164.0": {
            "distance": 4375
        },
        "164.3": {
            "distance": 4390
        },
        "164.8": {
            "distance": 4415
        },
        "165.0": {
            "distance": 4430
        },
        "165.5": {
            "distance": 4455
        },
        "166.0": {
            "distance": 4485
        },
        "166.3": {
            "distance": 4500
        },
        "166.5": {
            "distance": 4510
        },
        "167.0": {
            "distance": 4540
        },
        "167.3": {
            "distance": 4550
        },
        "167.8": {
            "distance": 4565
        },
        "168.0": {
            "distance": 4575
        },
        "168.5": {
            "distance": 4585
        },
        "168.8": {
            "distance": 4605
        },
        "169.0": {
            "distance": 4620
        },
        "169.3": {
            "distance": 4635
        },
        "169.5": {
            "distance": 4655
        },
        "170.0": {
            "distance": 4690
        },
        "170.3": {
            "distance": 4705
        },
        "170.5": {
            "distance": 4725
        },
        "171.0": {
            "distance": 4760
        },
        "171.3": {
            "distance": 4775
        },
        "171.5": {
            "distance": 4795
        },
        "172.0": {
            "distance": 4830
        },
        "172.3": {
            "distance": 4845
        },
        "172.8": {
            "distance": 4880
        },
        "173.0": {
            "distance": 4900
        },
        "173.3": {
            "distance": 4915
        },
        "173.5": {
            "distance": 4935
        },
        "174.0": {
            "distance": 4970
        },
        "174.3": {
            "distance": 4970
        },
        "174.5": {
            "distance": 4970
        },
        "175.0": {
            "distance": 4970
        },
        "175.3": {
            "distance": 4970
        },
        "175.8": {
            "distance": 4970
        },
        "176.0": {
            "distance": 4970
        },
        "176.5": {
            "distance": 4970
        },
        "176.8": {
            "distance": 4970
        },
        "177.3": {
            "distance": 4970
        },
        "177.5": {
            "distance": 4970
        },
        "177.8": {
            "distance": 4970
        },
        "178.0": {
            "distance": 4970
        },
        "178.3": {
            "distance": 4970
        },
        "178.8": {
            "distance": 4970
        },
        "179.3": {
            "distance": 4970
        },
        "179.5": {
            "distance": 4970
        }
    };

    angular.module('demoApp')
        .value('CAR_TIME_DISTANCE', carTimeDistance)
    ;

}());