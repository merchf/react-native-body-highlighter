import { BodyPart } from "..";

export const bodyFemaleBack = (skinColor: string): BodyPart[] => {
  return [
  {
    slug: "hair",
    color: "#bebebe",
    pathArray: [
      "m 1096.04,0 h 7.79 c 22.49,2.45 53.18,10.99 60.21,36.27 q 0.46,1.66 2,2.05 c 64.38,16.44 60.01,99.49 44.24,147.61 q -2.62,7.99 -6.55,14.81 -0.51,0.89 -1.22,1.68 -0.97,1.07 -1.52,1.32 -3.63,1.58 -6.55,2.8 -14.77,6.1 -29.14,11 -0.74,0.26 -0.59,1.19 -0.52,-0.76 -1.47,-0.46 -4.4,1.42 -10.86,2.97 -3.97,1 -6.62,1.12 -5.28,0.24 -12.66,-0.36 -5.76,-0.52 -11.15,-2.21 -0.54,-0.17 -0.85,-0.03 -0.45,0.2 -0.58,0.77 0.26,-1.02 -0.52,-1.24 -9.76,-2.78 -19.21,-7.04 a 0.46,0.46 0 0 0 -0.65,0.43 l 0.39,12.23 q 0.49,15.83 -0.42,30.63 l -0.91,9.16 a 2.42,2.42 0 0 1 -1.99,2.15 q -11.5,2.06 -22.86,2.63 -5.84,0.05 -10.69,-1.12 -4.96,-1.19 -7,-1.31 -3.7,-0.23 -7.48,-0.12 -17.27,0.5 -33.97,1.33 -7.72,0.38 -15.15,-0.74 a 2.13,2.12 0.2 0 1 -1.78,-1.78 c -1,-6.77 1.75,-15.8 4.22,-22.15 q 5.88,-15.15 12.89,-32.55 c 7.85,-19.49 14.27,-41.02 13.35,-61.3 q -1.03,-22.68 -5.37,-57.36 -0.67,-5.33 -0.4,-10.31 0.98,-18.63 7.84,-37.04 5.87,-15.78 15.35,-24.54 c 7.92,-7.32 19.98,-14.55 31.09,-17.67 q 9.1,-2.55 18.79,-2.82 z m 40.66,79.56 c 15.08,3.29 29.45,-7.8 30.48,-23.26 q 0.15,-2.22 -0.63,-0.14 -6.61,17.62 -24.72,17.97 c -5.78,0.12 -11.81,-2.36 -16.39,-6.42 -1.53,-1.35 -3.74,-3.16 -5.84,-2.98 a 0.62,0.62 0 0 0 -0.5,0.9 q 5.86,11.37 17.6,13.93 z",
      "m 1167.18,56.3 c -1.03,15.46 -15.4,26.55 -30.48,23.26 Q 1124.96,77 1119.1,65.63 a 0.62,0.62 0 0 1 0.5,-0.9 c 2.1,-0.18 4.31,1.63 5.84,2.98 4.58,4.06 10.61,6.54 16.39,6.42 q 18.11,-0.35 24.72,-17.97 0.78,-2.08 0.63,0.14 z",
    ],
    textPosition: { x: 1101, y: 111 },
  },
  {
    slug: "neck",
    color: skinColor,
    pathArray: [
      "M 1120.429 220.575 q -10.12 37.499 -33.749 47.249 q 60.754 18.75 108.378 -2.25 q -16.875 -6 -30.375 -46.499 q -23.624 7.5 -44.624 2.25 z",
    ],
    textPosition: { x: 1142, y: 250 },
  },
  {
    slug: "trapezius",
    color: skinColor,
    pathArray: [
      "M 1048.037 276 q 39.317 -8.237 95.858 4.868 q 51.3 -15.727 84.251 -5.991 c -77.136 73.766 11.233 64.03 -86.146 133.123 c -107.091 -60.66 -12.731 -55.418 -95 -131 z",
    ],
    textPosition: { x: 1142, y: 343 },
  },
  {
    slug: "shoulders",
    color: skinColor,
    pathArray: [
      "M 1299.566 379.222 c 11.965 -81.716 -29.768 -114.695 -75.88 -98.06 l 75.88 98.06 z",
      "M 984.225 376.451 c -8.167 -41.798 19.698 -122.991 70.144 -90.322 l -69.183 89.842 z",
    ],
    textPosition: { x: 1307, y: 295 },
  },
  {
    slug: "upper-back",
    color: skinColor,
    pathArray: [
      "M 1055 299 c 66 42 -23 52 87 113 c 93 -57 22 -76 86 -113 q 24 13 28 36 c -32 169 -36 44 -32 202 q -82 -54 -163 0 c 3 -162 -9 -50 -36 -198 q 4 -27 30 -40 z",
    ],
    textPosition: { x: 1192, y: 450 },
  },
  {
    slug: "lower-back",
    color: skinColor,
    pathArray: [
      "M 1063.698 545.641 c 5.992 15.867 53.463 -37.153 78.302 -34.641 c 25.677 -2.514 69.449 54.205 80.78 33.299 q -3.316 15.974 6.167 27.133 c -29.211 -19.174 -44.624 -9.926 -86.947 6.783 c -45.838 -19.792 -68.033 -27.807 -88.697 -3.422 q 11.417 -17.602 10.485 -28.833 z",
    ],
    textPosition: { x: 1142, y: 542 },
  },
  {
    slug: "triceps",
    color: skinColor,
    pathArray: [
      "M 968.373 487.429 c -6.245 -11.05 -3.843 -83.115 24.022 -108.579 c 2.882 -19.698 16.335 -29.787 29.787 -36.993 c -8.167 29.307 37.954 73.026 -12.011 148.935 q -21.619 -12.492 -41.798 -3.363 z",
      "M 1319.092 486.935 c 2.617 -18.882 -2.012 -93.848 -25.491 -107.866 c -3.21 -11.674 -21.297 -34.73 -34.363 -43.065 c 6.937 35.769 -32.462 69.039 15.864 157.672 q 16.931 -14.02 44.065 -6.886 z",
    ],
    textPosition: { x: 1000, y: 429 },
  },
  {
    slug: "forearm",
    color: skinColor,
    pathArray: [
      "M 899 637 c 19 -53 31 -123 67 -145 q 39 -11 42 10 c 0 55 -58 103 -84 141 q -14 17 -25 -6 z",
      "M 1396 641 c -23 -22 -41 -117 -68 -143 q -33 -18 -45 7 c 3 71 72 123 92 157 q 25 7 21 -21 z",
    ],
    textPosition: { x: 1350, y: 576 },
  },
  {
    slug: "hands",
    color: skinColor,
    pathArray: [
      "M 913 657 q -13 -9 -26 -16 q -4 10 -9 11 c -8 -1 -16 4 -32 20 c -6.6667 6 -23 5 -20 18 q 4 6 28 -9 a 1 1 0 0 1 2 4 c -22 30 -20 46 -24 62 a 1 1 0 0 0 6 1 q 9 -18 15 -42 a 1 1 0 0 1 3 1 q -10 27 -17 56 a 1 1 0 0 0 8 2 q 10 -24 18 -54 a 1 1 0 0 1 4 2 q -10 26 -15 51 a 1 1 0 0 0 8 1 q 10 -22 17 -46 a 1 1 0 0 1 5 2 q -5 17 -11 34 a 1 1 0 0 0 5 2 q 9 -15 17 -38 c 8 -11 14 -45 16 -49 q 4 -11 2 -13 z",
      "M 1378 670 c 9 -4 21 -7 28 -18 c 8 -3 28 10 33 21 c 7 9 25 7 22 20 q -4 5 -29 -10 a 1 1 0 0 0 -2 3 c 14 16 20 39 23 62 a 1 1 0 0 1 -6 2 q -7 -18 -12 -41 a 1 1 0 0 0 -3 1 q 9 28 14 55 a 1 1 0 0 1 -8 1 q -10 -25 -15 -50 a 1 1 0 0 0 -4 1 q 8 24 12 48 a 1 1 0 0 1 -8 1 q -10 -21 -14 -44 a 1 1 0 0 0 -5 4 q 3 14 9 29 a 1 1 0 0 1 -5 2 q -9 -15 -15 -34 q -16 -26 -14 -53 z",
    ],
    textPosition: { x: 875, y: 703 },
  },
  {
    slug: "gluteal",
    color: skinColor,
    pathArray: [
      "M 1142 585 q 67 -31 95 1 c 39 34 84 198 -85 142 q -10 -7 -19 0 c -163 58 -124 -109 -87 -143 q 27 -33 96 0 z",
    ],
    textPosition: { x: 1142, y: 652 },
  },
  {
    slug: "adductors",
    color: skinColor,
    pathArray: [
      "M 1156 746 q 10 1 16 12 q 1 53 -6 104 q 11 64 3 125 q -14 -47 -14 -108 q 6 -8 -1 -39 q -11 -53 2 -94 z",
      "M 1129 746 q -10 4 -21 12 q 3 51 13 102 q -9 61 -8 126 q 19 -47 16 -109 q -5 -7 3 -37 q 7 -65 -3 -94 z",
    ],
    textPosition: { x: 1142, y: 812 },
  },
  {
    slug: "hamstring",
    color: skinColor,
    pathArray: [
      "M 1015 739 c -13 89 46 192 51 268 q 6 -50 38 -19 c 11 -111 7 -152 -5 -234 q -41 20 -83 -14 z",
      "M 1270 744 q -48 32 -93 4 c -6 79 -5 119 1 243 q 35 -26 41 19 c 2 -72 58 -183 51 -266 z",
    ],
    textPosition: { x: 1068, y: 919 },
  },
  {
    slug: "calves",
    color: skinColor,
    pathArray: [
      "M 1083 985 q -46 151 -31 172 c 17 20 23.3333 114 35 171 q 14 -10 25 0 c 0 -80 16 -152 17 -171 q 11 -16 -20 -153 q -13 -23 -26 -19 z",
      "M 1201 991 q 51 128 29 170 c 4 16 -25 87 -32 171 q -12 -12 -24 -1 c -11 -53 -3 -147 -16 -173 q -10 -22 13 -150 q 4 -17 30 -17 z",
    ],
    textPosition: { x: 1196, y: 1144 },
  },
  {
    slug: "feet",
    color: skinColor,
    pathArray: [
      "M 1113 1337 q -13 -6 -25 -1 c -16 2 2 27 -32 83 a 1 1 0 0 0 1 2 q 32 17 63 0 a 1 1 0 0 0 1 -3 c -3 -2 -4 -84 -8 -81 z",
      "M 1174 1338 q 12 -6 26 0 c 8 4 8 12 5 18 c -6 11 20 54 28 65 a 1 1 0 0 1 -1 2 q -29 6 -64 3 a 1 1 0 0 1 -1 -1 c -13 -18 8 -60 2 -85 z",
    ],
    textPosition: { x: 1032, y: 1412 },
  },
]};
