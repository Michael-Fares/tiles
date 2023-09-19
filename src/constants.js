/*
 s the length of a side of the square
*/
export const s = 400;

/*
 diagonal length of the square - cacluated with pythagorean theorem
*/

export const diagonal = Math.sqrt(Math.pow(s, 2) * 2);

/*
 r_arcB radius of arc_B on all corners of the square, calculated by subtracting the length of the square side (s) from the diagonal
*/
export const r_arcB = diagonal - s;
/*
 r_arcC radius of arc_C at the 3 other corners of the square, equal to 1/4 of the diagonal
*/
export const r_arcC = diagonal / 4;
/*find the side lengths of the squares that are CONTAINED BY arcs B and C 
by reversing the pythagorean theorem divide their radii (the hypotuse) by root 2 */
export const squareB_Height = r_arcB / Math.sqrt(2);
export const squareC_Height = r_arcC / Math.sqrt(2);

/*
height of the petal in lower left corner found by reversing the pythagorean theorem on the hypotonuse r_arcC. Divde it by root 2 and then subtract from the square side length
*/
export const petalHeight = s - squareC_Height;
/*
height of the top LEFT corner of the petal from the top of the square
*/
export const petalCornerHeight = squareB_Height + squareC_Height;
/**
 the difference between arc_B and arc_C)
 */
export const gap = r_arcB - r_arcC;
/** 
height of point at dart base from bottom of export construction. Involves the side of square C divided by root 6 - need to figure out why  
*/
export const dartHeight = squareC_Height / Math.sqrt(6);

/** default colors for the starting tile */
export const DEFAULT_COLORS = [
    "darkgreen",
    "lightgreen",
    "#4169e1",
    "orange",
    "tomato",
    "#23D7FB",
    "white",
]; 


