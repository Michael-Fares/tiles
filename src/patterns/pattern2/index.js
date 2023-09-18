import {
  linePath1,
  linePath2,
  sunPath,
  dartPath,
  petalPath,
  v_petalPath,
  outerSunPath,
  outerArrowPath,
} from "./paths";

const PATTERN_2 = {
    name: "variation_1",
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
        name: "v_petal",
        count: 4,
        path: v_petalPath,
      },
      {
        name: "outer_arrow",
        count: 8,
        path: outerArrowPath,
        isEdge: true,
        flips: true,
      },
      {
        name: "outer_sun",
        count: 4,
        path: outerSunPath,
        isEdge: true,
      },
    ],
  };
  export default PATTERN_2;