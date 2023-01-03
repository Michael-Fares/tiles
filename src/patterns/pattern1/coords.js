import {
    s,
    r_arcB,
    r_arcC,
    squareB_Height,
    squareC_Height,
    petalHeight,
    petalCornerHeight,
    gap,
    dartHeight
} from './constants'

export const PETAL = [
    [squareB_Height, squareB_Height],
    [petalCornerHeight, squareC_Height - gap],
    [petalHeight, s - petalCornerHeight - gap],
    [s - squareC_Height, s - squareC_Height],
    [s - petalCornerHeight - gap, petalHeight],
    [s - petalHeight - gap, petalCornerHeight],
    [squareB_Height, squareB_Height]
  ]
  
  export const DART = [
    [s - petalCornerHeight - gap, petalHeight],
    [s - squareC_Height, s - squareC_Height],
    [s - squareC_Height, s - dartHeight],
    [s - r_arcC, s],
    [s - petalCornerHeight - gap, petalHeight]
  ]
  
  export const STAR = [
  [squareB_Height, squareB_Height],
  [r_arcB, 0],
  [s,0],
  [petalHeight, dartHeight],
  [petalHeight, s - petalCornerHeight - gap],
  [petalCornerHeight, squareC_Height - gap],
  [squareB_Height, squareB_Height]
  ]
  
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
    [s - squareC_Height, s - squareC_Height]
  ]
  export const OCTAGON = [
    [squareB_Height, squareB_Height],
  [0, r_arcB],
  [0,0],
  [r_arcB,0],
  [squareB_Height, squareB_Height]
  ]
  
  export const PATTERN_LINE = [
    [0, r_arcB],
    [petalCornerHeight, squareC_Height - gap],
    [s, s - r_arcC],
    [s - dartHeight, s - squareC_Height],
    [dartHeight, petalHeight],
    [0,s]
  ]
  export const PATTERN_LINE_2 = [
    [r_arcB,0],
    [s - petalHeight - gap, petalCornerHeight],
    [s - r_arcC, s],
    [s - squareC_Height, s - dartHeight],
    [petalHeight, dartHeight],
    [s,0]
  ]