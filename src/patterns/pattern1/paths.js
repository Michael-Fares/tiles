import {
  PATTERN_LINE,
  PATTERN_LINE_2,
  PETAL,
  DART,
  SUN,
  STAR,
  OCTAGON,
} from "./coords";
import * as d3 from "d3-shape";

const pathGenerator = d3.line();

export const linePath1 = pathGenerator(PATTERN_LINE);
export const linePath2 = pathGenerator(PATTERN_LINE_2);
export const petalPath = pathGenerator(PETAL);
export const dartPath = pathGenerator(DART);
export const sunPath = pathGenerator(SUN);
export const starPath = pathGenerator(STAR);
export const octagonPath = pathGenerator(OCTAGON);
