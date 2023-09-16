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
export const sunPath = pathGenerator(SUN);
export const dartPath = pathGenerator(DART);
export const petalPath = pathGenerator(PETAL);
export const starPath = pathGenerator(STAR);
export const octagonPath = pathGenerator(OCTAGON);

export const PATTERN_1 = {
  line_paths: [linePath1, linePath2],
  shapes : [
    {
      name: "sun",
      count: 1,
      path: sunPath
    },
    {
      name: "dart",
      count: 8,
      path: dartPath
    },
    {
      name: "petal",
      count: 8,
      path: petalPath
    },
    {
      name: "star",
      count: 8,
      path: starPath,
      isEdge: true,
      flips: true
    },
    {
      name: "octagon",
      count: 4,
      path: octagonPath,
      isEdge: true
    }
  ]
}
export const PATTERN_2 = {
  lines: {
    count: 2,
    paths: [linePath1, linePath2]
  },
  shapes : [
    {
      name: "sun",
      count: 1,
      path: sunPath
    },
    {
      name: "test",
      count: 8,
      path: octagonPath
    },
    {
      name: "petal",
      count: 8,
      path: petalPath
    },
    {
      name: "star",
      count: 8,
      path: starPath,
      isEdge: true,
      flips: true
    },
    {
      name: "octagon",
      count: 4,
      path: octagonPath,
      isEdge: true
    }
  ]
}