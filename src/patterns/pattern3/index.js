import {
  linePath1,
  linePath2,
  sunPath,
  dartPath,
  petalPath,
  spearPath,
  v_starPath,
  octagonPath,
} from "./paths";
const PATTERN_3 = {
  name: "base_pattern",
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
      count: 4,
      path: petalPath,
    },
    {
      name: "spear",
      count: 4,
      path: spearPath,
    },
    {
      name: "v_star",
      count: 8,
      path: v_starPath,
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
export default PATTERN_3;
