import {
  s,
  r_arcC,
  squareC_Height,
  petalHeight,
  petalCornerHeight,
  gap,
  dartHeight,
} from "../../constants";

/** VARIATION B LINES */
export const PATTERN_LINE = [
  [squareC_Height, squareC_Height],
  [squareC_Height, dartHeight],
  [r_arcC, 0],
  [s, s - r_arcC],
  [s - dartHeight, s - squareC_Height],
  [dartHeight, petalHeight],
  [0, s],
];
export const PATTERN_LINE_2 = [
  [squareC_Height, squareC_Height],
  [dartHeight, squareC_Height],
  [0, r_arcC],
  [s - r_arcC, s],
  [s - squareC_Height, s - dartHeight],
  [petalHeight, dartHeight],
  [s, 0],
];
/** VARIATION B SHAPES */

export const SUN = [
  [s - squareC_Height, s - squareC_Height],
  [s - dartHeight, s - squareC_Height],
  [s, s - r_arcC],
  [s + dartHeight, s - squareC_Height],
  [s + squareC_Height, s - squareC_Height],
  [s + squareC_Height, s - dartHeight],
  [s + r_arcC, s],
  [s + squareC_Height, s + dartHeight],
  [s + squareC_Height, s + squareC_Height],
  [s + dartHeight, s + squareC_Height],
  [s, s + r_arcC],
  [s - dartHeight, s + squareC_Height],
  [s - squareC_Height, s + squareC_Height],
  [s - squareC_Height, s + dartHeight],
  [s - r_arcC, s],
  [s - squareC_Height, s - dartHeight],
  [s - squareC_Height, s - squareC_Height],
];

export const DART = [
  [s - petalCornerHeight - gap, petalHeight],
  [s - squareC_Height, s - squareC_Height],
  [s - squareC_Height, s - dartHeight],
  [s - r_arcC, s],
  [s - petalCornerHeight - gap, petalHeight],
];

export const PETAL = [
  [s - squareC_Height, dartHeight],
  [s, 0],
  [s + squareC_Height, dartHeight],
  [s + squareC_Height, s - petalCornerHeight - gap],
  [s, s - r_arcC],
  [s - squareC_Height, s - petalCornerHeight - gap],
  [s - squareC_Height, dartHeight],
];

export const V_PETAL = [
  [0, r_arcC],
  [dartHeight, squareC_Height],
  [squareC_Height, squareC_Height],
  [squareC_Height, dartHeight],
  [r_arcC, 0],
  [s - squareC_Height, s - petalCornerHeight - gap],
  [s - squareC_Height, s - squareC_Height],
  [s - petalCornerHeight - gap, s - squareC_Height],
  [0, r_arcC],
];

export const OUTER_SUN = [
  [0, 0],
  [r_arcC, 0],
  [squareC_Height, dartHeight],
  [squareC_Height, squareC_Height],
  [dartHeight, squareC_Height],
  [0, r_arcC],
  [0, 0],
];
export const OUTER_ARROW = [
  [r_arcC, 0],
  [s, 0],
  [s - squareC_Height, dartHeight],
  [s - squareC_Height, s - petalCornerHeight - gap],
  [r_arcC, 0],
];
