import { s } from "../constants";

function Shapes({ pattern, colors, handleColors }) {
  const TRANSFORM_ORIGIN = `${s} ${s}`;
  /**
   * NOTE
   * shapeIndex is the index of the shape IN THE EXPORTED PATTERN (will likely be 5 total)
   * i is the index of the shape ON THE TILE actually RENDERED BY REACT
   */
  return (
    <>
      {pattern.shape_paths.map((shape, shapeIndex) => {
        const isSingle = shape.count === 1;
        const isSingleColor = shape.count === 1 || shape?.isEdge;
        const needsFlip = shape?.flips;
        if (isSingle) {
          return (
            <path
              d={shape.path}
              fill={colors[shapeIndex]}
              onClick={(e) => {
                return handleColors(e, shapeIndex, isSingleColor);
              }}
              key={shape.name}
              className={shape.name}
              name={shape.name}
            ></path>
          );
        }
        if (!needsFlip) {
          return [...Array(shape.count)].map((_, i) => {
            const rotation = (360 / shape.count) * i;
            return (
              <path
                d={shape.path}
                fill={
                  isSingleColor ? colors[shapeIndex] : colors[shapeIndex][i]
                }
                onClick={(e) => {
                  return handleColors(e, shapeIndex, isSingleColor, i);
                }}
                key={`${shape.name}-${i}`}
                className={`${shape.name}-${i}`}
                name={`${shape.name}-${i}`}
                transform={`rotate(${rotation})`}
                transform-origin={TRANSFORM_ORIGIN}
              ></path>
            );
          });
        } else {
          return [...Array(shape.count / 2)].map((_, i) => {
            const even = i % 2 === 0;
            const rotate4 = 90 * i;
            return (
              <>
                <path
                  d={shape.path}
                  fill={
                    isSingleColor ? colors[shapeIndex] : colors[shapeIndex][i]
                  }
                  onClick={(e) => {
                    return handleColors(e, shapeIndex, isSingleColor, i);
                  }}
                  transform={
                    even
                      ? `rotate(${rotate4}) scale(-1,1)`
                      : `rotate(${rotate4})`
                  }
                  transform-origin={`${s} ${s}`}
                  key={`${shape.name}-${i}`}
                  className={`${shape.name}-${i}`}
                  name={`${shape.name}-${i}`}
                ></path>
                <path
                  d={shape.path}
                  fill={
                    isSingleColor ? colors[shapeIndex] : colors[shapeIndex][i]
                  }
                  onClick={(e) => {
                    return handleColors(e, shapeIndex, isSingleColor, i);
                  }}
                  transform={
                    even
                      ? `rotate(${rotate4})`
                      : `rotate(${rotate4}) scale(-1, 1)`
                  }
                  transform-origin={`${s} ${s}`}
                  key={`${shape.name}${i}-flipped`}
                  className={`${shape.name}${i}-flipped`}
                  name={`${shape.name}${i}-flipped`}
                ></path>
              </>
            );
          });
        }
      })}
    </>
  );
}
export default Shapes;
