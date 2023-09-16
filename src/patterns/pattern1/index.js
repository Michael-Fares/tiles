import {
  linePath1,
  linePath2,
  sunPath,
  dartPath,
  petalPath,
  starPath,
  octagonPath,
} from "./paths";
const PATTERN_1 = {
  line_paths: [linePath1, linePath2],
  shape_paths: [
    {
      name: "sun",
      count: 1,
      path: sunPath,
    },
    {
      name: "dart",
      count: 8,
      path: dartPath,
    },
    {
      name: "petal",
      count: 8,
      path: petalPath,
    },
    {
      name: "star",
      count: 8,
      path: starPath,
      isEdge: true,
      flips: true,
    },
    {
      name: "octagon",
      count: 4,
      path: octagonPath,
      isEdge: true,
    },
  ],
};
export default PATTERN_1;
