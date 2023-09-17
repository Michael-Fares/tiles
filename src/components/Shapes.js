import { s, DEFAULT_COLORS, DEFAULT_COLORS_2 } from "../constants";
import { useState, useEffect } from "react";

function Shapes({ pattern, state, handleColor, currentColor }) {

const [ colors, setColors ] = useState([]);

  useEffect(() => {
    setColors(pattern.shape_paths.map((shape, shapeIndex) => {
      const singleColor = shape.count === 1 || shape?.isEdge
      if(singleColor) {
        return [DEFAULT_COLORS[shapeIndex]]
      } else {
        return Array(1).fill(DEFAULT_COLORS[shapeIndex])
      }
    }))
  }, [pattern])



  const TRANSFORM_ORIGIN = `${s} ${s}`;
  /**
   * NOTE
   * shapeIndex is the index of the shape IN THE EXPORTED PATTERN (will likely be 5 total)
   * i is the index of the shape ON THE TILE actually RENDERED BY REACT
   */
  return (
    <>
      {pattern.shape_paths.map((shape, shapeIndex) => {
        console.log("colors in render", colors)
        const isSingle = shape.count === 1;
        const needsFlip = shape?.flips;
        const isEdge = shape?.isEdge;

        if (isSingle) {
          return (
            <path
              d={shape.path}
              fill={colors[shapeIndex]}
              key={shape.name}
              className={shape.name}
              name={shape.name}
              onClick={() => console.log("shapeIndex", shapeIndex)}
            ></path>
          );
        } else if (!needsFlip) {
          return [...Array(shape.count)].map((_, i) => {
            const rotation = (360 / shape.count) * i;
            return (
              <path
                d={shape.path}
                fill={colors[shapeIndex]}
                onClick={() => console.log("shapeIndex", shapeIndex, "i", i)}
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
                  fill={colors[shapeIndex]}
                  onClick={() => console.log("shapeIndex", shapeIndex, "i", i)}
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
                  fill={colors[shapeIndex]}
                  onClick={() => console.log("shapeIndex", shapeIndex, "i", i)}
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
