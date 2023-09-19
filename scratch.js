import { DEFAULT_COLORS } from "./src/constants";

else if (!needsFlip) {
    return [...Array(shape.count)].map((_, i) => {
      const rotation = (360 / shape.count) * i;
      return (
        <path
          d={shape.path}
          fill={DEFAULT_COLORS[i]}
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
            fill={DEFAULT_COLORS[i]}
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
            fill={DEFAULT_COLORS[i]}
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