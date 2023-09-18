export const mapInitialColorsFromPattern = (pattern, DEFAULT_COLORS) => {
    return pattern.shape_paths.map((shape, shapeIndex) => {
        const singleColor = shape.count === 1 || shape?.isEdge;
        if (singleColor) {
          return DEFAULT_COLORS[shapeIndex];
        } else {
          return Array(shape.count).fill(DEFAULT_COLORS[shapeIndex]);
        }
      })
}