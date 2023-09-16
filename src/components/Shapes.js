import { s } from "../patterns/pattern1/constants";

function Shapes({ pattern, state, handleColor }) {
  const { shape_paths } = pattern;
  const TRANSFORM_ORIGIN = `${s} ${s}`;
  /**
   * NOTE
   * shapeIndex is the index of the shape IN THE EXPORTED PATTERN (will likely be 5 total)
   * i is the index of the shape ON THE TILE actually RENDERED BY REACT
   */
  return (
    <>
      {shape_paths.map((shape, shapeIndex) => {
        const isSingle = shape.count === 1;
        const needsFlip = shape?.flips;
        const isEdge = shape?.isEdge;

        if (isSingle) {
          return (
            <path
              d={shape.path}
              fill={state.shapeColors[shapeIndex][shape.name][0]}
              onClick={(e) => handleColor(e, shapeIndex, shape.name)}
              key={shape.name}
              className={shape.name}
              name={shape.name}
            ></path>
          );
        } else if (!needsFlip) {
          return [...Array(shape.count)].map((_, i) => {
            const rotation = (360 / shape.count) * i;
            return (
              <path
                d={shape.path}
                fill={
                  !isEdge
                    ? state.shapeColors[shapeIndex][shape.name][i]
                    : state.shapeColors[shapeIndex][shape.name][0]
                }
                onClick={(e) => {
                  return !isEdge
                    ? handleColor(e, shapeIndex, shape.name, i)
                    : handleColor(e, shapeIndex, shape.name);
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
                    !isEdge
                      ? state.shapeColors[shapeIndex][shape.name][i]
                      : state.shapeColors[shapeIndex][shape.name][0]
                  }
                  onClick={(e) => {
                    return !isEdge
                      ? handleColor(e, shapeIndex, shape.name, i)
                      : handleColor(e, shapeIndex, shape.name);
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
                    !isEdge
                      ? state.shapeColors[shapeIndex][shape.name][i]
                      : state.shapeColors[shapeIndex][shape.name][0]
                  }
                  onClick={(e) => {
                    return !isEdge
                      ? handleColor(e, shapeIndex, shape.name, i)
                      : handleColor(e, shapeIndex, shape.name);
                  }}
                  transform={
                    even
                      ? `rotate(${rotate4})`
                      : `rotate(${rotate4}) scale(-1, 1)`
                  }
                  transform-origin={`${s} ${s}`}
                  key={`${shape.name}-flipped`}
                  className={`${shape.name}-flipped`}
                  name={`${shape.name}-flipped`}
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
