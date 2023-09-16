import {
  PATTERN_LINE,
  PATTERN_LINE_2,
  SUN,
  DART,
  PETAL,
  V_PETAL,
  OUTER_SUN,
  OUTER_ARROW,
} from "./coords";
import * as d3 from "d3-shape";

const pathGenerator = d3.line();

export const linePath1 = pathGenerator(PATTERN_LINE);
export const linePath2 = pathGenerator(PATTERN_LINE_2);
export const sunPath = pathGenerator(SUN);
export const dartPath = pathGenerator(DART);
export const petalPath = pathGenerator(PETAL);
export const v_petalPath = pathGenerator(V_PETAL);
export const outerSunPath = pathGenerator(OUTER_SUN);
export const outerArrowPath = pathGenerator(OUTER_ARROW);
