import {
  PATTERN_LINE,
  PATTERN_LINE_2,
  PETAL,
  SPEAR,
  DART,
  SUN,
  V_STAR,
  OCTAGON,
} from "./coords";
import * as d3 from "d3-shape";

const pathGenerator = d3.line();

export const linePath1 = pathGenerator(PATTERN_LINE);
export const linePath2 = pathGenerator(PATTERN_LINE_2);
export const sunPath = pathGenerator(SUN);
export const dartPath = pathGenerator(DART);
export const petalPath = pathGenerator(PETAL);
export const spearPath = pathGenerator(SPEAR);
export const v_starPath = pathGenerator(V_STAR);
export const octagonPath = pathGenerator(OCTAGON);
